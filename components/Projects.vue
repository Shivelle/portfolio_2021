<template>
  <section id="projects-section" class="section fullpage has-text-white is-relative is-clipped">
    <div class="section-bg is-hidden-mobile" />
    <div class="container">
      <h2 class="is-size-2 mb-6 mt-3 is-uppercase has-text-weight-bold">
        {{ $t('section.projects.title') }}
      </h2>
      <p class="has-text-grey-light is-size-5 pr-4">
        {{ $t('section.projects.subtitle') }}
      </p>
      <div class="is-flex is-flex-wrap-wrap mt-6">
        <div class="tile is-parent">
          <article class="tile bg-dark is-child p-6 is-child p-6 border-white is-clickable crm">
            <a href="https://centralstationcrm.de/" target="_blank" rel="noopener">
              <div class="has-text-white">
                <div class="devicons">
                  <i class="devicon-ruby-plain" />
                  <i class="devicon-rails-plain" />
                  <i class="devicon-sass-original" />
                  <i class="devicon-javascript-plain" />
                  <i class="devicon-vuejs-plain" />
                </div>
                <h3 class="is-size-3 has-text-weight-semibold mb-3">Customer Relationship Management</h3>
                <div class="hr-bottom mb-4 bg-crm" />
                <div class="mb-3">Redesign Backend</div>
                <div class="mb-3">Landingpages</div>
                <div class="mb-3">Custom Captcha Feature</div>
              </div>
            </a>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile bg-dark is-child p-6 is-child p-6 border-white is-clickable hn">
            <a href="https://www.hn-feinmahltechnik.de/" target="_blank" rel="noopener">
              <div class="has-text-white">
                <div class="devicons">
                  <i class="devicon-php-plain" />
                  <i class="devicon-wordpress-plain" />
                  <i class="devicon-sass-original" />
                  <i class="devicon-javascript-plain" />
                  <i class="devicon-jquery-plain" />
                </div>
                <h3 class="is-size-3 has-text-weight-semibold mb-3">
                  {{ $t('section.projects.hn.title') }}
                </h3>
                <div class="hr-bottom mb-4 bg-hn" />
                <div class="mb-3">Homepage Design</div>
                <div class="mb-3">{{ $t('section.projects.hn.cards') }}</div>
                <div class="mb-3">{{ $t('section.projects.hn.template') }}</div>
                <div class="mb-3">{{ $t('section.projects.hn.hosting') }}</div>
              </div>
            </a>
          </article>
        </div>

        <div class="tile is-parent">
          <article class="tile bg-dark is-child p-6 is-child p-6 border-white is-clickable cp">
            <a href="https://centralplanner.de/" target="_blank" rel="noopener">
              <div class="has-text-white">
                <div class="devicons">
                  <i class="devicon-ruby-plain" />
                  <i class="devicon-rails-plain" />
                  <i class="devicon-sass-original" />
                  <i class="devicon-javascript-plain" />
                </div>
                <h3 class="is-size-3 has-text-weight-semibold mb-3">{{ $t('section.projects.cp.title') }}</h3>
                <div class="hr-bottom mb-4 bg-cp" />
                <div class="mb-3">Redesign Backend</div>
                <div class="mb-3">Auto-Mailing Features</div>
                <div class="mb-3">Custom Captcha Feature</div>
              </div>
            </a>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile bg-dark is-child p-6 is-child p-6 border-white is-clickable cd">
            <a href="https://centraldesk.de/" target="_blank" rel="noopener">
              <div class="has-text-white">
                <div class="devicons">
                  <i class="devicon-ruby-plain" />
                  <i class="devicon-rails-plain" />
                  <i class="devicon-sass-original" />
                  <i class="devicon-javascript-plain" />
                </div>
                <h3 class="is-size-3 has-text-weight-semibold mb-3">{{ $t('section.projects.cd.title') }}</h3>
                <div class="hr-bottom mb-4 bg-cd" />
                <div class="mb-3">{{ $t('section.projects.cd.signatures') }}</div>
              </div>
            </a>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile bg-dark is-child p-6 is-child p-6 border-white is-clickable ep">
            <a href="https://echtpost.de/" target="_blank" rel="noopener">
              <div class="has-text-white">
                <div class="devicons">
                  <i class="devicon-ruby-plain" />
                  <i class="devicon-rails-plain" />
                  <i class="devicon-sass-original" />
                  <i class="devicon-javascript-plain" />
                </div>
                <h3 class="is-size-3 has-text-weight-semibold mb-3">Postkartenversand</h3>
                <div class="hr-bottom mb-4 bg-ep" />
                <div class="mb-3">Landingpage Redesign</div>
              </div>
            </a>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
