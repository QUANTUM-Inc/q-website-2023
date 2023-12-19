<template>
  <!-- 画像+テキスト（2カラム） -->
  <section class='l-section'>
    <div class='l-section__inner'>
      <div class='l-image-with-text'>
        <div class='image5 js-lazyclass'>
          <template v-if='src1'>
            <picture v-if="src1sp">
              <source media="(max-width: 768px)" :srcset="src1sp">
              <img :src='src1' alt=''>
            </picture>
            <img :src='src1' alt='' v-else>
          </template>
        </div>
        <div class='text js-lazyclass'>
          <div>{{ text }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ImageWithText',
  props: {
    src1: {
      type: String,
      default: ''
    },
    src1sp: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
  }
};
</script>

<style scoped lang='scss'>

</style>