<template>
  <!-- 画像 ヨコイチ -->
  <section class='l-section'>
    <div class='l-image l-fullimage js-lazyclass'>
      <picture v-if="srcsp">
        <source media="(max-width: 768px)" :srcset="srcsp">
        <img :src='src' alt=''>
      </picture>
      <img :src='src' alt='' v-else>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FullImage',
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