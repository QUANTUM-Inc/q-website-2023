<template>
  <div class="blog" id="blog">
    <div class="interface">
      <TheHeader />
      <the-navi class='header__navi'></the-navi>
      <main role="main">
        <transition name='page'>
          <nuxt />
        </transition>
      </main>
      <TheFooter />
    </div>
    <AcceptCookie />
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader';
import TheNavi from '../components/TheNavi';
import TheFooter from '../components/TheFooter';
import AcceptCookie from '../components/AcceptCookie';

export default {
  components: {
    TheHeader,
    TheNavi,
    TheFooter,
    AcceptCookie
  }
};
</script>
