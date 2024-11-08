<template>
  <div class='topics-list js-lazyclass'>
    <div class='topics-wrap'>
      <div class='topic' v-for='topic in topics'>
        <div class='topic__image'>
          <nuxt-link :to='`/topics/${topic.id}`'>
            <img src="~/assets/images/common/empty.png" v-if="!topic.acf.thumbnail">
            <img :src="topic.acf.thumbnail" v-else>
          </nuxt-link>
        </div>
        <div class='topic__category mt-3' v-if="topic.topics_category">
          <span v-for="(catId, i) in topic.topics_category" >
            <template v-if="i !== 0"> / </template><span class="cursor-pointer" @click="$emit('selectCategory', catId)">{{ getCategoryFromId(catId).name }}</span>
          </span>
        </div>
        <div class='topic__title mt-[5px]'>
          <a :href='`/topics/${topic.id}`'>{{topic.title.rendered}}</a>
        </div>
        <div class='topic__date md:mt-[4px]'>{{topic.acf.date}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import _each from 'lodash/each';

export default {
  name: 'TopicsList.vue',
  props: {
    topics: {
      type: Array,
      default: []
    },
    inTopPage: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getCategoryFromId(categoryId) {
      return this.$store.getters['getTopicsCategoryFromId'](categoryId)
    },
    topicCategories(categories) {
      let result = '';
      let length = categories.length
      _each(categories, (categoryId, index) => {
        let _category = this.getCategoryFromId(categoryId)
        if (_category) {
          if (index !== length - 1) {
            result += _category.name + ' / ';
          } else {
            result += _category.name;
          }
        }
      })
      return result
    }
  }
};
</script>

<style lang='scss' scoped>
.topics-list {
  @include mq_sp {
    padding: percentage(math.div(70px, $spWidth)) 0;
    padding-top: 0;
    padding-bottom: 0;
  }
  h2 {
    line-height: 1.2;
    padding-top: 85px;
  }

  .topics-wrap {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 0 -8px;
    @include lazyappear();
    @include mq_sp {
      margin: 0 -1px;
    }
  }

  &.appear {
    .topics-wrap {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  .topic {
    width: 33.3333%;
    padding: 0 8px;
    margin-bottom: 55px;
    text-align: left;

    @include mq_sp {
      width: 50%;
      padding: 0 1px;
      margin-bottom: 25px;
    }

    &__category {
      @include noto-light;
      @include mq_sp {
        font-size: 11px;
        line-height: 16px;
      }
    }
    
    &__image {
      overflow: hidden;
      img {
        width: 100%;
        transition: transform 0.3s ease;
      }
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
    &__title {
      font-size: 19px;
      line-height: 31px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      a {
        @include noto-light;
      }
      @include mq_sp {
        font-size: 13px;
        line-height: 20px;
      }
    }
    &__date {
      @include noto-light;
      font-size: 11px;
      opacity: 0.5;
    }
  }

}
</style>