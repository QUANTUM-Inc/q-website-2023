<template>
  <!-- 画像3カラム -->
  <section class='l-section related-links'>
    <div class='l-section__inner'>
      <div class='l-image l-image-3column'>
        <div class='image0 js-lazyclass'>
          <div class='image-area'>
            <img :src='src1' alt='' v-if='src1'>
          </div>
        </div>
        <div class='image1 js-lazyclass'>
          <div class='image-area'>
            <img :src='src2' alt='' v-if='src2'>
          </div>
        </div>
        <div class='image2 js-lazyclass'>
          <div class='image-area'>
            <img :src='src3' alt='' v-if='src3'>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Image3Column',
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
    }
  }
};
</script>

<style scoped lang='scss'>

</style>