<template>
  <!-- 画像1つ 通常 -->
  <section class='l-section'>
    <div class='l-section__inner'>
      <div class='l-image l-image1'>
        <div class='l-image1__wrap' :class="{ 'l-image1__center': isCenter }" v-html='embedTag'></div>
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
    },
    isCenter: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    embedTag () {
      if (!this.embed.match(/youtube/)) {
        return this.embed
      }
      return this.embed.replace('?feature=oembed', '?feature=oembed&controls=0&ref=0')
    }
  },
  mounted () {
    
  }
};
</script>

<style scoped lang='scss'>

</style>