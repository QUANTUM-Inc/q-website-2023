<template>
  <div class='whatwedo'>
    <main-visual
      title='we <br>design<br>realize<br>scale'
      background='/images/what/bg.jpg'
      backgroundsp='/images/what/bg-sp.jpg'
      color='black'
      size='small'
    ></main-visual>

    <section class='l-section about'>
      <div class='l-section__inner js-lazyclass '>
        <div class='image-area'>
          <img src='/images/what/design.gif' alt=''>
        </div>
        <div class='text-area'>
          <h2>what we do</h2>
          <p class='l-section__lead' v-if='!isEnglish'>発想から実装、そして１→∞へ。<br>クリエイティビティで未来を想像し、<br class='pc'>現実を創造する。</p>
          <p class='l-section__lead' v-if='isEnglish'>From conception to implementation. <br>From 1 to ∞.<br>
            Imagine the future with creativity. <br>Create the reality.</p>
        </div>

      </div>
    </section>



    <section class='l-section design type-gray'>
      <div class='l-section__inner js-lazyclass'>
        <h2>design</h2>
        <p class='l-section__body' v-if='!isEnglish'>ハードウェアのプロダクトから、ソフトウェアのUI/UXまで。テクノロジーや社会の変化に伴い、人とプロダクトの間に新しく生まれるストーリーを構築することで、美しく機能的なプロダクトをデザインします。</p>
        <p class='l-section__body' v-if='isEnglish'>We design everything from hardware products to software UI/UX. As technology and society change, we design functional products with aesthetic designs by creating new stories between the user and products. </p>
      </div>
    </section>
    <section class='l-section l-fullimage js-lazyclass'>
      <picture>
        <source media="(max-width: 768px)" srcset="/images/what/design-sp.jpg">
        <img src='/images/what/design.jpg' alt=''>
      </picture>
    </section>


    <section class='l-section engineering type-gray '>
      <div class='l-section__inner js-lazyclass'>
        <h2>engineering</h2>
        <p class='l-section__body' v-if='!isEnglish'>エンジニアリングとデザインが一体となり、生まれたばかりの柔らかいアイデアを確実にプロトタイピングします。扱う領域はハードウェアからAIまで。開発初期からクイックに試作を行い、技術的検証やユーザビリティテストを重ねて、プロダクトを開発します。</p>
        <p class='l-section__body' v-if='isEnglish'>Engineering and design work in unison to create rapid prototypes of newborn, soft ideas. Our areas of expertise range from hardware to AI. We conduct prototyping from the early stages of development, and develop products through repeated technical and usability testing.</p>
      </div>
    </section>
    <section class='l-section l-fullimage js-lazyclass'>
      <picture>
        <source media="(max-width: 768px)" srcset="/images/what/engineering-sp.jpg">
        <img src='/images/what/engineering.jpg' alt=''>
      </picture>
    </section>


    <section class='l-section branding type-gray '>
      <div class='l-section__inner js-lazyclass'>
        <h2>branding</h2>
        <p class='l-section__body' v-if='!isEnglish'>プロダクト、サービスなどの開発によって新しく生まれた価値を、ユーザーに広く届け、グロースします。扱う領域はロゴデザイン、コピー、広告制作などのブランドデザインだけでなく、WEBサイト、PRにいたるまで、３６０度で新規事業のブランディングを実施します。</p>
        <p class='l-section__body' v-if='isEnglish'>We deliver the new value created by the development of products and services to a wide variety of users and generate growth. We provide branding services for new businesses from all angles, including not only logo design, copywriting, and advertising production, but also websites and PR.</p>
      </div>
    </section>
    <section class='l-section l-fullimage js-lazyclass'>
      <picture>
        <source media="(max-width: 768px)" srcset="/images/what/branding-sp.jpg">
        <img src='/images/what/branding.jpg' alt=''>
      </picture>
    </section>


    <section class='l-section biz-creative type-gray '>
      <div class='l-section__inner js-lazyclass'>
        <h2>business creative</h2>
        <p class='l-section__body' v-if='!isEnglish'>実現したいビジョンをもとに、ユーザーを起点にしたアジャイル開発と実証実験を通して、プロダクト・サービスの中心となる価値を見出します。そして事業成長に向けたストラテジーとオペレーションを設計・実行することで、生み出した事業をグロースさせます。</p>
        <p class='l-section__body' v-if='isEnglish'>Based on the aimed vision, we discover the core value of products and services through user-centered agile development and demonstration experiments. We then design and implement strategies for the created business to generate business growth.</p>
      </div>
    </section>
    <section class='l-section l-fullimage js-lazyclass'>
      <picture>
        <source media="(max-width: 768px)" srcset="/images/what/bizcreative-sp.jpg">
        <img src='/images/what/bizcreative.jpg' alt=''>
      </picture>
    </section>



    <section class='l-section investment type-gray '>
      <div class='l-section__inner js-lazyclass'>
        <h2>investment</h2>
        <p class='l-section__body' v-if='!isEnglish'>quantumは、事業投資会社である（株）Mirai Nihon Venturesとも連携し、パートナーとの共同創業によるジョイントベンチャーや自社事業の開発、ローンチ、グロースのマルチフェーズでの資金投下やスタートアップへのハンズオン投資を実行しています。</p>
        <p class='l-section__body' v-if='isEnglish'>quantum collaborates with Mirai Nihon Ventures Co.,Ltd., a business investment company, to develop joint-ventures co-founded with partners and in-house business. As well as launch, investment in multiple phases of growth and hands-on investment for startups. </p>
      </div>
    </section>
    <section class='l-section l-fullimage js-lazyclass'>
      <picture>
        <source media="(max-width: 768px)" srcset="/images/what/investment-sp.jpg">
        <img src='/images/what/investment.jpg' alt=''>
      </picture>
    </section>

    <contact-link background='gray'></contact-link>
  </div>
