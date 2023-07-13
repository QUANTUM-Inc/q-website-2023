<template>
  <div class='careers--detail'>
    <template v-if="isEnglish">
      <div class="under-construction"><p>under construction</p></div>
    </template>
    <template v-else>
    <section class='l-section head'>
      <div class='l-section__inner js-lazyclass'>
        <h2>{{ collective.name }}</h2>
      </div>
    </section>

    <section class='l-section'>
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>quantum collectiveとは</h2>
            <p v-html="collective.detail"></p>
          </div>
        </div>
      </div>
    </section>

    <section class='l-section' v-if="collective.members.length > 0">
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>quantum collective参画メンバーへのインタビュー</h2>
          </div>
          <ul class="member-list">
            <li v-for="(m, i) in collective.members" :key="i">
              <a :href="m.link" target="_blank" ref="noopener noreferrer">
                <img :src="m.img" />
                <p>{{ m.name }}</p>
                <p><small>{{ m.position }}</small></p>
              </a>
              <div class='text-area'>
                <br />
                <p v-html="m.profile"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class='l-section'>
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>募集しているプロフェッショナル</h2>
            <p>− 新規事業開発支援のビジネス開発経験者<br />
− 社内起業のメンタリング経験者<br />
− 起業経験のあるEIR（客員起業家）<br />
− 事業ローンチ経験のあるUIUXデザイナー<br />
− 事業ローンチ経験のあるプロダクトマネージャー</p>
          </div>
        </div>
      </div>
    </section>


    <section class='l-section'>
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>こんな方はお気軽にお声がけください</h2>
            <p>− 新規事業の立上げ経験があり、その経験をあらゆる領域で生かしたい方<br />
− 新規事業をローンチし、法人格になった際CXOになりたい方<br />
− EIR（Entrepreneur In Residence）に興味がある／挑戦したい方<br />
− 新規事業開発の全行程への参加は負担が大きいが、一部フェーズへの並走は可能な方<br />
− 子育てなどのスキマ時間を利用して、リサーチ業務などに短期集中で取り組みたい方<br />
− これまでのご経験を生かして「セカンドキャリア」を歩まれている方></p>
          </div>
        </div>
      </div>
    </section>

    <section class='l-section' v-if="collective.personality">
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>歓迎する人柄</h2>
            <p v-html="collective.personality"></p>
          </div>
        </div>
      </div>
    </section>

    <section class='l-section'>
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>契約形態・報酬</h2>
            <p>業務委託契約（予定）</p>
          </div>
        </div>
      </div>
    </section>

    <section class='l-section'>
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>応募方法</h2>
            <p>以下外部採用ページ「wantedly」よりエントリー、もしくは下記「応募する」ボタンよりお申し込みください。</p><br />
            <p class="link-apply"><span>wantedly<span>　 ⇒　</span></span><a :href="collective.wantedlyLink" target="_blank" ref="noopener noreferrer">{{ collective.wantedlyLink }}</a></p>
            <nuxt-link to="/careers/apply" class='btn-primary'>応募する</nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <contact-link :background="'gray'"></contact-link>
    </template>
  </div>
</template>

