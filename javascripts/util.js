class Util {
  constructor() {

  }

  isEnglishArticle(url) {
    if (url.search('/en/') !== -1) {
      return true
    }
    return false;
  }
}

let instance = new Util()
export default instance;