<template>
  <div class='careers'>
    <template v-if="isEnglish">
      <div class="under-construction"><p>under construction</p></div>
    </template>
    <template v-else>
    <main-visual
      class="main-visual__careers"
      title='careers'
      background='/images/careers/bg.jpg'
      backgroundsp='/images/careers/bg.jpg'
      size=''
    >
      <template v-slot:titleLink>
        <div class="flex">
        <nuxt-link class="title-link" to="#occupation">view career opportunities now <span>→</span></nuxt-link>
      </div>
      <div class="flex">
        <nuxt-link class="title-link" to="/collective">quantum collective <span>→</span></nuxt-link>
      </div>
      </template>
    </main-visual>

    <section class='l-section contents'>
      <div class='l-section__inner js-lazyclass join'>
        <div class='contents__textarea'>
          <h2>join our studio</h2>
          <p class='l-section__body' v-if='!isEnglish'>quantumはクリエイティビティを軸とした事業開発によって、<br />
            新しいプロダクトやサービスを創り出すスタートアップ・スタジオです。<br /><br />

            社名の由来である量子ビット(quantum bit)が<br />
            「0と1を重ね合わせて、世界を別次元へ導く」ように<br />
            「あらゆる才能を重ね合わせ、正解がまだない世界に挑戦」し、<br />
            これまでに数多くのプロダクトやサービスを生み出してきました。<br /><br />

            高い専門性とクリエイティビティを兼ね備えた多彩なメンバーたちが、<br />
            新規事業開発のフィールドで積み重ねてきた全ての経験を<br />
            次の創出の糧として、日々挑戦を続けています。<br /><br />

            quantumでは、まだ世界に存在しない新たな事業、<br />
            プロダクトを共に生み出す仲間を募集しています。
          </p>
          <p class='l-section__body' v-if='isEnglish'>quantumはクリエイティビティを軸とした事業開発によって、<br />
            新しいプロダクトやサービスを創り出すスタートアップ・スタジオです。<br /><br />

            社名の由来である量子ビット(quantum bit)が<br />
            「0と1を重ね合わせて、世界を別次元へ導く」ように<br />
            「あらゆる才能を重ね合わせ、正解がまだない世界に挑戦」し、<br />
            これまでに数多くのプロダクトやサービスを生み出してきました。<br /><br />

            高い専門性とクリエイティビティを兼ね備えた多彩なメンバーたちが、<br />
            新規事業開発のフィールドで積み重ねてきた全ての経験を<br />
            次の創出の糧として、日々挑戦を続けています。<br /><br />

            quantumでは、まだ世界に存在しない新たな事業、<br />
            プロダクトを共に生み出す仲間を募集しています。
          </p>
        </div>
        <div class='contents__imagearea'>
          <img src='~/assets/images/common/logo.svg' alt='quantum'>
        </div>
      </div>
    </section>

    <section class='l-section l-fullimage js-lazyclass'>
      <picture>
        <source media="(max-width: 768px)" srcset="/images/careers/about/img1.jpg">
        <img src='/images/careers/about/img1.jpg' alt=''>
      </picture>
    </section>

    <section class='l-section contents bg-gray'>
      <div class='l-section__inner js-lazyclass mission'>
        <div class='contents__textarea'>
          <h2>mission</h2>
          <h3>あらゆる才能を重ね合わせ、<br />まだ世界に存在しないプロダクトをbuildする</h3>
          <p class='l-section__body'>
            <nuxt-link to="/careers/about#mission">learn more about mission,  vision, value→</nuxt-link>
          </p>
        </div>
      </div>
    </section>

    <section class='l-section contents' id="occupation">
      <div class='l-section__inner js-lazyclass occupation'>
        <div class='contents__textarea'>
          <h2>募集している職種</h2>
          <template v-if="careers.open.fulltime.length > 0 || careers.open.internship.length > 0">
            <h2 class="head-sub"><b>full time positions(正社員/契約社員)</b></h2>
            <div v-for="oc in careers.open.fulltime">
              <h3>{{ oc.title }}</h3>
              <p class='l-section__body' v-if='!isEnglish' v-html="oc.overview"></p>
              <span class="show-detail" v-if="oc.url"><a :href="oc.url">応募の詳細を見る→</a></span>
            </div>
            <template v-if="careers.open.internship.length > 0">
              <br /><h2 class="head-sub"><b>internship for students</b></h2>
              <div v-for="oc in careers.open.internship">
                <h3>{{ oc.title }}</h3>
                <p class='l-section__body' v-if='!isEnglish' v-html="oc.overview"></p>
                <span class="show-detail" v-if="oc.url"><a :href="oc.url">応募の詳細を見る→</a></span>
              </div>
            </template>
          </template>
          <br />
          <h2 class="head-sub"><b>quantum collective</b></h2>
          <p class="l-section__body">quantumが推進する新規事業開発に対して、プロジェクトベースで<br />参画して頂くプロフェッショナルネットワークです。パートナー企業との共同事業や新規事業開発の支援、0→1でのベンチャークリエーション、スタートアップへのハンズオン投資のメンタリング、社内起業家プログラムのメンターなどに、ご自身の専門性を生かして参画して頂きます。個人事業主の方はもちろん、副業としてのご参加も可能です。<br /> <span class="show-detail"><nuxt-link to="/collective">応募の詳細を見る→</nuxt-link></span></p>
          <br /><br />
          <template v-if="careers.closed.fulltime.length > 0 || careers.closed.internship.length > 0">
            <div class="closed-position">
              <h2>currently closed positions</h2>
              <template v-if="careers.closed.fulltime.length > 0">
                <h2 class="head-sub"><b>full time positions(正社員/契約社員)</b></h2>
                <div v-for="oc in careers.closed.fulltime">
                  <h3>{{ oc.title }}</h3>
                  <p class='l-section__body' v-if='!isEnglish' v-html="oc.overview"></p>
                </div><br />
              </template>
              <h2 class="head-sub"><b>internship for students</b></h2>
              <div v-if="careers.closed.internship.length == 0">
                <p class='l-section__body' v-if='!isEnglish'>
                  自分の得意分野を生かしてquantumでそのスキルを磨きませんか？<br />
                </p>
              </div>
              <div v-for="oc in careers.closed.internship" v-else>
                <h3>{{ oc.title }}</h3>
                <p class='l-section__body' v-if='!isEnglish' v-html="oc.overview"></p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>
    <section class='l-section contents bg-gray'>
      <div class='l-section__inner js-lazyclass spirit-and-culture'>
        <div class='contents__textarea'>
          <div>
            <h2>spirit</h2>
            <h3>挑戦者であり、永遠のβ版。<br />成功も失敗も糧にして、<br />0-1とその先に挑み続ける。</h3>
            <nuxt-link to="/careers/about#spirit"><span>learn more →</span></nuxt-link>
          </div>
        </div>
        <div class='contents__textarea'>
          <div>
            <h2>culture</h2>
            <h3>多様な才能を融合させ、<br />正解がまだない世界に挑戦する。</h3>
            <nuxt-link to="/careers/about#culture"><span>learn more →</span></nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <contact-link></contact-link>
    </template>
  </div>
