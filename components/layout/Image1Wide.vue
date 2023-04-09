<template>
  <!-- 画像1つ 通常 -->
  <section class='l-section'>
    <div class='l-section__inner js-lazyclass'>
      <div class='l-image l-image1-wide'>
        <img :src='src' alt=''>
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
    }
  }
};
</script>

<style scoped lang='scss'>

</style>