<template>
  <section class="section fullpage has-text-white bg-dark-lighter is-relative is-flex is-align-items-center is-hidden-mobile">
    <div class="section-bg" />
    <div class="container">
      <div class="columns">
        <div class="column">
          <h2 class="is-size-2 is-uppercase mb-6 has-text-weight-bold">
            {{ $t('section.code.title1') }}: <span class="txt-highlight">
              {{ $t('section.code.title2') }}</span>
          </h2>
          <p class="has-text-grey-light is-size-5 pr-4">
            {{ $t('section.code.description') }}
          </p>
        </div>
        <div class="column">
          <b-carousel
            :has-drag="true"
          >
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
              <div class="px-6 pt-4 carousel-content">
                <div class="has-text-left">
                  <h3 class="title is-size-3 mb-3 has-text-white">
                    {{ carousel.title }}
                  </h3>
                  <p class="has-text-grey-light mb-6 is-size-5 pr-4">
                    {{ carousel.description }}
                    {{ $t("section.code." + `${carousel.descriptionFor}` + "-description") }}
                  </p>
                  <a v-if="`${carousel.profileSrc}`" :href="`${carousel.profileSrc}`" target="_blank" rel="noopener" class="is-primary">
                    <span>
                      <font-awesome-icon :icon="['fab', `${carousel.icon}`]" />
                    </span>
                    {{ $t('section.code.to-profile') }}
                  </a>
                  <img v-if="`${carousel.imgSrc}`" :src="`${carousel.imgSrc}`" :alt="`${carousel.title}`" class="my-4" loading="lazy">
                  <div v-if="`${carousel.pens}`" class="my-4 columns">
                    <div class="column">
                      <p>The Cat Blog</p>
                      <a href="https://codepen.io/Shivelle/full/aKXVJw" target="_blank" rel="noopener">
                        <img src="~assets/img/cp/cat_blog.jpg" alt="cat blog" loading="lazy">
                      </a>
                    </div>
                    <div class="column">
                      <p>Circle Navigation</p>
                      <a href="https://codepen.io/Shivelle/full/eBxEvJ" target="_blank" rel="noopener">
                        <img src="~assets/img/cp/circular_nav.jpg" alt="circular nav" loading="lazy">
                      </a>
                    </div>
                    <div class="column">
                      <p>Click and Drag</p>
                      <a href="https://codepen.io/Shivelle/full/MvEpvb" target="_blank" rel="noopener">
                        <img src="~assets/img/cp/click_n_drag.jpg" alt="click & drag" loading="lazy">
                      </a>
                    </div>
                  </div>
                  <div v-if="`${carousel.pens}`" class="my-2 columns">
                    <div class="column">
                      <p>Infinite Gallery</p>
                      <a href="https://codepen.io/Shivelle/full/vMqxMV" target="_blank" rel="noopener">
                        <img src="~assets/img/cp/infinite_scroll.jpg" alt="infinite scroll" loading="lazy">
                      </a>
                    </div>
                    <div class="column">
                      <p>Progress Bars</p>
                      <a href="https://codepen.io/Shivelle/full/MvJzwm" target="_blank" rel="noopener">
                        <img src="~assets/img/cp/progress.jpg" alt="progress bars" loading="lazy">
                      </a>
                    </div>
                    <div class="column">
                      <p>Custom Video Player</p>
                      <a href="https://codepen.io/Shivelle/full/vJBQeE" target="_blank" rel="noopener">
                        <img src="~assets/img/cp/video_player.jpg" alt="video player" loading="lazy">
                      </a>
                    </div>
                  </div>
                  <div v-if="`${carousel.demos}`" class="columns">
                    <div class="column">
                      <span>Flexbox Layout</span>
                      <a href="https://hungry-poitras-6ae589.netlify.com" target="_blank" rel="noopener">
                        <img src="~assets/img/demos/mountain_travel.jpg" alt="Mountain Travel" loading="lazy">
                      </a>
                    </div>
                    <div class="column">
                      <span>Portfolio 2017</span>
                      <a href="https://shivelle.github.io/" target="_blank" rel="noopener">
                        <img
                          src="~assets/img/demos/hp_old.jpg"
                          alt="Homepage V1"
                          height="75"
                          width="350"
                          loading="lazy"
                        >
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
          descriptionFor: 'github',
          profileSrc: 'https://github.com/Shivelle',
          imgSrc: 'https://ghchart.rshah.org/FFA726/shivelle',
          icon: 'github',
          pens: '',
          demos: ''
        },
        {
          title: 'CodePen',
          descriptionFor: 'codepen',
          profileSrc: 'https://codepen.io/shivelle',
          icon: 'codepen',
          imgSrc: '',
          pens: true,
          demos: ''
        },
        {
          title: 'Demos',
          descriptionFor: 'demos',
          imgSrc: '',
          profileSrc: '',
          pens: '',
          demos: true
        }
      ]
    }
  }
}
</script>

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

  .carousel-content {
    height: 80vh;
  }
</style>
