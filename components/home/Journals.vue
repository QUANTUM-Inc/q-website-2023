<template>
  <section class='l-section journals'>
    <div class='l-section__inner js-lazyclass'>
      <h2 class='type-center'>latest journal</h2>
      <div class='journal-wrap'>
        <!-- for 4つまで -->
        <div class='journal' v-for='journal in journals'>
          <div class='journal__date'>{{journal.acf.journal_date}}</div>
          <div class='journal__body'>
            <div class='journal__title'>
              <a :href='journal.acf.url' target='_blank' v-html='journal.title.rendered'></a>
            </div>
          </div>
<!-- rss version         <div class='journal__date'>{{journal.updateDate}}</div>
          <div class='journal__body'>
            <div class='journal__title'>
              <a :href='journal.link' target='_blank' v-html='journal.title'></a>
            </div>
          </div>-->

        </div>

      </div>
      <a href='https://note.com/quantum_studio/m/m4512a0eb7e07' target='_blank' class='l-section__textlink load-more'>read more</a>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Journals.vue',
  props: {
    journals: {
      type: Array,
      default: []
    },
  }
};
</script>

<style lang='scss' scoped>
.journals {
  background: $bggray;
  padding: 85px 0;
  text-align: center;
  @include mq_sp {
    padding: percentage(math.div(70px, $spWidth)) 0;
  }
  h2 {
    text-align: center;
    line-height: 1.2;
    @include mq_sp {
      margin-bottom: percentage(math.div(30px, $spInner));
    }
  }

  .journal-wrap {
    @include lazyappear();
    margin-top: percentage(math.div(35px, $innerWidth));
  }

  .appear {
    .journal-wrap {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  .journal {
    padding: percentage(math.div(30px, $innerWidth)) 0 percentage(math.div(34px, $innerWidth));
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    border-bottom: 1px solid #000;
    @include mq_sp {
      padding: percentage(math.div(24px, $spInner)) 0;
    }

    &:last-child {
      border-bottom: none;
    }
    &__body {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-grow: 1;
      @include mq_sp {
        flex-direction: column-reverse;
        width: percentage(math.div(200px, $spInner));
      }
    }
    &__date {
      font-size: 16px;
      width: percentage(math.div(100px, $innerWidth));
      white-space: nowrap;
      padding: 0 percentage(math.div(30px, $innerWidth));
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
    /*&__category {
      font-size: 20px;
      width: percentage(180px / $innerWidth);
      white-space: nowrap;
      padding: 0 percentage(30px / $innerWidth);
      padding-right: percentage(20px / $innerWidth);
      @include noto-light;
      text-align: left;
      @include mq_sp {
        margin-top: percentage(10px / $spInner);
        @include spfontsize(12px);
        padding: 0;
      }
    }*/
    &__title {
      width: percentage(math.div(740px, $innerWidth));
      flex-grow: 1;
      text-align: left;
      padding: 0 percentage(math.div(15px, $innerWidth)) 0 percentage(math.div(80px, $innerWidth));
      @include noto-light;
      @include mq_sp {
        width: 100%;
        padding: 0;
      }
      a,
      p {

        font-size: 16px;
        line-height: 1.6;
        display: block;
        width: 100%;
        color: #000;
        @include mq_sp {
          @include spfontsize(10px);
        }
      }
      a {
        @include noto-light;
        @include textdecoration-line;
      }

    }
  }


}
</style>