<template>
  <header class="has-bg-black pt-6 pb-3 is-relative is-clipped">
    <div class="header-img" />
    <div class="lines">
      <div class="line" />
      <div class="line" />
      <div class="line" />
    </div>
    <div class="container my-6 py-6">
      <h1 class="title is-uppercase has-text-weight-bold my-5 has-text-white">
        {{ $t("routes." + `${$route.name}`) }}
      </h1>
      <p class="subtitle has-text-grey-light is-size-7">
        <font-awesome-icon :icon="['fas', 'square-full']" />
        <font-awesome-icon :icon="['fas', 'square-full']" />
      </p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
h1.title {
  font-size: 3.5rem;
}

.header-img {
  background-image: url('~/assets/img/bg/abstract.jpg');
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0.2;

  @include prefix('filter', 'grayscale(70%)');
}

.lines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  margin: auto;
  width: 90vw;
}

.line {
  position: absolute;
  width: 1px;
  height: 100%;
  top: 0;
  left: 50%;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    position: absolute;
    height: 15vh;
    width: 100%;
    top: -50%;
    left: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #fff 75%, #fff 100%);
    animation: drop 7s 0s infinite;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
  }

  &:nth-child(1) {
    margin-left: -25%;

    &::after {
      animation-delay: 2s;
    }
  }

  &:nth-child(2) {
    margin-left: 1px;

    &::after {
      animation-delay: 3s;
    }
  }

  &:nth-child(3) {
    margin-left: 25%;

    &::after {
      animation-delay: 2.5s;
    }
  }
}

@keyframes drop {
  0% {
    top: -50%;
  }

  100% {
    top: 110%;
  }
}

</style>
