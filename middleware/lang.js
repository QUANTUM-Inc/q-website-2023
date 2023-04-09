export default function({params: { lang }, store }) {
  store.commit('lang', { lang })
}