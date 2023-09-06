<template>
  <div class='careers--detail'>
    <template v-if="isEnglish">
      <div class="under-construction"><p>under construction</p></div>
    </template>
    <template v-else>
    <section class='l-section head'>
      <div class='l-section__inner js-lazyclass'>
        <h2>{{ career.title }}</h2>
        <h3 v-if="career.content" v-html="career.content"></h3>
      </div>
    </section>

    <section class='l-section'>
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>業務内容</h2>
            <p v-html="career.occupation_detail"></p>
          </div>
        </div>
      </div>
    </section>

    <section class='l-section' v-if="career.members.length > 0">
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>メンバー</h2>
          </div>
          <ul class="member-list">
            <li v-for="(m, i) in career.members" :key="i">
              <a :href="m.url" target="_blank" ref="noopener noreferrer">
                <img :src="m.img" />
                <p>{{ m.title }}</p>
                <p><small>{{ m.subtext }}</small></p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class='l-section' v-if="career.occupation_experience">
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>この職種を通して得られる経験</h2>
            <p v-html="career.occupation_experience"></p>
          </div>
        </div>
      </div>
    </section>


    <section class='l-section'>
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>応募に必要なスキル</h2>
            <p><b>必須スキル</b></p>
            <p v-html="career.occupation_required_skills"></p>
            <br />
            <p><b>歓迎するスキル</b></p>
            <p v-html="career.occupation_welcome_skills"></p>
          </div>
        </div>
      </div>
    </section>

    <section class='l-section' v-if="career.occupation_personality">
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>歓迎する人柄</h2>
            <p v-html="career.occupation_personality"></p>
          </div>
        </div>
      </div>
    </section>

    <section class='l-section' v-if="career.occupation_environment">
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>quantumの働く環境</h2>
            <p v-html="career.occupation_environment"></p>
          </div>
        </div>
      </div>
    </section>

    <section class='l-section' v-if="career.occupation_holiday">
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>quantumの休日・休暇</h2>
            <p v-html="career.occupation_holiday"></p>
          </div>
        </div>
      </div>
    </section>

    <section class='l-section' v-if="career.occupation_workstyle">
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>働き方</h2>
            <p v-html="career.occupation_workstyle"></p>
          </div>
        </div>
      </div>
    </section>

    <section class='l-section'>
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>契約形態</h2>
            <p v-html="career.occupation_contract"></p>
          </div>
        </div>
      </div>
    </section>

    <section class='l-section'>
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>給与</h2>
            <p v-html="career.occupation_salary"></p>
          </div>
        </div>
      </div>
    </section>

    <section class='l-section'>
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>選考プロセス</h2>
            <p v-html="career.occupation_selection"></p>
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
            <p class="link-apply"><span>wantedly<span>　 ⇒　</span></span><a :href="career.occupation_wantedly_url" target="_blank" ref="noopener noreferrer">{{ career.occupation_wantedly_url }}</a></p>
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
import Init from '~/javascripts/init';
import Logo from '~/components/Logo';
import { gsap } from 'gsap';
import _each from 'lodash/each'
import ContactLink from '~/components/partial/ContactLink';
export default {
  name: 'index.vue',
  scrollToTop: true,
  components: {
    ContactLink,
    Logo
  },
  async asyncData({ app, store, route }) {
    let {data} = await app.$axios.get(store.getters.apiPath({
      type: 'career_detail',
      lang: store.state.lang,
      id: route.query.id,
    }));
    
    let career = null
    if (data && data.acf) {
      career = {
        title: data.title.rendered,
        content: data.content.rendered,
        members: [],
        ...data.acf
      }

      for (let i = 1; i < 4; i++) {
        const img = career['occupation_member_img_'+i]
        const title = career['occupation_member_title_'+i]
        const subtext = career['occupation_member_subtext_'+i]
        const url = career['occupation_member_url_'+i]
        if (img && title) {
          career.members.push({img, title, subtext, url})
        }
      }

    }
    // console.log('career',career)
    return {
      career
    }
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
  mounted() {
    this.$nextTick(() => {
      gsap.delayedCall(0.1, () => {
        Init.setup(this.$store)
      })
    })
    console.log('init')
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
        white-space: pre-wrap;
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