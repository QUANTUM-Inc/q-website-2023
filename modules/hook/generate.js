import axios from 'axios';

module.exports = function () {
  this.keywordsEn = 'quantum, QUANTUM, Startup Studio, Be a Founder'
  this.keywords = 'quantum, QUANTUM, クオンタム, Startup Stduio, スタートアップスタジオ, スタートアップ・スタジオ, Be a Founder'
  this.defaultDescript = '発想から実装まで、事業開発の全てを活動領域とし、新しいプロダクトやサービスを創り出すスタートアップスタジオです。'
  this.defaultDescriptEn = 'quantum is a startup studio that creates new products and services in all areas of business development, from conception to implementation.'

  // Metaは各vueにもあるが、こちらは書き出されたhtmlに直接出力される内容を定義している
  this.meta = {
    '/': {
      title: 'quantum',
      description: this.defaultDescript,
      keywords: this.keywords
    },
    '/en': {
      title: 'quantum',
      description: this.defaultDescriptEn,
      keywords: this.keywordsEn
    },
    '/contact': {
      title: 'quantum | contact',
      description: '新規事業開発のご相談、quantumへのお問い合わせ',
      keywords: this.keywords
    },
    '/en/contact': {
      title: 'quantum | contact',
      description: 'Contact us for new business development and inquiries about quantum.',
      keywords: this.keywordsEn
    },
    '/factsheet': {
      title: 'quantum | factsheet',
      description: this.defaultDescript,
      keywords: this.keywords
    },
    '/en/factsheet': {
      title: 'quantum | factsheet',
      description: this.defaultDescriptEn,
      keywords: this.keywordsEn
    },
    '/privacy': {
      title: 'quantum | privacy policy',
      description: this.defaultDescript,
      keywords: this.keywords
    },
    '/en/privacy': {
      title: 'quantum | privacy policy',
      description: this.defaultDescriptEn,
      keywords: this.keywordsEn
    },

    '/projects': {
      title: 'quantum | projects',
      description: 'quantumがパートナー企業、スタートアップ、大学などとの共同開発によって、また自社事業として立ち上げた新規事業プロジェクト',
      keywords: this.keywords
    },
    '/en/projects': {
      title: 'quantum | projects',
      description: 'New business projects launched by quantum in collaboration with partners, startups, universities, and also as in-house projects.',
      keywords: this.keywordsEn
    },

    '/qletter': {
      title: 'quantum | q letter',
      description: 'quantumの関連事業やメンバーの執筆記事などの最新情報を月１回程度レター形式でお届けしています。購読／購読解除のご希望は、下記よりお願いします',
      keywords: this.keywords
    },
    '/en/qletter': {
      title: 'quantum | q letter',
      description: 'We send out a letter once a month with the latest information on quantum related projects and articles written by our members.',
      keywords: this.keywordsEn
    },
    '/qletter/complete': {
      title: 'quantum | q letter',
      description: 'quantumの関連事業やメンバーの執筆記事などの最新情報を月１回程度レター形式でお届けしています。購読／購読解除のご希望は、下記よりお願いします',
      keywords: this.keywords
    },
    '/en/qletter/complete': {
      title: 'quantum | q letter',
      description: 'We send out a letter once a month with the latest information on quantum related projects and articles written by our members.',
      keywords: this.keywordsEn
    },
    '/qletter/unsubscribe': {
      title: 'quantum | q letter',
      description: 'quantumの関連事業やメンバーの執筆記事などの最新情報を月１回程度レター形式でお届けしています。購読／購読解除のご希望は、下記よりお願いします',
      keywords: this.keywords
    },
    '/en/qletter/unsubscribe': {
      title: 'quantum | q letter',
      description: 'We send out a letter once a month with the latest information on quantum related projects and articles written by our members.',
      keywords: this.keywordsEn
    },

    '/release': {
      title: 'quantum | release',
      description: 'スタートアップスタジオquantumからのプレスリリースやお知らせ',
      keywords: this.keywords
    },
    '/en/release': {
      title: 'quantum | release',
      description: 'Press releases and announcements from Startup Studio quantum.',
      keywords: this.keywordsEn
    },

    '/whatwedo': {
      title: 'quantum | what we do',
      description: 'design、engineering、branding、biz creative、investment。メンバーの強みを掛け合わせ、発想から実装（ゼロイチ）、そしてグロースまで全領域に取り組みます。',
      keywords: this.keywords
    },
    '/en/whatwedo': {
      title: 'quantum | what we do',
      description: 'design、engineering、branding、biz creative、investment. By combining the strengths of each members, we will work on all areas from conception to implementation (0 to 1) and growth.',
      keywords: this.keywordsEn
    },


    '/whoweare': {
      title: 'quantum | who we are',
      description: 'quantumは博報堂グループのスタートアップスタジオです。パートナーとの共同創業を中心に、新規事業創出に特化したventure buildersとして、創業以来数多くの新規事業を生み出しています。',
      keywords: this.keywords
    },
    '/en/whoweare': {
      title: 'quantum | who we are',
      description: 'quantum is a start-up studio within Hakuhodo Inc. group. As venture builders specializing in new business creation, we have created many new businesses since our establishment, mainly through co-founding with our partners.',
      keywords: this.keywordsEn
    },


    '/contact/complete': {
      title: 'quantum | contact',
      description: '新規事業開発のご相談、quantumへのお問い合わせ',
      keywords: this.keywords
    },
    '/en/contact/complete': {
      title: 'quantum | contact',
      description: 'Contact us for new business development and inquiries about quantum.',
      keywords: this.keywordsEn
    },

    '/careers': {
      title: 'quantum | careers',
      description: 'quantumは博報堂グループのスタートアップスタジオです。パートナーとの共同創業を中心に、新規事業創出に特化したventure buildersとして、創業以来数多くの新規事業を生み出しています。',
      keywords: this.keywords
    },
    '/en/careers': {
      title: 'quantum | careers',
      description: 'quantum is a start-up studio within Hakuhodo Inc. group. As venture builders specializing in new business creation, we have created many new businesses since our establishment, mainly through co-founding with our partners.',
      keywords: this.keywordsEn
    },

    '/collective': {
      title: 'quantum | collective',
      description: 'quantumは博報堂グループのスタートアップスタジオです。パートナーとの共同創業を中心に、新規事業創出に特化したventure buildersとして、創業以来数多くの新規事業を生み出しています。',
      keywords: this.keywords
    },
    '/en/collective': {
      title: 'quantum | collective',
      description: 'quantum is a start-up studio within Hakuhodo Inc. group. As venture builders specializing in new business creation, we have created many new businesses since our establishment, mainly through co-founding with our partners.',
      keywords: this.keywordsEn
    },

    '/careers/about': {
      title: 'quantum | careers',
      description: 'quantumは博報堂グループのスタートアップスタジオです。パートナーとの共同創業を中心に、新規事業創出に特化したventure buildersとして、創業以来数多くの新規事業を生み出しています。',
      keywords: this.keywords
    },
    '/en/careers/about': {
      title: 'quantum | careers',
      description: 'quantum is a start-up studio within Hakuhodo Inc. group. As venture builders specializing in new business creation, we have created many new businesses since our establishment, mainly through co-founding with our partners.',
      keywords: this.keywordsEn
    },

    '/careers/detail': {
      title: 'quantum | careers',
      description: 'quantumは博報堂グループのスタートアップスタジオです。パートナーとの共同創業を中心に、新規事業創出に特化したventure buildersとして、創業以来数多くの新規事業を生み出しています。',
      keywords: this.keywords
    },
    '/en/careers/detail': {
      title: 'quantum | careers',
      description: 'quantum is a start-up studio within Hakuhodo Inc. group. As venture builders specializing in new business creation, we have created many new businesses since our establishment, mainly through co-founding with our partners.',
      keywords: this.keywordsEn
    },
    
    '/topics': {
      title: 'quantum | topics',
      description: 'quantumがパートナー企業、スタートアップ、大学などとの共同開発によって、また自社事業として立ち上げた新規事業プロジェクト',
      keywords: this.keywords
    },
    '/en/topics': {
      title: 'quantum | topics',
      description: 'New business projects launched by quantum in collaboration with partners, startups, universities, and also as in-house projects.',
      keywords: this.keywordsEn
    },

  }
  this.nuxt.hook('generate:page', async (page) => {
    let _route = page.route.toString()
    let _meta = this.meta[_route]
    console.log(_route);
    if (_meta) {
      console.log(_meta)
      let metatext = '';
      let desc = '<meta data-n-head="1" data-hid="description" name="description" content="' + _meta.description + '">'
      desc += '<meta data-n-head="1" data-hid="keywords" name="keywords" content="' + _meta.keywords + '">'
      let result = page.html.replace('<title>quantum</title>', '<title>' + _meta.title + '</title>')
      result = result.replace('<meta data-n-head="1" data-hid="include" property="include">', desc)
      page.html = result;
    }

    //let slug = _route.replace('/en/', '').replace('/projects/', '').replace('projects/', '');

    /*
    if (slug.search('/') === -1) {
      let project = await axios.get(process.env.WORDPRESS_API_URL + '/wp/v2/projects?per_page=1&slug=' + slug)
      let _data= project.data[0]
      let result = page.html.replace('<title>quantum｜</title>', "<title>quantum｜projects｜" + _data.title.rendered + "</title>")
      result = result.replace(/quantumはクリエイティビティを軸とした事業開発によって、新しいプロダクトやサービスを創り出すスタートアップスタジオです。/g, _data.acf.outline.replace(/\r?\n/g, ''));
      result = result.replace(/https:\/\/quantum.ne.jp\/images\/ogp.jpg/g, _data.acf.main_visual.url);
      page.html = result;
    }*/
  })
}