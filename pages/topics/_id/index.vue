<template>
  <div>
    <div class="topics--detail">
      <section class='l-section head md:mt-[80px] lg:mt-[120px]'>
        <div class='l-section__inner js-lazyclass'>
          <p class="text-[14px] md:text-[16px]">{{ categoryNames  }}</p>
          <h1 class="text-[22px] leading-[32px] md:text-[32px] md:leading-[54px] mt-1 md:mt-3 ms-[-3px]">{{ topic.title.rendered }}</h1>
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
              <nuxt-link :to="`/topics/${prevId}`" class="text-[14px] md:text-[16px]" v-if="prevId > 0">← prev</nuxt-link>
            </div>
            <div class="flex justify-center">
              <nuxt-link to="/topics" class="text-[15px] md:text-[19px]">一覧へ戻る</nuxt-link>
            </div>
            <div class="flex justify-end">
              <nuxt-link :to="`/topics/${nextId}`" class="text-[14px] md:text-[16px]" v-if="nextId > 0">next →</nuxt-link>
            </div>
          </div>
        </div>
      </section>
    
    </div>
    <contact-link background='gray'></contact-link>
  </div>
</template>

<script>
import Init from '../../../javascripts/init';
import _each from 'lodash/each';
import _filter from 'lodash/filter'
import ContactLink from '../../../components/partial/ContactLink';

export default {
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

    const topics = await app.$axios.get(store.getters.apiPath({
      type: 'topics',
      size: 100,
    }))

    const topicIds = topics.data.map(t => t.id)

    return {
      topic: data,
      categories,
      topicIds
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
    },
    prevId() {
      const index = this.topicIds.indexOf(Number(this.$route.params.id))
      if (index > 0) {
        return this.topicIds[index - 1]
      }
      return 0
    },
    nextId() {
      const index = this.topicIds.indexOf(Number(this.$route.params.id))
      if (index >= 0 && index + 1 < this.topicIds.length) {
        return this.topicIds[index + 1]
      }
      return 0
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
    h1 {
      font-weight: normal;
      
      @include mq_sp {
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