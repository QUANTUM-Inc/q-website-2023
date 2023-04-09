<template>
  <!-- 画像2カラム（2行・4つ） -->
  <section class='l-section'>
    <div class='l-section__inner'>
      <div class='l-image l-image-2column'>
        <div class='image1 js-lazyclass'>
          <img :src='src1' alt='' v-if='src1'>
        </div>
        <div class='image2 js-lazyclass'>
          <img :src='src2' alt='' v-if='src2'>
        </div>
        <div class='image1 js-lazyclass'>
          <img :src='src3' alt='' v-if='src3'>
        </div>
        <div class='image2 js-lazyclass'>
          <img :src='src4' alt='' v-if='src4'>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Image4Column',
  props: {
    src1: {
      type: String,
      default: ''
    },
    src2: {
      type: String,
      default: ''
    },
    src3: {
      type: String,
      default: ''
    },
    src4: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped lang='scss'>

</style>