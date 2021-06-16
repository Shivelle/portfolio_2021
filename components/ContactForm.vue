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
          <b-field
            label=""
            :label-position="labelPosition"
          >
            <b-input type="text" name="name" required="" placeholder="Aron Awesome" />
          </b-field>
        </div>
        <div class="column">
          <b-field
            label=""
            :label-position="labelPosition"
          >
            <b-input type="email" name="email" placeholder="you@example.com" />
          </b-field>
        </div>
      </div>
      <b-field
        label=""
        :label-position="labelPosition"
      >
        <b-input type="text" name="subject" placeholder="Anfrage" />
      </b-field>
      <b-field
        label=""
        :label-position="labelPosition"
        class="mt-5"
      >
        <b-input
          type="textarea"
          name="message"
          required
          placeholder="Hey Sarah! Let's talk about my new website. Cheers, Tom"
        />
      </b-field>
      <div data-netlify-recaptcha="true" />
      <b-field>
        <p class="control">
          <b-button
            class="button is-primary mt-4"
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
