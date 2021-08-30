<template>
  <section class="section fullpage has-text-white is-fullheight is-flex is-align-items-center">
    <div class="container">
      <div class="columns">
        <div class="column">
          <p>{{ $t('section.service.top-title') }}</p>
          <h2 class="is-size-2 mb-6 mt-3 is-uppercase has-text-weight-bold">
            {{ $t('section.service.title1') }} <span class="txt-highlight">{{ $t('section.service.title2') }}</span> {{ $t('section.service.title3') }}
          </h2>
          <ul>
            <li class="is-size-4 mb-4 has-text-grey-light">
              - {{ $t('section.service.li') }}
            </li>
            <li class="is-size-4 mb-4 has-text-grey-light">
              - Design
            </li>
          </ul>
        </div>
        <div class="column">
          <div class="dots-image pt-6 is-pulled-right">
            <img
              alt="Sarah"
              class="image"
              src="~assets/img/m2.jpg"
              height="400"
              width="600"
              loading="lazy"
            >
            <div class="dots" />
            <div class="experience-info is-size-1 is-uppercase has-text-weight-bold is-flex">
              <div class="experience-number">
                4
              </div>
              <div class="text pt-2">
                {{ $t('section.service.xp1') }}<br>{{ $t('section.service.xp2') }}<br>{{ $t('section.service.xp3') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
