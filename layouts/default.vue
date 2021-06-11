<template>
  <div class="is-family-monospace bg-dark">
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
  }
}
</script>

<style lang="scss">
  // global styling
  $dark: #272727;
  $orange: #ffa726;

  .bg-dark {
    background-color: $dark;
  }

  .bg-dark-light {
    background-color: rgba($dark, 0.5);
  }

  .bg-orange {
    background-color: $orange;
  }

  .txt-orange {
    color: $orange;
  }
</style>
