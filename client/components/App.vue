<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<style>
html, body {
  font-family: "Lato", sans-serif !important;
}
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

