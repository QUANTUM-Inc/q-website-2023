<template>
  <section class='l-section newslist'>
    <div class='l-section__inner js-lazyclass'>
      <h2 class='type-center'>news</h2>
<!--      <p class='l-section__note'>English version coming soon</p>-->
      <div class='news-wrap'>
        <div class='news' v-for='news in newsList'>
          <div class='news__date'>{{news.acf.news_date}}</div>
          <div class='news__title'>
            <a v-if='news.acf.url' :href='news.acf.url' :target='news.acf.blank ? "_blank" : "_self"'>{{news.title.rendered}}</a>
            <p v-else>{{news.title.rendered}}</p>
          </div>
        </div>

      </div>


      <nuxt-link to='/release/' class='l-section__textlink load-more' v-if='!isList'>load more</nuxt-link>


    </div>


  </section>
</template>

<script>
export default {
  name: 'News.vue',
  props: {
    newsList: {
      type: Array,
      default: []
    },
    isList: {
      type: Boolean,
      default: false
    }

  }
};
</script>

<style lang='scss' scoped>
.newslist {
  background: $bggray;
  padding: 85px 0;
  text-align: center;
  @include mq_sp {
    padding: percentage(math.div(70px, $spWidth)) 0;
  }
  h2 {
    line-height: 1.2;
    text-align: center;

  }


  .news-wrap {
    margin-top: percentage(math.div(65px, $innerWidth));
    @include lazyappear();
    @include mq_sp {
      margin-top: percentage(math.div(20px, $spInner));
    }
  }

  .appear {
    .news-wrap {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  .news {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding-bottom: percentage(math.div(20px, $innerWidth));
    @include mq_sp {
      padding: percentage(math.div(24px, $spInner)) 0;
    }
    &__date {
      font-size: 16px;
      width: percentage(math.div(100px, $innerWidth));
      white-space: nowrap;
      @include noto-light;
      @include antialiased;
      text-align: left;
      line-height: 1.6;
      @include mq_sp {
        width: percentage(math.div(90px, $spInner));
        padding: 0;
        line-height: 1.8;
        @include spfontsize(10px);
        @include noto-light;
      }
    }
    &__title {
      width: percentage(math.div(850px, $innerWidth));
      flex-grow: 1;
      text-align: left;
      padding: 0 percentage(math.div(15px, $innerWidth)) 0 percentage(math.div(80px, $innerWidth));
      @include mq_sp {
        padding: 0 0 0 percentage(math.div(20px, $spInner));
      }
      a,
      p {
        @include noto-light;
        display: block;
        font-size: 16px;
        line-height: 1.6;
        color: #000;
        @include mq_sp {
          line-height: 1.6;
          @include spfontsize(10px);

        }
      }

      a {
        @include textdecoration-line;
      }
    }
  }

}
</style>