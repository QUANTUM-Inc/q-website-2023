<template>
  <!-- 画像1つ 通常 -->
  <section class='l-section'>
    <div class='l-section__inner js-lazyclass'>
      <div class='l-image l-image1' :class='{"right": isRight}'>
        <img :src='src' alt=''>
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
    isRight: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang='scss'>

</style>