</template>

<script>
import Init from '../../javascripts/init';
import MainVisual from '../../components/partial/MainVisual';
import Logo from '../../components/Logo';
import { Cubic, gsap } from 'gsap';
import _each from 'lodash/each'
import ContactLink from '../../components/partial/ContactLink';
export default {
  name: 'index.vue',
  scrollToTop: true,
  components: {
    MainVisual,
    ContactLink,
    Logo
  },

  async asyncData({ app, store, params }) {
    let {data} = await app.$axios.get(store.getters.apiPath({
      type: 'careers',
      lang: store.state.lang
    }));
    
    const careers = {
      open: {
        fulltime: [],
        internship: [],
      },
      closed: {
        fulltime: [],
        internship: [],
      }
    }
    if (data.length > 0) {
      const fields = data[0].acf
      for (let i = 1; i < 6; i++) {
        const fulltimeClosed = fields['fulltime_occupation_disabled_'+i]
        const fulltimeTitle = fields['fulltime_occupation_'+i]
        if (!fulltimeClosed && fulltimeTitle) {
          careers.open.fulltime.push({
            title: fulltimeTitle,
            overview: fields['fulltime_occupation_overview_'+i],
            url: fields['fulltime_occupation_url_'+i],
          })
        } else if (fulltimeTitle) {
          careers.closed.fulltime.push({
            title: fields['fulltime_occupation_'+i],
            overview: fields['fulltime_occupation_overview_'+i],
            url: fields['fulltime_occupation_url_'+i],
          })
        }
        const internClosed = fields['internship_occupation_disabled_'+i]
        const internTitle = fields['internship_occupation_'+i]
        if (!internClosed && internTitle) {
          careers.open.internship.push({
            title: fields['internship_occupation_'+i],
            overview: fields['internship_occupation_overview_'+i],
            url: fields['internship_occupation_url_'+i],
          })
        } else if (internTitle) {
          careers.closed.internship.push({
            title: fields['internship_occupation_'+i],
            overview: fields['internship_occupation_overview_'+i],
            url: fields['internship_occupation_url_'+i],
          })
        }
      }
    }

    return {
      careers
    };
  },
  head() {
    return {
      title: `${this.$store.state.meta.name}careers`,
      meta: [{hid: 'description',
        name: 'description',
        content: this.isEnglish ? 'quantum is a start-up studio within Hakuhodo Inc. group. As venture builders specializing in new business creation, we have created many new businesses since our establishment, mainly through co-founding with our partners.' : 'quantumは博報堂グループのスタートアップスタジオです。パートナーとの共同創業を中心に、新規事業創出に特化したventure buildersとして、創業以来数多くの新規事業を生み出しています。' },
        this.keywords
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      gsap.delayedCall(0.1, () => {
        Init.setup(this.$store)
      })
    })
  },
  methods: {
    goDetail(name) {
      this.$router.push(`/careers/detail?occupation=${name}`)
    }
  }
};
</script>

