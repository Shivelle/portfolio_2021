<template>
  <div>
    <Header />
    <div class="container has-text-white py-6 mobile-padding">
      <h3 class="is-size-3 mt-6 mb-2">
        Information according to § 5 TMG
      </h3>
      <p>
        Sarah Maria Leidisch<br>
        Heßheimer Street 8<br>
        67227 Frankenthal
      </p>

      <h3 class="is-size-3 mt-6 mb-2">
        Contact
      </h3>
      <p>
        Phone: +49 (0) 174 33 686 59<br>
        E-mail: shivelle@gmx.net
      </p>

      <h3 class="is-size-3 mt-6 mb-2">
        Sales tax ID
      </h3>
      <p>
        Sales tax identification number according to $ 27 a Umsatzsteuergesetz:<br>
        DE305458631
      </p>

      <h3 class="is-size-3 mt-6 mb-2">
        Editorially responsible
      </h3>
      <p>
        Sarah Maria Leidisch<br>
        Heßheimer Strasse 8<br>
        67227 Frankenthal
      </p>

      <h3 class="is-size-3 mt-6 mb-2">
        Consumer&shy;dispute&shy;resolution/universal&shy;arbitration&shy;body
      </h3>
      <p>We are not willing or obligated to participate in dispute resolution proceedings before a consumer arbitration board.</p>
    </div>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      de: '/impressum',
      en: '/imprint'
    }
  }
}
</script>

<style lang="scss" scoped>
  .is-family-monospace {
    min-height: 100vh;
  }
</style>
