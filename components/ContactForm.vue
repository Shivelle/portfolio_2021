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
      <b-field
        label="Name"
        :label-position="labelPosition"
      >
        <b-input type="text" name="name" required="" placeholder="Aron Awesome" />
      </b-field>
      <b-field
        label="E-Mail"
        :label-position="labelPosition"
      >
        <b-input type="email" name="email" placeholder="you@example.com" />
      </b-field>
      <b-field
        label="Betreff"
        :label-position="labelPosition"
      >
        <b-input type="text" name="subject" placeholder="Anfrage" />
      </b-field>
      <b-field
        label="Nachricht"
        :label-position="labelPosition"
      >
        <b-input
          type="textarea"
          name="message"
          required
          placeholder="Hey Sarah! Let's talk about my new website. Cheers, Tom"
        />
        <div data-netlify-recaptcha="true" />
      </b-field>
      <b-field>
        <p class="control">
          <b-button
            class="button is-primary"
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
    .label {
      color: #ffa726;
    }
  }

</style>
