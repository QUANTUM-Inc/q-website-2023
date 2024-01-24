<template>
  <footer class='l-footer'>
    <div class='l-footer__inner'>
      <div class='hello'>say hello.</div>
      <div class='info'>
        <p v-if='!isEnglish'>address : 東京都港区赤坂5-3-1 赤坂Bizタワー 23F<br>
          tel: +81(0)3 6441 7203<br>
          e-mail : info@quantum.ne.jp<br>
          access : 東京メトロ千代田線「赤坂」駅より徒歩約1分<br>
          東京メトロ銀座線／丸ノ内線「赤坂見附」駅より徒歩約5分
        </p>
        <p v-if='isEnglish'>address : 23F Akasaka Biz Tower 5-3-1 Akasaka, Minato-ku, Tokyo<br>
          tel: +81(0)3 6441 7203<br>
          e-mail : info@quantum.ne.jp<br>
          access : 1 minute walk from Akasaka Station (Tokyo Metro Chiyoda Line)<br>
          5 minutes walk from Akasakamitsuke Station (Tokyo Metro Ginza Line and Marunouchi Line)
        </p>
      </div>

      <svg class='beafounder' viewBox="0 0 236 28.415" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="m147.121 1091.584a.143.143 0 0 0 .124-.071 4.133 4.133 0 0 1 .354-.528 4.27 4.27 0 0 1 .347-.359 7.945 7.945 0 0 0 4.729 1.392c6.254 0 8.483-5.37 8.483-10.4s-2.229-10.4-8.483-10.4a8.016 8.016 0 0 0 -4.536 1.263v-8.345a.144.144 0 0 0 -.144-.144h-4.282a.145.145 0 0 0 -.144.144v27.3a.144.144 0 0 0 .144.144zm5.554-16.343c2.768 0 4.421 2.386 4.421 6.382s-1.653 6.382-4.421 6.382-4.421-2.385-4.421-6.382 1.653-6.382 4.421-6.382z" transform="translate(-143.568 -1063.603)"/><path d="m833.1 1091.586a.144.144 0 0 0 .144-.144v-27.3a.145.145 0 0 0 -.144-.144h-4.282a.144.144 0 0 0 -.144.144v8.345a8.016 8.016 0 0 0 -4.536-1.263c-6.254 0-8.483 5.37-8.483 10.4s2.229 10.4 8.483 10.4a7.945 7.945 0 0 0 4.729-1.392 4.222 4.222 0 0 1 .347.359 4.156 4.156 0 0 1 .354.528.143.143 0 0 0 .124.071zm-4.542-9.962c0 4-1.652 6.382-4.421 6.382s-4.421-2.385-4.421-6.382 1.653-6.382 4.421-6.382 4.418 2.385 4.418 6.381z" transform="translate(-644.55 -1063.603)"/><path d="m733.706 1093.431a7.133 7.133 0 0 1 4.463-1.4 7.461 7.461 0 0 1 5.024 1.734 6.122 6.122 0 0 1 2.029 4.925v13.61a.144.144 0 0 1 -.144.144h-4.278a.144.144 0 0 1 -.144-.144v-12.308a4.325 4.325 0 0 0 -.966-2.955 3.4 3.4 0 0 0 -2.7-1.1 3.759 3.759 0 0 0 -2.837 1.1 4.077 4.077 0 0 0 -1.064 2.955v12.308a.144.144 0 0 1 -.144.144h-4.245a.144.144 0 0 1 -.144-.144v-19.848a.144.144 0 0 1 .144-.144h4.162a.144.144 0 0 1 .144.144v1.63a4.208 4.208 0 0 1 .7-.651z" transform="translate(-579.626 -1084.498)"/><path d="m649.571 1112.209a7.135 7.135 0 0 1 -4.463 1.4 7.461 7.461 0 0 1 -5.024-1.734 6.121 6.121 0 0 1 -2.029-4.925v-13.608a.144.144 0 0 1 .145-.144h4.282a.144.144 0 0 1 .144.144v12.308a4.325 4.325 0 0 0 .966 2.956 3.4 3.4 0 0 0 2.7 1.1 3.759 3.759 0 0 0 2.837-1.1 4.078 4.078 0 0 0 1.064-2.956v-12.308a.144.144 0 0 1 .144-.144h4.243a.144.144 0 0 1 .144.144v19.847a.144.144 0 0 1 -.144.144h-4.162a.144.144 0 0 1 -.144-.144v-1.63a4.225 4.225 0 0 1 -.703.65z" transform="translate(-512.167 -1085.364)"/><path d="m373.462 1095.268a6.872 6.872 0 0 0 -2.916-2.384 10.405 10.405 0 0 0 -4.374-.867 9.925 9.925 0 0 0 -5.694 1.537 5.571 5.571 0 0 0 -2.52 3.573 3.835 3.835 0 0 0 -.072.931.143.143 0 0 0 .144.135h4.326a.143.143 0 0 0 .134-.09 3.689 3.689 0 0 1 .264-.543 2.818 2.818 0 0 1 1.064-1.1 5.051 5.051 0 0 1 2.472-.5 3.856 3.856 0 0 1 2.719.847 3.105 3.105 0 0 1 .906 2.384v1a.144.144 0 0 1 -.144.145h-4.271a9.472 9.472 0 0 0 -6.049 1.714 5.78 5.78 0 0 0 -2.148 4.787 5.31 5.31 0 0 0 1.911 4.453 7.652 7.652 0 0 0 4.867 1.5 8.33 8.33 0 0 0 5.321-1.437 7.281 7.281 0 0 0 .7-.7v1.679a.144.144 0 0 0 .144.144h4.092a.144.144 0 0 0 .144-.144v-13.608a6.018 6.018 0 0 0 -1.02-3.456zm-3.547 10.265a3.116 3.116 0 0 1 -1.379 2.6 5.394 5.394 0 0 1 -3.31 1.025 3.883 3.883 0 0 1 -2.384-.69 2.287 2.287 0 0 1 -.926-1.95 2.53 2.53 0 0 1 1.2-2.246 5.944 5.944 0 0 1 3.29-.788h3.363a.144.144 0 0 1 .144.144z" transform="translate(-302.892 -1084.486)"/><path d="m494.716 1070.387v3.77a.144.144 0 0 1 -.144.144h-4.282a.144.144 0 0 0 -.144.144v15.828a.144.144 0 0 1 -.144.144h-4.282a.144.144 0 0 1 -.144-.144v-15.828a.144.144 0 0 0 -.144-.144h-2.825a.144.144 0 0 1 -.144-.144v-3.77a.145.145 0 0 1 .144-.144h2.825a.144.144 0 0 0 .144-.144v-.762a9.2 9.2 0 0 1 .778-3.96 5.024 5.024 0 0 1 2.389-2.182 8.7 8.7 0 0 1 4.044-.757h1.707a.144.144 0 0 1 .144.144v3.418a.145.145 0 0 1 -.144.145h-1.354a3.263 3.263 0 0 0 -2.344 1.067 3.514 3.514 0 0 0 -.65 2.443v.447a.144.144 0 0 0 .144.144h4.282a.144.144 0 0 1 .144.141z" transform="translate(-396.184 -1062.436)"/><path d="m241.44 1106.335a.142.142 0 0 0 -.127.079 4.226 4.226 0 0 1 -3.924 2.279c-2.56 0-4.48-1.95-4.829-4.747a.146.146 0 0 1 .145-.163h13.95a.145.145 0 0 0 .145-.129 14.209 14.209 0 0 0 .077-1.483c0-5.974-3.634-10.407-9.488-10.407s-9.488 4.433-9.488 10.407 3.634 10.408 9.488 10.408a8.782 8.782 0 0 0 8.761-6.055.146.146 0 0 0 -.139-.19zm-4.05-10.684a4.869 4.869 0 0 1 4.781 4.5.147.147 0 0 1 -.145.167h-9.27a.147.147 0 0 1 -.144-.169c.436-2.673 2.294-4.498 4.777-4.498z" transform="translate(-206.431 -1084.298)"/><path d="m919.395 1106.335a.141.141 0 0 0 -.126.079 4.227 4.227 0 0 1 -3.924 2.279c-2.559 0-4.48-1.95-4.829-4.747a.146.146 0 0 1 .145-.163h13.95a.145.145 0 0 0 .145-.129 14.243 14.243 0 0 0 .077-1.483c0-5.974-3.634-10.407-9.488-10.407s-9.488 4.433-9.488 10.407 3.634 10.408 9.488 10.408a8.783 8.783 0 0 0 8.761-6.055.146.146 0 0 0 -.139-.19zm-4.05-10.684a4.869 4.869 0 0 1 4.781 4.5.147.147 0 0 1 -.145.167h-9.27a.147.147 0 0 1 -.144-.169c.433-2.673 2.294-4.498 4.777-4.498z" transform="translate(-711.79 -1084.298)"/><path d="m554.017 1091.765c-5.854 0-9.488 4.433-9.488 10.407s3.634 10.408 9.488 10.408 9.488-4.433 9.488-10.408-3.633-10.407-9.488-10.407zm0 16.929c-3.069 0-4.974-2.777-4.974-6.521s1.905-6.521 4.974-6.521 4.974 2.778 4.974 6.521-1.905 6.521-4.974 6.521z" transform="translate(-442.451 -1084.298)"/><path d="m1008.345 1091.961a10.277 10.277 0 0 0 -1.067-.039 5.347 5.347 0 0 0 -1.995.391 7.216 7.216 0 0 0 -1.89 1.127 12.176 12.176 0 0 0 -1.6 1.622v-2.662a.144.144 0 0 0 -.144-.144h-4.282a.144.144 0 0 0 -.144.144v19.833a.144.144 0 0 0 .144.145h4.282a.144.144 0 0 0 .144-.145v-9.3a9.032 9.032 0 0 1 .45-2.862 6.655 6.655 0 0 1 1.122-2.15 4.467 4.467 0 0 1 1.654-1.192 5.484 5.484 0 0 1 2.95-.372c.219.026.669.094.913.132a.144.144 0 0 0 .165-.143v-4.115a.143.143 0 0 0 -.1-.138 4.161 4.161 0 0 0 -.602-.132z" transform="translate(-779.896 -1084.415)"/><circle cx="233.231" cy="25.324" r="2.768"/></g></svg>
      <div class='l-footer__linkwrap'>
        <div class='l-footer__sns'>
          <span class='pc'>&copy; {{year}} quantum</span>
          <sns-icon service='facebook' color='white'></sns-icon>
          <sns-icon service='twitter' color='white'></sns-icon>
          <sns-icon service='instagram' color='white'></sns-icon>
          <sns-icon service='note' color='white'></sns-icon>
          <sns-icon service='soundcloud' color='white'></sns-icon>
        </div>
        <div class='l-footer__links'>
          <a href="https://www.ask.quantum.ne.jp/" target="_blank" ref="noopener noreferrer"><span>business site</span></a>
          <lang-link :to="{name: 'careers', params: {lang}}"><span>careers</span></lang-link>
          <lang-link :to="{name: 'release', params: {lang}}" class='links-release'><span>press release</span></lang-link>
          <lang-link :to="{name: 'privacy', params: {lang}}"><span>privacy policy</span></lang-link>
          <lang-link :to="{name: 'qletter', params: {lang}}" class='links-qletter'><span>q letter</span></lang-link>
          <span class='sp copy'>&copy; {{year}} quantum</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SnsIcon from './SnsIcon';
