<template>
  <nav class='navi' :class='{"open": naviOpened}'>
    <div class='navi__wrap'>
      <div class='navi__inner'>
        <div class='navi__menu'>
          <lang-link :to="{name: 'index', params: {lang}}"  @click.native='closeNavi()'>home</lang-link>
          <lang-link :to="{name: 'whoweare', params: {lang}}" @click.native='closeNavi()'>who we are</lang-link>
          <lang-link :to="{name: 'whatwedo', params: {lang}}" @click.native='closeNavi()'>what we do</lang-link>
          <lang-link :to="{name: 'projects', params: {lang}}" @click.native='closeNavi()'>projects</lang-link>
          <a href='https://note.com/quantum_studio/m/m4512a0eb7e07' target='_blank' @click='closeNavi()'>journal</a>
          <lang-link :to="{name: 'topics', params: {lang}}" @click.native='closeNavi()'>topics</lang-link>
          <lang-link :to="{name: 'careers', params: {lang}}" @click.native='closeNavi()'>careers</lang-link>
          <lang-link :to="{name: 'contact', params: {lang}}" @click.native='closeNavi()'>contact</lang-link>
        </div>
        <div class='navi__info'>
          <p class='navi__infotext' v-if='!isEnglish'>
            address : 東京都港区赤坂5-3-1 赤坂Bizタワー 23F<br>
            tel: +81(0)3 6441 7203<br>
            e-mail : info@quantum.ne.jp<br>
            access : 東京メトロ千代田線「赤坂」駅より徒歩約1分<br>
            東京メトロ銀座線／丸ノ内線「赤坂見附」駅より徒歩約5分</p>
          <p class='navi__infotext' v-if='isEnglish'>address : 23F Akasaka Biz Tower 5-3-1 Akasaka, Minato-ku, Tokyo<br>
            tel: +81(0)3 6441 7203<br>
            e-mail : info@quantum.ne.jp<br>
            access : 1 minute walk from Akasaka Station (Tokyo Metro Chiyoda Line)<br>
            5 minutes walk from Akasakamitsuke Station (Tokyo Metro Ginza Line and Marunouchi Line）
          </p>
          <div class='navi__sns'>
            <sns-icon color='black' service='facebook' class='navi__fb'></sns-icon>
            <sns-icon color='black' service='twitter' class='navi__tw'></sns-icon>
            <sns-icon color='black' service='instagram' class='navi__ig'></sns-icon>
            <sns-icon color='black' service='note' class='navi__note'></sns-icon>
            <sns-icon service='soundcloud' color='black' class='navi__soundcloud'></sns-icon>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import SnsIcon from './SnsIcon';
export default {
  name: 'TheNavi.vue',
  components: {
    SnsIcon,
  },
  computed: {
    naviOpened() {
      return this.$store.state.app.status.naviOpened;
    }
  },
  methods: {
    closeNavi() {
      this.$store.dispatch('app/closeNavi')
    }
  }
};
</script>

<style lang='scss' scoped>
.navi {
  position: fixed;
  //background: rgba(35, 55, 55, 0.2);
  background: rgba(255, 255, 255, 0);
  clip-path: inset(0% 0% 100% 0%);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  //transform: translate(0, -100%);
  opacity: 0;
  //@include ease-out-quint(600, 400, transform);
  //@include ease-out-quint(600, 100, clip-path);
  transition: clip-path 600ms cubic-bezier(0.230, 1.000, 0.320, 1.000) 100ms, opacity 0ms cubic-bezier(1.0, 1.000, 1.0, 1.000) 300ms;
  z-index: 90;
  @include mq_sp {

  }
  //::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translate(0, -100%);
  }
  /*&::before {
    background: rgba(255, 255, 255, 0.2);
    @include ease-out-quint(600, 200);
    z-index: 1;
  }*/
  &::after {
    background: rgba(255, 255, 255, 1);
    @include ease-out-quint(400, 0);
    z-index: 20;
  }

  &__wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: auto;
    ///transform: translate(0, -100%);
  }
  // Inner
  &__inner {
    position: relative;
    max-width: $innerWidth;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: row-reverse;
    padding: 0 40px;
    margin: 180px auto 1px;
    //padding-bottom: 120px;
    @include mq_sp {
      position: absolute;
      z-index: 30;
      width: percentage(math.div($spInner, $spWidth));
      top: 53%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      margin: 0 auto 0;
      padding-left: 0;
      padding-right: 0;
      padding-bottom: percentage(math.div(0px, $spWidth));
    }
  }

  // Menu
  &__menu {
    position: relative;
    z-index: 40;
    margin-left: 50px;
    width: percentage(math.div(430px, $innerWidth));
    @include mq_sp {
      width: 100%;
      margin: 0 auto percentage(math.div(80px, $spWidth));
    }
    a {
      cursor: pointer;
      display: block;
      //@include fontsize(45px);
      font-size: 45px;
      line-height: 1.7;
      @include roboto-light;
      @include mq_sp {
        margin-bottom: percentage(math.div(15px, $spInner));
        @include spfontsize(35px);
        line-height: 1.3;
      }
      @include mq_pc {
        @include ease-out-cubic($animationTime);
        &:hover {
          opacity: 0.6;
        }
      }
      @media all and (min-width: 431px) and (max-width: 768px) {
        font-size: 45px !important;
        line-height: 1.7 !important;
        margin-bottom: 0 !important;
      }

    }
  }

  // Info
  &__info {
    margin-top: 26px;//percentage(34px / $innerWidth);
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 30;
    width: percentage(math.div(500px, $innerWidth));
    padding-bottom: 26px;
    @include mq_sp {
      width: 100%;
      margin: 0 auto;
      padding-bottom: percentage(math.div(5px, $spWidth));
    }
  }

  &__infotext {
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 65px;
    @include noto-light;
    @include mq_sp {
      display: none;
    }
  }



  // SNS
  &__sns {
    display: flex;
    .sns-icon {
      display: block;
      @include mq_pc {
        @include ease-out-cubic($animationTime);
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }

  &__fb {
    width: 26px;
    margin-right: 20px;
    @include mq_sp {
      width: percentage(math.div(20px, $spInner));
      margin-right: percentage(math.div(16px, $spInner));
    }
  }
  &__tw {
    width: 32px;
    margin-right: 20px;
    @include mq_sp {
      width: percentage(math.div(26px, $spInner));
      margin-right: percentage(math.div(16px, $spInner));
    }
  }
  &__ig {
    width: 26px;
    margin-right: 21px;
    @include mq_sp {
      width: percentage(math.div(20px, $spInner));
      margin-right: percentage(math.div(17px, $spInner));
    }
  }
  &__note {
    width: 24px;
    margin-right: 18px;
    @include mq_sp {
      width: percentage(math.div(18px, $spInner));
      margin-right: percentage(math.div(15px, $spInner));
    }
  }

  &__soundcloud {
    width: 38px;
    align-items: center;
    padding-top: 2px;
    @include mq_sp {
      width: percentage(math.div(38px, $spInner));
    }
  }

  // Navi Open
  &.open {
    pointer-events: all;
    clip-path: inset(0 0 0 0);
    background: rgba(255, 255, 255, 0.6);
    transform: translate(0, 0);
    opacity: 1;
    @include ease-out-quint(400, 0);
    //&::before,
    &::after {
      transform: translate(0, 0%);
    }
    /*&::before {
      @include ease-out-quint(600, 150);
    }*/
    &::after {
      @include ease-out-quint(500, 100);
    }
  }


}
</style>