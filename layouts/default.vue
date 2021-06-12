<template>
  <div class="is-family-monospace">
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
  // colors
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

  // elements
  .button.is-primary {
    background-color: $orange;
  }

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
