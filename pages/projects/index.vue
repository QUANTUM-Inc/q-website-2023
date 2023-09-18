<template>
  <div class="projects">
    <section class='l-section head'>
      <div class='l-section__inner js-lazyclass'>
        <h2>projects</h2>
        <div class='tags pc'>
          <a v-on:click.prevent='filterCategory(category.id)' v-for='category in categories' :class='{active: category.id === selectedCategory}'>{{category.name}}</a>
        </div>
        <div class='tag-seletc select-wrap sp'>
          <select v-on:change='changed'>
            <option v-for='category in categories' :value='category.id' :selected="category.id === categoryId">{{category.name}}</option>
          </select>
          <div class='label'>{{this.currentSelected}}</div>
        </div>
      </div>
    </section>

    <!-- first -->
    <section class='l-section' v-if='firstProject'>
      <div class='l-section__inner l-projects primary-projects' ref='firstProject'>
        <div class='project l-project type-primary js-lazyclass' @click="linkTo(lang, firstProject.slug, firstProject.acf.external_link)">
          <div class='image-area'>
            <picture>
              <source media="(max-width: 768px)" :srcset="firstProject.acf.main_visual.sizes.medium_large">
              <!-- <img :src='firstProject.acf.main_visual.url' alt=''> -->
              <img :src='firstProject.acf.main_visual.sizes.large' alt=''>
            </picture>
          </div>
        </div>
        <div class='text-area'>
          <div class='l-project__tags'>
            <span @click="filterCategory(categoryId)" :class='{hasclient: firstProject.acf.clients_partners}' v-html='getCategoryFromId(categoryId).name' v-for="categoryId in firstProject.categories" :key="categoryId"></span>
            <span v-if='firstProject.acf.clients_partners'>partners/clients</span>
          </div>
          <p class='l-project__name'>
            <a :href="firstProject.acf.external_link" target="_blank" class='project type-primary js-lazyclass ' v-if="firstProject.acf.external_link">
              {{firstProject.title.rendered}}
            </a>
            <lang-link :to="{
              name: 'projects-project',
              params: {
                lang: lang,
                project: firstProject.slug
              }
            }" class='project type-primary js-lazyclass' v-else>{{firstProject.title.rendered}}</lang-link>
            
        </p>
        </div>
      </div>
    </section>

    <!-- -->
    <section class='l-section secondary-projects'>
      <div class='l-section__inner l-projects' ref='secondProject'>
        <div class="l-project appear" v-for='project in currentProjects'>
          <lang-link :to="{
            name: 'projects-project',
            params: {
              lang: lang,
              project: project.slug
            }
          }" class='project' v-bind:key='project.id'>
            <div class='image-area'>
              <img :src='project.acf.main_visual.sizes.medium_large' alt='' v-if='project.acf.main_visual'>
            </div>
          </lang-link>
          <div class='text-area'>
            <div class='l-project__tags'>
              <span @click="filterCategory(categoryId)" :class='{hasclient: project.acf.clients_partners}' v-html='getCategoryFromId(categoryId).name' v-for="categoryId in project.categories" :key="categoryId"></span>
              <span v-if='project.acf.clients_partners' class='partners'>partners/clients</span>
            </div>
            <p class='l-project__name'><lang-link :to="{
            name: 'projects-project',
            params: {
              lang: lang,
              project: project.slug
            }
          }" class='project' v-bind:key='project.id'>{{project.title.rendered}}</lang-link></p>
          </div>
        </div>
      </div>
    </section>


    <contact-link background='gray' :shown='true'></contact-link>
  </div>
</template>

