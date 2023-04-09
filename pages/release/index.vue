<template>
  <section class='l-section news'>
    <div class='l-section__inner js-lazyclass'>
      <h2 class='type-center'>press release / news</h2>
      <p class='l-section__note'>
        <span v-if='isEnglish'>English version coming soon</span>
      </p>
      <div class='news__tags'>
        <a v-on:click.prevent='filterYear(1)' :class='{active: selectedYear === 1}'>all</a>
        <a v-for='year in years' v-on:click.prevent='filterYear(year)' :class='{active: selectedYear === year}'>{{year}}</a>
      </div>

      <div class='news__set' v-for='news in newslist'>
        <div class='news__info'>
          <p class='news__date'>{{news.acf.news_date}}</p>
          <p class='news__tag'>{{newsCategories(news.news_category)}}</p>
        </div>
        <a class='news__body' v-if='news.acf.url' :href='news.acf.url' :target='news.acf.blank ? "_blank" : "_self"'>{{news.title.rendered}}</a>
        <p class='news__body' v-else>{{news.title.rendered}}</p>
      </div>

<!--
      <a href='#' class='more'>more</a>
-->

    </div>
    <contact-link background='gray'></contact-link>
  </section>
</template>

<script>
import Init from '../../javascripts/init';
import ContactLink from '../../components/partial/ContactLink';
import News from '../../components/home/News';
import _each from 'lodash/each';
import _filter from 'lodash/filter'
export default {
  name: 'index.vue',
  scrollToTop: true,
  components: {
    ContactLink,
    News
  },
  data () {
    return {
      endYear: 2019
    }
  },
  head() {
    return {
      title: `${this.$store.state.meta.name}release`,
      meta: [{hid: 'description',
        name: 'description',
        content: this.isEnglish ? 'Press releases and announcements from Startup Studio quantum.' : 'スタートアップスタジオquantumからのプレスリリースやお知らせ' },
        this.keywords]
    };
  },
  mounted() {
    Init.setup(this.$store)
  },

  async asyncData({ app, store, params }) {
    if (!store.state.news) {
      let news = await app.$axios.get(store.getters.apiPath({
        type: 'news',
        size: 5000,
        //lang: store.state.lang
      }));
      store.commit('setNews', news.data);
    }

    if (!store.state.newsCategories) {
      let newsCategories = await app.$axios.get(store.getters.apiPath({
        type: 'newscategory'
      }));
      store.commit('setNewsCategory', newsCategories.data);
    }
  },
  computed: {
    newslist: function() {
      if (this.selectedYear === 1) {
        return this.$store.state.newsList
      }
      let result = _filter(this.$store.state.newsList, (news, index) => {
        if (typeof this.selectedYear === 'string' && this.selectedYear.search(2019) !== -1) {
          let date = new Date(news.acf.news_date);
          if (date.getFullYear() - this.endYear <= 0) {
            return true
          }
          return false;
        } else {
          return news.acf.news_date.search(this.selectedYear) !== -1
        }
      })
      return result
    },
    //2017~現在の年までのリストを作成
    years: function() {
      let result = []
      let currentYear = new Date().getFullYear();
      let diff = currentYear - this.endYear
      for(let i = 0; i < diff; ++i) {
        result.push(currentYear - i)
      }
      result.push('- ' + this.endYear)
      return result
    },
    selectedYear: function() {
      return this.$store.state.selectedYear;
    }
  },
  methods: {
    newsCategoryFromId: function(categoryId) {
      return this.$store.getters.getNewsCategoryFromId(categoryId);
    },

    filterYear: function(year) {
      this.$store.commit('setSelectedYear', {
        year: year
      })
    },

    newsCategories: function(categories) {
      let result = '';
      let length = categories.length
      _each(categories, (categoryId, index) => {
        let _category = this.newsCategoryFromId(categoryId)
        if (_category) {
          if (index !== length - 1) {
            result += _category.name + ' / ';
          } else {
            result += _category.name;
          }
        }
      })
      return result
    }
  }
};
</script>

<style lang='scss' scoped>
.news {
  padding-top: 140px;
  @include mq_sp {
    padding-top: percentage(math.div(140px, $spWidth));
  }
  .l-section__inner {
    padding-bottom: percentage(math.div(90px, $baseWidth));
    @include mq_sp {
      padding-bottom: percentage(math.div(60px, $spWidth));
    }
  }
  h2 {

  }
  .l-section__note {
    margin-bottom: 80px;
    text-align: center;
    line-height: 1.4;
    @include mq_sp {
      @include spfontsize(20px);
      margin-bottom: percentage(math.div(40px, $spInner));
    }
  }

  &__tags {
    display: flex;
    border-bottom: #000 1px solid;
    padding-bottom: percentage(math.div(60px, $innerWidth));
    margin-bottom: percentage(math.div(60px, $innerWidth));
    @include mq_sp {
      padding-bottom: percentage(math.div(20px, $spInner));
      margin-bottom: percentage(math.div(20px, $spInner));
    }
    a {
      display: inline-block;
      margin-right: 20px;
      @include roboto-light;
      font-size: 20px;
      @include textborderlink;
      @include mq_sp {
        @include spfontsize(12px);
        margin-right: percentage(math.div(10px, $spInner));
      }
      &.active {
        &::after {
          transform: scale(1, 1);
        }
      }
    }
  }

  &__set {
    border-bottom: #000 1px solid;
    padding-bottom: percentage(math.div(60px, $innerWidth));
    margin-bottom: percentage(math.div(60px, $innerWidth));
    @include mq_sp {
      padding-bottom: percentage(math.div(20px, $spInner));
      margin-bottom: percentage(math.div(20px, $spInner));
    }
  }
  &__info {
    display: flex;
  }
  &__date {
    @include noto-light;
    font-size: 20px;
    margin-right: 20px;
    @include mq_sp {
      margin-right: percentage(math.div(15px, $spInner));
      @include spfontsize(12px);
    }
  }
  &__tag {
    @include noto-light;
    font-size: 20px;
    @include mq_sp {
      @include spfontsize(12px);
    }
  }
  &__body {
    display: inline-block;
    margin-top: 30px;
    @include noto-light;
    font-size: 16px;
    line-height: 1.5;
    @include mq_sp {
      @include spfontsize(14px);
      margin-top: percentage(math.div(20px, $spInner));
    }

    //@include ease-out-quint($animationTime);
    &::after {
      position: absolute;
      content: '';
      width: 100%;
      bottom: 0;
      height: 1px;
      background: $gray;
      left: 0;
      transform-origin: 0 0;
      @include ease-out-quint($animationTime);
      transform: scale(0, 1);
    }
    /*@include mq_pc {
      &:hover {
        color: $gray;
        &::after {
          transform: scale(1, 1);
        }
      }
    }*/
    @include textdecoration-line;
  }
  a {

  }

}
</style>