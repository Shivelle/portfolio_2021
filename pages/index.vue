<template>
  <div>
    <Hero />
    <Skills />
    <Projects />
    <Service />
    <Code />

    <section class="section">
      <div class="container">
        <h2 class="is-size-2 has-text-white mb-6 mt-3">
          Reden wir
        </h2>
        <ContactForm />
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'HomePage'
}
</script>

<style lang="scss">
  section {
    min-height: 100vh !important;
  }
</style>
