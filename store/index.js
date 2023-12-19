import Vuex from 'vuex';
import _find from 'lodash/find'
import _filter from 'lodash/filter'
import _each from 'lodash/each'
import Util from '../javascripts/util';

export const strict = false;

export const state = () => ({
  article: null,
  articles: [],
  authorArticles: [],
  authors: null,
  featuredArticles: [],
  featuredColor: {},
  topicArticles: [],
  topics: null,


  lang: 'en',
  defaultLang: 'ja',
  swapProjectCount: 0,
  page: null,
  enableComments: false,
  indexInfiniteLoading: {
    enabled: false,
    page: 1
  },
  meta: {
    description: '',
    name: 'quantum｜'
  },
  categories: null,
  selectedCategory: 1, // 現在フィルタリングされているカテゴリーID 1 = all
  selectedYear: 1, // 現在フィルタリングされている年代（ニュース一覧）
  products: null,
  newsList: null,
  newsCategories: null,
  journals: null,
});


export const getters = {
  // ---------- category
  // 現在の言語のカテゴリーを取得
  categoryList (state) {
    if (!state.categories) {
      return []
    }
    return _filter(state.categories, (category) => {
      let lang = state.lang;
      if (lang === 'en') {
        if (category.slug.search('-en') !== -1) {
          return true
        }
      } else {
        if (category.slug.search('-en') === -1) {
          return true
        }
      }
      return false;
    })
  },

  // カテゴリー情報を取得
  getCategoryFromId: (state) => (id) => {
    return state.categories.find(category => category.id === id)
  },

  // Newsカテゴリー情報を取得
  getNewsCategoryFromId: (state) => (id) => {
    return state.newsCategories.find(category => category.id === id)
  },

  getEnglishCategory: (state) => (jaCategoryId) => {
    let en
    _each(state.categories, (category) => {
      if (category.id === jaCategoryId) {
        en = category.translations.en
      }
    });
    return en
  },

  // ---------- projects
  // 最新のProduct情報1件を取得（言語考慮）
  firstProduct (state) {
    let _products = _filter(state.products, (project) => {
      let result = false
      // all
      let all_en;
      _each(state.categories, (category) => {
        if (category.id === 1) {
          all_en = category.translations.en
        }
      });
      if (state.selectedCategory === 1 || state.selectedCategory === all_en) {
        return true;
      }
      _each(project.categories, (category) => {
        if (category === state.selectedCategory) {
          result = true;
        }
      })
      return result
    })
    let _currentProducts = _filter(_products, (product) => {
      let lang = state.lang;
      return lang === product.lang;
    })
    return _currentProducts[0];
  },

  //言語別のプロジェクトリストを取得
  projects(state) {
    return _filter(state.products, (product) => {
      let lang = state.lang;
      return product.lang === lang;
      /*if (lang === 'en') {
        if (Util.isEnglishArticle(product.link)) {
          return true;
        }
      } else {
        // その他
        if (!Util.isEnglishArticle(product.link)) {
          return true;
        }
      }*/
    })
  },

  // API
  apiPath: (state) => ({type, size, id, slug, lang, preview, nonce}) => {
    let _lang = lang ? '&lang=' + lang : '';
    let _id;
    let _prev = preview ? '&preview=1' : '';
    let _nonce = nonce ? '&preview_nonce=' + nonce : '';
    let _prev_id;
    if (type === 'project') {
      // ID による検索
      _id = id;
      return `${process.env.WORDPRESS_API_URL}/wp/v2/projects?per_page=1&include=${_id}${_prev}`
    } else if (type === 'projectslug') {
      // Slug による検索
      let _slug = slug;
      _prev_id = id ? '&preview_id=' + id : '';
      return `${process.env.WORDPRESS_API_URL}/wp/v2/projects?per_page=1&slug=${_slug}${_lang}${_prev}${_prev_id}`
    } else if (type === 'projectlist') {
      // project 一覧
      return `${process.env.WORDPRESS_API_URL}/wp/v2/projects?per_page=10000&orderby=date&order=desc&nolayout=1`//menuorder=1
    } else if (type === 'category') {
      return `${process.env.WORDPRESS_API_URL}/wp/v2/categories?per_page=100`
    } else if (type === 'journal') {
      let _size = size || 10000
      return `${process.env.WORDPRESS_API_URL}/wp/v2/journals?&per_page=${_size}`
    } else if (type === 'news') {
      let _size = size || 10000
      return `${process.env.WORDPRESS_API_URL}/wp/v2/news?&per_page=${_size}${_lang}`;
    } else if (type === 'note') {
      return `${process.env.WORDPRESS_API_URL}/wp/custom/notes`
    } else if (type === 'factsheet') {
      return `${process.env.WORDPRESS_API_URL}/wp/v2/factsheets?&per_page=2${_lang}`
    } else if (type === 'newscategory') {
      return `${process.env.WORDPRESS_API_URL}/wp/v2/news_category?per_page=100`
    } else if (type === 'careers') {
      return `${process.env.WORDPRESS_API_URL}/wp/v2/pages?slug=careers`
    } else if (type === 'career_detail') {
      return `${process.env.WORDPRESS_API_URL}/wp/v2/pages/${id}`
    } else if (type === 'featured_work') {
      return `${process.env.WORDPRESS_API_URL}/wp/v2/pages?slug=featured-work`
    }

    return ''
  }
}

export const mutations = {
  setArticle(state, data) {
    state.article = data;
  },
  setPage(state, data) {
    state.page = data;
  },
  setAuthorArticles(state, data) {
    state.authorArticles.push(data);
  },
  setAuthors(state, data) {
    state.authors = data;
  },
  setIndexInfiniteLoading(state, data) {
    state.indexInfiniteLoading = data;
  },
  setFeaturedColor(state, data) {
    state.featuredColor = data;
  },
  setFeaturedArticles(state, data) {
    state.featuredArticles = state.featuredArticles.concat(data);
  },
  setMeta(state, data) {
    state.meta = data;
  },
  setTopicArticles(state, data) {
    state.topicArticles.push(data);
  },
  setTopics(state, data) {
    state.topics = data;
  },
  setProducts(state, data) {
    state.products = data;
  },
  setCategories(state, data) {
    state.categories = data;
  },
  setSelectedCategory(state, data) {
    state.selectedCategory = data.selectedId
  },
  setSelectedYear(state, data) {
    state.selectedYear = data.year
  },
  setNews(state, data) {
    state.newsList = data;
  },
  setNewsCategory(state, data) {
    state.newsCategories = data;
  },
  setJournals(state, data) {
    state.journals = data;
  },
  lang(state, { lang }) {
    state.lang = lang || state.defaultLang;
    //選択中のカテゴリーも変更
    if (state.categories && state.selectedCategory) {
      let currentCategory = _find(state.categories, {id: state.selectedCategory});
      if (currentCategory && currentCategory.translations) {
        let resultId = currentCategory.translations[lang]
        if (resultId) {
          state.selectedCategory = resultId;
        }
      }
    }
  },
  toggleLag(state) {
    state.lang = 'ja' === state.lang ? 'en' : 'ja'
  },
  swapProjectLang(state) {
    state.swapProjectCount += 1;
  }
};

export const actions = {
  /*async nuxtServerInit({ commit }) {
    let meta = await this.$axios.get(process.env.WORDPRESS_API_URL);
    commit('setMeta', meta.data);
  }*/
};
