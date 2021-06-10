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

<style scoped>
  .bg-dark {
    background-color: #272727;
  }
</style>
