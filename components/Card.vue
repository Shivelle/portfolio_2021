<template>
  <div class="column">
    <div class="card">
      <div class="card-image">
        <b-image
          :src="image"
          ratio="16by9"
          :alt="title"
          lazy
        />
      </div>
      <div class="card-content">
        <div class="content">
          <h3 class="title is-4">
            {{ title }}
          </h3>
          <p>
            {{ description }}
          </p>
        </div>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item level-left">
          <span>
            <slot />
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
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
