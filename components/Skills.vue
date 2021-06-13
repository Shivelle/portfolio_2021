<template>
  <section class="section has-text-white mt-6 is-fullheight">
    <div class="container">
      <div class="columns">
        <div class="column">
          <p>Über mich</p>
          <h2 class="is-size-2 is-uppercase mb-6 mt-3">
            Ich <br><span class="txt-highlight">gestalte & entwickle</span><br> ansprechende<br> Nutzererlebnisse.
          </h2>
          <p>Mit vier Jahren Erfahrung in der Entwicklung anspruchsvoller WebApps und Landingpages.</p>
        </div>

        <div class="column">
          <h4 class="is-size-6">
            Frontend Entwicklung
          </h4>
          <b-progress size="is-small mb-2" :value="70" />
          <h4 class="is-size-6">
            Backend Entwicklung
          </h4>
          <b-progress size="is-small mb-2" :value="60" />
          <h4 class="is-size-6">
            Design
          </h4>
          <b-progress size="is-small mb-2" :value="70" />
        </div>
      </div>
    </div>
  </section>
</template>
