<template>
  <!-- テキスト 1カラム -->
  <section class='l-section'>
    <div class='l-section__inner'>
      <div class='l-text l-text-2column'>
        <div class='l-text-2column_1 type-void'></div>
        <div class='l-text-2column_2 js-lazyclass' v-html='text'>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Text1',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped lang='scss'>

</style>