<template>
  <div class="blog container mx-auto">
    <section class="grid grid-cols-3 gap-4 pt-12">
      <article
        class="post max-w-sm rounded overflow-hidden shadow-lg flex flex-col"
        v-for="(post, $index) in posts"
        :key="`post-${$index}`"
      >
        <img class="w-full" :src="post.media" :alt="post.title" />
        <div class="px-6 py-4 flex-2">
          <h3>{{ post.title }}</h3>
          <p class="text-gray-700 text-base">
            {{ post.description }}
          </p>
        </div>
        <footer class="p-4">
          <nuxt-link :to="post.path" class="font-bold text-xl mb-2">
            <button :to="post.path" class="btn btn-teal">
              {{ $t('read-more') }}
            </button>
          </nuxt-link>
        </footer>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  async asyncData (context) {
    const { $content, app } = context
    const posts = await $content(`${app.i18n.locale}/blog'`).fetch()

    return {
      posts
    }
  }
}
</script>