export default {
  components: {
    SnsIcon,
  },
  computed: {
    meta() {
      return this.$store.state.meta;
    },
    year() {
      return new Date().getFullYear();
    }
  },

  mixins: {
    homeScrollTop: Function
  }
};
</script>

<style lang="scss" scoped>

.l-footer {
  background: $dark;
  position: relative;
  &__inner {
    max-width: $innerWidth + 80px;
    margin: 0 auto;
    padding: 90px percent(math.div(40px, $baseWidth)) 30px;
    @include mq_sp {
      max-width: none;
      padding: percentage(math.div(96px, $spWidth)) percentage(math.div(40px, $spWidth)) percentage(math.div(40px, $spWidth));
    }
  }
  .hello {
    color: #FFF;
    @include roboto-light;
    font-size: 45px;
    @include mq_sp {
      @include spfontsize(45px);
    }
  }
  .info {
    margin-top: percent(math.div(45px, $innerWidth));
    @include mq_sp {
      margin-top: percentage(math.div(35px, $spInner));
    }
    p {
      color: #FFF;
      @include noto-light;
      font-size: 16px;
      line-height: 1.8;
      letter-spacing: 0.06rem;
      @include mq_sp {
        @include spfontsize(14px);
        line-height: 2.4;
      }
    }
  }

  .beafounder {
    display: block;
    width: 236px;
    margin-top: percent(math.div(90px, $innerWidth));
    @include mq_sp {
      width: percentage(math.div(157px, $spInner));
      margin-top: percentage(math.div(25px, $spInner));
    }
  }

  &__linkwrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: percent(math.div(30px, $innerWidth));
    flex-direction: row-reverse;
    @include mq_sp {
      display: block;
      margin-top: percentage(math.div(40px, $spInner));
    }
  }
  &__links {
    display: flex;
    align-items: center;
    @include mq_sp {
      text-align: center;
      justify-content: center;
      flex-wrap: wrap;
      margin: percentage(math.div(45px, $spInner)) auto 0;
    }
    a {
      color: #FFF;
      @include roboto-light;
      font-size: 16px;
      padding: 0 30px;
      position: relative;
      border-right: #fff 1px solid;
      line-height: 1;
      &.links-qletter {
        border-right: none !important;
      }
      &.links-release {
        @include mq_sp {
          border-right: none;
        }
      }

      span {
        position: relative;
        display: inline-block;
        white-space: nowrap;
        &::after {
          @include ease-out-quint($animationTime);
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 1px;
          background: #FFF;
          content: '';
          transform-origin: 0 0;
          transform: scale(0, 1);
        }
      }
      @include mq_pc {
        &:hover {
          span {
            &::after {
              transform: scale(1, 1);
            }
          }
        }
      }

      @include mq_sp {
        @include spfontsize(10px);
        text-align: center;
        display: inline-block;
        margin: 0 0 percentage(math.div(15px, $spInner));
        padding: 0 percentage(math.div(15px, $spInner));
        letter-spacing: 0.02rem;
      }
      &:first-child {
        padding-left: 0;
        @include mq_sp {
          padding: 0 percentage(math.div(15px, $spInner));
        }
      }
      &:last-child {
        border-right: none;
      }
    }
    a {
      @include mq_pc {
        @include ease-out-quint($animationTime);
        &:hover {
          color: $bggray;
        }
      }
    }
  }

  .copy {
    color: #FFF;
    @include mq_sp {
      display: block;
      //border: $bred;
      text-align: center;
      line-height: 1;
      @include spfontsize(10px);
      @include roboto-light;
      @include antialiased;
      margin: 0 0 percentage(math.div(15px, $spInner));
      padding: 0 percentage(math.div(12px, $spInner));
      letter-spacing: 0.01rem;
    }
  }
  &__sns {
    display: flex;
    align-items: flex-end;
    line-height: 0;

    span {
      color: #FFF;
      @include roboto-light;
      font-size: 14px;
      display: inline-block;
      margin-right: 30px;
      line-height: 1.3;
    }
    >div {

    }
    ::v-deep a {
      display: block;
      width: 100%;
      @include ease-out-quint($animationTime);
      svg {
        width: 100%;
      }
      @include mq_pc {
        &:hover {
          opacity: 0.8;
        }
      }
    }

    .facebook {
      margin-right: 17px;
      width: 26px;
      @include mq_sp {
        width: percentage(math.div(20.7px, $spInner));
        margin-right: percentage(math.div(16px, $spInner));
      }
    }
    .twitter {
      margin-right: 18px;
      width: 32px;
      @include mq_sp {
        width: percentage(math.div(25.4px, $spInner));
        margin-right: percentage(math.div(16px, $spInner));
      }
    }
    .instagram {
      width: 26px;
      margin-right: 22px;
      @include mq_sp {
        width: percentage(math.div(20.7px, $spInner));
        margin-right: percentage(math.div(17px, $spInner));
      }
    }
    .note {
      width: 24px;
      margin-right: 18px;
      @include mq_sp {
        width: percentage(math.div(18.5px, $spInner));
        margin-right: percentage(math.div(15px, $spInner));
      }
    }
    .soundcloud {
      width: 38px;
      padding-bottom: 1px;
      align-items: center;
      @include mq_sp {
        width: percentage(math.div(38px, $spInner));
        padding-bottom: 2px;
      }
    }
  }
}
</style>
