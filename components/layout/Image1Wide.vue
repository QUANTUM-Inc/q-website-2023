<template>
  <!-- 画像1つ 通常 -->
  <section class='l-section'>
    <div class='l-section__inner js-lazyclass'>
      <div class='l-image l-image1-wide'>
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
  name: 'Image1Wide',
  props: {
    src: {
      type: String,
      default: ''
    },
    srcsp: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped lang='scss'>

</style>