<script>
import ContactLink from '../../components/partial/ContactLink';
import Init from '../../javascripts/init'
import _filter from 'lodash/filter'
import _each from 'lodash/each'
import { gsap, Quint, Cubic } from 'gsap';
export default {
  components: {
    ContactLink
  },
  scrollToTop: true,
  mounted() {
    this.$nextTick(() => {
      gsap.delayedCall(0.1, () => {
        Init.setup(this.$store);
      });
    });
    if (this.categoryId) {
      this.filterCategory(this.categoryId)
      this.currentSelectedId = this.categoryId
      const category = this.$store.getters['getCategoryFromId'](this.categoryId)
      this.currentSelected = category.name
    }
  },
  async asyncData({ app, store, params, payload }) {
    if (!store.state.products) {
      let projects = await app.$axios.get(store.getters.apiPath({
        type: 'projectlist'
      }));
      store.commit('setProducts', projects.data);
    }
    if (!store.state.categories) {
      let categories = await app.$axios.get(store.getters.apiPath({
        type: 'category'
      }));
      store.commit('setCategories', categories.data)
    }
  },
  head() {
    return {
      title: `${this.$store.state.meta.name}projects`,
      meta: [{hid: 'description',
        name: 'description',
        content: this.isEnglish ? 'New business projects launched by quantum in collaboration with partners, startups, universities, and also as in-house projects.' : 'quantumがパートナー企業、スタートアップ、大学などとの共同開発によって、また自社事業として立ち上げた新規事業プロジェクト' },
        this.keywords]
    };
  },

  data() {
    return {
      currentSelected: 'all',
      categoryId: this.$route.params.categoryId
    }
  },

  computed: {
    categories: function() {
      return this.$store.getters['categoryList'];
    },
    firstProject: function() {
      return this.$store.getters['firstProduct']
    },
    selectedCategory: function() {
      return this.$store.state.selectedCategory
    },
    currentProjects: function() {
      let projects = this.$store.getters['projects'];
      let selectedCategory = this.selectedCategory;
      let all_en = this.$store.getters.getEnglishCategory(1)
      if (selectedCategory && selectedCategory !== 1 && selectedCategory !== all_en) {
        projects = _filter(projects, (project, index) => {
          let result = false
          _each(project.categories, (category) => {
            if (category === selectedCategory) {
              result = true;
            }
          })
          return result
        })
      }
      // 1件目以外を取得
      return _filter(projects, (project, index) => {
        return index !== 0;
      })
    }
  },

  mixins: {
    getCategoriesName: Function
  },
  methods: {
    changed(event) {
      let select = event.currentTarget;
      let index = select.selectedIndex;

      this.currentSelected = select.options[index].label;
      this.currentSelectedId = select.options[index].value;
      let secondProj = this.$refs.secondProject;
      let firstProj = this.$refs.firstProject;

      gsap.to([firstProj, secondProj], {
        opacity: 0,
        duration: 0.3,
        ease: Quint.easeOut,
        onComplete: () => {
          this.$store.commit('setSelectedCategory', {
            selectedId: parseInt(this.currentSelectedId, 10)
          });
          gsap.to([firstProj, secondProj], {
            opacity: 1,
            duration: 0.5,
            delay: 0.24,
            ease: Cubic.easeOut
          })
        }
      })
    },
    filterCategory(categoryId) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
      let firstProj = this.$refs.firstProject;
      gsap.to(firstProj, {
        opacity: 0,
        duration: 0.3,
        ease: Quint.easeOut,
        onComplete: () => {
          this.$store.commit('setSelectedCategory', {
            selectedId: categoryId
          });
          gsap.to(firstProj, {
            opacity: 1,
            duration: 0.5,
            delay: 0.24,
            ease: Cubic.easeOut
          })
        }
      })
    },

    categoryName(categories) {
      return this.getCategoriesName(categories, this.$store);
    },

    getLangPrefix() {

      if (this.$store.state.lang !== this.$store.state.defaultLang) {
        return 'lang-'
      }
      return ''
    },

    linkTo(lang, slug, externalLink) {
      console.log('linkto', externalLink)
      if (externalLink) {
        this.linkToExternal(externalLink)
      } else {
        this.$router.push({
          name: 'projects-project',
          params: {
            lang: lang,
            project: slug
          }
        })
      }
    },

    linkToExternal(link) {
      if (link) {
        window.open(link, '_blank')
        return false
      }
      return true
    },

    getCategoryFromId(categoryId) {
      return this.$store.getters['getCategoryFromId'](categoryId)
    },

  }
};
</script>

<style lang="scss" scoped>
.head {
  padding-top: 136px;
  @include mq_sp {
    padding-top: percentage(math.div(150px, $spWidth));
  }
  h2 {
    @include mq_sp {
      text-align: center;
    }
  }
  // PC---
  .tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: 55px;
    margin-bottom: 30px;
    line-height: 2;
    justify-content: flex-start;
    align-items: center;
    a {
      white-space: nowrap;
      margin-bottom: 15px;
      line-height: 1.4;
      margin-right: 60px;
      font-size: 20px;
      @include roboto-light;
      display: inline-block;
      letter-spacing: 0.04rem;
      position: relative;

      &::after {
        position: absolute;
        display: block;
        content: '';
        line-height: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: #000;
        @include ease-out-cubic($animationTime);
        transform-origin: 0 0;
        transform: scale(0, 0);
      }
      &.active {
        &::after {
          transform: scale(1, 1);
        }
      }
      @include mq_pc {
        &:hover {
          &::after {
            transform-origin: 0 0;
            transform: scale(1, 1);
          }
        }
      }
    }
  }
  // SP Only
  .select-wrap {
    width: percentage(math.div(260px, $spWidth));
    margin: percentage(math.div(22px, $spWidth)) auto;
    padding-left: percentage(math.div(10px, $spWidth));
    position: relative;
    &::after {
      content: '';
      position: absolute;
      height: 0;
      right: percentage(math.div(10px, 190px));
      top: 50%;
      transform: translate(0, -50%);
      padding-top: percentage(math.div(6px, 190px));
    }
    /*@include mq_sp {
      width: 100%;
      margin: percentage(0px / $spInner) auto;
    }*/
  }
  select {

  }
}

.project-enter-active,
.project-enter-active-to,
.project-leave-active {
  opacity: 1;
  @include ease-out-cubic(900, 200);
  transform: translate(0px, 0);
}

.project-enter,
.project-leave-active {
  opacity: 0;
  transform: translate(0, 20px);
  @include ease-out-cubic(600, 0);
}
.l-project__tags {
  padding-top: 0;
  margin-top: -6px;
}
.l-project__tags span {
  padding-top: 6px;
  cursor: pointer;
}

</style>
