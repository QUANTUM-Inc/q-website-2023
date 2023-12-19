<template>
  <div class="home">
    <keyvisual></keyvisual>
    <section class='l-section about'>
      <div class='l-section__inner js-lazyclass'>
        <h2>we are quantum, we are a startup studio.</h2>
        <p class='l-section__lead' v-if='!isEnglish'>quantumは、発想から実装まで、事業開発の全てを活動領域とし、<br class='pc'>新しいプロダクトやサービスを創り出すスタートアップスタジオです。</p>
        <p class='l-section__lead' v-if='isEnglish'>quantum is a startup studio that creates new products and services in all areas of business development, from conception to implementation.</p>
      </div>
      
    </section>
    <section class='l-section featured-work header-color__white'>
      <div class='l-section__inner js-lazyclass'>
        <h2>featured work</h2>
      </div>
    </section>
    <div class='project-wrap'>

      <template v-for="(w, i) in featuredWorks">
        <home-product
          :color="w.fw_text_color == 'black' ? 'black' : 'white-nomix'"
          :src='w.fw_image'
          :srcsp='w.fw_image_sp'
          :product-name='w.fw_title'
          :product-name-en='w.fw_title_en'
          :tags='w.fw_category'
          :link='w.fw_link'
          :link-en='w.fw_link_en'
          :zindex='featuredWorks.length - i'
          :outline='w.fw_description'
          :outlineEn='w.fw_description_en'
          :outlineSp='w.fw_description_sp'
          :outlineEnSp='w.fw_description_en_sp'
          :type="w.fw_link_external ? 'external' : null"
          :class="w.fw_header_white ? 'header-color__white' : null"
        ></home-product>
      </template>
<!--       
      <home-product
        color='white-nomix'
        to='https://5lights.quantum.ne.jp'
        src='/images/home/projects/5lights.jpg'
        srcsp='/images/home/projects/5lights-sp.jpg'
        product-name='5Lights'
        product-name-en='5Lights'
        tags='#product design'
        link='https://5lights.quantum.ne.jp'
        link-en='https://5lights.quantum.ne.jp'
        zindex='6'
        outline='異なる明かりの特徴をもつ<br class="sp">5つの照明プロダクト'
        outlineEn='Five lighting products <br class="sp">with different light characteristics'
        type="external"
        class="header-color__white"
      ></home-product>

      <home-product
        color='white'
        to='/'
        src='/images/home/projects/wheeliy.jpg'
        srcsp='/images/home/projects/wheeliy-sp.jpg'
        product-name='Wheeliy'
        product-name-en='Wheeliy'
        tags='#product design'
        link='/projects/73'
        link-en='/en/projects/280'
        zindex='5'
        outline='アクティブな車いす生活者のための、<br class="sp">日常を旅するクルマイス'
        outlineEn='A wheelchair to travel through daily life for active wheelchair users.'
        class="header-color__white"
      ></home-product>

      <home-product
        color='black'
        to='/'
        src='/images/home/projects/humofit.jpg'
        srcsp='/images/home/projects/humofit-sp.jpg'
        product-name='HUMOFIT®︎'
        product-name-en='HUMOFIT®︎'
        tags='#branding'
        link='/projects/humosofa'
        link-en='/en/projects/184'
        zindex='4'
        outline='三井化学が開発した、体温を感知して、<br class="sp">やさしくヒトによりそう<br>新素材をトータルブランディング'
        outlineEn='Full branding for a new material developed by Mitsui Chemicals, Inc. that senses body temperature and gently cares for people.'
      ></home-product>

      <home-product
        color='white-nomix'
        to='/'
        src='/images/home/projects/f.jpg'
        srcsp='/images/home/projects/f-sp.jpg'
        product-name='F.[éf]︎'
        product-name-en='F.[éf]︎'
        tags='#D2C #in-house'
        link='/projects/f-ef'
        link-en='/en/projects/324'
        zindex='3'
        outline='ストーリーから花を選ぶ、<br>ユニセックスな花束の<br class="sp">D2Cブランド'
        outlineEn='A unisex D2C flower bouquet brand that allows you to choose a bouquet from a story.'
        class="header-color__white"
      ></home-product>

      <home-product
        color='black'
        to='/'
        src='/images/home/projects/nissan.jpg'
        srcsp='/images/home/projects/nissan-sp.jpg'
        product-name='NISSAN プロパイロットウエイター︎'
        product-name-en='NISSAN ProPILOT Waiter︎'
        tags='#product design #engineering'
        link='/projects/propilot'
        link-en='/en/projects/240'
        zindex='2'
        outline='日産自動車の自動運転支援技術を応用した、<br>無人給仕ロボットをデザイン'
        outlineEn="An autonomous serving robot that applies Nissan's ProPILOT driver assistance technology to automatically deliver food without human intervention."
      ></home-product>

      <home-product
        color='black'
        to='/'
        src='/images/home/projects/batteki.jpg'
        srcsp='/images/home/projects/batteki-sp.jpg'
        product-name='BATTEKI!!'
        product-name-en='BATTEKI!!'
        tags='#digital transformation'
        link='/projects/batteki'
        link-en='/en/projects/128'
        zindex='1'
        outline='タレントを必要とする人と<br class="sp">多彩な才能を<br class="pc">スマホ・PCで<br class="sp">結ぶマッチングサービス'
        outlineEn='A matching service that helps people looking for various talents, connect with them via smartphone and computer.'
      ></home-product> -->
    </div>

    <Journal :journals='this.journals'></Journal>
    <ClientAndPartners></ClientAndPartners>
    <news :news-list='this.newslist'></news>
    <contact-link></contact-link>


  </div>
