<template>
  <section class='l-section contact l-contact'>
    <div class='l-section__inner js-lazyclass'>
      <h2 v-if='!isEnglish'>q letter購読解除が完了しました。</h2>
      <h2 v-if='isEnglish'>You have successfully unsubscribed from q letter.</h2>
      <p class='l-section__body' v-if='!isEnglish'>ご登録ありがとうございました。</p>
      <p class='l-section__body' v-if='isEnglish'>Thank you for your subscription.</p>

      <lang-link :to="{name: 'index', params: {lang}}" class='send-button'>back</lang-link>

    </div>
  </section>
</template>

<script>
import Init from '../../javascripts/init';
import _each from 'lodash/each'
export default {
  name: 'complete.vue',

  head() {
    return {
      title: `${this.$store.state.meta.name}contact`,
      meta: [{ description: 'q letter' }]
    };
  },
  mounted() {
    Init.setup(this.$store)
  },

};
</script>

<style lang='scss' scoped>
.contact {
  padding-top: 136px;
  padding-bottom: 140px;
  @include mq_sp {
    padding-top: percentage(math.div(150px, $spWidth));
    padding-bottom: percentage(math.div(120px, $spWidth));
  }
  .l-section__body {
    margin-bottom: 80px;
    @include mq_sp {
      margin-bottom: percentage(math.div(45px, $spInner));
    }
  }
  h2 {
    @include mq_sp {
      line-height: 1.2;
      @include spfontsize(32px);
    }
  }

  .send-button {
    padding: 14px;
    display: inline-block;
    text-align: center;
    font-size: 20px;
    @include mq_sp {
      @include spfontsize(20px);
      padding: percentage(math.div(15px, $spInner));
    }
  }

}
</style>