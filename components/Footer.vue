<template>
  <section class="fullpage">
    <footer class="footer bg-dark">
      <div class="content has-text-centered has-text-white">
        <p>
          Made with ❤️ by <a href="https://github.com/Shivelle" target="_blank">Sarah Maria Leidisch</a>.
        </p>
        <p>
          <nuxt-link
            :to="localePath('imprint')"
            class="has-text-white"
          >
            {{ $t('imprint') }}
          </nuxt-link>
          <span class="px-4">|</span>
          <nuxt-link
            :to="localePath('data-protection')"
            class="has-text-white"
          >
            {{ $t('data-protection') }}
          </nuxt-link>
        </p>
      </div>
    </footer>
    <CookieConsent />
  </section>
</template>

<style lang="scss" scoped>
  section.fullpage {
    min-height: auto !important;
  }
</style>
