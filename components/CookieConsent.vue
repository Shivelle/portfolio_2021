<template>
  <div class="cookie-consent bg-dark-lighter has-text-white has-text-centered p-4">
    Auf dieser Webseite werden nur technisch relevante Cookies verwendet.
    <span class="interactions pl-4">
      <nuxt-link
        :to="localePath('data-protection')"
      >
        {{ $t('data-protection') }}
      </nuxt-link>
      <button id="close-banner" class="button is-primary is-light">
        Cool!
      </button>
    </span>
  </div>
</template>

<style lang="scss" scoped>
  .cookie-consent {
    position: fixed;
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>
