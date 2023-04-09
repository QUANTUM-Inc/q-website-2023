<template>
  <!-- 画像2カラム -->
  <section class='l-section'>
    <div class='l-section__inner'>
      <div class='l-image l-image-2column'>
        <div class='image1 js-lazyclass'>
          <img :src='src1' alt='' v-if='src1'>
        </div>
        <div class='image2 js-lazyclass'>
          <img :src='src2' alt='' v-if='src2'>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Image2Column',
  props: {
    src1: {
      type: String,
      default: ''
    },
    src2: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped lang='scss'>

</style>