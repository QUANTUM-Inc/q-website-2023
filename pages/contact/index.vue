<template>
  <section class='l-section contact l-contact'>
    <div class='l-section__inner js-lazyclass'>
      <h2>start a conversation</h2>
      <p class='l-section__body' v-if='!isEnglish'>下記フォームよりお問い合わせください。</p>
      <p class='l-section__body' v-if='isEnglish'>Please use the form below to contact us.</p>
      <form ref='form'>
        <div class='l-contact__2column'>
          <div class='l-contact__group requirement-area'>
            <p class='l-contact__itemname' v-if='!isEnglish'>ご用件 <span class='error_requirement l-contact__error' ref='error_requirement'></span></p>
            <p class='l-contact__itemname' v-if='isEnglish'>Your inquiry <span class='error_requirement l-contact__error' ref='error_requirement'></span></p>
            <div class='l-contact__set type-radio'>
              <input type='radio' id='requirement1' name='requirement' value='共同開発や新規事業についてのお問い合わせ' ref='requirement1' v-model='requirement' v-if='!isEnglish'>
              <input type='radio' id='requirement1e' name='requirement' value='Inquiry about joint development or new business' ref='requirement1' v-model='requirement' v-if='isEnglish'>
              <label for='requirement1' v-if='!isEnglish'>共同開発や新規事業についてのお問い合わせ</label>
              <label for='requirement1e' v-if='isEnglish'>Inquiry about joint development or new business</label>
            </div>

            <div class='l-contact__set type-radio'>
              <input type='radio' id='requirement2' name='requirement' value='投資についてのお問い合わせ' v-model='requirement' v-if='!isEnglish'>
              <input type='radio' id='requirement2e' name='requirement' value='Inquiries about investments' v-model='requirement' v-if='isEnglish'>
              <label for='requirement2' v-if='!isEnglish'>投資についてのお問い合わせ</label>
              <label for='requirement2e' v-if='isEnglish'>Inquiries about investments</label>
            </div>

            <div class='l-contact__set type-radio'>
              <input type='radio' id='requirement3' name='requirement' value='取材依頼、講演依頼、その他広報関連のお問い合わせ' v-model='requirement' v-if='!isEnglish'>
              <input type='radio' id='requirement3e' name='requirement' value='Requests for interviews, lectures, and other PR-related inquiries' v-model='requirement' v-if='isEnglish'>
              <label for='requirement3' v-if='!isEnglish'>取材依頼、講演依頼、その他広報関連のお問い合わせ</label>
              <label for='requirement3e' v-if='isEnglish'>Requests for interviews, lectures, and other PR-related inquiries</label>
            </div>

            <div class='l-contact__set type-radio'>
              <input type='radio' id='requirement4' name='requirement' value='採用、その他キャリアに関するお問い合わせ' v-model='requirement' v-if='!isEnglish'>
              <input type='radio' id='requirement4e' name='requirement' value='Inquiries about recruitment and other career-related matters' v-model='requirement' v-if='isEnglish'>
              <label for='requirement4' v-if='!isEnglish'>採用、その他キャリアに関するお問い合わせ</label>
              <label for='requirement4e' v-if='isEnglish'>Inquiries about recruitment and other career-related matters</label>
            </div>

            <div class='l-contact__set type-radio'>
              <input type='radio' id='requirement5' name='requirement' value='上記以外のお問い合わせ' v-model='requirement' v-if='!isEnglish'>
              <input type='radio' id='requirement5e' name='requirement' value='Inquiries other than the above' v-model='requirement' v-if='isEnglish'>
              <label for='requirement5' v-if='!isEnglish'>上記以外のお問い合わせ</label>
              <label for='requirement5e' v-if='isEnglish'>Inquiries other than the above</label>
            </div>
          </div>


          <div class='l-contact__group info-area'>
            <div class='l-contact__set type-text'>
              <p class='l-contact__itemname'><span v-if='!isEnglish'>お名前 ｜ </span>your name <br><span ref='error_name' class='error_name l-contact__error'></span></p>
              <input type='text' id='input-name' name='your-name' value='' ref='yourname'>
            </div>

            <div class='l-contact__set type-text'>
              <p class='l-contact__itemname'><span v-if='!isEnglish'>貴社名・ご所属 ｜ </span>your company <br><span ref='error_company' class='error_company l-contact__error'></span></p>
              <input type='text' id='input-company' name='your-company' value='' ref='yourcompany'>
            </div>

            <div class='l-contact__set type-text'>
              <p class='l-contact__itemname'><span v-if='!isEnglish'>メールアドレス ｜ </span>e-mail<br><span ref='error_email' class='error_email l-contact__error'></span></p>
              <input type='email' id='input-mail' name='your-email' value='' ref='youremail'>
            </div>
          </div>
        </div>

        <div class='contact__1column'>
          <p class='l-contact__itemname'><span v-if='!isEnglish'>メッセージ ｜ </span>message <br><span ref='error_message' class='error_message l-contact__error'></span></p>
          <textarea rows='8' name='your-message' ref='yourmessage'>

          </textarea>
          <p class='l-contact__itemname' v-if='!isEnglish'>quantumの関連事業や、メンバーの執筆記事などの最新情報をメールマガジン「q letter」としてお届けしています。（月に１、２回程度の配信です。）ご購読ご希望の方は以下より、お申し込みください。</p>
          <p class='l-contact__itemname' v-if='isEnglish'>We provide the latest information on quantum's related businesses and articles written by our members in our email newsletter "q letter". (The newsletter is distributed about once or twice a month) If you would like to subscribe, please click below.</p>
        </div>

        <div class='l-contact__2column type-left subscribe-area'>
          <div class='l-contact__group'>
            <p class='l-contact__itemname' v-if='!isEnglish'>quantumからのお知らせを受け取る</p>
            <p class='l-contact__itemname' v-if='isEnglish'> Receive newsletter from quantum</p>
          </div>
          <div class='l-contact__group subscribes'>
            <div class='l-contact__set type-checkbox'>
              <input type='checkbox' id='subscribe' name='subscribe' value='subscribe' v-model='subscribe'>
              <label for='subscribe'><span v-if='!isEnglish'>購読する ｜ </span>subscribe</label>
            </div>
  <!--          <div class='l-contact__set type-radio'>
              <input type='radio' id='unsubscribe' name='subscribe' value='unsubscribe' v-model='subscribe'>
              <label for='unsubscribe'>unsubscribe</label>
            </div>-->
          </div>
        </div>

        <div class='error-area' v-if='isError'>
          <span class='l-contact__error' v-if='!isEnglish'>※未記入の項目があります。</span>
          <span class='l-contact__error' v-if='isEnglish'>※Please fill in the necessary sections.</span>
        </div>

        <button class='send-button' v-on:click.prevent='submit'>send</button>
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
      requirement: '',
      subscribe: 'subscribe',
      isError: false
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
    this.requirement = this.$refs.requirement1.value
  },

  methods: {
    submit() {
      let yourName = this.$refs.yourname;
      let yourCompany = this.$refs.yourcompany;
      let yourEmail = this.$refs.youremail;
      let yourMessage = this.$refs.yourmessage;

      this.isError = false
      if (this.isEmpty(yourName.value, yourName)) {
        this.isError = true
      }
      if (this.isEmpty(yourCompany.value, yourCompany)) {
        this.isError = true
      }
      if (this.isEmpty(yourEmail.value, yourEmail)) {
        this.isError = true
      }
      if (this.isEmpty(yourMessage.value, yourMessage)) {
        this.isError = true
      }

      if (this.isError) {
        /*this.$store.dispatch('app/scrollto', {
          to: '.contact'
        })*/
        return
      }

      /*console.log('yourName: ' + yourName.value)
      console.log('yourCompany: ' + yourCompany.value)
      console.log('yourEmail: ' + yourEmail.value)
      console.log('yourMessage: ' + yourMessage.value)
      console.log("requirement: " + this.requirement)
      console.log("subscribe: " + this.subscribe)*/

      let formData = new FormData(this.$refs.form)
      /*
      {
        'your-name': yourName.value,
        'your-company': yourCompany.value,
        'your-email': yourEmail.value,
        'your-message': yourMessage.value,
        'requirement': this.requirement,
        'subscribe': this.subscribe,
      }
       */
      /*console.log(this.$refs.form)
      console.log(formData.get('your-name'))
      console.log(formData.get('your-company'))
      console.log(formData.get('your-email'))
      console.log(formData.get('your-message'))
      console.log(formData.get('requirement'))
      console.log(formData.get('subscribe'))*/

      this.$axios.post(`${process.env.WORDPRESS_API_URL}/contact-form-7/v1/contact-forms/108/feedback`, formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }).then((response) => {
        //console.log(response)
        //console.log(response.data)
        if (response.data.status === 'mail_sent') {
          this.$router.push({
            path: 'contact/complete/'
          })
        } else if (response.data.status === 'validation_failed') {
          _each(response.data.invalid_fields, (field, index) => {
            this.showFailedInfo(field.message, field.idref)
          })
          this.$store.dispatch('app/scrollto', {
            to: '.contact'
          })
        }
      }).catch((error) => {
        console.log('ERROR ')
        console.log(error.response)
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
  }


}
</style>