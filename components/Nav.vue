<template>
  <b-navbar
    :fixed-top="true"
    :transparent="true"
  >
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="~assets/img/svg/bird.svg" width="80" height="28">
        <div>
          <div class="is-size-4 has-text-weight-bold">
            Sarah Leidisch
          </div>
          <div class="is-size-6">
            Freelancer
          </div>
        </div>
      </b-navbar-item>
    </template>

    <template #end>
      <nuxt-link
        :to="localePath('blog')"
        class="navbar-item"
      >
        Blog
      </nuxt-link>
      <a class="navbar-item">
        Kontakt
      </a>
    </template>
  </b-navbar>
</template>

<style lang="scss" scoped>
  nav.navbar.is-fixed-top {
    background: transparent;
  }
</style>
