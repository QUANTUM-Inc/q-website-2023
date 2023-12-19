<template>
  <section class='l-section clients'>
    <div class='l-section__inner partners js-lazyclass'>
      <h2 class='type-center'>partners & clients</h2>
      <div class='clients-wrap js-icons'>
        <img src='~/assets/images/home/clients/ajinomoto.png' alt='AJINOMOTO'>
        <img src='~/assets/images/home/clients/asahi-intecc.png' alt='asahi intecc'>
        <img src='~/assets/images/home/clients/docomo.png' alt='docomo'>
        <img src='~/assets/images/home/clients/dydo.png' alt='DyDo'>
        <img src='~/assets/images/home/clients/fujitsu.png' alt='FUJITSU'>
        <img src='~/assets/images/home/clients/google.png' alt='Google'>
        <img src='~/assets/images/home/clients/haseko.png' alt='HASEKO'>
        <img src='~/assets/images/home/clients/jal.png' alt='JAL'>
        <img src='~/assets/images/home/clients/jcb.png' alt='JCB'>
        <img src='~/assets/images/home/clients/jr.png' alt='JR EAST'>
        <img src='~/assets/images/home/clients/kao.png' alt='Kao'>
        <img src='~/assets/images/home/clients/kikkoman.png' alt='キッコーマン'>
        <img src='~/assets/images/home/clients/kyoto-university.png' alt='京都大学'>
        <img src='~/assets/images/home/clients/lion.png' alt='LION' style="">
        <img src='~/assets/images/home/clients/mitsui.png' alt='MITSUI CHEMICALS'>
        <img src='~/assets/images/home/clients/molten.png' alt='molten'>
        <img src='~/assets/images/home/clients/monet.png' alt='MONET'>
        <img src='~/assets/images/home/clients/nissan.png' alt='NISSAN'>
        <img src='~/assets/images/home/clients/ntt-west.png' alt='NTT西日本'>
        <img src='~/assets/images/home/clients/okamura.png' alt='okamura'>
        <img src='~/assets/images/home/clients/panasonic.png' alt='Panasonic'>
        <img src='~/assets/images/home/clients/persol.png' alt='PERSOL'>
        <img src='~/assets/images/home/clients/recruit.png' alt='リクルート キャリア'>
        <img src='~/assets/images/home/clients/stratasys.png' alt='stratasys'>
        <img src='~/assets/images/home/clients/tokyo-gas.png' alt='TOKYO GAS'>
        <img src='~/assets/images/home/clients/teatol.png' alt='テアトル アカデミー'>
        <img src='~/assets/images/home/clients/basf.png' alt='BASF'>
      </div>
    </div>

    <div class='l-section__inner award js-lazyclass'>
      <h2 class='type-center'>awards & accolades</h2>
      <div class='clients-wrap js-icons'>
        <img src='~/assets/images/home/awards/design-award.png' alt='DESIGN AWARD 2020' class='design-award'>
        <img src='~/assets/images/home/awards/dandad.png' alt='D&Ad' class='dandad'>
        <img src='~/assets/images/home/awards/good-design.png' alt='GOOD DESIGN' class='good-design'>
        <img src='~/assets/images/home/awards/pinakothek.png' alt='PINAKOTHEK DER MODERNE' class='pinakothek'>
        <img src='~/assets/images/home/awards/reddot.png' alt='reddot winner 2020' class='reddot'>
        <img src='~/assets/images/home/awards/oneshow.png' alt='THE ONE SHOW' class='oneshow'>
        <img src='~/assets/images/home/awards/design_museum.png' alt='DESIGN MUSEUM DANMARK' class='design_museum_danmark'></img>
      </div>
    </div>

    <div class='l-section__inner portofolio js-lazyclass'>
      <h2 class='type-center'>investment portfolio</h2>
      <div class='clients-wrap js-icons'>
        <img src='~/assets/images/home/portofolio/bankers.png' alt='Bankers'>
        <img src='~/assets/images/home/portofolio/ehonnavi.png' alt='絵本ナビ'>
        <img src='~/assets/images/home/portofolio/mirai_speaker.png' alt='MIRAI SPEAKER'>
        <img src='~/assets/images/home/portofolio/ortho.png' alt='ORTHO ReBIRTH'>
        <img src='~/assets/images/home/portofolio/plantio.png' alt='PLANTIO'>
        <img src='~/assets/images/home/portofolio/qal.png' alt='QAL startups'>
        <img src='~/assets/images/home/portofolio/tbm.png' alt='TBM'>
        <img src='~/assets/images/home/portofolio/wota.png' alt='WOTA'>
      </div>
      <p v-if='!isEnglish'>※quantumの関連会社のMNV、Spotlightからの出資先を含む</p>
      <p v-if='isEnglish'>※Includes portfolio companies from MNV, an affiliated investment company of quantum</p>
    </div>
  </section>
