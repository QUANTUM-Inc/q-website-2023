<template>
  <!-- 画像1つ 通常 -->
  <section class='l-section'>
    <div class='l-section__inner'>
      <div class='l-image l-image1'>
        <div class='l-image1__wrap' v-html='embed'>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Embed',
  props: {
    embed: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped lang='scss'>

</style>