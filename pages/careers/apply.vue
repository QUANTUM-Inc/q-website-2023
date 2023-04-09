<template>
  <section class='l-section contact l-contact'>
    <div class='l-section__inner js-lazyclass'>
      <h2>応募フォーム</h2>
      <p class='l-section__body' v-if='!isEnglish'>下記フォームよりエントリーください。</p>
      <p class='l-section__body' v-if='isEnglish'>Please use the form below for entry.</p>
      <form ref='form'>
        <div class='l-contact'>
          <div class='l-contact__group info-area'>
            <div class='l-contact__set type-text'>
              <p class='l-contact__itemname'><span v-if='!isEnglish'>姓 ｜ </span>last name <br><span ref='error_last_name' class='error_last_name l-contact__error'></span></p>
              <input type='text' id='input-last-name' name='last-name' value='' ref='lastname' :readonly="isConfirm">
            </div>
            <div class='l-contact__set type-text'>
              <p class='l-contact__itemname'><span v-if='!isEnglish'>名 ｜ </span>first name <br><span ref='error_first_name' class='error_first_name l-contact__error'></span></p>
              <input type='text' id='input-first-name' name='first-name' value='' ref='firstname' :readonly="isConfirm">
            </div>
            <div class='l-contact__set type-text'>
              <p class='l-contact__itemname'><span v-if='!isEnglish'>メールアドレス ｜ </span>e-mail <br><span ref='error_email' class='error_email l-contact__error'></span></p>
              <input type='email' id='input-company' name='email' value='' ref='email' :readonly="isConfirm">
            </div>
          </div>

          <div class='l-contact__group'>
            <div class='l-contact__group radio-area'>
              <p class='l-contact__itemname' v-if='!isEnglish'>カジュアル面談希望 <span class='error_casual_interview l-contact__error' ref='error_casual_interview'></span></p>
              <p class='l-contact__itemname' v-if='isEnglish'>Request a casual interview <span class='error_casual_interview l-contact__error' ref='error_casual_interview'></span></p>
              <div class="radio-row">
                <div class='l-contact__set type-radio'>
                  <input type='radio' id='casual-interview1' name='casual-interview' value='あり' ref='casualInterview1' v-model='casualInterview' v-if='!isEnglish' :readonly="isConfirm">
                  <input type='radio' id='casual-interview1-e' name='casual-interview' value='Yes' ref='casualInterview1' v-model='casualInterview' v-if='isEnglish' :readonly="isConfirm">
                  <label for='casual-interview1' v-if='!isEnglish'>あり</label>
                  <label for='casual-interview1-e' v-if='isEnglish'>Yes</label>
                </div>
                <div class='l-contact__set type-radio'>
                  <input type='radio' id='casual-interview2' name='casual-interview' value='なし' ref='casualInterview2' v-model='casualInterview' v-if='!isEnglish' :readonly="isConfirm">
                  <input type='radio' id='casual-interview2-e' name='casual-interview' value='No' ref='casualInterview2' v-model='casualInterview' v-if='isEnglish' :readonly="isConfirm">
                  <label for='casual-interview2' v-if='!isEnglish'>なし</label>
                  <label for='casual-interview2-e' v-if='isEnglish'>No</label>
                </div>
              </div>  
            </div>
          </div>

          <div class='l-contact__group'>
            <div class='l-contact__set type-file'>
              <p class='l-contact__itemname'><span v-if='!isEnglish'>ポートフォリオ ｜ </span>portfolio <small>※PDF形式のポートフォリオ(20MBまで)もしくはウェブサイトのURL</small><br><span ref='error_portfolio' class='error_portfolio l-contact__error'></span></p>
              <div class="input-file-group">
                <label class="input-file">
                  PDFをアップロード
                  <input type='file' id='input-portfolio' name='portfolio' ref='portfolio' @change="onUploadFile" :readonly="isConfirm">
                </label>
                <p>{{ uploadedFileName }}</p>
              </div>
            </div>
            <div class='l-contact__set type-text'>
              <p class='l-contact__itemname'><span v-if='!isEnglish'>ウェブサイト ｜ </span>web site URL <br><span ref='error_website' class='error_website l-contact__error'></span></p>
              <input type='text' id='input-website' name='website' value='' ref='website'>
            </div>
          </div>
        </div>

        <div class='contact__1column'>
          <p class='l-contact__itemname'><span v-if='!isEnglish'>最終学歴 ｜ </span>academic history <br><span ref='error_academic_history' class='error_academic_history l-contact__error'></span></p>
          <textarea rows='8' name='academic-history' ref='academicHistory' placeholder="○○○○年○月○日−○○○○年○月○日　□□□□□□□□□□" :readonly="isConfirm"></textarea>
        </div>

        <div class='contact__1column'>
          <p class='l-contact__itemname'><span v-if='!isEnglish'>職務経歴（最新の職歴から） ｜ </span>career history <br><span ref='error_career_history' class='error_career_history l-contact__error'></span></p>
          <textarea rows='8' name='career-history' ref='careerHistory' placeholder="※1000文字" :readonly="isConfirm"></textarea>
        </div>

        <div class='contact__1column'>
          <p class='l-contact__itemname'><span v-if='!isEnglish'>quantumで挑戦したいこと ｜ </span>tell us something you want to challenge at quantum <br><span ref='error_challenge' class='error_challenge l-contact__error'></span></p>
          <textarea rows='8' name='challenge' ref='challenge' placeholder="※1000文字" :readonly="isConfirm"></textarea>
        </div>

        <div class='contact__1column'>
          <p class='l-contact__itemname'><span v-if='!isEnglish'>quantumを知ったきっかけ ｜ </span>tell us how you found out about quantum <br><span ref='error_how_you_found' class='error_how_you_found l-contact__error'></span></p>
          <textarea rows='8' name='how-you-found' ref='howYouFound' :readonly="isConfirm"></textarea>
        </div>

        <div class='contact__1column'>
          <p class='l-contact__itemname'><span v-if='!isEnglish'>その他 ｜ </span>other questions <br><span ref='error_other' class='error_other l-contact__error'></span></p>
          <textarea rows='8' name='other' ref='other' :readonly="isConfirm"></textarea>
        </div>

        <div class='error-area' v-if='isError'>
          <span class='l-contact__error' v-if='!isEnglish'>※未記入の項目があります。</span>
          <span class='l-contact__error' v-if='isEnglish'>※Please fill in the necessary sections.</span>
        </div>
        <div class='error-area' v-if='isError && isErrorPortfolioOrWebsite'>
          <span class='l-contact__error' v-if='!isEnglish'>※ポートフォリオもしくはウェブサイトを入力してください。</span>
          <span class='l-contact__error' v-if='isEnglish'>※Please fill in your portfolio or website.</span>
        </div>
        <div class="l-contact__buttons" v-if="isConfirm">
          <button class='send-button' v-on:click.prevent='submit' :disabled="sending">{{ isEnglish ? 'send' : '送信' }}</button>
          <button class='send-button send-button__modify' v-on:click.prevent='modify'>{{ isEnglish ? 'modify' : '修正' }}</button>
        </div>
        <div class="l-contact__buttons" v-else>
          <button class='send-button' v-on:click.prevent='confirm'>確認</button>
        </div>
        
      </form>
    </div>
  </section>
