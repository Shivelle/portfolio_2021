<template>
  <section class="content">
    <Header />
    <main>
      <div class="px-2 my-2 container">
        <p class="is-size-4 has-text-white mt-6">
          {{ $t('contactForm.confirm') }}
        </p>
      </div>
    </main>
  </section>
</template>

<style lang="scss" scoped>
  .content {
    min-height: 80vh;
  }
</style>