</template>

<script>
import {gsap} from 'gsap';
import _each from 'lodash/each'
export default {
  name: 'ClientAndPartners.vue',
  mounted() {
    this.$nextTick(() => {
      let icons = document.querySelectorAll('.js-icons')
      _each(icons, (elm, i) => {
        this.setupIcons(elm)
      })
    })

  },
  methods: {
    setupIcons(elm) {
      let images = elm.querySelectorAll('img')
      gsap.fromTo(images, {
        opacity: 0,
        y: 12
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        scrollTrigger: {
          trigger: elm,
          start: 'center 50%'
        }
      })
    }
  }
};
</script>

<style lang='scss' scoped>

.clients {
  background: #FFF;
  padding: 85px 0;
  @include mq_sp {
    padding: percentage(math.div(80px, $spWidth)) 0;
  }
  .l-section__inner {
    //margin-bottom:
  }
  h2 {

  }
  p {
    text-align: center;
    @include noto-light;
    font-size: 14px;
    @include mq_sp {
      @include spfontsize(10px);
      margin-top: percentage(math.div(30px, $spInner));
    }
  }
  .clients-wrap {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    margin-top: percentage(math.div(55px, $innerWidth));
    justify-content: flex-start;
    align-items: flex-start;
    line-height: 0;
    @include mq_sp {
      margin-top: percentage(math.div(40px, $spInner));
    }
    img {
      width: percentage(math.div(150px, ($innerWidth)));
      max-width: 150px;
      //  border: $bred;
      margin-bottom: percentage(math.div(25px, $innerWidth));
      /////

      @include mq_sp {
        width: percentage(math.div(89px, $spInner));
        margin-bottom: percentage(math.div(5px, $spInner));
        max-width: none;
      }
    }
  }

  .partners {
    @include mq_sp {
      width: percentage(math.div(310px, $spWidth));
    }
    .clients-wrap {
      img {
        will-change: transform;
        margin-right: percentage(math.div(30px, $innerWidth));
        @include mq_pc {
          &:nth-child(6n) {
            margin-right: 0;
          }
        }
        @include mq_sp {
          width: percentage(math.div(80px, $spInner));
          margin-right: percentage(math.div(22px, $spInner));
          max-width: none;
          &:nth-child(3n) {
            margin-right: 0;
          }
        }
      }

    }
  }

  .award,
  .portofolio {
    margin-top: percentage(math.div(80px, $innerWidth));
    @include mq_sp {
      margin-top: percentage(math.div(60px, $spInner));
      width: percentage(math.div(310px, $spWidth));
    }
    .clients-wrap {
      // justify-content: space-evenly;
    }
  }

  .award {
    .clients-wrap {
      // justify-content: center;
    }
    @include mq_pc {
      .design-award {
        // margin-right: 10px;
      }
      .good-design {
        margin-right: 8px;
        // margin-right: percentage(math.div(36px, $innerWidth));
      }
      .pinakothek {
        margin-right: percentage(math.div(12px, $innerWidth));
      }
      .reddot {
        margin-right: -8px;
        // margin-right: percentage(math.div(18px, $innerWidth));
      }
      .dandad {
        margin-right: -20px;
        margin-left: -20px;
      }
    }
  }
}
</style>