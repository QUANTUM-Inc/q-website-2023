<template>
  <!-- 見出し -->
  <section class='l-section'>
    <div class='l-section__inner js-lazyclass'>
      <div class='l-title'>
        <h2 :class='{"type-center": center}'>{{text}}</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Text',
  props: {
    text: {
      type: String,
      default: ''
    },
    center: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang='scss'>

</style>