<template>
  <nav class="navbar is-light is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        k12.nedpals.xyz
      </a>

      <button class="button navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  created() {
    document.getElementsByTagName("html")[0].className = "has-navbar-fixed-top"
  }
}
</script>

<style>
.navbar.is-fixed-top {
  z-index: 19 !important;
}
</style>