</template>

<script>
import Init from '../javascripts/init';
import Keyvisual from '~/components/home/Keyvisual';
import HomeProduct from '../components/home/HomeProduct';
import Journal from '../components/home/Journals';
import ClientAndPartners from '../components/home/ClientAndPartners';
import News from '../components/home/News';
import ContactLink from '../components/partial/ContactLink';
import _filter from 'lodash/filter';
import _each from 'lodash/each';

//import InfiniteLoading from 'vue-infinite-loading';
import Smile from '~/assets/svg/Smile.vue';
import Spinner1 from '~/components/Spinner1.vue';

export default {
  async asyncData({ app, store, params }) {
    let news = await app.$axios.get(store.getters.apiPath({
      type: 'news',
      size: 4
    }));
    // note
    let rss = await app.$axios.get(store.getters.apiPath({
      type: 'note'
    }));
    let journals = await app.$axios.get(store.getters.apiPath({
      type: 'journal'
    }))
    let journalsdata = _filter(journals.data, (journal) => {
      if (journal.acf.view_in_home) {
        return true;
      }
      return false;
    });
    let featuredWorks = await app.$axios.get(store.getters.apiPath({
      type: 'featured_work'
    }))
    return {
      journals: journalsdata,//rss.data,
      newslist: news.data,
      featuredWorks: featuredWorks.data[0].acf.featured_work
    };

  },

  scrollToTop: true,

  components: {
    HomeProduct,
    Keyvisual,
    Journal,
    ClientAndPartners,
    News,
    ContactLink,
    //InfiniteLoading,
    Smile,
    Spinner1
  },

  mounted() {
    this.$nextTick(() => {
      Init.setup(this.$store);
      let preview = (this.$route.query.preview && this.$route.query.preview == 'true');
      let postType = (this.$route.query.post_type && this.$route.query.post_type === 'projects');
      let redirected = (this.$route.query.redirect && this.$route.query.redirect === '1');
      if (preview && postType) {
        let query = '?';
        _each(this.$route.query, (val, key) => {
          query += key + '=' + val + '&';
        })
        if (!redirected) {
          location.href = '/index.php' + query + 'redirect=1';
        }
      }
    });

    window.addEventListener('scroll', this.setScrollEvents)
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.setScrollEvents, false)
  },

  data() {
    return {
      infiniteLoadingPage: 1,
      journals: [],
      newslist: []
    };
  },

  head() {
    return {
      title: `${this.$store.state.meta.name}home`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.isEnglish ? 'quantum is a start-up studio that creates new products and services through business development based on creativity.': 'クリエイティビティを軸とした事業開発によって、新しいプロダクトやサービスを創り出すスタートアップスタジオです。' },
        this.keywords]
    };
  },

  methods: {
    moreArticles($state) {

    },

    setScrollEvents() {
      const elems = document.getElementsByClassName("header-color__white");
      let isHeaderWhite = false
      for (let i = 0; i < elems.length; i++) {
        const pos = elems.item(i).getBoundingClientRect().top
        const height = elems.item(i).getBoundingClientRect().height
        // console.log(height)
        
        if (pos < 0 && pos + height > 0) {
          isHeaderWhite = true
          break
        }
      }
      if (isHeaderWhite) {
        document.getElementById('js-header-inner').classList.add('white')
      } else {
        document.getElementById('js-header-inner').classList.remove('white')
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  .about {
    position: relative;
    z-index: 7;
    margin-top: 100vh;
    //padding: 150px 0;
    height: 90vh;
    display: flex;
    align-items: center;
    background: #FFF;
    .l-section__inner {

    }
    h2 {
      @include mq_sp {
        @include spfontsize(36px);
      }
    }
    .l-section__lead {
      margin-top: 45px;
      @include mq_sp {
        margin-top: percentage(math.div(70px, $spInner));
      }
    }

    @include mq_sp {
      height: 100vh;
    }
  }

  .featured-work {
    background: #000;
    position: relative;
    height: 528px;
    z-index: 7;
    h2 {
      top: 50%;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: #fff;
      letter-spacing: 0.04rem;
    }
  }

  .project-wrap {
    overflow: hidden;


  }

}
</style>