</template>

<script>
import Init from '../../javascripts/init';
import _each from 'lodash/each'
export default {
  name: 'index.vue',
  scrollToTop: true,
  data() {
    return {
      casualInterview: '',
      subscribe: 'subscribe',
      uploadedFileName: '選択されていません',
      isError: false,
      isConfirm: false,
      sending: false
    }
  },
  head() {
    return {
      title: `${this.$store.state.meta.name}contact`,
      meta: [{hid: 'description',
        name: 'description',
        content: this.isEnglish ? 'Contact us for new business development and inquiries about quantum.' : '新規事業開発のご相談、quantumへのお問い合わせ' },
        this.keywords]
    };
  },
  mounted() {
    Init.setup(this.$store)
    this.casualInterview = this.$refs.casualInterview1.value
  },

  methods: {
    confirm() {
      if (!this.validate()) {
        return
      }
      this.isConfirm = true
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    },
    modify() {
      this.isConfirm = false
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    },
    validate() {
      let lastName = this.$refs.lastname;
      let firstName = this.$refs.firstname;
      let email = this.$refs.email;
      let academicHistory = this.$refs.academicHistory;
      let careerHistory = this.$refs.careerHistory;
      let challenge = this.$refs.challenge;
      let howYouFound = this.$refs.howYouFound;
      let portfolio = this.$refs.portfolio;
      let website = this.$refs.website;
      
      this.isError = false
      if (this.isEmpty(lastName.value, lastName)) {
        this.isError = true
      }
      if (this.isEmpty(firstName.value, firstName)) {
        this.isError = true
      }
      if (this.isEmpty(email.value, email)) {
        this.isError = true
      }
      if (this.isEmpty(academicHistory.value, academicHistory)) {
        this.isError = true
      }
      if (this.isEmpty(careerHistory.value, careerHistory)) {
        this.isError = true
      }
      if (this.isEmpty(challenge.value, challenge)) {
        this.isError = true
      }
      if (this.isEmpty(howYouFound.value, howYouFound)) {
        this.isError = true
      }

      if (portfolio.files.length == 0 && this.isEmpty(website.value, website)) {
        this.isError = true
        this.isErrorPortfolioOrWebsite = true
      }

      if (this.isError) {
        return false
      }
      return true
    },
    submit() {
      if (!this.validate()) {
        return
      }
      let formData = new FormData(this.$refs.form)
      this.sending = true
      let contactFormId = 2277
      if (process.env.WORDPRESS_API_URL == 'https://stg.quantum.f-stg.jp/wp-json') {
        contactFormId = 2289
      }
      this.$axios.post(`${process.env.WORDPRESS_API_URL}/contact-form-7/v1/contact-forms/${contactFormId}/feedback`, formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }).then((response) => {
        console.log(response)
        if (response.data.status === 'mail_sent') {
          this.$router.push({
            path: '/careers/complete'
          })
        } else if (response.data.status === 'validation_failed') {
          _each(response.data.invalid_fields, (field, index) => {
            this.showFailedInfo(field.message, field.idref)
          })
          this.$store.dispatch('app/scrollto', {
            to: '.contact'
          })
        }
        this.sending = false
      }).catch((error) => {
        console.log('ERROR ')
        console.log(error.response)
        this.sending = false
      });
    },
    isEmpty(txt, ref) {
      ref.classList.remove('error')
      if (!txt || txt === '') {
        ref.classList.add('error')
        return true
      }
      return false
    },

    showFailedInfo(message, ref) {
      let _ref = this.$refs[ref]
      if (_ref) {
        _ref.innerHTML = message
      }
    },

    onUploadFile() {
      if (this.$refs.portfolio.files.length > 0 && this.$refs.portfolio.files) {
        this.uploadedFileName = this.$refs.portfolio.files[0].name
      } else {
        this.uploadedFileName = '選択されていません'
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.contact {
  padding-top: 136px;
  padding-bottom: 140px;
  @include mq_sp {
    padding-top: percentage(math.div(150px, $spWidth));
    padding-bottom: percentage(math.div(120px, $spWidth));
  }
  .l-section__body {
    margin-bottom: 80px;
    @include mq_sp {
      margin-bottom: percentage(math.div(45px, $spInner));
    }
  }
  h2 {
    @include mq_sp {
      line-height: 1.2;
      @include spfontsize(32px);
      white-space: nowrap;
    }
  }

  //
  .requirement-area {
    width: percent(math.div(530px, $innerWidth));
    @include mq_sp {
      width: 100%;
    }
  }

  //
  .info-area {
    width: percent(math.div(410px, $innerWidth));
    @include mq_sp {
      width: 100%;
    }
  }

  .radio-area {
    margin-bottom: 25px;
    .l-contact__itemname {
      margin-bottom: 15px;
    }
    .radio-row {
      display: flex;
      .type-radio {
        margin-right: 15px;;
      }
    }
  }

  // Subscribe set
  .subscribe-area {
    margin-bottom: 0;
    @include mq_sp {
      margin-bottom: percentage(math.div(30px, $spInner));
    }
  }
  .subscribes {
    margin-left: 25px;
    display: flex;
    align-items: center;
    @include mq_sp {
      margin-left: 0;
    }
    .l-contact__set {
      margin-right: 15px;
      margin-bottom: 30px;
      line-height: 1;
      @include mq_sp {
        margin-right: percentage(math.div(20px, $spInner));
        margin-bottom: 0;
      }
    }
  }

  // error
  .error-area {
    margin-bottom: 30px;
    @include mq_sp {
      margin-bottom: percentage(math.div(30px, $spInner));
    }
    .l-contact__error {
      font-size: 18px;
      @include mq_sp {
        @include spfontsize(10px);
      }
    }
  }

  .send-button {
    margin-top: 30px;
    @include mq_sp {
      margin-top: percentage(math.div(30px, $spInner));
    }
    &__modify {
      background-color: #fff;
      color: #000;
    }
  }

}
</style>