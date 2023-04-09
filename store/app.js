export const state = () => ({
  // アプリ状態
  status: {
    scrollto: '',
    scroll: 0,
    prevScroll: 0,
    headerMode: 'white',
    naviOpened: false,
    isScrolled: false,
  }
});


export const getters = {
  headerMode:(state, getters) => {
    return state.status.headerMode
  }
}

export const mutations = {
  toggleNavi(state) {
    state.status.naviOpened = !state.status.naviOpened;
  },
  closeNavi(state) {
    state.status.naviOpened = false
  },
  scrollto(state, to) {
    state.status.scrollto = to;
  },
  scrolled(state, isScrolled) {
    state.status.isScrolled = isScrolled;
  },
  scroll(state, scroll) {
    state.status.prevScroll = state.status.scroll;
    state.status.scroll = scroll;
  }
}

export const actions = {
  toggleNavi({commit, state}, payload) {
    commit('toggleNavi');
  },
  closeNavi({commit, state}, payload) {
    commit('closeNavi');
  },
  scrollto({commit, state}, payload) {
    commit('scrollto', payload.to)
  },
  scrolled({commit, state}, payload) {
    commit('scrolled', payload.scrolled)
  },
  scroll({commit, state}, payload) {
    commit('scroll', payload.scroll)
  }
}