<script>
import Init from '../../javascripts/init';
import Logo from '../../components/Logo';
import { Cubic, gsap } from 'gsap';
import _each from 'lodash/each'
import ContactLink from '../../components/partial/ContactLink';
export default {
  name: 'index.vue',
  scrollToTop: true,
  components: {
    ContactLink,
    Logo
  },
  head() {
    return {
      title: `${this.$store.state.meta.name}careers`,
      meta: [{hid: 'description',
        name: 'description',
        content: this.isEnglish ? 'quantum is a start-up studio within Hakuhodo Inc. group. As venture builders specializing in new business creation, we have created many new businesses since our establishment, mainly through co-founding with our partners.' : 'quantumは、発想から実装まで、事業開発の全てを活動領域とし、 新しいプロダクトやサービスを創り出すスタートアップスタジオです。' },
        this.keywords
      ]
    };
  },
  computed: {
  },
  data () {
    return {
      collective: {
        name: 'quantum collective',
        detail: `− quantum collectiveとは<br />
        正社員／契約社員としてquantumでフルタイムで働くキャリアスタイルではなく、quantumが推進する新規事業開発に対して、プロジェクトベースでそれぞれの専門性を活かして参画して頂くプロフェッショナルネットワークです。<br /><br />
        具体的にはquantumが推進するパートナー企業との共同事業や新規事業開発の支援、0→1でのベンチャークリエーション、スタートアップへのハンズオン投資のメンタリング、社内起業家プログラムのメンターなどに、プロフェッショナルとして参画して頂きます。`,
        members: [
          {
            img: '/images/collective/yusuke_takahashi.jpg',
            name: '高橋雄介さん',
            position: 'Yusuke Takahashi ｜ Truffle Technologies代表取締役',
            profile: `1980年生まれ。慶應義塾大学総合政策学部卒業、同大学大学院政策・メディア研究科修士課程修了。2008年同大学院後期博士課程単位取得退学。博士(政策・メディア)。 2013年米国カリフォルニア州マウンテンビューにてAppSocially Inc.を創業、CEOに就任。サンフランシスコ、東京、ハノイのメンバーとともにChatCenter Aiを開発し、企業とそのお客様のコンバージョンに関連した会話の効率化と自動化を支援した。2020年4月東京都渋谷区にてTruffle Technologies株式会社を創業し、代表取締役に就任し現在に至る。専門は、データベース、知識ベース、マルチメディアデータベースとその応用、カスタマーデベロップメント、グロースハック、プロダクト・デザイン。`,
            link: 'https://note.com/quantum_studio/n/n63a250010280',
          },
        ],
        wantedlyLink: 'https://sg.wantedly.com/projects/1316177'
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      gsap.delayedCall(0.1, () => {
        Init.setup(this.$store)
      })

    })
  },
  methods: {
  }
};
</script>

<style lang='scss' scoped>
.careers--detail {
  .head {
    padding-top: 136px;
    .l-section__inner {
      display: block;
    }
    @include mq_sp {
      padding-top: percentage(math.div(100px, $spWidth));
    }
    h2 {
      font-size: 44px;
      @include mq_sp {
        text-align: center;
        @include spfontsize(35px);
      }
    }
    h3 {
      font-size: 22px;
      @include mq_sp {
        text-align: center;
        margin-top: 15px;;
        @include spfontsize(16px);
      }
    }
  }

  @include mq_sp {
    padding-top: percentage(math.div(54px, $spWidth));
    padding-bottom: percentage(math.div(0px, $spWidth));
  }
  .l-section__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 90px;
    @include mq_sp {
      display: block;
      margin-bottom: percentage(math.div(90px, $spWidth));
    }
    &.type-right {
      justify-content: flex-end;
    }
    .text-area {
      h2 {
        font-size: 22px;
        font-weight: 500;
        margin-bottom: 30px;
        big {
          font-size: 32px;
        }
        @include mq_sp {
          font-size: 20px;
        }
      }
      p {
        font-size: 16px;
        @include mq_sp {
          @include spfontsize(14px);
        }
      }
      .link-apply {
        display: flex;
        margin-bottom: 60px;
        span {
          span {
            @include mq_sp {
              display: none;
            }
          }
        }
        a {
          &::after {
            position: absolute;
            display: block;
            content: '';
            line-height: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: #999999;
            @include ease-out-cubic($animationTime);
            transform-origin: 0 0;
            transform: scale(0, 0);
          }
          &:hover {
            &::after {
              transform: scale(1, 1);
            }
          }
          @include mq_sp {
            display: block;
            font-size: 13px;
          }
        }
        @include mq_sp {
          display: block;
        }
      }
    }
    .l-section__body {
      margin-top: 0;;
    }
  }
  .member-list {
    list-style: none;
    display: flex;
    li {
      margin-right: 20px;
      a {
        display: block;
        transition: opacity 0.4s ease;
        &:hover {
          opacity: 0.8;
        }
      }
      img {
        max-width:340px;
        display: block;
        margin-bottom: 25px;
        @include mq_sp {
          width: 100%;
          max-width: 100%;
          margin-bottom: 15px;
        }
      }
      p {
        font-size: 20px;
        small {
          font-size: 16px;
        }
        @include mq_sp {
          @include spfontsize(16px);
          small {
            @include spfontsize(13px);
          }
        }
      }
      @include mq_sp {
        margin-right: 0;
      }
    }
    @include mq_sp {
      display: block;
      li {
        margin-bottom: 20px;;
      }
    }
  }
}
</style>