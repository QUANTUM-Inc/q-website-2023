import {gsap} from "gsap";
import _each from 'lodash/each'

export default class Parallax {
    constructor() {
        this.setup()
        this.setupLazyClass()
    }

    setup() {
        let bgparallaxes = document.querySelectorAll('.js-bgparallax');
        let parallaxes = document.querySelectorAll('.js-parallax');
        _each(bgparallaxes, (elm, index) => {
            let __target = elm.getAttribute('data-trigger') || elm;
            let __start = elm.getAttribute('data-start') || 'top 100%';
            let __end = elm.getAttribute('data-end') || 'top -100%';
            let __from = elm.getAttribute('data-from') || '0 0%';
            let __to = elm.getAttribute('data-to') || '0 100%';
            let __scrub = elm.getAttribute('data-scrub') || '1.1';

            gsap.fromTo(elm, {
                    backgroundPosition: __from
                },
                {
                    scrollTrigger: {
                        trigger: __target,
                        start: __start,
                        end: __end,
                        scrub: parseFloat(__scrub, 10)
                    },
                    backgroundPosition: __to
                })
        })

        _each(parallaxes, (elm, index) => {
            let __target = elm.getAttribute('data-trigger') || elm;
            let __start = elm.getAttribute('data-start') || 'top 100%';
            let __end = elm.getAttribute('data-end') || 'top -100%';
            let __from = elm.getAttribute('data-from') || '-100%';
            let __to = elm.getAttribute('data-to') || '100%';
            let __scrub = elm.getAttribute('data-scrub') || '1.8';
            gsap.fromTo(elm, {
                    y: __from,
                },
                {
                    scrollTrigger: {
                        trigger: __target,
                        start: __start,
                        end: __end,
                        scrub: parseFloat(__scrub, 10)
                    },
                    y: __to,
                })
        })
    }

    setupLazyClass() {
        let picts = document.querySelectorAll('.js-lazyclass')
        _each(picts, (elm, index) => {
            let _start = elm.getAttribute('data-start') || 'top 80%'
            let _delay = elm.getAttribute('data-delay') || 0
            gsap.to(elm, {
                scrollTrigger: {
                    trigger: elm,
                    start: _start,
                    once: false,
                    reverse: true,
                    onEnter: () => {
                        gsap.delayedCall(_delay, () => {
                            elm.classList.add('appear')
                        })
                    },
                    /*onLeaveBack: () => {
                        elm.classList.remove('appear')
                    }*/
                }
            })
        });

    }
}