
import { gsap, Quint } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import { SplitText } from 'gsap/dist/SplitText';
import Parallax from './parallax';
class Init {
  constructor() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(SplitText);
    //this.setup()
  }
  setup(store) {
    new Parallax();
    this.store = store;
    if (!this.store) {
      return
    }
    if (!this.unsubscribe) {
      this.unsubscribe = this.store.subscribe((mutation, state) => {
        if (mutation.type === 'app/scrollto') {
          let dom = document.querySelector(state.app.status.scrollto);
          //console.log(dom)
          if (dom) {
            gsap.to(window, {
              duratino: 0.8,
              delay: 0.1,
              ease: Quint.easeInOut,
              scrollTo: dom
            });
          }

        }
      })
    }
  }
}

let instance = new Init();
export default instance