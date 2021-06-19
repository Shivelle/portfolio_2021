<template>
  <section class="section has-text-white mt-6 is-fullheight">
    <div class="container">
      <div class="columns">
        <div class="column">
          <p>Über mich</p>
          <h2 class="is-size-2 is-uppercase mb-6 mt-3">
            Ich <br><span class="txt-highlight">gestalte & entwickle</span><br> ansprechende<br> Nutzererlebnisse.
          </h2>
          <p class="has-text-grey-light">
            Mit vier Jahren Erfahrung in der Entwicklung anspruchsvoller WebApps und Landingpages.
          </p>
        </div>

        <div class="column has-text-grey-light is-flex is-flex-direction-column is-justify-content-space-evenly">
          <div>
            <div class="is-clearfix p-1">
              <div class="is-size-6 is-pulled-left">
                Frontend Entwicklung
              </div>
              <div class="is-size-6 is-pulled-right">
                70%
              </div>
            </div>
            <b-progress size="is-small mb-4" :value="70" type="is-primary" />
          </div>

          <div>
            <div class="is-clearfix p-1">
              <div class="is-size-6 is-pulled-left">
                Backend Entwicklung
              </div>
              <div class="is-size-6 is-pulled-right">
                60%
              </div>
            </div>
            <b-progress size="is-small mb-4" :value="60" type="is-primary" />
          </div>

          <div>
            <div class="is-clearfix p-1">
              <div class="is-size-6 is-pulled-left">
                Design
              </div>
              <div class="is-size-6 is-pulled-right">
                70%
              </div>
            </div>
            <b-progress size="is-small mb-4" :value="70" type="is-primary" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
