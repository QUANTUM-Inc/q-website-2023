<template>
  <!-- 画像 ヨコイチ -->
  <section class='l-section'>
    <div class='l-image l-fullimage js-lazyclass'>
      <img :src='src' alt=''>
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
    }
  }
};
</script>

<style scoped lang='scss'>

</style>