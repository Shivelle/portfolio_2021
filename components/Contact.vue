<template>
  <section class="section">
    <h3 class="is-size-2">Kontakt</h3>
    <form
    name="portfolio"
    class="js-form"
    novalidate="novalidate"
    netlify-honeypot="bot-field"
    method="POST"
    data-netlify-recaptcha="true"
    netlify>
      <div class="row">
        <p class="is-hidden">
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
        <b-field label="Name" :label-position="labelPosition">
          <b-input type="text" name="name" required="" placeholder="Name">
          </b-input>
        </b-field>
        <b-field label="E-Mail">
          <b-input type="email" name="email" placeholder="E-Mail">
          </b-input>
        </b-field>
        <b-field class="field">
          <b-input type="text" name="subject" placeholder="Betreff (optinal)"></b-input>
        </b-field>
        <b-field class="field">
          <b-input
           type="textarea"
           name="message"
           required=""
           placeholder="Nachricht*"
           aria-required="true"></b-input>
          <div data-netlify-recaptcha="true"></div>
        </b-field>
        <b-field>
          <p class="control">
            <b-button
            class="button is-primary"
            type="submit"
            value="Send"
            >Nachricht senden</b-button>
          </p>
        </b-field>
      </div>
    </form>
  </section>
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
  .select select,
  .taginput .taginput-container.is-focusable,
  .textarea,
  .input {
    border: none;
    outline: none;
    background-color: rgba(#fff, 0.5);
  }

  .label {
    color: #ffa726;
  }
</style>
