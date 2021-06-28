<template>
  <div class="is-flex is-flex-direction-column is-justify-content-space-between is-family-monospace bg-dark">
    <LangSwitch />
    <Nav />
    <nuxt />
    <Footer />
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
</style>
