<template>
  <ul class="lang-switch is-size-5 has-text-weight-semibold px-6 py-5">
    <li v-if="$i18n.locale !== 'en'">
      <nuxt-link :to="switchLocalePath('en')">
        EN
      </nuxt-link>
    </li>
    <li v-if="$i18n.locale !== 'de'">
      <nuxt-link :to="switchLocalePath('de')">
        DE
      </nuxt-link>
    </li>
  </ul>
</template>

<style lang="scss">
  .lang-switch {
    display: inline;
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 3;

    a {
      color: $orange;
    }
  }
</style>