</template>

<script>
import MainVisual from '../../components/partial/MainVisual';
import ContactLink from '../../components/partial/ContactLink';
import Init from '../../javascripts/init';
import { gsap } from 'gsap';
export default {
  name: 'index.vue',
  scrollToTop: true,
  components: {
    MainVisual,
    ContactLink
  },
  head() {
    return {
      title: `${this.$store.state.meta.name}what we do`,
      meta: [{hid: 'description',
        name: 'description',
        content: this.isEnglish ? 'design、engineering、branding、biz creative、investment. By combining the strengths of each members, we will work on all areas from conception to implementation (0 to 1) and growth.' : 'design、engineering、branding、biz creative、investment。メンバーの強みを掛け合わせ、発想から実装（ゼロイチ）、そしてグロースまで全領域に取り組みます。'
      },
      this.keywords]
    };
  },
  mounted() {
    this.$nextTick(() => {
      gsap.delayedCall(0.1, () => {
        Init.setup(this.$store)
      })
    });
  },
};
</script>

<style lang='scss' scoped>
.about {
  padding: 0px 0 0px;
  overflow: hidden;
  @include mq_sp {
    padding: percentage(math.div(0px, $spWidth)) 0 0;
  }
  .l-section__inner {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    @include mq_sp {
      display: block;
      width: 100%;
    }
  }
  .image-area {
    line-height: 0;
    overflow: hidden;
    width: percentage(math.div(687px, $baseWidth));
    @include mq_sp {
      width: 100%;
    }
    img {
      width: 150%;
      object-fit: cover;
      object-position: center;
      position: relative;
      left: 50%;
      transform: translate(-50%, 0);
      @include mq_sp {
        width: 100%;
      }
    }
  }
  .text-area {
    width: percentage(math.div(593px, $baseWidth));
    h2 {
      @include mq_sp {
        @include spfontsize(35px);
      }
    }
    p {
      margin-top: 15px;
      font-size: 20px;
      line-height: 2.2;
      letter-spacing: 0.1rem;
      @include mq_sp {
        margin-top: percentage(math.div(40px, $spInner));
        line-height: 2;
        letter-spacing: 0.02rem;
      }
    }
    @include mq_sp {
      width: 100%;
      background: $bggray;
      padding: percentage(math.div(120px, $spWidth)) 0;
      h2,
      p {
        width: percentage(math.div($spInner, $spWidth));
        margin-left: auto;
        margin-right: auto;
      }
      p {
        margin-top: percentage(math.div(40px, $spInner));
      }
    }
  }
}
//Video
.video-area {
  //height: 600px;
  line-height: 0;
  .l-section__inner {
    height: 100%;
    max-width: none;
    padding: 0;
    img {
      width: 100%;
    }
  }
}

.design,
.branding,
.engineering,
.biz-creative,
.investment {
  padding: 100px 0 110px;
  @include mq_sp {
    padding: percentage(math.div(60px, $spWidth)) 0 percentage(math.div(100px, $spWidth));
    background: #FFF;
  }
}
</style>