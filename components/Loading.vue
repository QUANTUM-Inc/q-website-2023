<template>
  <div class='loading' v-if='loading'>
    <div class='loading__overlay' ref='overlay'></div>
    <div class='bar' ref='bar'></div>
  </div>
</template>

<script>
import { gsap, Expo, Quint } from 'gsap';
export default {
  name: 'Loading.vue',
  data: () => {
    return {
      loading: false
    }
  },
  methods: {
    start() {
      this.loading = true;

      this.$nextTick(() => {
        let overlay = this.$refs.overlay;
        gsap.fromTo(overlay, {
            opacity: 0,
            scaleY: 1
          },
          {
            opacity: 1,
            delay: 0.03,
            duration: 0.4,
            ease: Expo.easeOut
          })
      })

    },
    finish() {
      let overlay = this.$refs.overlay;
      gsap.to(overlay, {
        scaleY: 0,
        opacity: 0,
        duration: 0.3,
        delay: 0.02,
        ease: Expo.easeOut,
        onComplete: () => {
          this.loading = false;
        }
      })
    },
    increase(num) {
      let bar = this.$refs.bar;
      gsap.to(bar, {
        scaleX: num / 100,
        duration: 0.05,
        ease: Quint.easeOut
      })
    }
  }
};
</script>

<style scoped lang='scss'>
.loading {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
}
.loading__overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: 0 0;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.7);
}
.bar {
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: 0 0;
  width: 100%;
  height: 4px;
  background: #000;
}

//Enter
.loading-enter {
  transform: scale(0, 1);
}
.loading-enter-active {
  transform: scale(1, 1);
}
.loading-enter-to {
  transform: scale(1, 1);
}

//Enter
.loading-leave {
  transform: scale(1, 1);
}
.loading-leave-active {
  transform: scale(0, 1);
}
.loading-leave-to {
  transform: scale(0, 1);
}
</style>