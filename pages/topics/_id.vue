<template>
  <div>
    <div class="topics--detail">
      <section class='l-section head'>
        <div class='l-section__inner js-lazyclass'>
          <p class="text-[14px] md:text-[16px]">{{ categoryNames  }}</p>
          <h1 class="text-[32px] leading-[54px] mt-1 md:mt-3 ms-[-3px]">{{ topic.title.rendered }}</h1>
          <p class="text-[12px] opacity-50 mt-[10px] md:mt-[20px]">{{ topic.acf.date }}</p>
        </div>
      </section>
      <section class='l-section'>
        <div class='l-section__inner'>
          <div v-if="topic.acf.main_visual" class="mt-[30px] md:mt-[55px]">
            <img :src="topic.acf.main_visual" class="w-full">
          </div>
          <div class="topic__content js-lazyclass" v-html="topic.content.rendered"></div>
          <div class="topic__share mt-[80px] md:mt-[120px]">
            <ul class="flex items-center">
              <li><a href="#"><img src="~/assets/images/topics/icn_facebook.svg"></a></li>
              <li class="ms-[16px]"><a href="#"><img src="~/assets/images/topics/icn_x.svg"></a></li>
              <li class="ms-[16px]"><a href="#"><img src="~/assets/images/topics/icn_linkedin.svg"></a></li>
            </ul>
          </div>
          <div class="topic__pagination mt-[45px] md:mt-[55px]">
            <div class="flex justify-start">
              <nuxt-link to="#" class="text-[14px] md:text-[16px]">← prev</nuxt-link>
            </div>
            <div class="flex justify-center">
              <nuxt-link to="/topics" class="text-[15px] md:text-[19px]">一覧へ戻る</nuxt-link>
            </div>
            <div class="flex justify-end">
              <nuxt-link to="#" class="text-[14px] md:text-[16px]">next →</nuxt-link>
            </div>
          </div>
        </div>
      </section>
    
    </div>
    <contact-link background='gray'></contact-link>
  </div>
</template>

<script>
import Init from '../../javascripts/init';
import _each from 'lodash/each';
import _filter from 'lodash/filter'
import ContactLink from '../../components/partial/ContactLink';

export default {
  name: 'id.vue',
  scrollToTop: true,
  components: {
    ContactLink,
  },

  head() {
    return {
      title: `${this.$store.state.meta.name}topics`,
      meta: [{hid: 'description',
        name: 'description',
        content: this.isEnglish ? 'Press releases and announcements from Startup Studio quantum.' : 'スタートアップスタジオquantumからのプレスリリースやお知らせ' },
        this.keywords]
    };
  },
  mounted() {
    Init.setup(this.$store)
  },

  async asyncData({ app, store, params }) {
    const { data } = await app.$axios.get(store.getters.apiPath({
      type: 'topic',
      id: params.id
    }))
    console.log(data)

    let categories = []
    
    if (!store.state.topicsCategories) {
      const topicsCategories = await app.$axios.get(store.getters.apiPath({
        type: 'topicscategory'
      }));
      store.commit('setTopicsCategory', topicsCategories.data)
      categories = topicsCategories.data
    } else {
      categories = store.state.topicsCategories
    }
    return {
      topic: data,
      categories
    }
  },
  computed: {
    categoryNames() {
      const names = []
      for (const c of this.categories) {
        if (!this.topic.topics_category.includes(c.id)) {
          continue
        }
        names.push(c.name)
      }
      return names.join(' / ')
    }
  },
  methods: {
  }
};
</script>

<style lang='scss' scoped>
.topics--detail {
  padding-top: 120px;
  padding-bottom: 240px;
  .head {
    padding-top: 136px;
    @include mq_sp {
      padding-top: 0;
    }
    @include mq_tab {
      padding-top: 56px;
    }
    h1 {
      font-size: 32px;
      line-height: 54px;
      font-weight: normal;
      
      @include mq_sp {
        font-size: 22px;
        line-height: 30px;
        text-align: left;
      }
    }
  }
  .topic {
    &__share {
      a {
        transition: opacity 0.3s ease;
        &:hover {
          opacity: 0.6;
        }
      }
    }
    &__pagination {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
    }
  }
}


</style>