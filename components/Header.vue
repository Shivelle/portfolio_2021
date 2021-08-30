<template>
  <header class="has-bg-black pt-6 pb-3 is-relative is-clipped mobile-padding">
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
