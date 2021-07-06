<template>
  <section class="section fullpage has-text-white is-relative is-clipped is-flex is-align-items-center">
    <div class="section-bg" />
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
            <a href="https://centralstationcrm.de/" target="_blank">
              <div class="has-text-white">
                <div class="devicons">
                  <i class="devicon-ruby-plain colored" />
                  <i class="devicon-rails-plain colored" />
                  <i class="devicon-sass-original colored" />
                  <i class="devicon-javascript-plain colored" />
                  <i class="devicon-vuejs-plain colored" />
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
            <a href="https://www.hn-feinmahltechnik.de/" target="_blank">
              <div class="has-text-white">
                <div class="devicons">
                  <i class="devicon-php-plain colored" />
                  <i class="devicon-wordpress-plain colored" />
                  <i class="devicon-sass-original colored" />
                  <i class="devicon-javascript-plain colored" />
                  <i class="devicon-jquery-plain colored" />
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
            <a href="https://centralplanner.de/" target="_blank">
              <div class="has-text-white">
                <div class="devicons">
                  <i class="devicon-ruby-plain colored" />
                  <i class="devicon-rails-plain colored" />
                  <i class="devicon-sass-original colored" />
                  <i class="devicon-javascript-plain colored" />
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
            <a href="https://centraldesk.de/" target="_blank">
              <div class="has-text-white">
                <div class="devicons">
                  <i class="devicon-ruby-plain colored" />
                  <i class="devicon-rails-plain colored" />
                  <i class="devicon-sass-original colored" />
                  <i class="devicon-javascript-plain colored" />
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
            <a href="https://echtpost.de/" target="_blank">
              <div class="has-text-white">
                <div class="devicons">
                  <i class="devicon-ruby-plain colored" />
                  <i class="devicon-rails-plain colored" />
                  <i class="devicon-sass-original colored" />
                  <i class="devicon-javascript-plain colored" />
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

<style lang="scss" scoped>
  @import "~/node_modules/devicon/devicon.min.css";

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

  .devicons {
    @include prefix('filter', 'saturate(80%);');
  }

  .hr-bottom {
    height: 0.6rem;
    width: 3rem;

    @include prefix('border-radius', '0.25rem');
  }

  .border-white {
    @include prefix('border', '3px solid #272727');
  }

  .article.tile.is-child {
    @include prefix('transition', '0.5s ease all');
  }

  .ep:hover {
    @include prefix('border', '3px solid #00b9ba');
  }

  .cp:hover {
    @include prefix('border', '3px solid #6e96cb');
  }

  .cd:hover {
    @include prefix('border', '3px solid #3cbc8d');
  }

  .crm:hover {
    @include prefix('border', '3px solid #292a4d');
  }

  .hn:hover {
    @include prefix('border', '3px solid #ef8a17');
  }
</style>
