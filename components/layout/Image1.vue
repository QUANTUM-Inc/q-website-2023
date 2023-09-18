<template>
  <!-- 画像1つ 通常 -->
  <section class='l-section'>
    <div class='l-section__inner js-lazyclass'>
      <div class='l-image l-image1' :class='{"right": isRight}'>
        <picture v-if="srcsp">
          <source media="(max-width: 768px)" :srcset="srcsp">
          <img :src='src' alt=''>
        </picture>
        <img :src='src' alt='' v-else>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Image1',
  props: {
    src: {
      type: String,
      default: ''
    },
    srcsp: {
      type: String,
      default: ''
    },
    isRight: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang='scss'>

</style>