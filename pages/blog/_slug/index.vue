<template>
  <div class="container mx-auto pt-6">
    <article v-if="post">
      <nuxt-content class="text-gray-800" :document="post" />
    </article>
  </div>
</template>

<script>
export default {
  name: 'Post',
  async asyncData (context) {
    /* eslint-disable no-unused-vars */
    const { $content, params, app, route, redirect } = context
    /* eslint-enable no-unused-vars */
    const slug = params.slug
    const post = await $content(`${app.i18n.locale}/blog`, slug).fetch()

    return {
      post
    }
  }
}
</script>
