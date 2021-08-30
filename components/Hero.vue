<template>
  <section class="hero is-fullheight is-clipped">
    <div class="hero-img is-hidden-mobile" />
    <div class="hero-body">
      <div class="container">
        <p class="subtitle mb-5 has-text-white">
          {{ $t('welcome') }} <br>
          {{ $t('section.hero.virtual-home') }}
        </p>
        <h1 class="title is-size-1 is-uppercase has-text-weight-bold mt-5 has-text-white">
          <span class="txt-highlight">
            {{ $t('hello') }}
          </span>
          {{ $t('section.hero.i-am') }}
        </h1>
      </div>
    </div>
  </section>
</template>
