<template>
  <div class="column is-one-third is-flex-grow-1 is-flex-shrink-0 is-mobile">
    <div class="card bg-dark-lighter">
      <div class="card-image">
        <b-image
          :src="image"
          ratio="16by9"
          :alt="title"
          lazy
        />
      </div>
      <div class="card-content is-flex is-flex-direction-column is-align-self-stretch">
        <div class="content has-text-light">
          <h3 class="title is-4 has-text-white">
            {{ title }}
          </h3>
          <p>
            {{ description | truncate(30, '...') }}
          </p>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    truncate (text, length, suffix) {
      if (text.length > length) {
        return text.substring(0, length) + suffix
      } else {
        return text
      }
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>
