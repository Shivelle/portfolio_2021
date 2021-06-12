<template>
  <section class="hero is-fullheight">
    <div class="hero-img" />
    <div class="hero-body">
      <div class="container">
        <p class="subtitle mb-5">
          Willkommen <br>
          in meinem virtuellen Zuhause
        </p>
        <h1 class="title is-size-1 is-uppercase has-text-weight-bold mt-5">
          <span class="txt-orange">HALLO</span> ICH BIN <br>SARAH.
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
    opacity: 0.1;
  }

  .hero-body {
    z-index: 2;
  }
</style>
