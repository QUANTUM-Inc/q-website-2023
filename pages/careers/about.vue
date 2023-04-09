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
        <nuxt-link class="title-link" to="/careers#occupation">view career opportunities now <span>→</span></nuxt-link>
      </template>
    </main-visual>

    <section class='l-section contents' id="mission">
      <div class='l-section__inner js-lazyclass'>
        <div class='contents__textarea'>
          <h2>mission</h2>
          <h3>あらゆる才能を重ね合わせ、<br />まだ世界に存在しないプロダクトをbuildする</h3>
          <p class='l-section__body' v-if='!isEnglish'>quantumの使命、そして存在意義は、<br />
            社会が幸せになる、暮らしを豊かにする隠れた真実を追求し、<br />
            世界にまだないプロダクトを生み出すことです。<br /><br />

            スタジオに集まった多様な才能を重ね合わせ、<br />
            アイディエーションやプロトタイピングにとどまることなく<br />
            実際にプロダクトを生み出すことにこだわります。
          </p>
          <p class='l-section__body' v-if='isEnglish'>
            quantumの使命、そして存在意義は、<br />
            社会が幸せになる、暮らしを豊かにする隠れた真実を追求し、<br />
            世界にまだないプロダクトを生み出すことです。<br /><br />

            スタジオに集まった多様な才能を重ね合わせ、<br />
            アイディエーションやプロトタイピングにとどまることなく<br />
            実際にプロダクトを生み出すことにこだわります。
          </p>
        </div>
      </div>
    </section>

    <section class='l-section contents bg-black'>
      <div class='l-section__inner js-lazyclass vision'>
        <div class='contents__imagearea q'>
          <svg id="logo_q" data-name="logo_q" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 215"><defs><style>.cls-1{opacity:0.75;}.cls-2{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.4px;}</style></defs><g id="グループ_7850" data-name="グループ 7850" class="cls-1"><path id="パス_18843" data-name="パス 18843" class="cls-2" d="M65.11,159.35c-47.8,0-64.84-41-64.84-79.47S17.31.41,65.11.41,130,41.47,130,79.88,112.92,159.35,65.11,159.35Zm0-128.25C44,31.1,31.32,49.33,31.32,79.88S44,128.67,65.11,128.67s33.8-18.24,33.8-48.79S86.27,31.1,65.11,31.1Z"/><path id="パス_18844" data-name="パス 18844" class="cls-2" d="M99.79,213.48V38.33a1.1,1.1,0,0,0-1.1-1.1H85.53a1.1,1.1,0,0,1-1.1-1.1h0V20.73a1.11,1.11,0,0,1,.81-1.05c10.34-3,15.7-7.89,18.68-11.36a32.25,32.25,0,0,0,2.71-4,1,1,0,0,1,.94-.54h26.06a1.1,1.1,0,0,1,1.1,1.1h0V213.48a1.1,1.1,0,0,1-1.1,1.1H100.89a1.1,1.1,0,0,1-1.1-1.1Z"/></g></svg>
        </div>
        <div class='contents__textarea'>
          <h2>vision</h2>
          <h3>なめらかに、スタートアップできる社会へ</h3>
          <p class='l-section__body' v-if='!isEnglish'>起業のためのリソースも、ノウハウもない。<br />
            スタートアップといえば、退路を断たれた断崖絶壁の環境で<br />
            むりやり起業するものだと当然のように考えられている現在の社会は、<br />
            健全な状態ではないとquantumは考えます。<br /><br />

            企業内起業、アカデミア起業、ハイブリッド起業（副業起業）、客員起業家、還暦スタートアッパー。<br />新規事業を志す誰もが自分らしく挑戦することができ、輝くことのできる社会を生み出したい。<br />

            スタジオに蓄積した新規事業のノウハウとリソースをもとに、<br />
            リスクを抑え、再現性高く、軽やかにスタートアップを量産していく。<br />
            それによって、なめらかにスタートアップできる社会、起業が特別ではない社会を目指します。
          </p>
          <p class='l-section__body' v-if='isEnglish'>起業のためのリソースも、ノウハウもない。<br />
            スタートアップといえば、退路を断たれた断崖絶壁の環境で<br />
            むりやり起業するものだと当然のように考えられている現在の社会は、<br />
            健全な状態ではないとquantumは考えます。<br /><br />

            企業内起業、アカデミア起業、ハイブリッド起業（副業起業）、客員起業家、還暦スタートアッパー。<br />新規事業を志す誰もが自分らしく挑戦することができ、輝くことのできる社会を生み出したい。<br />

            スタジオに蓄積した新規事業のノウハウとリソースをもとに、<br />
            リスクを抑え、再現性高く、軽やかにスタートアップを量産していく。<br />
            それによって、なめらかにスタートアップできる社会、起業が特別ではない社会を目指します。
          </p>
        </div>
      </div>
    </section>

    <section class='l-section contents' id="value">
      <div class='l-section__inner js-lazyclass value'>
        <div class='contents__textarea'>
          <h2>value</h2>
          <p class='l-section__body' v-if='!isEnglish'>・プロダクトファースト<br />
          ・ユーザーニーズに集中する<br />
          ・細部に宿る勝ち筋にこだわる<br />
          ・型化して再現性を追求する<br />
          ・境界線を超えて重ね合わせる<br />
          <small>上記5つのvalueを、quantumの重要な価値観としてメンバーの行動指針にし、<br />
          世界トップのスタートアップ・スタジオを目指しています。</small>
          </p>
          <p class='l-section__body' v-if='isEnglish'>・プロダクトファースト<br />
          ・ユーザーニーズに集中する<br />
          ・細部に宿る勝ち筋にこだわる<br />
          ・型化して再現性を追求する<br />
          ・境界線を超えて重ね合わせる<br />
          <small>上記5つのvalueを、quantumの重要な価値観としてメンバーの行動指針にし、<br />
          世界トップのスタートアップ・スタジオを目指しています。</small>
          </p>
        </div>
      </div>
    </section>

    <section class='l-section l-fullimage js-lazyclass'>
      <picture>
        <source media="(max-width: 768px)" srcset="/images/careers/img1.jpg">
        <img src='/images/careers/img1.jpg' alt=''>
      </picture>
    </section>

    <section class='l-section contents' id="spirit">
      <div class='l-section__inner js-lazyclass spirit'>
        <div class='contents__textarea'>
          <h2>spirit</h2>
          <h3>挑戦者であり、永遠のβ版。<br />成功も失敗も糧にして、<br />0-1とその先に挑み続ける。</h3>
          <p class='l-section__body' v-if='!isEnglish'>世界トップのスタートアップ・スタジオを目指すquantumが特にこだわるのは、<br />
            プロダクトの連続的な創出であり、事業化であり、社会への実装です。<br /><br />
            
            アイディエーションやプロトタイピングにとどまることなく、連続的な事業化を目指しています。<br /><br />
            
            ハリウッドの映画スタジオが、映画制作に必要な機能やタレントを内製化し、<br />
            ノウハウをスタジオの中に蓄積することで連続的にヒット作品を生み出す仕組みを作ったように、<br />
            quantumも新規事業創出に必要な機能やタレントを内製化し、成功失敗のノウハウを共有することで、<br />
            プロダクトを連続的に創出できる仕組みを構築しています。<br /><br />

            正解がまだない世界に挑戦する上で、完璧になぞるべき前例など存在しません。<br />
            そこで、quantumでは成功も失敗も、スタジオのメンバーが経験してきた全てを糧にして、<br />
            プロダクトを創出し（0−1）、ユーザーに届け（1−10）、<br />
            事業としてグロースさせ、世界にインパクトを与えるべく（10−100）、<br />
            日々より良いスタジオのあり方を模索しつつ、アップデートを続けています。
          </p>
          <p class='l-section__body' v-if='isEnglish'>世界トップのスタートアップ・スタジオを目指すquantumが特にこだわるのは、<br />
            プロダクトの連続的な創出であり、事業化であり、社会への実装です。<br /><br />
            
            アイディエーションやプロトタイピングにとどまることなく、連続的な事業化を目指しています。<br /><br />
            
            ハリウッドの映画スタジオが、映画制作に必要な機能やタレントを内製化し、<br />
            ノウハウをスタジオの中に蓄積することで連続的にヒット作品を生み出す仕組みを作ったように、<br />
            quantumも新規事業創出に必要な機能やタレントを内製化し、成功失敗のノウハウを共有することで、<br />
            プロダクトを連続的に創出できる仕組みを構築しています。<br /><br />

            正解がまだない世界に挑戦する上で、完璧になぞるべき前例など存在しません。<br />
            そこで、quantumでは成功も失敗も、スタジオのメンバーが経験してきた全てを糧にして、<br />
            プロダクトを創出し（0−1）、ユーザーに届け（1−10）、<br />
            事業としてグロースさせ、世界にインパクトを与えるべく（10−100）、<br />
            日々より良いスタジオのあり方を模索しつつ、アップデートを続けています。
            
          </p>
        </div>
      </div>
    </section>

    <section class='l-section l-fullimage js-lazyclass'>
      <picture>
        <source media="(max-width: 768px)" srcset="/images/careers/img2.jpg">
        <img src='/images/careers/img2.jpg' alt=''>
      </picture>
    </section>

    <section class='l-section contents' id="culture">
      <div class='l-section__inner js-lazyclass'>
        <div class='contents__textarea'>
          <h2>culture</h2>
          <h3>多様な才能を融合させ、<br />正解がまだない世界に挑戦する。</h3>
          <p class='l-section__body' v-if='!isEnglish'>
            quantumで最も優先されること。<br />
            それは世界にまだないプロダクトを生み出し、<br />
            社会をよりよい方向へと上書きしていくことです。<br /><br />
            歩んできた経歴も、専門性も、価値観も、それぞれ大きく異なるメンバーたちが、<br />
            その多様な個性を境界線を超えて融合させ、<br />1人ではたどり着けない新しい正解を世界に提供し、<br />
            大きなインパクトを生み出すことを目指して日々取り組んでいます。<br /><br />
            
            飛び抜けた1人の才能が、未来を切り開くこともあるでしょう。<br />
            しかし、quantumが目指すのは、<br />異能、異才を重ねることで10人で100人分の、<br />
            100人で1000人分の力が出せるようなチームです。<br /><br />
            
            メンバーそれぞれが、専門性や個性を磨きつつ、互いを尊重し、理解し合い、<br />
            あらゆる知見を共有し、ワンチームで取り組むことで、<br />
            世の中につぎつぎと新しいプロダクトを生み出していきます。 
          </p>
          <p class='l-section__body' v-if='isEnglish'>
            それは世界にまだないプロダクトを生み出し、<br />
            社会をよりよい方向へと上書きしていくことです。<br /><br />
            
            歩んできた経歴も、専門性も、価値観も、それぞれ大きく異なるメンバーたちが、<br />
            その多様な個性を境界線を超えて融合させ、1人ではたどり着けない新しい正解を世界に提供し、<br />
            大きなインパクトを生み出すことを目指して日々取り組んでいます。<br /><br />
            
            飛び抜けた1人の才能が、未来を切り開くこともあるでしょう。<br />
            しかし、quantumが目指すのは、異能、異才を重ねることで10人で100人分の、<br />
            100人で1000人分の力が出せるようなチームです。<br /><br />
            
            メンバーそれぞれが、専門性や個性を磨きつつ、互いを尊重し、理解し合い、<br />
            あらゆる知見を共有し、ワンチームで取り組むことで、<br />
            世の中につぎつぎと新しいプロダクトを生み出していきます。 
          </p>
        </div>
      </div>
    </section>

    <contact-link background='gray'></contact-link>
    </template>
  </div>
