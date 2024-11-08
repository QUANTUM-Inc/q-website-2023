<template>
  <div class="home">
    <keyvisual></keyvisual>
    <section class='l-section about' :class="{'is-black': ourStrengthSectionShown}">
      <div class='l-section__inner js-lazyclass'>
        <h2>we are venture builders for creating <br class="pc">new businesses to change the world.</h2>
        <p class='l-section__lead' v-if='!isEnglish' ref="aboutText">quantumは、クリエイティビティを軸にしたインキュベーション力で、<br class='pc'>新規事業開発、ベンチャークリエーション、ハンズオン投資によるグロース支援を<br class='pc'>行うスタートアップスタジオです。</p>
        <p class='l-section__lead' v-if='isEnglish'>quantum is a startup studio that creates new products and services in all areas of business development, from conception to implementation.</p>
      </div>
      
    </section>
    <section class='l-section our-strength header-color__white' :class="{'is-black': ourStrengthSectionShown}">
      <div class='l-section__inner js-lazyclass'>
        <h2>our strength</h2>
        <div class="lg:flex items-start mt-7 pt-2">
          <div class="w-full lg:w-[63%]">
            <p class="l-section__text text-[20px] leading-[34px] md:text-[26px] md:leading-[42px]">ハードとソフトウェアを融合できる卓越した<br class='pc'>クリエイティビティを軸にインキュベーションに<br class='pc'>必要な機能を360°ワンストップで提供</p>
            <p class="l-section__text text-[15px] md:text-[20px] lg:text-[16px] leading-[30px] mt-7">quantumはスタートアップスタジオとして、<br class='pc'>プロダクト開発から実証実験、量産設計、エクイティ出資、グロース支援まで<br class='pc'>インキュベーションに必要なあらゆる機能をワンストップで提供しています。<br><br>独自のスタジオモデルとして、①新規事業支援のIncubation business、<br>②ベンチャークリエーションとグロース支援を行うquantum ventures、<br>③デザイン＆エンジニアリングのMEDUMの3つの事業セグメントを<br>重ね合わせて、世界を変えるインパクトのある新規事業の創造に挑戦しています。</p>
          </div>
          <div class="w-full lg:w-[37%] mt-[30px] lg:mt-0 img-strength flex justify-center">
            <img src="~/assets/images/home/strength/our_strength.png" class="w-full md:w-[70%] lg:w-full">
          </div>
        </div>
      </div>
      <div class='l-section__inner js-lazyclass'>
        <div class="lg:flex justify-between mt-[90px] lg:mt-[240px]">
          <h3 class="text-[27px]">incubation business</h3>
          <div class="w-full lg:w-[52%] mt-[20px] lg:mt-0">
            <p class="l-section__text text-[15px] md:text-[20px] lg:text-[18px] leading-[30px]">
              2016年の創業以来、venture buildersとして100社を超える企業とインキュベーションを実践。<br><br>quantumはものづくりを追求するプロダクトファーストを行動指針の一つとして掲げ、多様なメンバーから構成されるフルスタックなスタジオで、発想から実装、そしてグロースまでハンズオンで支援をしています。<br><br>R&Dや社内起業プログラムからのカーブアウト創出だけでなく、出資を含めた共同創業など様々な方法で、新事業の創造に挑戦しています。
            </p>
            <div class="anim-border-box mt-8 js-lazyclass">
              <div class="anim-border-box-inner">
                <div class="anim-border-box-border">
                  <div class="incubation-box md:flex justify-between items-center px-8 lg:px-10 py-6 lg:py-8">
                    <img src="~/assets/images/home/strength/incubation.svg" class="relative top-[-2px]">
                    <p class="l-section__text text-xs leading-5 md:ps-10 mt-[20px] md:mt-0 text-left">全ての挑戦者に向けて、スタートアップスタジオとして培ってきたインキュベーションのノウハウをAIテクノロジーで届け、事業化を加速させる LEAN MODEL を提供しています。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='l-section__inner js-lazyclass'>
        <div class="lg:flex justify-between mt-[90px] lg:mt-[160px]">
          <h3>venture creation & growth</h3>
          <div class="w-full lg:w-[52%] mt-[30px] lg:mt-0">
            <img src="~/assets/images/home/strength/q_ventures.svg" class="w-[50%] md:w-[30%] lg:w-auto">
            <p class="l-section__text text-[15px] md:text-[20px] lg:text-[18px] leading-[30px] mt-6">
              起業家とディープイシューに取り組むベンチャークリエーション＆グロース投資のユニット、quantum venturesを運営しています。<br><br>社会課題を解決する大学発のディープテックや企業に眠る技術を軸にしたベンチャークリエーションだけでなく、起業家とともに事業成長を目指したグロース投資を実践しています。<br><span class="text-sm">※quantumの投資子会社のSpotlightからの出資先を含む</span>
            </p>
            <ul class="flex flex-wrap items-center mt-4 md:mt-7 lg:pe-5">
              <li class="md:me-4 my-4 h-[28px] md:h-auto"><img src="~/assets/images/home/strength/logo_wota.svg"></li>
              <li class="ms-[14px] md:mx-4 my-4 h-[28px] md:h-auto"><img src="~/assets/images/home/strength/logo_dgtakano.svg"></li>
              <li class="md:mx-4 my-4 h-[28px] md:h-auto"><img src="~/assets/images/home/strength/logo_xen.svg"></li>
              <li class="ms-[14px] md:me-4 lg:ms-0 my-4 h-[28px] md:h-auto"><img src="~/assets/images/home/strength/logo_tbm.svg"></li>
              <li class="lg:ms-6 my-4 h-[28px] md:h-auto"><img src="~/assets/images/home/strength/logo_mirai.svg"></li>
            </ul>
          </div>
        </div>
      </div>
      <div class='l-section__inner js-lazyclass'>
        <div class="lg:flex justify-between mt-[90px] lg:mt-[160px]">
          <h3>design & engineering</h3>
          <div class="w-full lg:w-[52%] mt-[30px] lg:mt-0">
            <a href="https://medum.jp" target="_blank" ref="noreferrer noopener" class="flex items-end">
              <img src="~/assets/images/home/strength/logo_medum.svg" class="w-[40%] md:w-[25%] lg:w-auto">
              <img src="~/assets/images/home/strength/icn_link.svg" class="ms-3">
            </a>
            <p class="l-section__text text-[15px] md:text-[20px] lg:text-[18px] leading-[30px] mt-6">quantumのハードとソフトウェアを融合できる卓越したクリエイティビティをグローバルで展開するためにインハウスのデザインスタジオとしてMEDUMを組成。<br><br> quantumのものづくりの中心であるMEDUMは「人とモノゴト（人工物）の間に最適な関係性を作るデザイン」を追求しています。</p>
            <ul class="flex flex-wrap md:flex-nowrap mt-6 -mx-1">
              <li class="w-1/2 md:w-1/4 p-1"><img src="~/assets/images/home/strength/medum_img1.png" class="w-full"></li>
              <li class="w-1/2 md:w-1/4 p-1"><img src="~/assets/images/home/strength/medum_img2.png" class="w-full"></li>
              <li class="w-1/2 md:w-1/4 p-1"><img src="~/assets/images/home/strength/medum_img3.png" class="w-full"></li>
              <li class="w-1/2 md:w-1/4 p-1"><img src="~/assets/images/home/strength/medum_img4.png" class="w-full"></li>
            </ul>
          </div>
        </div>
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
    <section class='l-section topics'>
      <div class='l-section__inner js-lazyclass'>
        <h2 class='type-center'>topics</h2>
        <TopicsList :topics="this.topics" :in-top-page="true" class="mt-[40px] md:mt-[90px]"></TopicsList>
        <div class="text-center">
          <nuxt-link to='/topics' class='l-section__textlink load-more'>and more</nuxt-link>
        </div>
      </div>
    </section>
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
import TopicsList from '../components/topics/List';
import ContactLink from '../components/partial/ContactLink';
import _filter from 'lodash/filter';
import _each from 'lodash/each';

