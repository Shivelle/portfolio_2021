<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link
      :to="localePath('/')"
      class="navbar-item">
        <img src="~assets/img/svg/bird.svg" width="80" height="28">
        <div>
          <div class="is-size-4 has-text-weight-bold">Sarah Leidisch</div>
          <div class="is-size-6">Freelancer</div>
        </div>
      </nuxt-link>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="mainNav">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="mainNav" class="navbar-end">
      <div class="navbar-start">
        <nuxt-link
        :to="localePath('blog')"
        class="navbar-item">
          Blog
        </nuxt-link>
        <a class="navbar-item">
          Kontakt
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .navbar {
    background-color: transparent;
    background-image: none;
  }
</style>
