<template>
  <div class="blog container mx-auto">
    <section class="grid grid-cols-3 gap-4 pt-12">
      <article
        v-for="(post, $index) in posts"
        :key="`post-${$index}`"
        class=""
      >
        <img class="w-full" :src="post.media" :alt="post.title">
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
    const { $content } = context
    const posts = await $content(context.route.path).fetch()

    return {
      posts
    }
  }
}
</script>
