<template>
  <!-- 画像3カラム -->
  <section class='l-section related-links'>
    <div class='l-section__inner'>
      <div class='l-image l-image-3column'>
        <div class='image0 js-lazyclass'>
          <div class='image-area'>
            <template v-if='src1'>
              <picture v-if="src1sp">
                <source media="(max-width: 768px)" :srcset="src1sp">
                <img :src='src1' alt=''>
              </picture>
              <img :src='src1' alt='' v-else>
            </template>
          </div>
        </div>
        <div class='image1 js-lazyclass'>
          <div class='image-area'>
            <template v-if='src2'>
              <picture v-if="src2sp">
                <source media="(max-width: 768px)" :srcset="src2sp">
                <img :src='src2' alt=''>
              </picture>
              <img :src='src2' alt='' v-else>
            </template>
          </div>
        </div>
        <div class='image2 js-lazyclass'>
          <div class='image-area'>
            <template v-if='src3'>
              <picture v-if="src3sp">
                <source media="(max-width: 768px)" :srcset="src3sp">
                <img :src='src3' alt=''>
              </picture>
              <img :src='src3' alt='' v-else>
            </template>
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
    },
    src3: {
      type: String,
      default: ''
    },
    src3sp: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped lang='scss'>

</style>