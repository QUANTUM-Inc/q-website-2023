import Vue from 'vue';
import { differenceInDays, format, formatDistanceStrict } from 'date-fns';
import _each from 'lodash/each'

Vue.mixin({
  computed: {
    lang() {
      return this.$store.state.lang
    },
    isEnglish() {
      return this.$store.state.lang === 'en'
    },
    keywords() {
      if (this.$store.state.lang === 'en') {
        return {
          hid: 'keyword',
          name: 'keyword',
          content: 'quantum, QUANTUM, Startup Studio, Be a Founder'
        }
      } else {
        return {
          hid: 'keyword',
          name: 'keyword',
          content: 'quantum, QUANTUM, クオンタム, Startup Stduio, スタートアップスタジオ, スタートアップ・スタジオ, Be a Founder'
        }
      }
    }
  },
  methods: {
    /**
     * Returns formatted date depending on how old it is.
     * If older than 6 days, return formatted like '2 days ago',
     * otherwise return formatted like 'Aug 2'.
     * @param {String} date
     * @return {String} formatted date
     */
    shortTimestamp(date) {
      const articleDate = new Date(date);
      const todayDate = new Date();

      if (differenceInDays(todayDate, articleDate) > 6) {
        return format(articleDate, 'MMM d');
      } else {
        return formatDistanceStrict(articleDate, todayDate, { addSuffix: true });
      }
    },

    /**
     * Returns date formatted like 'May 9, 2017'
     * @param {String} date
     * @return {String} formatted date
     */
    longTimestamp(date) {
      return format(new Date(date), 'MMM d, yyyy');
    },

    /**
     * Handles the click event of the header logo
     */
    homeScrollTop() {
      if (window.location.pathname === '/') {
        this.$scrollTo(document, 500);
      } else {
        this.$router.push('/');
      }
    },

    /**
     * Returns the featured media object of the given article and size
     * @param {Object} article
     * @param {String} size
     * @return {Object} featured media object
     */
    getFeaturedImage(article, size) {
      const featuredImage = article._embedded['wp:featuredmedia'];

      if (featuredImage) {
        return featuredImage[0].media_details.sizes[size];
      }
    },


    /*getCategoryFromId(categoryId, store) {
      //return store.getters.getCategoryFromId(categoryId);
    },*/

    /**
     * カテゴリーリストからカテゴリー名の連結文字列を取得
     * @param categories
     * @param store
     * @returns {string}
     */
    getCategoriesName(categories, store) {
      let result = ''
      let length = categories.length;
      _each(categories, (categoryId, index) => {
        let category = store.getters['getCategoryFromId'](categoryId);
        if (index === length - 1) {
          result += category.name;
        } else {
          result += category.name + ' &nbsp;&nbsp;&nbsp; ';
        }
      })
      return result;
    },
  }
});
