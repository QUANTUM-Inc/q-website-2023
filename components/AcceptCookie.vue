<template>
  <div class="accept-cookie" v-if="!isHidden">
    <div class="accept-cookie__inner">
      <p v-if="!isEnglish">当社では、お客様のウェブサイト利用状況を分析するため、Cookieを利用して一定の情報を取得します。<br />
      「すべての Cookie を受け入れる」をクリックすると、サイトの使用状況を分析し、弊社のマーケティング
      活動を支援するために、デバイスに Cookie を保存することに同意したことになります。</p>
      <p v-if="isEnglish">We use cookies to obtain certain information in order to analyze your use of our website. <br />
By clicking “accept all cookies” you agree to allow us to store cookies on your device in order to <br />
analyze site usage and to support our marketing efforts.</p>
      <div class="accept-cookie__buttons">
        <button class="btn-accept" v-if="!isEnglish" @click="accept">すべてのCookieを受け入れる</button>
        <button class="btn-accept" v-if="isEnglish" @click="accept">accept all cookies</button>
        <button class="btn-deny" v-if="!isEnglish" @click="showPrivacy">Cookieの設定およびクッキーポリシー</button>
        <button class="btn-deny" v-if="isEnglish" @click="showPrivacy">cookie settings and cookie policy</button>
      </div>
    </div>
    <button class="btn-close" @click="isHidden = true"></button>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      isHidden: localStorage.getItem('acceptCookie') || false,
    }
  },
  methods: {
    accept() {
      localStorage.setItem('acceptCookie', true)
      this.isHidden = true
    },

    showPrivacy() {
      this.$router.push({
        name: 'privacy',
        params: {
          lang: this.lang
        }
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.accept-cookie {
  background-color: #fff;
  position: fixed;
  z-index: 999999;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  &__inner {
    padding: 60px 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    @include mq_sp {
      padding: 40px 25px;
      display: block;
    }
    p {
      max-width: 520px;
    }
  }
  &__buttons {
    display: flex;
    align-items: center;
    @include mq_sp {
      flex-direction: column;
      justify-content: center;
    }
    button {
      font-size: 12px;
      @include mq_sp {
        width: 80%;
        text-align: center;
      }
      &.btn-accept {
        color: #707070;
        @include mq_sp {
          margin-top: 20px;
        }
      }
      &.btn-deny {
        background-color: #707070;
        color: #fff;
        margin-left: 20px;
        @include mq_sp {
          margin: 0;
          margin-top: 10px;;
        }
      }
    }
  }
  .btn-close {
    position: absolute;
    width: 30px;
    height: 30px;
    right: 20px;
    top: 20px;
    padding: 0;
    background-color: transparent;
    @include mq_sp {
      width: 20px;
      height: 20px;
      right: 15px;
      top: 15px;
    }
    &::before, &::after {
      content: '';
      display: block;
      position: absolute;
      width: 30px;
      height: 0;
      border-top: 2px solid #000;
      transform: rotate(45deg);
      left: 0;
      @include mq_sp {
        width: 20px;
      }
    }
    &::after {
      transform: rotate(-45deg);
    }
  }
}
</style>