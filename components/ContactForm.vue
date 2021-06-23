<template>
  <form
    name="portfolio"
    class="js-form"
    novalidate="novalidate"
    netlify-honeypot="bot-field"
    method="POST"
    data-netlify-recaptcha="true"
    netlify
  >
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
              placeholder="Aron Awesome"
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
              placeholder="you@example.com"
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
          placeholder="Anfrage"
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
          placeholder="Hey Sarah! Lass uns über unser Projekt reden..."
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
            Nachricht senden
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
