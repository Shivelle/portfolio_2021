<template>
  <b-navbar
    :fixed-top="true"
    :transparent="true"
    :spaced="true"
  >
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="~assets/img/svg/bird.svg" width="80" height="28">
        <div class="has-text-white">
          <h4 class="is-size-4 has-text-weight-bold">
            Sarah Leidisch
          </h4>
          <h5 class="is-size-6">
            Freelancer
          </h5>
        </div>
      </b-navbar-item>
    </template>

    <template #end>
      <nuxt-link
        :to="localePath('blog')"
        class="navbar-item has-text-white"
      >
        Blog
      </nuxt-link>
      <a class="navbar-item has-text-white">
        Kontakt
      </a>
    </template>
  </b-navbar>
</template>

<style lang="scss" scoped>
  nav.navbar.is-fixed-top {
    background: transparent;
  }

  .navbar-brand img {
    transform: scale(1.4);
  }
</style>
