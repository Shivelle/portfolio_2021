<template>
  <section class="section has-text-white is-relative is-clipped">
    <div class="section-bg" />
    <div class="container">
      <h2 class="is-size-2 mb-6 mt-3 is-uppercase">
        Projekte
      </h2>
      <p class="has-text-grey-light">
        An diesen Projekten war ich alleine, aber auch als Teil eines Teams, beteiligt.
      </p>
      <!-- TODO: Update Project Grid -->
      <div class="is-flex is-flex-wrap-wrap mt-6">
        <div class="tile is-parent">
          <article class="tile is-child p-4 border-white is-clickable ep">
            <a href="https://echtpost.de/" target="_blank">
              <div class="has-text-white">
                <h3 class="is-size-3 has-text-weight-semibold mb-3">Postkartenversand</h3>
                <div class="">Landingpage Redesign</div>
              </div>
            </a>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child p-4 border-white is-clickable crm">
            <a href="https://centralstationcrm.de/" target="_blank">
              <div class="has-text-white">
                <h3 class="is-size-3 has-text-weight-semibold mb-3">Customer Relationship Management</h3>
                <div class="">Redesign Backend</div>
                <div class="">Diverse Landingpages</div>
                <div class="">Custom Captcha Feature</div>
              </div>
            </a>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child p-4 border-white is-clickable hn">
            <a href="https://www.hn-feinmahltechnik.de/" target="_blank">
              <div class="has-text-white">
                <h3 class="is-size-3 has-text-weight-semibold mb-3">Vermahlungsdienstleister</h3>
                <div class="">Homepage-Design</div>
                <div class="">Visitenkarten-Design</div>
                <div class="">WordPress-Template-Entwicklung</div>
                <div class="">Hosting- & E-Mail-Setup</div>
              </div>
            </a>
          </article>
        </div>

        <div class="tile is-parent">
          <article class="tile is-child p-4 border-white is-clickable cp">
            <a href="https://centralplanner.de/" target="_blank">
              <div class="has-text-white">
                <h3 class="is-size-3 has-text-weight-semibold mb-3">Buchungssystem</h3>
                <div class="">Redesign Backend</div>
                <div class="">Auto-Mailing Features</div>
                <div class="">Custom Captcha Feature</div>
              </div>
            </a>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child p-4 border-white is-clickable cd">
            <a href="https://centraldesk.de/" target="_blank">
              <div class="has-text-white">
                <h3 class="is-size-3 has-text-weight-semibold mb-3">Supportsystem</h3>
                <div class="">Mehrsprachige Signaturen</div>
              </div>
            </a>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .section-bg {
    background-image: url('~/assets/img/bg/abstract2.jpg');
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0.2;

    @include prefix('filter', 'blur(4px)');
  }

  .border-white {
    border: 2px solid white;
  }

  .ep:hover {
    background-color: $ep;
    opacity: 0.8;
  }

  .cp:hover {
    background-color: $cp;
    opacity: 0.8;
  }

  .cd:hover {
    background-color: $cd;
    opacity: 0.8;
  }

  .crm:hover {
    background-color: $crm;
    opacity: 0.8;
  }

  .hn:hover {
    background-color: $hn;
    opacity: 0.8;
  }

</style>