//import InfiniteLoading from 'vue-infinite-loading';
import Smile from '~/assets/svg/Smile.vue';
import Spinner1 from '~/components/Spinner1.vue';

export default {
  async asyncData({ app, store, params }) {
    const news = await app.$axios.get(store.getters.apiPath({
      type: 'news',
      size: 4
    }));
    // note
    const rss = await app.$axios.get(store.getters.apiPath({
      type: 'note'
    }));
    const journals = await app.$axios.get(store.getters.apiPath({
      type: 'journal'
    }))
    const journalsdata = _filter(journals.data, (journal) => {
      if (journal.acf.view_in_home) {
        return true;
      }
      return false;
    });
    const featuredWorks = await app.$axios.get(store.getters.apiPath({
      type: 'featured_work'
    }))
    const topics = await app.$axios.get(store.getters.apiPath({
      type: 'topics',
      size: 3
    }));
    if (!store.state.topicsCategories) {
      const topicsCategories = await app.$axios.get(store.getters.apiPath({
        type: 'topicscategory'
      }));
      store.commit('setTopicsCategory', topicsCategories.data);
    }
    return {
      journals: journalsdata,//rss.data,
      newslist: news.data,
      topics: topics.data,
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
    TopicsList,
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
      newslist: [],
      ourStrengthSectionShown: false
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

      const aboutTextRect = this.$refs.aboutText.getBoundingClientRect()
      if (aboutTextRect.top + aboutTextRect.height < 0) {
        this.ourStrengthSectionShown = true
      } else {
        this.ourStrengthSectionShown = false
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
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #FFF;
    transition: background-color 0.5s ease;
    &.is-black {
      background-color: #000;
    }
    h2 {
      font-size: 53px;
      @include mq_sp {
        @include spfontsize(30px);
      }
      // @include mq_tab {
      //   font-size: 50px;
      // }
    }
    .l-section__lead {
      margin-top: 45px;
      @include mq_sp {
        margin-top: percentage(math.div(70px, $spInner));
      }
      @include mq_tab {
        margin-top: 30px;
      }
    }

    @include mq_sp {
      height: 100vh;
    }
  }

  .our-strength {
    padding: 170px 0 200px 0;
    color: #000;
    background-color: #fff;
    transition: background-color 0.5s ease;
    position: relative;
    z-index: 7;
    .img-strength {
      filter: invert(100%);
      transition: filter 0.5s ease;
    }
    h2, h3 {
      color: #000;
      letter-spacing: 0.04rem;
    }
    h3 {
      font-size: 27px;
    }
    &.is-black {
      color: #fff;
      background-color: #000;
      h2, h3 {
        color: #fff;
      }
      .img-strength {
        filter: initial;
      }
      
    }
  }

  .project-wrap {
    overflow: hidden;
  }

  .topics {
    padding: 100px 0;
  }
}

.anim-border-box {
  transition: all 0.2s ease;
  transition-delay: 0.1s;
  transform: translateY(-20px);
  opacity: 0;

  .anim-border-box-inner {
    width: 100%;
    text-decoration: none;
    font-weight: 700;
    background-color: transparent;
    width: inherit;
    position: relative;
    opacity: 1 !important;
    transition: all 0.3s;
  }
  .anim-border-box-inner:before,
  .anim-border-box-inner:after {
    content: "";
    display: block;
    position: absolute;
    background-color: #595959;
    top: 0;
    pointer-events: none;
  }
  .anim-border-box-inner:before {
    left: 0;
    width: 0;
    height: 1px;
  }
  .anim-border-box-inner:after {
    right: 0;
    width: 1px;
    height: 0;
  }
  .anim-border-box-inner .anim-border-box-border:before,
  .anim-border-box-inner .anim-border-box-border:after {
    content: "";
    display: block;
    position: absolute;
    background-color: #595959;
    bottom: 0;
    pointer-events: none;
  }
  .anim-border-box-inner .anim-border-box-border:before {
    right: 0;
    width: 0;
    height: 1px;
  }
  .anim-border-box-inner .anim-border-box-border:after {
    left: 0;
    width: 1px;
    height: 0;
  }
}
.incubation-box {
  // transition: all 0.2s ease;
  // transition-delay: 0.1s;
  // transform: translateY(-20px);
  // opacity: 0;
}
.appear {
  &.anim-border-box {
    transform: translateY(0px);
    opacity: 1;
    .anim-border-box-inner {
      background-color: #000;
      &:before {
        width: 100%;
        transition: width 0.2s 0.2s;
      }
      &:after {
        height: 100%;
        transition: height 0.1s 0.4s;
      }

      .anim-border-box-border {
        &:before {
          width: 100%;
          transition: width 0.2s 0.5s;
        }
        &:after {
          height: 100%;
          transition: height 0.1s 0.7s;
        }
      }
    }
    // .incubation-box {
    //   transform: translateY(0);
    //   opacity: 1;
    // }
  }
}




</style>
