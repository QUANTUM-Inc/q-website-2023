<template>
  <section class='l-section factsheet'>
    <div class='l-section__inner js-lazyclass'>
      <h2>fact sheet</h2>
      <p class='l-section__body' v-if='!isEnglish'>quantumの最新のポートフォリオをダウンロードしていただけます。<br>より詳細なクレデンシャルをご希望の方は、contactからお声がけください。</p>
      <p class='l-section__body' v-if='isEnglish'>You can download quantum's latest portfolio.<br>
        If you would like a more detailed credential, please contact us.</p>

      <div class='factsheet__set'>
        <div class='factsheet__buttons'>
          <lang-link :to="{name: 'factsheet', params: {lang: 'ja'}}" class='ja' :class='{disabled: !isEnglish, "active": isEnglish}'>japanese</lang-link>
          <lang-link :to="{name: 'factsheet', params: {lang: 'en'}}" class='en' :class='{disabled: isEnglish, "active": !isEnglish}'>english</lang-link>

        </div>

<!--        <div class='sheet'>
          <img :src='currentSheet.acf.thumb' alt=''>
        </div>-->
        <form method='get' :action='currentSheet.acf.pdf'>
          <button class='download-button' type='submit' formtarget='_blank'>download</button>

        </form>
      </div>

    </div>
    <contact-link background='gray'></contact-link>
  </section>
</template>

<script>
import Init from '../../javascripts/init';
import _find from 'lodash/find'
import ContactLink from '../../components/partial/ContactLink';
export default {
  name: 'index.vue',
  scrollToTop: true,
  components: {
    ContactLink
  },
  async asyncData({ app, store, params }) {

    let {data} = await app.$axios.get(store.getters.apiPath({
      type: 'factsheet',
      lang: store.state.lang
    }));

    return {
      factsheets: data,
    };
  },
  head() {
    return {
      title: `${this.$store.state.meta.name}factsheet`,
      meta: [{hid: 'description',
        name: 'description',
        content: this.isEnglish ? 'quantum is a startup studio that creates new products and services in all areas of business development, from conception to implementation.' : 'quantumは、発想から実装まで、事業開発の全てを活動領域とし、新しいプロダクトやサービスを創り出すスタートアップスタジオです。' },
        this.keywords
      ]
    };
  },

  mounted() {
    Init.setup(this.$store)
  },
  computed: {
    currentSheet() {
      return _find(this.factsheets, (sheet, index) => {
        return index === 0;
      })
    }
  },
  methods: {
    switchLang(lang) {

    }
  }
};
</script>

<style lang='scss' scoped>
.factsheet {
  padding-top: 140px;
  @include mq_sp {
    padding-top: percentage(math.div(140px, $spWidth));
  }
  h2 {
    margin-bottom: 80px;
    @include mq_sp {
      @include spfontsize(30px);
      margin-bottom: percentage(math.div(40px, $spInner));
    }
  }

  .l-section__body {
    @include noto-light;
  }
  &__set {
    padding-bottom: 90px;
    @include mq_sp {
      padding-bottom: percentage(math.div(60px, $spInner));
    }
    img {
      width: percentage(math.div(740px, $innerWidth));
      @include mq_sp {
        width: 100%;
      }

    }
  }
  &__buttons {
    display: flex;
    align-items: center;
    margin: percentage(math.div(50px, $innerWidth)) 0;
    @include mq_sp {
      margin: percentage(math.div(30px, $spInner)) 0;
    }
    a {
      @include noto-light;
      font-size: 20px;
      display: inline-block;
      margin-right: 20px;
      opacity: 0.5;
      padding-bottom: 5px;
      position: relative;
      @include mq_sp {
        @include spfontsize(14px);
        margin-right: percentage(math.div(10px, $spInner));
        padding-bottom: percentage(math.div(5px, $spInner));
      }
      &.active {
        opacity: 1;
        &::after {
          transform-origin: 0 0;
          transform: scaleX(0);
        }
      }
      @include mq_pc {
        &:hover {
          &::after {
            transform: scaleX(1);
          }
        }
      }

      &::after {
        position: absolute;
        content: '';
        width: 100%;
        bottom: 0;
        left: 0;
        height: 1px;
        background: #000;
        transform: scaleX(0);
        @include ease-out-quint($animationTime);
      }
    }
  }

  .download-button {
    margin-top: 55px;
    border: none;
    background: $bggray;
    width: 270px;
    @include mq_sp {
      margin-top: percentage(math.div(50px, $spInner));
      width: 100%;
    }
    @include ease-out-quint($animationTime);
    @include mq_pc {
      &:hover {
        color: #FFF;
        background: #000;
      }
    }
  }


}
</style>