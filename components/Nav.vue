<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link
      :to="localePath('/')"
      class="navbar-item">
        <img src="~assets/img/svg/bird.svg" width="112" height="28">
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
