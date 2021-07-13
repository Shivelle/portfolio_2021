<template>
  <form
    id="contact-form"
    name="portfolio"
    class="js-form"
    novalidate="novalidate"
    netlify-honeypot="bot-field"
    method="POST"
    data-netlify-recaptcha="true"
    data-netlify="true"
  >
    <input type="hidden" name="form-name" value="portfolio">
    <div class="row">
      <p class="is-hidden">
        <label>Don’t fill this out if you're human: <input name="bot-field"></input></label>
      </p>
      <div class="columns">
        <div class="column">
          <b-field>
            <b-input
              type="text"
              name="name"
              size="is-medium"
              required
              placeholder="Name"
            />
          </b-field>
        </div>
        <div class="column">
          <b-field>
            <b-input
              type="email"
              name="email"
              size="is-medium"
              required
              :placeholder="`${$t('contactForm.email')}`"
            />
          </b-field>
        </div>
      </div>
      <b-field>
        <b-input
          type="text"
          name="subject"
          size="is-medium"
          required
          :placeholder="`${$t('contactForm.subject')}`"
        />
      </b-field>
      <b-field
        class="mt-5"
      >
        <b-input
          type="textarea"
          name="message"
          size="is-medium"
          required
          :placeholder="`${$t('contactForm.message')}`"
        />
      </b-field>
      <div data-netlify-recaptcha="true" />
      <b-field>
        <p class="control">
          <b-button
            class="button mt-6 is-medium has-text-white"
            type="submit"
            value="Send"
          >
            {{ $t('contactForm.send') }}
          </b-button>
        </p>
      </b-field>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      labelPosition: 'on-border'
    }
  },
  mounted () {
    const handleSubmit = (e) => {
      e.preventDefault()
      const contactForm = document.getElementById('contact-form')
      const formData = new FormData(contactForm)
      fetch('/', {
        method: 'POST',
        url: 'mail.php',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      }).then(() => alert('Form successfully submitted')).catch(error =>
        alert(error))
    }

    document.querySelector('form').addEventListener('submit', handleSubmit)
  }
}
</script>

<style lang="scss" scoped>
  form {
    .field .input,
    .field .textarea {
      border: 1px solid red !important;
      background-color: $dark-lighter;
    }
  }
</style>
