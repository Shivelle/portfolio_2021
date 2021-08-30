<template>
  <div id="cookie-box" class="bg-dark-lighter has-text-white has-text-centered p-4">
    {{ $t('consent.description') }}
    <span class="interactions pl-2">
      <nuxt-link
        class="mx-2"
        :to="localePath('datenschutz')"
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
export default {
  mounted () {
    const cookieConsent = document.getElementById('cookie-box')
    const closeBanner = document.getElementById('close-banner')

    if (!document.cookie.includes('consent')) {
      cookieConsent.classList.add('active')
    }

    function saveConsentSettings () {
      document.cookie = 'consent=functionally necessary'
      cookieConsent.classList.remove('active')
    }

    closeBanner.addEventListener('click', saveConsentSettings)
  }
}
</script>
