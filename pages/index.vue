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
// import Card from '~/components/Card'

export default {
  name: 'HomePage',

  components: {
    // Card
  }
}
</script>
