<template></template>

<script>
export default {
  name: 'index.vue',
  created() {

  },
  head() {
    return {
      title: `${this.$store.state.meta.name}policies`,
      meta: [{hid: 'description',
        name: 'description',
        content: this.isEnglish ? 'quantum is a startup studio that creates new products and services in all areas of business development, from conception to implementation.' : 'quantumは、発想から実装まで、事業開発の全てを活動領域とし、新しいプロダクトやサービスを創り出すスタートアップスタジオです。' },
        this.keywords]
    };
  },
  mounted() {
    this.$router.push('/policies')
  },
};
</script>

<style lang='scss' scoped>
.l-section__inner {
  h3 {
  &.subtitle {
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px;;
  }
}
}
</style>