<template>
  <section id='keyvisual' class='keyvisual l-section' ref='kv'>
    <div class='l-section__background' ref='bg'>
<!--      <video src='/video/q_showreel.mp4' ref='bgimage' autoplay playsinline muted loop></video>-->
      <div class='vimeowrap'>
        <div class="vimeoinner-pc">
          <iframe src="https://player.vimeo.com/video/639500940?h=1f6d8e521e&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&background=1" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="vimeoinner-sp">
          <iframe src="https://player.vimeo.com/video/817530958?h=eedf18c6cd&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&background=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
    </div>
    <div class='l-section__inner'>
      <div class='space2'></div>
      <div class='wrapper logowrap'>
        <div class='wrapper__space'></div>
        <div class='wrapper__inner'>
          <LogoClip class='logo-clip'></LogoClip>
        </div>
        <div class='wrapper__space'></div>
      </div>
      <div class='space'></div>
      <div class='wrapper arrowwrap'>
        <div class='wrapper__space'></div>
        <div class='wrapper__inner'>
          <svg class='arrow-svg' enable-background="new 0 0 1280 137" viewBox="0 0 1280 137" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin slice"><path d="m1280 137h-1280v-137h1283m-662 4.1c-.2 0-.4.1-.5.3s0 .4.1.5l21.5 20.6c.1.1.2.1.3.1s.3 0 .4-.1l21.5-20.6c.1-.1.2-.4.1-.5-.1-.2-.3-.3-.5-.3h-7.7l-12.7 12.2c-.6.6-1.5.6-2.1 0l-12.7-12.2z" fill="#fff"/></svg>
        </div>
        <div class='wrapper__space'></div>
      </div>
    </div>
<!--    <div class='l-section__over' ref='over'>
      <div class='overlay' ref='overlay'></div>
    </div>-->
  </section>
</template>

<script>
import LogoClip from './LogoClip';
import {gsap, Quint, Cubic} from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
export default {
  name: 'Keyvisual.vue',
  components: {
    LogoClip
  },
  mounted() {
    this.setupOverlay();
    this.setKVBackground();

  },
  methods: {
    setupOverlay() {
      let kv = this.$refs.kv;
      gsap.to(kv, {
        opacity: 1,
        delay: 0.2,
        duration: 0.8,
        ease: Cubic.easeOut,
        onComplete: () => {
          this.startAnim();
        }
      })

    },
    startAnim() {
      //let over = this.$refs.over;
      let bg = this.$refs.bg;

      let clipObj = {
        clip: -40
      }

      let duration = 1.4;

      gsap.to(bg, {
        opacity: 1,
        delay: 0.8,
        duration: 1.0,
        ease: Cubic.easeOut
      });
    },
    setKVBackground() {
      let _video = this.$refs.bgimage
      if (!_video) {
        return
      }
      _video.currentTime = 0.2;
      gsap.fromTo(_video, {
        scale: 1.2,
        y: '10%'
      }, {
        scale: 1,
        y: '0%',
        scrollTrigger: {
          trigger: '#keyvisual',
          start: 'top 0',
          end: 'bottom 0',
          scrub: 0.8
        }
      })
    }
  }
};
</script>

<style lang='scss' scoped>
.keyvisual {
  height: 100vh;
  min-height: 560px;
  overflow: hidden;
  width: 100%;
  opacity: 0;
  /////z-index: 7;
  /*mask-image: url($imagePath + "common/logo.svg");
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: percent(570px / $baseWidth);*/
  @include mq_sp {
    min-height: 620px;
  }
}
.l-section {
  //////background: #000;
  ///// background
  &__background {
    opacity: 1; /// 0
    position: fixed;
    background: #000;
    height: 100vh;
    img,
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    .vimeowrap {
      pointer-events:none;
      //padding:56.25% 0 0 0;
      height: 100%;
      position:relative;
      .vimeoinner-sp {
        display: none;
      }
      @include mq_sp {
        height: 100%;
        padding: 0;
        .vimeoinner-pc {
          display: none;
        }
        .vimeoinner-sp {
          width: 100%;
          height: 100%;
          display: block !important;
        }
      }
    }
    iframe {
      position: absolute;
      left: 50% !important;
      top: 50% !important;
      transform: translate(-50%, -50%);
      min-height: 1080px;
      //////////width: 250% !important;

      //width: 100% !important;
      @media (min-aspect-ratio: 16/9) {
        /* height = 100 * (9 / 16) = 56.25 */
        height: 56.25vw !important;
      }
      @media (max-aspect-ratio: 16/9) {
        /* width = 100 / (9 / 16) = 177.777777 */
        width: 177.78vh !important;
      }
      @include mq_sp {
        width: auto !important;
        min-width: 100% !important;
        height: auto !important;
        min-height: 100% !important;
        aspect-ratio: 0.5625;

        object-fit: cover !important;
      }
    }
  }

  ////// section inner
  &__inner {
    width: 100%;
    position: relative;
    max-width: none;
    min-height: 560px;
    height: calc(100vh - 10px);
    line-height: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 0;
    justify-content: space-between;
    @include mq_sp {
      ///min-height: 620px;
      min-height: 1px;
      //height: calc(100vh - 240px);
      //max-height: -webkit-fill-available;
      height: calc(100vh - 130px);
    }
    .space {
      background: #FFF;
      flex-grow: 0.9;
      @include mq_sp {
        flex-grow: 0.7;
      }
    }
    .space2 {
      background: #FFF;
      flex-grow: 0.1;
      @include mq_sp {
        flex-grow: 0.3;
      }
    }
    svg {
      display: block;
    }
  }

  ///// Logo
  .logowrap {
    flex-grow: 1;
    .wrapper__inner {
      svg {
        position: relative;
        min-height: 103%;
        min-width: 101%;
        max-height: 520px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        @include mq_tab {
          width: 120%;
        }
        @include mq_sp {
          width: 130%;
        }
      }
    }
  }
  //// Arrow
  .arrowwrap {
    .wrapper__inner {
      svg {
        position: relative;
        min-height: 105%;
        min-width: 101%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        @include mq_tab {
          width: 180%;
        }
        @include mq_sp {
          width: 260%;
        }
      }
    }
  }

  .wrapper {
    display: flex;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: 0;
      width: 100%;
      height: 3px;
      background: #FFF;
    }
    .wrapper__space {
      width: 5%;
      background: #fff;
      flex-grow: 1;
    }
    .wrapper__inner {
      max-width: $baseWidth;
      width: percentage(math.div($baseWidth, $containerWidth));
      position: relative;

    }
  }

  ////// Over
  &__over {
    ////mix-blend-mode: difference;
    transform-origin: 0 0;
    background: rgba(255, 255, 255, 1);
    top: 0;
    width: 100%;
    height: 100%;
    height: calc(100vh - 70px);
    left: 0;
    position: absolute;
    line-height: 0;
    overflow: visible;
    display: flex;
    flex-direction: column;
    padding: 0;
    justify-content: space-between;
    .overlay {

    }
    &::before {
      transform-origin: 0 0;
      content: '';
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(255, 255, 255, 1);
    }


    .arrowwrap {
      opacity: 0;
    }
    .wrapper {
      .wrapper__space {
        background: transparent;
      }
    }
  }
}
</style>