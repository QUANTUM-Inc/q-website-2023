<template>
  <header class='header' :class='{"open": naviOpened, "scrolled": scrolled, "up": isUp}' ref='header'>
    <div class='header__inner'>
      <h1 @click='homeScrollTop()' :class='{"home": isHome}'>
        <Logo color='black'></Logo>
      </h1>
      <div class='header__buttons'>
        <div class='header__langs'>
          <a href='#' v-on:click.prevent='changeLang("ja")' :class='{active: !isEnglish}'>jp</a>
          <a href='#' v-on:click.prevent='changeLang("en")' :class='{active: isEnglish}'>en</a>
        </div>
        <div class='header__navibutton' @click='toggleNavi()'><i></i></div>
      </div>
    </div>
  </header>
</template>
<script>

import Logo from './Logo';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
export default {
  components: {
    Logo
  },

  data() {
    return {
      isUp: true
    }
  },

  computed: {
    meta() {
      return this.$store.state.meta;
    },
    naviOpened() {
      return this.$store.state.app.status.naviOpened;
    },
    isHome() {
      //console.log(this.$route.name)
      //console.log(this.$route.path)
      return this.$route.path === '/' || this.$route.path === '/en'
    },
    scrolled() {
      return this.$store.state.app.status.isScrolled;
    }
  },

  mixins: {
    homeScrollTop: Function
  },
  mounted() {
    window.addEventListener('scroll', (event) => {
      let prev = this.$store.state.app.status.prevScroll;
      let scrolled = window.pageYOffset;
      this.isUp = (prev - scrolled >= 0);
      /*console.log('prev: ' + prev)
      console.log('scrolled: ' + scrolled)
      console.log('------')*/
      if (prev <= 0 && scrolled <= 0) {
        this.isUp = true;
      }
      if (scrolled >= window.innerHeight - 20) {
        this.$store.dispatch('app/scrolled', {scrolled: true});
      } else {
        this.$store.dispatch('app/scrolled', {scrolled: false})
      }

      this.$store.dispatch('app/scroll', {
        scroll: scrolled
      })
    })
  },
  methods: {
    toggleNavi() {
      this.$store.dispatch('app/toggleNavi')
    },
    changeLang(lang) {
      this.$store.commit('lang', {lang})
      //記事詳細は記事側で対象言語のslugに遷移させる
      if (this.$route.name.search('projects-project') !== -1) {
        this.$store.commit('swapProjectLang')
        return;
      }
      let to;
      if (lang !== this.$store.state.defaultLang) {
        to = {
          name: 'lang-' + this.$route.name.replace(/lang\-/img, ''),
          params: {lang}
        }
      } else {
        to = {
          name: this.$route.name.replace(/lang\-/img, ''),
          params: {lang}
        }
      }
      this.$router.push(to)
      //let name = this.$route.name;

    }
  }
};
</script>

<style lang="scss" scoped>

.header {
  font-family: 'Roboto', sans-serif;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  /////mix-blend-mode: difference;
  /////background-blend-mode: difference;
  pointer-events: none;
  transform: translate(0, -100%);
  @include ease-out-cubic(600, 0, transform);
  @include mq_sp {
    background: transparent;
  }


  h1 {
    width: 100px;
    line-height: 0;
    pointer-events: all;
    &.home {
      opacity: 0;
      @include ease-out-cubic(800);
    }
    @include mq_sp {
      width: percentage(math.div(100px, $spWidth));
    }
  }

  &__inner {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    margin: 0 auto;
    padding: 50px 32px;
    z-index: 30;
    transition: padding-top 0.5s, padding-bottom 0.5s;
    @include mq_sp {
      height: auto;
      padding: percentage(math.div(25px, $spWidth)) percentage(math.div(45px, $spWidth)) percentage(math.div(20px, $spWidth));
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include mq_sp {
      width: percentage(math.div(105px, $spInner));
    }
  }
  &__langs {
    margin-right: 45px;
    white-space: nowrap;
    @include mq_sp {
      margin-right: percentage(math.div(0px, 105px));
    }
    a {
      @include roboto-light;
      font-size: 18px;
      margin-left: 10px;
      position: relative;
      display: inline-block;
      pointer-events: all;
      /////color: #FFFFFF;
      color: #000000;
      padding-bottom: 3px;
      &::after {
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        /////background: #fff;
        background: #000;
        transform: scale(0, 1);
        @include ease-out-cubic($animationTime);
      }
      @include mq_pc {
        &:hover {
          &::after {
            transform: scale(1);
          }
        }
      }
      @include mq_sp {
        @include spfontsize(18px);
        margin-left: 5px;
      }
      &.active {
        pointer-events: none;
        &::after {
          transform: scale(1);
        }
      }
    }
  }

  &__navibutton {
    width: 40px;
    height: 0;
    padding-top: 30px;
    position: relative;
    cursor: pointer;
    pointer-events: all;
    @include unselectable;
    @include mq_sp {
      width: percentage(math.div(35px, 105px));
      padding-top: percentage(math.div(13px, 105px));
    }
    &::after,
    &::before,
    i {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      /////background: #FFF;
      background: #000;
      top: 50%;
      bottom: 0;
      left: 0;
      transform: translate(0, -500%);
      @include ease-out-quint($animationTime);
      @include mq_sp {
        transform: translate(0, -300%);
      }
    }
    i {
      transform: translate(0, -50%);
      @include mq_sp {
        transform: translate(0, 0%);
      }
    }
    &::after {
      transform: translate(0, 400%);
      @include mq_sp {
        transform: translate(0, 300%);
      }
    }
  }

  // Navi Open
  &.open {
    transform: translate(0, 0);
    .header__navibutton {
      &::after {
        transform: translate(0, -50%) rotate(-315deg);
      }
      &::before {
        transform: translate(0, -50%) rotate(-45deg);
      }
      i {
        opacity: 0;
      }
    }
  }

  &.up {
    transform: translate(0, 0);
    @include ease-out-cubic(300, 0, transform);
  }

  &.scrolled {
    .home {
      transform: translate(0, 0);
      opacity: 1;
    }
    @include mq_sp {
      .header__langs {
        a {
          color: #000;
          &::after {
            background: #000;
          }
        }
      }
      .header__navibutton {
        &::before,
        &::after {
          background: #000;
        }
      }
    }
  }
}
</style>
