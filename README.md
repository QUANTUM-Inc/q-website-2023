<p align="left">
  <a href="https://travis-ci.org/krestaino/nuepress"><img src="https://travis-ci.org/krestaino/nuepress.svg?branch=master" alt="Build Status"></a>
</p>

## Quantum
フロントはNuxtで作成されております。

[Nuxt.js](https://github.com/nuxt/nuxt.js) + [WordPress REST API](https://developer.wordpress.org/rest-api/)

## Development

```bash
# install dependencies and create .env file
$ yarn install

# serve with hot reload
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# ステージング用generate
# API接続先がstaginになります。
$ yarn generate-stg

# 本番用generate
# API接続先が本番になります。
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Wordpress
Project一覧, Project詳細, Project詳細に関連付けられたJournal, News, Factsheetsが管理されており、すべてWPRestAPIで使用されます。

Project詳細のみプレビュー用にWPテンプレートが用意されておりますが、ページ描画自体はnuxt.jsによって行われるためテンプレート自体を修正する機会はおそらくございません。
