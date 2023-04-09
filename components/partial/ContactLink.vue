<template>
<section class='l-section contact-link' :class='background'>
  <lang-link class='l-section__inner js-lazyclass' :class='{"appear": shown}' :to="{
    name: 'contact',
    params: { lang }
  }">
    <h2>contact</h2>
  </lang-link>
</section>
</template>

<script>
export default {
  name: 'ContactLink.vue',
  props: {
    background: {
      type: String,
      default: 'white'
    },
    shown: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang='scss' scoped>

</style>