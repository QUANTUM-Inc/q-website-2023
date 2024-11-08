<template>
  <div>
    <div class="topics--list">
      <section class='l-section head'>
        <div class='l-section__inner js-lazyclass'>
          <h2>topics</h2>
          <div class='tags pc'>
            <a v-on:click.prevent='filterCategory(0)' :class='{active: selectedCategory === 0}'>all</a>
            <a v-on:click.prevent='filterCategory(category.id)' v-for='category in categories' :class='{active: category.id === selectedCategory}'>{{category.name}}</a>
          </div>
          <div class='tag-seletc select-wrap sp'>
            <select v-on:change='changed'>
              <option value="0" :selected="categoryId == 0">all</option>
              <option v-for='category in categories' :value='category.id' :selected="category.id === categoryId">{{category.name}}</option>
            </select>
            <div class='label'>{{this.currentSelected}}</div>
          </div>
        </div>
      </section>
      <section class='l-section' ref='topics'>
        <div class='l-section__inner js-lazyclass'>
          <div class=" pb-[60px] lg:pb-0">
            <div class="topics--list-wrap md:mt-[40px]" ref="topicsWrap">
              <TopicsList :topics="filteredTopics" ref="topicsList" @selectCategory="selectCategory"></TopicsList>
            </div>
            <div class="text-center" v-if="!isLastPage">
              <a class='l-section__textlink load-more' @click="loadMore">and more</a>
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
import { gsap, Quint, Cubic } from 'gsap';
import ContactLink from '../../components/partial/ContactLink';
import TopicsList from '../../components/topics/List';

export default {
  name: 'index.vue',
  scrollToTop: true,
  components: {
    ContactLink,
    TopicsList
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

  data() {
    return {
      currentSelected: 'all',
      categoryId: this.$route.params.categoryId
    }
  },

  async mounted() {
    Init.setup(this.$store)
    window.addEventListener('resize', this.updateListHeight)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.updateListHeight)
  },

  async asyncData({ app, store, params }) {
    const page = 1
    const perPage = 12
    const topics = await app.$axios.get(store.getters.apiPath({
      type: 'topics',
      size: perPage,
      page,
    }))

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
    const isLastPage = topics.headers['x-wp-totalpages'] == 1
    return {
      page,
      perPage,
      topics: topics.data,
      categories,
      isLastPage
    };
  },
  computed: {
    selectedCategory: function() {
      return this.$store.state.selectedTopicsCategory ? this.$store.state.selectedTopicsCategory : 0
    },
    filteredTopics() {
      if (!this.selectedCategory) {
        return this.topics
      }
      const topics = _filter(this.topics, (topic, index) => {
        let result = false
        _each(topic.topics_category, (category) => {
          if (category === this.selectedCategory) {
            result = true;
          }
        })
        return result
      })
      return topics
    },
  },
  methods: {
    changed(event) {
      let select = event.currentTarget;
      let index = select.selectedIndex;

      this.currentSelected = select.options[index].label;
      this.currentSelectedId = select.options[index].value;
      let topicsList = this.$refs.topics

      gsap.to([topicsList], {
        opacity: 0,
        duration: 0.3,
        ease: Quint.easeOut,
        onComplete: async () => {
          this.$store.commit('setSelectedTopicsCategory', {
            selectedId: parseInt(this.currentSelectedId, 10)
          });
          await this.reloadTopics()
          gsap.to([topicsList], {
            opacity: 1,
            duration: 0.5,
            delay: 0.24,
            ease: Cubic.easeOut
          })
        }
      })
    },
    filterCategory(categoryId) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
      let topicsList = this.$refs.topics
      gsap.to(topicsList, {
        opacity: 0,
        duration: 0.3,
        ease: Quint.easeOut,
        onComplete: async () => {
          this.$store.commit('setSelectedTopicsCategory', {
            selectedId: categoryId
          });
          await this.reloadTopics()
          gsap.to(topicsList, {
            opacity: 1,
            duration: 0.5,
            delay: 0.24,
            ease: Cubic.easeOut
          })
        }
      })
    },
    async reloadTopics() {
      this.page = 1
      const params = {
        type: 'topics',
        size: this.perPage,
        page: this.page,
      }
      if (this.selectedCategory) {
        params['categoryId'] = this.selectedCategory
      }
      try {
        const res = await this.$axios.get(this.$store.getters.apiPath(params))
        this.isLastPage = res.headers['x-wp-totalpages'] == this.page || res.headers['x-wp-totalpages'] == 0
        this.topics = [...res.data]
      } catch (error) {
      }
    },
    async loadMore() {
      const topicsWrap = this.$refs.topicsWrap
      this.$refs.topicsWrap.style.maxHeight = `${this.$refs.topicsWrap.clientHeight}px`

      this.page += 1
      const params = {
        type: 'topics',
        size: this.perPage,
        page: this.page
      }
      if (this.selectedCategory) {
        params['categoryId'] = this.selectedCategory
      }
      try {
        const res = await this.$axios.get(this.$store.getters.apiPath(params))
        this.isLastPage = res.headers['x-wp-totalpages'] == this.page || res.headers['x-wp-totalpages'] == 0
        this.topics.push(...res.data)
      } catch (error) {
      }

      this.$nextTick(() => {
        this.updateListHeight()
      })
    },
    updateListHeight() {
      const listHeight = this.$refs.topicsList.$el.clientHeight
      if (listHeight) {
        this.$refs.topicsWrap.style.maxHeight = `${listHeight}px`
      }
    },
    selectCategory(categoryId) {
      this.filterCategory(categoryId)
    }
  }
};
</script>

<style lang='scss' scoped>
.topics--list {
  &-wrap {
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
  padding-bottom: 240px;
  .head {
    padding-top: 136px;
    @include mq_sp {
      padding-top: percentage(math.div(150px, $spWidth));
    }
    h2 {
      @include mq_sp {
        text-align: center;
      }
    }
    // PC---
    .tags {
      display: flex;
      flex-wrap: wrap;
      margin-top: 55px;
      margin-bottom: 30px;
      line-height: 2;
      justify-content: flex-start;
      align-items: center;
      a {
        white-space: nowrap;
        margin-bottom: 15px;
        line-height: 1.4;
        margin-right: 60px;
        font-size: 20px;
        @include roboto-light;
        display: inline-block;
        letter-spacing: 0.04rem;
        position: relative;

        &::after {
          position: absolute;
          display: block;
          content: '';
          line-height: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: #000;
          @include ease-out-cubic($animationTime);
          transform-origin: 0 0;
          transform: scale(0, 0);
        }
        &.active {
          &::after {
            transform: scale(1, 1);
          }
        }
        @include mq_pc {
          &:hover {
            &::after {
              transform-origin: 0 0;
              transform: scale(1, 1);
            }
          }
        }
      }
    }
    // SP Only
    .select-wrap {
      width: percentage(math.div(260px, $spWidth));
      margin: percentage(math.div(22px, $spWidth)) auto;
      padding-left: percentage(math.div(10px, $spWidth));
      position: relative;
      &::after {
        content: '';
        position: absolute;
        height: 0;
        right: percentage(math.div(10px, 190px));
        top: 50%;
        transform: translate(0, -50%);
        padding-top: percentage(math.div(6px, 190px));
      }
      /*@include mq_sp {
        width: 100%;
        margin: percentage(0px / $spInner) auto;
      }*/
    }
  }

  @include mq_sp {
    padding-bottom: percentage(math.div(0px, $spWidth));
  }
}
</style>