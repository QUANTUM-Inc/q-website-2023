<template>
  <section class='l-section qletter l-contact'>
    <div class='l-section__inner js-lazyclass'>
      <h2>q letter</h2>
      <p class='l-section__body' v-if='!isEnglish'>quantumの関連事業やメンバーの執筆記事などの最新情報を月１回程度レター形式でお届けしています。<br>購読／購読解除のご希望は、下記よりお願いします。</p>
      <p class='l-section__body' v-if='isEnglish'>We deliver the latest information about quantum related projects and articles written by our members once a month in the form of a letter.<br>
        If you would like to subscribe or unsubscribe, please click below.</p>
      <form ref='form'>
        <div class='l-contact__2column'>
          <div class='contact__group info-area'>
            <div class='l-contact__set type-text'>
              <p class='l-contact__itemname'><span v-if='!isEnglish'>お名前 ｜ </span>your name<br><span ref='error_name' class='error_name l-contact__error'></span></p>
              <input type='text' id='input-name' name='your-name' value='' ref='yourname'>
            </div>

            <div class='l-contact__set type-text'>
              <p class='l-contact__itemname'><span v-if='!isEnglish'>貴社名・ご所属 ｜ </span>your company<br><span ref='error_company' class='error_company l-contact__error'></span></p>
              <input type='text' id='input-company' name='your-company' value='' ref='yourcompany'>
            </div>

            <div class='l-contact__set type-text'>
              <p class='l-contact__itemname'><span v-if='!isEnglish'>メールアドレス ｜ </span>e-mail<br><span ref='error_email' class='error_email l-contact__error'></span></p>
              <input type='email' id='input-mail' name='your-email' value='' ref='youremail'>
            </div>
          </div>

          <div class='contact__group subscribe-area'>
            <div>
              <div class='l-contact__set type-radio'>
                <input type='radio' id='subscribe' name='subscribe' value='subscribe' v-model='subscribe'>
                <label for='subscribe'><span v-if='!isEnglish'>購読する ｜ </span>subscribe</label>
              </div>
              <div class='l-contact__set type-radio'>
                <input type='radio' id='unsubscribe' name='subscribe' value='unsubscribe'>
                <label for='unsubscribe'><span v-if='!isEnglish'>購読解除する ｜ </span>unsubscribe</label>
              </div>
            </div>

            <div class='error-area' v-if='isError'>
              <span class='l-contact__error' v-if='!isEnglish'>※未記入の項目があります。</span>
              <span class='l-contact__error' v-if='isEnglish'>※Please fill in the necessary sections.</span>
            </div>
            <button class='send-button' v-on:click.prevent='submit'>send</button>
          </div>
        </div>
      </form>

    </div>
  </section>
</template>

<script>
import Init from '../../javascripts/init';
import _each from 'lodash/each';

export default {
  name: 'index.vue',
  scrollToTop: true,
  data() {
    return {
      subscribe: 'subscribe',
      isError: false
    }
  },
  head() {
    return {
      title: `${this.$store.state.meta.name}q letter`,
      meta: [{hid: 'description',
        name: 'description',
        content: this.isEnglish ? 'We send out a letter once a month with the latest information on quantum related projects and articles written by our members.' : 'quantumの関連事業やメンバーの執筆記事などの最新情報を月１回程度レター形式でお届けしています。購読／購読解除のご希望は、下記よりお願いします' },
        this.keywords]
    };
  },
  mounted() {
    Init.setup(this.$store)
  },

  methods: {
    submit() {
      let yourName = this.$refs.yourname;
      let yourCompany = this.$refs.yourcompany;
      let yourEmail = this.$refs.youremail;

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

      if (this.isError) {
        this.$store.dispatch('app/scrollto', {
          to: '.contact'
        })
        return
      }
      /*console.log('yourName: ' + yourName.value)
      console.log('yourCompany: ' + yourCompany.value)
      console.log('yourEmail: ' + yourEmail.value)*/

      let formData = new FormData(this.$refs.form)
      this.subscribe = formData.get('subscribe');
      this.$axios.post(`${process.env.WORDPRESS_API_URL}/contact-form-7/v1/contact-forms/1189/feedback`, formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }).then((response) => {
        if (response.data.status === 'mail_sent') {
          if (this.subscribe === 'subscribe') {
            this.$router.push({
              path: 'qletter/complete/'
            })
          } else {
            this.$router.push({
              path: 'qletter/unsubscribe/'
            })
          }

        } else if (response.data.status === 'validation_failed') {
          _each(response.data.invalid_fields, (field, index) => {
            this.showFailedInfo(field.message, field.idref)
          })
          this.$store.dispatch('app/scrollto', {
            to: '.contact'
          })
        }
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
}
</script>

<style lang='scss' scoped>
.qletter {
  padding-top: 140px;
  padding-bottom: 140px;
  @include mq_sp {
    padding-top: percentage(math.div(140px, $spWidth));
    padding-bottom: percentage(math.div(120px, $spWidth));
  }
}
.info-area {
  margin-top: 55px;
  width: percentage(math.div(410px, $innerWidth));
  @include mq_sp {
    margin-top: percentage(math.div(30px, $spInner));
    width: 100%;
  }
  .l-contact__set {
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.subscribe-area {
  width: percent(math.div(510px, $innerWidth));
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @include mq_sp {
    width: 100%;
    margin-top: percentage(math.div(60px, $spInner));
  }

  .error-area {
    margin-top: 50px;
    @include mq_sp {
      margin-top: percentage(math.div(30px, $spInner));
    }
  }
  .l-contact__error {
    font-size: 18px;

    @include mq_sp {
      margin-top: percentage(math.div(30px, $spInner));
      @include spfontsize(10px);
    }
  }
}

.send-button {
  @include mq_sp {
    margin-top: percentage(math.div(40px, $spInner));
  }
}
</style>