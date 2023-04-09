const newData = (data, { lang, defaultLang }) => {
  const to = data.attrs.to
  const currentLang = (to && to.params && to.params.lang) || lang
  if (currentLang && currentLang !== defaultLang) {
    to.name = `lang-${to.name}`
  }
  return data
}

export default {
  name: 'lang-link',
  functional: true,
  render(h, {data, children, parent}) {
    return h('nuxt-link', newData(data, parent.$store.state), children)
  }
}