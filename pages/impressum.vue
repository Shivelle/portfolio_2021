<template>
  <div>
    <Header />
    <div class="container has-text-white py-6 mobile-padding">
      <h3 class="is-size-3 mt-6 mb-2">
        Angaben gemäß § 5 TMG
      </h3>
      <p>
        Sarah Maria Leidisch<br>
        Heßheimer Straße 8<br>
        67227 Frankenthal
      </p>

      <h3 class="is-size-3 mt-6 mb-2">
        Kontakt
      </h3>
      <p>
        Telefon: +49 (0) 174 33 686 59<br>
        E-Mail: shivelle@gmx.net
      </p>

      <h3 class="is-size-3 mt-6 mb-2">
        Umsatzsteuer-ID
      </h3>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß $ 27 a Umsatzsteuergesetz:<br>
        DE305458631
      </p>

      <h3 class="is-size-3 mt-6 mb-2">
        Redaktionell verantwortlich
      </h3>
      <p>
        Sarah Maria Leidisch<br>
        Heßheimer Straße 8<br>
        67227 Frankenthal
      </p>

      <h3 class="is-size-3 mt-6 mb-2">
        Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
      </h3>
      <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
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