</template>

<script>
import Init from '../../javascripts/init';
import MainVisual from '../../components/partial/MainVisual';
import { Cubic, gsap } from 'gsap';
import _each from 'lodash/each'
import ContactLink from '../../components/partial/ContactLink';
export default {
  name: 'index.vue',
  scrollToTop: true,
  components: {
    MainVisual,
    ContactLink
  },
  head() {
    return {
      title: `${this.$store.state.meta.name}careers`,
      meta: [{hid: 'description',
        name: 'description',
        content: this.isEnglish ? 'quantum is a start-up studio within Hakuhodo Inc. group. As venture builders specializing in new business creation, we have created many new businesses since our establishment, mainly through co-founding with our partners.' : 'quantumは、発想から実装まで、事業開発の全てを活動領域とし、 新しいプロダクトやサービスを創り出すスタートアップスタジオです。' },
        this.keywords
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {

      gsap.delayedCall(0.1, () => {
        Init.setup(this.$store)
        this.setupPeoples()
        this.setOfficeImage()
      })

    })
  },
  methods: {
    setupPeoples() {
      let wrap = document.querySelector('.js-peoples')
      let peoples = document.querySelectorAll('.js-peoples .people');
      gsap.fromTo(peoples, {
        opacity: 0,
        y: 20
      }, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: Cubic.easeOut,
        stagger: 0.08,
        scrollTrigger: {
          trigger: wrap,
          start: 'top 50%',
          markers: false
        }
      });
    },

    setOfficeImage() {
      let images = document.querySelectorAll('.js-officeimage');
      _each(images, (elm, i) => {
        gsap.fromTo(elm, {
          opacity: 0,
          y: 20
        }, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: Cubic.easeOut,
          scrollTrigger: {
            trigger: elm,
            start: 'top 50%'
          }
        })
      })

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
  .l-section__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 90px;
    @include mq_sp {
      display: block;
      margin-bottom: percentage(math.div(90px, $spWidth));
    }
    &.type-right {
      justify-content: flex-end;
    }
    &.vision {
      @include mq_sp {
        display: flex;
        flex-direction: column-reverse;
        margin-bottom: 0;
      }
      h2, h3 {
        text-align: right;
      }
      h2 {
        @include mq_sp {
          text-align: center;
        }
      }
      h3 {
        @include mq_sp {
          text-align: left;
        }
      }
      .contents__textarea {
        padding-left: 0;
        width: 80%;
        @include mq_sp {
          width: 100%;
        }
        .l-section__body {
          text-align: right;
          @include mq_sp {
            text-align: left;
          }
        }
      }
      .contents__imagearea {
        width: 20%;
        margin-left: 0;
        @include mq_sp {
          width: 100%;
          margin-top: -20%;
          display: flex;
          justify-content: flex-end;
        }
        svg {
          @include mq_sp {
            width: 40%;
          }
        }
      }
    }
    &.value {
      .contents__textarea {
        widows: 65%;
        .l-section__body {
          font-size: 32px;
          @include mq_sp {
            @include spfontsize(20px);
          }
          small {
            font-size: 16px;
            display: block;
            line-height: 1.6;
            margin-top: 20px;;
          }
        }
      }
    }
    &.spirit {
      justify-content: flex-end;
      @include mq_sp {
        justify-content: center
      }
      h2, h3 {
        text-align: right;
      }
      h2 {
        @include mq_sp {
          text-align: center;
        }
      }
      h3 {
        @include mq_sp {
          text-align: left;
        }
      }
      .contents__textarea {
        width: 100%;
        .l-section__body {
          text-align: right;
          @include mq_sp {
            text-align: left;
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
      @include mq_sp {
        @include spfontsize(20px);
      }
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