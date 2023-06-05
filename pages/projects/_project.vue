<template>
  <div class="project" :class='{"l-no-mv": !useMainvisual}'>
    <section class='l-section l-mainvisual' v-if='useMainvisual'>
      <picture>
        <source media="(max-width: 768px)" :srcset="project.acf.main_visual_sp">
        <img :src='project.acf.main_visual.sizes["2048x2048"]' alt=''>
      </picture>
    </section>

    <!-- 見出し -->
    <section class='l-section' v-if='project'>
      <div class='l-section__inner js-lazyclass'>
        <h2>{{project.title.rendered}}</h2>
      </div>
    </section>

    <!-- 基本情報 -->
    <section class='l-section'>
      <div class='l-section__inner'>
        <div class='l-text l-text-2column'>
          <div class='l-text-2column_1 type-tags js-lazyclass project-categories'>
            <lang-link :to="{name: 'projects', params: {lang, categoryId}}" :class='{hasclient: project.acf.clients_partners}' v-html='getCategoryFromId(categoryId).name' v-for="categoryId in project.categories" :key="categoryId"></lang-link>
            <span v-if='project.acf.clients_partners'>clients/partners</span>
          </div>
          <div class='l-text-2column_2 js-lazyclass'>
            <p v-html='project.acf.outline'></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Journal Anchor -->
    <section class='l-section' v-if='hasLatest'>
      <div class='l-section__inner js-lazyclass'>
        <div class='l-text l-text-2column'>
          <div class='l-text-2column_1 type-tags'>
            <a href='#' @click.prevent='scrolltoLatest'>- latest journal</a>
          </div>
          <div class='l-text-2column_2 type-void'></div>
        </div>
      </div>
    </section>

    <!-- ---- レイアウトパターン ---- -->
    <template v-for='layout in project.acf.layouts'>
      <!-- l-image1:画像のみ1カラム（通常サイズ）■□ -->
      <template v-if='has(layout.layout_type, "l-image1:")'>
        <Image1 :src='getImagePath(layout.image1)' :is-right='layout.is_right'></Image1>
      </template>

      <!-- l-image1:画像のみ1カラム（ワイドサイズ）■ -->
      <template v-if='has(layout.layout_type, "l-image1-wide")'>
        <Image1Wide :src='getImagePath(layout.image1)'></Image1Wide>
      </template>

      <!-- l-fullimage:画像ヨコイチ■ -->
      <template v-if='has(layout.layout_type, "l-fullimage")'>
        <FullImage :src='getImagePath(layout.image1)'></FullImage>
      </template>

      <!-- l-image-2column:画像2カラム ■■ -->
      <template v-if='has(layout.layout_type, "l-image-2column")'>
        <Image2Column :src1='getImagePath(layout.image1)' :src2='getImagePath(layout.image2)'></Image2Column>
      </template>

      <!-- l-image-3column:画像3カラム ■■■ -->
      <template v-if='has(layout.layout_type, "l-image-3column")'>
        <Image3Column :src1='getImagePath(layout.image1)' :src2='getImagePath(layout.image2)' :src3='getImagePath(layout.image3)'></Image3Column>
      </template>

      <!-- l-image-4column:画像2カラム（2行・4つ） -->
      <template v-if='has(layout.layout_type, "l-image-4column")'>
        <Image4Column :src1='getImagePath(layout.image1)' :src2='getImagePath(layout.image2)' :src3='getImagePath(layout.image3)' :src4='getImagePath(layout.image4)'></Image4Column>
      </template>

      <!-- l-embed:YouTube等 embed -->
      <template v-if='has(layout.layout_type, "l-embed")'>
        <Embed :embed='layout.embed'></Embed>
      </template>

      <!-- l-text-2column:テキストのみ1カラム □■ -->
      <template v-if='has(layout.layout_type, "l-text-2column")'>
        <Text1 :text='layout.text1'></Text1>
      </template>

      <!-- l-title:見出し -->
      <template v-if='has(layout.layout_type, "l-title")'>
        <Title :text='layout.title' :center='layout.align_center'></Title>
      </template>
    </template>

    <!-- Latest Journal -->
    <section class='l-section latestjournal' v-if='hasLatest'>
      <div class='l-section__inner js-lazyclass'>
        <h2>latest journal</h2>
        <!-- 画像3カラム -->
        <div class='l-image l-image-3column'>
          <a :href='journal.acf.url' target='_blank' class='latest js-lazyclass' :class='"image" + index' v-for='(journal, index) in latestJournals'>
            <div class='image-area'>
              <img :src='journal.acf.thumbnail' alt=''>
            </div>
            <p class='date'>{{journal.acf.journal_date}}</p>
            <p class='body' v-html='journal.title.rendered'></p>
          </a>

        </div>
      </div>
    </section>
    <contact-link background='gray'></contact-link>

  </div>
</template>

<script>

import Init from '../../javascripts/init'
import find from 'lodash/find';
import _filter from 'lodash/filter';
import _each from 'lodash/each';
import Image1 from '../../components/layout/Image1';
import Image1Wide from '../../components/layout/Image1Wide';
import FullImage from '../../components/layout/FullImage';
import Image2Column from '../../components/layout/Image2Column';
import Image3Column from '../../components/layout/Image3Column';
import Image4Column from '../../components/layout/Image4Column';
import Embed from '../../components/layout/Embed';
import Title from '../../components/layout/Title';
import Text1 from '../../components/layout/Text1';
import ContactLink from '../../components/partial/ContactLink';
import { gsap } from 'gsap';

