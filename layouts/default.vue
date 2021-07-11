<template>
  <div class="is-flex is-flex-direction-column is-justify-content-space-between is-family-monospace bg-dark">
    <LangSwitch />
    <Nav />
    <nuxt />
    <Footer />
    <Cookies />
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        }
      ]
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: 'is-relative'
      }
    }
  }
}
</script>

<style lang="scss">
  // global styling
  body {
    padding-top: 0 !important; // buefy fixed nav fix
  }

  @media (max-width: 992px) {
    // fixes disappearing padding in bulma elements
    .mobile-padding {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
</style>
