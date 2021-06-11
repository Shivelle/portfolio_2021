<template>
  <section class="hero is-fullheight">
    <div class="hero-img" />
    <div class="hero-body">
      <div class="container">
        <h4 class="subtitle has-text-white mb-5">
          Willkommen <br>
          in meinem virtuellen Zuhause
        </h4>
        <h1 class="title has-text-white is-size-1 is-uppercase has-text-weight-bold mt-5">
          <span class="has-highlight-color">HALLO</span> ICH BIN <br>SARAH.
        </h1>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .hero-img {
    background-image: url('~/assets/img/hero-img.jpg');
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    filter: blur(8px);
    -webkit-filter: blur(8px);
    transform: scale(1.1);
    opacity: 0.05;
  }

  .hero-body {
    z-index: 2;
  }

  .has-highlight-color {
    color: #ffa726;
  }
</style>
