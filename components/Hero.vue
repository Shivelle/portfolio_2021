<template>
  <section class="hero is-fullheight">
    <div class="hero-img" />
    <div class="hero-body">
      <div class="container">
        <p class="subtitle mb-5 has-text-white">
          Willkommen <br>
          in meinem virtuellen Zuhause
        </p>
        <h1 class="title is-size-1 is-uppercase has-text-weight-bold mt-5 has-text-white">
          <span class="txt-highlight">Hallo</span> ich bin Sarah.
        </h1>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .hero {
    @include prefix('box-shadow', 'inset 0 -7px 0 #ffa726');
  }

  .hero-img {
    background-image: url('~/assets/img/hero-img.jpg');
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    opacity: 0.2;

    @include prefix('filter', 'blur(4px)');
  }

  .hero-body {
    z-index: 2;
  }
</style>
