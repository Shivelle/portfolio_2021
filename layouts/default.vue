<template>
  <div class="is-family-monospace bg-dark">
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

  // elements
  .vertical-title {
    position: absolute;
    white-space: nowrap;
    width: 0;
    top: -0.55rem;
    left: 4.9rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
</style>
