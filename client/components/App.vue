<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
html, body {
  font-family: "Lato", sans-serif !important;
}

@import "~bulma/sass/utilities/_all";
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>

<script>
const Navbar = () => import(/* webpackChunkName: "navbar" */ 'components/Navbar')
export default {
  metaInfo: {
    titleTemplate: (titleChunk) => { return titleChunk ? `${titleChunk} - K12 SHS Finder` : 'K12 SHS Finder' },
    link: [
      { rel: 'stylesheet', href: 'https://brick.a.ssl.fastly.net/Lato:400' }
    ]
  },
  components: {
    Navbar
  }
}
</script>

