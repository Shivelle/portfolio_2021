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

    <template #start>
      <div class="level has-text-centered px-6 is-mobile">
        <b-navbar-item href="https://github.com/Shivelle" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" />
        </b-navbar-item>
        <b-navbar-item href="https://codepen.io/Shivelle" target="_blank">
          <font-awesome-icon :icon="['fab', 'codepen']" />
        </b-navbar-item>
        <b-navbar-item href="https://twitter.com/_Shivelle_" target="_blank">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </b-navbar-item>
        <b-navbar-item href="https://www.linkedin.com/in/sarah-maria-leidisch-a7758277/" target="_blank">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </b-navbar-item>
      </div>
    </template>

    <template #end>
      <nuxt-link
        :to="localePath('blog')"
        class="navbar-item has-text-white"
      >
        Blog
      </nuxt-link>
      <nuxt-link
        :to="localePath('/#contact')"
        class="navbar-item has-text-white"
      >
        {{ $t('routes.contact') }}
      </nuxt-link>
    </template>
  </b-navbar>
</template>

<style lang="scss" scoped>
  .navbar-brand img {
    transform: scale(1.4);
  }

  @media (min-width: 920px) {
    .navbar.is-transparent {
      background-color: transparent;
    }
  }

  @media (max-width: 920px) {
    .navbar.is-transparent {
      padding: 1rem;

      .navbar-burger {
        margin: 1.6rem 1.6rem 1.6rem auto;
      }

      .navbar-end {
        padding: 3rem !important;

        .navbar-item {
          padding: 2rem;
        }
      }
    }
  }
</style>
