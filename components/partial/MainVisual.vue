<template>
  <section class='l-section main-visual' :class='color'>
    <div class='l-section__background'>
      <picture>
        <source media="(max-width: 768px)" :srcset="srcsp">
        <img :src='background' alt=''>
      </picture>
    </div>
    <div class='l-section__inner'>
      <h1 :class='size' ref='title'>
        <div v-html='title'></div>
        <slot name="titleLink" />
      </h1>
    </div>
  </section>
</template>

<script>
import { gsap, Quint } from 'gsap';
import SplitText from 'gsap/dist/SplitText'

export default {
  name: 'MainVisual',
  props: {
    color: {
      type: String,
      default: 'white'
    },
    title: {
      type: String
    },
    background: {
      type: String
    },
    backgroundsp: {
      type: String
    },
    size: {
      type: String,
      default: 'large'
    }
  },
  computed: {
    srcsp() {
      return this.backgroundsp;
    }
  },
  mounted() {
    let splitText = new SplitText(this.$refs.title, {
      type: 'words'
    });
    let words = splitText.words;
    gsap.fromTo(words, {
      opacity: 0,
      y: 30,
    },
      {
        opacity: 1,
        y: 0,
        delay: 0.4,
        duration: 0.6,
        ease: Quint.easeOut,
        stagger: 0.06
      })
  }
};
</script>

<style lang='scss' scoped>
.main-visual {
  height: 100vh;
  min-height: 600px;
  @include mq_sp {
    min-height: none;
    max-height: -webkit-fill-available;
  }
  .l-section__background {
    height: 100%;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    img {
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100%;
    }
  }
  .l-section__inner {
    position: relative;
    height: 100%;
    padding: 0 percent(math.div(100px, $baseWidth));
    max-width: none;
    h1 {
      position: absolute;
      line-height: 1.6;
      @include roboto-light;
      font-size: 80px;
      top: 50%;
      transform: translate(0, -50%);
      &.small {
        font-size: 60px;
      }

      a.title-link {
        display: block !important;
        font-size: 25px;
        color: #fff;
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
          background: #fff;
          @include ease-out-cubic($animationTime);
          transform-origin: 0 0;
          transform: scale(0, 0);
          // transform: scale(1, 1);
        }
        &:hover {
          &::after {
            transform: scale(1, 1);
          }
        }
        @include mq_sp {
          @include spfontsize(16px);
        }
      }

      @include mq_sp {
        line-height: 1.4;
        @include spfontsize(60px);
        &.large {
          @include spfontsize(80px);
        }
        &.small {
          @include spfontsize(36px);
        }
      }
      /*&.large {

      }
      &.small {

      }*/
    }
  }

  &.white {
    h1 {
      //mix-blend-mode: difference;
      color: #FFF;
    }
    .l-section__background {
      &::after {
        background: rgba(0, 0, 0, 0.8);
      }
    }
  }
  &.black {
    h1 {
      color: #000;
    }
    .l-section__background {
      &::after {
        background: rgba(255, 255, 255, 0.4);
      }
    }
  }
}
</style>