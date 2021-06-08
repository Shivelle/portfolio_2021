<template>
  <div class="content mt-5">
    <article v-if="post">
      <h1>
        {{ post.title }}
      </h1>
      <b-image
        :src="post.media"
        ratio="2by1"
        :alt="post.title"
        class="my-4 mx-0"
      />
      <nuxt-content class="post" :document="post" />
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

<style lang="css">
  a .icon-link {
    display: none;
  }
</style>
