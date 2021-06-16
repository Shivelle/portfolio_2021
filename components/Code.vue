<template>
  <section class="section has-text-white bg-dark-lighter">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h2 class="is-size-2 is-uppercase mb-6">
            Einblick: Code
          </h2>
          <p class="has-text-grey-light">
            Gerade in meinen Arbeitsfeldern gilt: Man lernt nie aus. Ich arbeite ständig an meiner Weiterbildung. Hier erhalten Sie Einblicke in mein GitHub und CodePen Portfolio, sowie einige meiner privaten Demos.
          </p>
        </div>
        <div class="column">
          <b-carousel>
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
              <section :class="`hero is-medium is-${carousel.color}`">
                <div class="hero-body has-text-centered">
                  <h3 class="title is-size-3 has-text-white">
                    {{ carousel.title }}
                  </h3>
                  <p class="has-text-grey-light">
                    {{ carousel.description }}
                  </p>
                  <a href="#" target="_blank">
                    Zum Profil
                  </a>
                  <div class="snippet">
                    {{ carousel.snippet }}
                  </div>
                </div>
              </section>
            </b-carousel-item>
          </b-carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      carousels: [
        {
          title: 'GitHub',
          description: 'GitHub ist ein Onlinedienst, der Software-Entwicklungsprojekte auf seinen Servern bereitstellt. Ich nutze sowohl Git via GitHub und GitLab, als auch Mercurial via BitBucket zur Versionsverwaltung.',
          href: 'https://github.com/Shivelle',
          snippet: '<img src="https://ghchart.rshah.org/FFA726/shivelle" alt="Github Chart" class="ghchart" />'
        },
        {
          title: 'CodePen',
          description: 'CodePen ist eine Online-Community zum Testen und Zeigen von HTML-, CSS- und JavaScript-Codeschnipseln, die von Benutzern erstellt worden sind. Ich nutze den Online-Code-Editor seit vielen Jahren für Frontend-Snippets.',
          href: 'https://codepen.io/shivelle',
          snippet: ''
        },
        {
          title: 'Demos',
          description: 'Eine kleine Auswahl meiner übrigen Projekte. Mein altes Portfolio aus dem Jahr 2017 und ein Flexbox Layout.',
          href: 'https://github.com/Shivelle',
          snippet: ''
        }
      ]
    }
  }
}
</script>
