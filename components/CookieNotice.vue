<template>
  <div id="cookie-consent" class="cookie-consent bg-dark-lighter has-text-white has-text-centered p-4">
    {{ $t('consent.description') }}
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

<script>
const cookieConsent = document.getElementById('cookie-consent')
const closeBanner = document.getElementById('close-banner')

function closeConsentBanner () {
  cookieConsent.classList.add('disabled')
}

closeBanner.addEventListener('click', closeConsentBanner())

</script>

<style lang="scss" scoped>
  .cookie-consent {
    position: fixed;
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;

    &.disabled {
      display: none;
    }
  }
</style>
