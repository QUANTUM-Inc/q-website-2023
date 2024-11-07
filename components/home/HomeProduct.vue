<template>
  <section class='l-section product' :class='color' ref='productarea' :style='"z-index:" + this.zindex'>
    <div class='l-section__background' ref='imagearea'>
      <picture>
        <source media="(max-width: 768px)" :srcset="srcsp">
        <img :src='src' alt='' ref='image'>
      </picture>
      <span class='overlay' ref='overlay'></span>
    </div>
    <div class='l-section__inner'>
      <p v-if='featured' class='featured'>
        <span ref='feature'>featured work</span>
      </p>
      <div class='linkarea' v-on:click='linkto()'></div>
      <div class='product__info' ref='infoarea'>
        <p class='product__name' v-html='productName' v-if='!isEnglish'></p>
        <p class='product__name' v-html='productNameEn' v-if='isEnglish'></p>
        <p class='product__tags'>{{tags}}</p>
        <template v-if='!isEnglish'>
          <p class='product__body pc pre-line' v-html='outline'></p>
          <p class='product__body sp pre-line' v-html='outlineSp ? outlineSp : outline'></p>
        </template>
        <template v-else>
          <p class='product__body pc pre-line' v-html='outlineEn'></p>
          <p class='product__body sp pre-line' v-html='outlineEnSp ? outlineEnSp : outlineEn'></p>
        </template>
      </div>
      <div class='product__linkarea' ref='linkarea'>
        <a @click="linkto()" target="_blank" v-if="type == 'external'">go to site→</a>
        <nuxt-link to='/projects' v-else>view all projects→</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import {gsap, Cubic, Quint} from 'gsap'
export default {
  name: 'HomeProduct.vue',
  props: {
    color: {
      type: String,
      default: 'white'
    },
    src: {
      type: String
    },
    srcsp: {
      type: String
    },
    productName: {
      type: String
    },
    productNameEn: {
      type: String
    },
    tags: {
      type: String
    },
    link: {
      type: String,
      default: ''
    },
    linkEn: {
      type: String,
      default: ''
    },
    outline: {
      type: String
    },
    outlineEn: {
      type: String
    },
    outlineSp: {
      type: String
    },
    outlineEnSp: {
      type: String
    },
    featured: {
      type: Boolean,
      default: false
    },
    zindex: {
      type: String,
      default: '1'
    },
    type: {
      type: String,
      default: ''
    }
  },
  mounted() {
    setTimeout(() => {
      this.setup()
    }, 100)
    window.addEventListener('resize', this.refreshScrollTriger())
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.refreshScrollTriger())
  },
  methods: {
    linkto() {
      let link = ''
      if (this.$store.state.lang === this.$store.state.defaultLang) {
        link = this.link
      } else {
        link = this.linkEn
      }

      if (this.type == 'external') {
        window.open(link, '_blank')
      } else {
        location.href = link
      }
    },
    setup() {
      let bgArea = this.$refs.imagearea;
      let feature = this.$refs.feature;
      let infoarea = this.$refs.infoarea;
      let linkarea = this.$refs.linkarea;

      gsap.fromTo(this.$refs.image, {
        scale: 1.8,
        y: '-90%'
      }, {
        scale: 1,
        y: '-100%',
        //y: '0',
        //ease: Cubic.easeIn,
        scrollTrigger: {
          trigger: this.$refs.productarea,
          start: 'top 100%',
          end: 'top 0%',
          scrub: true,
          pin: this.$refs.imagearea
        }
      });

      gsap.fromTo(this.$refs.overlay, {
        opacity: 1,
        //y: '30%'
      }, {
        opacity: 0,
        //y: 0,
        scrollTrigger: {
          trigger: this.$refs.productarea,
          start: 'top 100%',
          end: 'bottom 80%',
          scrub: 0.2,
        }
      });

      gsap.fromTo(infoarea, {
        x: '-100',
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: Cubic.easeOut,
        scrollTrigger: {
          trigger: this.$refs.productarea,
          start: 'top 50%',
          end: 'top 30%',
          once: false,
          scrub: 0.8
        }
      })
      gsap.fromTo(linkarea, {
        x: '-100',
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: Cubic.easeOut,
        scrollTrigger: {
          trigger: this.$refs.productarea,
          start: 'top 40%',
          end: 'top 20%',
          once: false,
          scrub: 0.8
        }
      })


      if (feature) {
        gsap.fromTo(feature, {
          y: '104%'
        }, {
          y: 0,
          duration: 0.6,
          ease: Cubic.easeOut,
          scrollTrigger: {
            trigger: this.$refs.productarea,
            start: 'top 30%',
            end: 'top 10%',
            once: false,
            scrub: 0.8
          }
        })
      }
    },
    refreshScrollTriger() {
      gsap.delayedCall(0.1, ScrollTrigger.refresh)
    }
  }
};
</script>

