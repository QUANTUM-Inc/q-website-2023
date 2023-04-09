<template>
  <div class="errorpage">
    <!-- 見出し -->
    <section class='l-section'>
      <div class='l-section__inner appear'>
        <h2>page not found</h2>
      </div>
    </section>
    <contact-link background='gray'></contact-link>

  </div>
</template>

<script>

import find from 'lodash/find';
import _filter from 'lodash/filter';
import Init from '../javascripts/init';
import _each from 'lodash/each';
import ContactLink from '../components/partial/ContactLink';

export default {
  async asyncData({ app, store, params, payload, error }) {
    try {
      let _payload;
      if (!payload) {
        if (params.project) {
          let project
          if (isNaN(params.project)) {
            project = await app.$axios.get(store.getters.apiPath({
              type: 'projectslug',
              slug: params.project,
              lang: store.state.lang
            }));
          } else {
            project = await app.$axios.get(store.getters.apiPath({
              type: 'project',
              id: params.project
            }));
          }
          _payload = project.data[0];
        }


      }


      if (_payload) {
        return {
          payload: _payload
        }
      }
    } catch (err) {
      error({
        statusCode: err.response.status,
        message: err.response.data.message
      })
    }
  },


  components: {
    ContactLink,
  },

  data() {
    return {
      payload: null
    }
  },

  computed: {
    project() {
      if (this.payload) return this.payload;
      let result;
      _each(this.$store.state.products, (product) => {
        if (product.id == this.$route.params.project) {
          result = product
        }
      })
      return result;
    },

  },

  head() {
    return {
      title: `quantum | error`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.isEnglish ? 'New business projects launched by quantum in collaboration with partners, startups, universities, and also as in-house projects.' : 'quantumがパートナー企業、スタートアップ、大学などとの共同開発によって、また自社事業として立ち上げた新規事業プロジェクト'
      },
        this.keywords]
    }
  },

  mounted() {
    Init.setup(this.$store)
    let to;
    //遷移先（詳細）がある
    if (this.payload) {
      to = {
        name: this.$route.name.replace(/lang\-/img, ''),
        params: {
          lang: this.$store.state.lang,
          project: this.$route.params.project
        }
      }
      this.$router.push(to);
    } else {
      location.href = this.$store.state.lang === this.$store.state.defaultLang ? '/' : '/en/'
    }
  }
};
</script>
<style lang="scss" scoped>
.errorpage {
  padding-top: 160px;
  @include mq_sp {
    padding-top: percentage(math.div(140px, $spWidth));

  }
  h2 {
    padding-bottom: 120px;
    @include mq_sp {
      padding-bottom: percentage(math.div(140px, $spWidth));
    }
  }
}
</style>