<style lang='scss' scoped>
.main-visual__careers {
  height: 60vh !important;
}
.contents {
  padding-top: 140px;
  padding-bottom: 110px;
  @include mq_sp {
    padding-top: percentage(math.div(54px, $spWidth));
    padding-bottom: percentage(math.div(0px, $spWidth));
  }
  &.bg-black {
    background-color: #000;
    color: #fff;
    svg {
      path {
        stroke: #fff;
      }
    }
    h2, h3 {
      color: #fff;
    }
  }
  &.bg-gray {
    background-color: #f1f1f1;
  }
  .l-section__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 90px;
    @include mq_sp {
      display: block;
      margin-bottom: percentage(math.div(120px, $spWidth));
    }
    &.type-right {
      justify-content: flex-end;
    }
    &.join {
      .contents__imagearea {
        display: flex;
        justify-content: center;
        padding-right: 4.3%;
        img {
          display: block;
          max-width: 327px;
          margin: 0 auto;
        }
      }
      @include mq_sp {
        .contents__imagearea {
          padding-right: 0;
          width: 60%;
          margin: 0 auto;
          margin-top: 40px;
        }
      }
    }
    &.mission {
      justify-content: flex-end;
      margin-bottom: 0;
      @include mq_sp {
        padding-bottom: percentage(math.div(54px, $spWidth));
      }
      h2, h3 {
        text-align: right;
      }
      h3 {
        font-size: 32px;
        @include mq_sp {
          @include spfontsize(22px);
        }
      }
      .contents__textarea {
        padding-left: 0;
        width: 80%;
        .l-section__body {
          display: flex;
          justify-content: flex-end;
          text-align: right;
          margin-top: 12px;
          a {
            display: block;
            color: #999999;
            font-size: 16px;
            &::after {
              position: absolute;
              display: block;
              content: '';
              line-height: 0;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 1px;
              background: #999999;
              @include ease-out-cubic($animationTime);
              transform-origin: 0 0;
              transform: scale(0, 0);
            }
            &:hover {
              &::after {
                transform: scale(1, 1);
              }
            }
            @include mq_sp {
              @include spfontsize(14px);
            }
          }
        }
        @include mq_sp {
          width: 100%;
        }
      }
      .contents__imagearea {
        width: 20%;
        margin-left: 0;
      }
    }
    &.occupation {
      .contents__textarea {
        width: 100%;
        max-width: 760px;
        h2 {
          @include mq_sp {
            @include spfontsize(24px);
          }
          &.head-sub {
            font-size: 32px;
            margin-top: 30px;
          }
        }
        h3 {
          font-weight: 500;
          margin-top: 4%;
          @include mq_sp {
            @include spfontsize(20px);
            margin-top: 8%;
          }
          &.link-head {
            cursor: pointer;
          }
        }
        .closed-position {
          opacity: 0.5;
          margin-top: 40px;
        }
        .l-section__body {
          margin-top: 25px;
          white-space: pre-wrap;
          @include mq_sp {
            margin-top: 20px;
          }
        }
        .show-detail {
          display: flex;
          margin-top: 5px;
          a {
            display: block;
            color: #999999;
            font-size: 16px;
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
              background: #999999;
              @include ease-out-cubic($animationTime);
              transform-origin: 0 0;
              transform: scale(0, 0);
            }
            &:hover {
              &::after {
                transform: scale(1, 1);
              }
            }
            @include mq_sp {
              @include spfontsize(14px);
            }
          }
        }
      }
    }
    &.spirit-and-culture {
      margin-bottom: 39px;
      @include mq_sp {
        margin-bottom: 0;
        padding-bottom: percentage(math.div(54px, $spWidth));
      }
      h2 {
        margin-bottom: 30px;
      }
      h3 {
        @include mq_sp {
          @include spfontsize(20px);
          text-align: center;
        }
      }
      .contents__textarea {
        width: 50%;
        position: relative;
        display: flex;
        justify-content: center;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        padding-bottom: 0;
        @include mq_sp {
          display: block;
          width: 100%;
        }
        & > div {
          max-width: 290px;
          @include mq_sp {
            max-width: 100%;
          }
        }
        a {
          display: flex;
          color: #999999;
          font-size: 16px;
          margin-top: 20px;
          @include mq_sp {
            justify-content: center;
          }
          span {
            display: block;
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
              background: #999999;
              @include ease-out-cubic($animationTime);
              transform-origin: 0 0;
              transform: scale(0, 0);
            }
          }
          &:hover {
            span {
              &::after {
                transform: scale(1, 1);
              }
            }
          }
        }
        &:first-child {
          @include mq_sp {
            padding-bottom: percentage(math.div(74px, $spWidth));
          }
          &::after {
            display: block;
            position: absolute;
            top: -50px;
            bottom: -50px;
            right: 1px;
            width: 0;
            content: '';
            border-right: 1px solid #707070;
            @include mq_sp {
              display: none;
            }
          }
        }
        &:last-child {
          padding-left: 4.8%;
          @include mq_sp {
            padding-left: 0;
          }
        }
      }
    }
  }
  &__textarea {
    width: percent(math.div(630px, $innerWidth));
    padding: percent(math.div(50px, $innerWidth)) percent(math.div(45px, $innerWidth));
    @include mq_sp {
      width: 100%;
      padding: 0;
    }
    h2 {
      font-size: 44px;
      line-height: 1;
      padding-bottom: 3px;
      @include roboto-light;
      margin-bottom: percent(math.div(20px, 630px));
      @include mq_sp {
        text-align: center;
        margin-bottom: percentage(math.div(40px, $spInner));
      }
    }
    h3 {
      font-size: 24px;
      line-height: 1.5;
    }
    p {
      font-size: 16px;
      @include noto-light;
      line-height: 1.8;
      text-align: justify;
      @include mq_sp {
        @include spfontsize(14px);
      }
    }
  }
  &__imagearea {
    @include lazyappear();
    line-height: 0;
    img {
      width: 100%;
      will-change: transform;
    }
    &.q {
      width: percent(math.div(180px, $innerWidth));
      margin-left: percent(math.div(80px, $innerWidth));
      @include mq_sp {
        width: percentage(math.div(135px, $spInner));
        margin: 0 auto percentage(math.div(40px, $spInner));
      }
    }
    &.illust {
      width: percent(math.div(680px, $innerWidth));
      margin-top: 5px;
      @include mq_sp {
        width: 100%;
        margin-top: percentage(math.div(80px, $spInner));
      }
    }
  }
  .appear {
    .contents__imagearea {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
}
</style>