export default {
  async asyncData({ app, store, params, payload, error, route, redirect }) {
    try {
      let _payload = payload;
      console.log('_payload', _payload)
      if (!payload) {
        //console.log('----- PARAMS')
        //console.log(params);
        //console.log(isNaN(params.project))

        let project;
        let preview = false;
        let nonce;
        let preview_id;
        let conf = {

        }
        if (route.query) {
          preview = (route.query.preview && route.query.preview == 'true');
          nonce = route.query.preview_nonce;
          preview_id = route.query.preview_id;
        }
        if (nonce) {
          //console.log("Nonce:: " + nonce)
          conf.headers = {
            'X-WP-Nonce': nonce
          }
        }
        ///console.log(route.query)
        ///console.log('PREVIEW:: ' + preview);
        if (preview) {
          return {
            preview: true
          }
        }
        if (isNaN(params.project)) {
          // Slug
          project = await app.$axios.get(store.getters.apiPath({
            type: 'projectslug',
            slug: params.project,
            lang: store.state.lang,
            preview: preview,
            id: preview_id,
            ////nonce: nonce
          }, null, conf));
        } else {
          // ID
          project = await app.$axios.get(store.getters.apiPath({
            type: 'project',
            id: params.project,
            preview: preview,
            ////nonce: nonce
          }, null, conf));
        }
        _payload = project.data[0];
      }

      if (!store.state.categories) {
        let categories = await app.$axios.get(store.getters.apiPath({
          type: 'category'
        }));
        store.commit('setCategories', categories.data)
      }

      if (!store.state.journals) {
        let journals = await app.$axios.get(store.getters.apiPath({
          type: 'journal'
        }))
        store.commit('setJournals', journals.data)
      }
      
      if (_payload) {
        return {
          payload: _payload
        }
      }

    } catch (err) {
      error({
        statusCode: err.response.status,
        message: err.response.data.message
      })
    }
  },

  components: {
    Image1,
    Image1Wide,
    FullImage,
    Image2Column,
    Image3Column,
    Image4Column,
    Embed,
    Title,
    Text1,
    ContactLink,
  },

  data() {
    return {
      preview: false
    }
  },

  computed: {
    project() {
      if (this.payload) return this.payload;
      ///
      if (!this.preview) {
        this.goHome();
      }

      /*let result;
      _each(this.$store.state.products, (product) => {
        if (product.id == this.$route.params.project) {
          result = product
        }
      })
      return result;*/
    },
    useMainvisual() {
      if (!this.project) {
        return false;
      }
      return this.project.acf.use_mainvisual;
    },
    hasLatest() {
      if (!this.project || !this.project.acf.latest_journal) {
        return false
      }

      if (this.project.acf.latest_journal.length >= 1) {
        return true;
      }
      return false;
    },
    latestJournals() {
      let result = []
      _each(this.project.acf.latest_journal, (id) => {
        result.push(find(this.$store.state.journals, {id: id}))
      })
      return result;
    }
  },

  head() {
    if (!this.project) {
      return;
    }
    return {
      title: `${this.$store.state.meta.name}${this.project.title.rendered}`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.project.acf.outline
      }, {
        hid: 'og:image',
        property: 'og:image',
        content: this.project.acf.main_visual.url
      },
        this.keywords]
    }
  },

  mounted() {
    this.$nextTick(() => {
      gsap.delayedCall(0.2, () => {
        Init.setup(this.$store);
      });
    })
    console.log(this.project.acf.main_visual.sizes)
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'swapProjectLang') {
        if (this.project && this.project.translations) {
          let id = this.project.translations[state.lang]
          if (id) {
            this.changeLang(state.lang, id)
          } else {
            //多国語対応していない -> langの変更をもどす
            this.$store.commit('toggleLag')
          }
        }
      }
    })
  },

  beforeDestroy() {
    this.destroySubscribe();
  },

  mixins: {
    getCategoriesName: Function,
  },

  methods: {
    goHome() {
      let to = {
        name: 'index',
        params: {
          lang: this.$store.state.lang,
          project: this.$route.params.project
        }
      }
      this.$router.push(to);
    },
    getImagePath(image) {
      if (typeof image === 'string') {
        return image;
      }
      return '';
    },
    destroySubscribe() {
      if (this.unsubscribe) {
        this.unsubscribe();
        this.unsubscribe = null;
      }
    },
    categoryName(categories) {
      return this.getCategoriesName(categories, this.$store);
    },
    has(text, paternName) {
      return text.search(paternName) !== -1;
    },
    scrolltoLatest() {
      this.$store.dispatch("app/scrollto", {
        to: '.latestjournal'
      })
    },
    changeLang(lang, id) {
      let to;
      /*console.log("this.$route.name::::: " + this.$route.name)
      console.log(this.$route)
      console.log(lang)*/

      if (lang !== this.$store.state.defaultLang) {
        to = {
          name: 'lang-' + this.$route.name.replace(/lang\-/img, ''),
          params: {
            lang: lang,
            project: id
          }
        }
      } else {
        to = {
          name: this.$route.name.replace(/lang\-/img, ''),
          params: {
            lang: lang,
            project: id
          }
        }
      }
      this.destroySubscribe();
      this.$router.push(to);

    },

    getCategoryFromId(categoryId) {
      return this.$store.getters['getCategoryFromId'](categoryId)
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-link {
  margin-top: 160px;
  @include mq_sp {
    margin-top: percentage(math.div(80px, $spWidth));
  }
}
.project-categories {
 a {
  &::before {
    display: none;
  }
 }  
}

</style>