<style lang='scss' scoped>
.product {
  height: 528px;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.featured {
  position: absolute;
  @include roboto-light;
  @include fontsize(45px);
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  line-height: 0.8;
  @include mq_sp {
    @include spfontsize(45px);
    white-space: nowrap;
  }
  span {
    display: block;
  }
}

// Back
.l-section__background {
  //position: fixed;
  position: absolute;

  line-height: 0;
  top: 0;
  height: 100%;
  transform-origin: 50% 0%;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    width: 100%;
    height: 100%;
    background: rgba(20, 123, 230, 0.4);
  }
  img {
    width: 100%;
    height: 100%;
    transform-origin: 50% 0%;
    object-fit: cover;
    object-position: center;
    will-change: transform;
  }
  &.appear {
    display: block;
  }
}

// Inner
.l-section__inner {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  height: 100%;
  @include mq_sp {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .linkarea {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0;
    will-change: opacity;
  }
}

.product__info {
  //////mix-blend-mode: difference;//////////
  padding-top: percent(math.div(90px, $innerWidth));
  padding-bottom: percent(math.div(30px, $innerWidth));
  line-height: 1.4;
  padding-right: percentage(math.div(100px, $innerWidth));
  @include mq_sp {
    padding-right: 0;
    line-height: 1.6;
    letter-spacing: 0.02rem;
    padding-top: percent(math.div(55px, $spInner));
    padding-bottom: percentage(math.div(26px, $spInner));
  }
}
.product__linkarea {
  //padding-bottom: percent(30px / $innerWidth);
  white-space: nowrap;
  @include subpixel;
 /* @include mq_sp {
    padding-bottom: percentage(23px / $spInner);
  }*/
  a {
    position: relative;
    @include roboto-light;
    font-size: 20px;
    &::after {
      content: '';
      position: absolute;
      transform-origin: 0 0;
      width: 100%;
      height: 1px;
      left: 0;
      bottom: -1px;
      transform: scale(0, 1);
      @include ease-out-quint($animationTime);
    }
    @include mq_pc {
      &:hover {
        &::after {
          transform: scale(1, 1);
        }
      }
    }
    @include mq_sp {
      @include spfontsize(14px);
    }
  }
}

.product__name {
  @include roboto-light;
  font-size: 25px;
  @include mq_sp {
    @include spfontsize(18px);
  }
}
.product__tags {
  @include roboto-light;
  font-size: 20px;
  @include mq_sp {
    @include spfontsize(14px);
  }
}
.product__body {
  @include noto-light;
  margin-top: 5px;
  font-size: 20px;
  @include mq_sp {
    margin-top: percentage(math.div(5px, $spWidth));
    @include spfontsize(14px);
  }
}

.white {
  .product__info {
    mix-blend-mode: difference;//////////
  }
  a,
  p {
    color: #FFF;
  }
  a {
    &::after {
      background: #FFF;
    }
  }
}
.white-nomix {
  a,
  p {
    color: #FFF;
  }
  a {
    &::after {
      background: #FFF;
    }
  }
}

.black {
  a,
  p {
     color: #000; ///difference不採用ならこちら
    ////color: #FFF;
  }
  a {
    &::after {
      background: #000;
    }
  }
}
</style>