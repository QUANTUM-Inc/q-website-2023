<template>
  <!-- 画像2カラム -->
  <section class='l-section'>
    <div class='l-section__inner'>
      <div class='l-image l-image-2column'>
        <div class='image1 js-lazyclass'>
          <template v-if='src1'>
            <picture v-if="src1sp">
              <source media="(max-width: 768px)" :srcset="src1sp">
              <img :src='src1' alt=''>
            </picture>
            <img :src='src1' alt='' v-else>
          </template>
        </div>
        <div class='image2 js-lazyclass'>
          <template v-if='src2'>
            <picture v-if="src2sp">
              <source media="(max-width: 768px)" :srcset="src2sp">
              <img :src='src2' alt=''>
            </picture>
            <img :src='src2' alt='' v-if='src2'>
          </template>
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
    src1sp: {
      type: String,
      default: ''
    },
    src2: {
      type: String,
      default: ''
    },
    src2sp: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped lang='scss'>

</style>