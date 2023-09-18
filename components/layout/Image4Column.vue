<template>
  <!-- 画像2カラム（2行・4つ） -->
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
            <img :src='src2' alt='' v-else>
          </template>
        </div>
        <div class='image1 js-lazyclass'>
          <template v-if='src3'>
            <picture v-if="src3sp">
              <source media="(max-width: 768px)" :srcset="src3sp">
              <img :src='src3' alt=''>
            </picture>
            <img :src='src3' alt='' v-else>
          </template>
        </div>
        <div class='image2 js-lazyclass'>
          <template v-if='src4'>
            <picture v-if="src4sp">
              <source media="(max-width: 768px)" :srcset="src4sp">
              <img :src='src4' alt=''>
            </picture>
            <img :src='src4' alt='' v-else>
          </template>
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
    },
    src4: {
      type: String,
      default: ''
    },
    src4sp: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped lang='scss'>

</style>