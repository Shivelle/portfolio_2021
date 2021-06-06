<template>
  <section class="section blog">
    <div class="columns is-mobile">
      <card
        v-for="(post, $index) in posts"
        :key="`post-${$index}`"
        class=""
        :title="post.title"
        :image="post.media"
        :description="post.description"
      >
      <footer class="p-2">
        <nuxt-link :to="post.path" class="font-bold text-xl mb-2">
          <button :to="post.path" class="button is-primary is-light">
            {{ $t('read-more') }}
          </button>
        </nuxt-link>
      </footer>
      </card>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'Blog',
  components: {
    Card
  },
  async asyncData (context) {
    const { $content } = context
    const posts = await $content(context.route.path).fetch()

    return {
      posts
    }
  }
}
</script>
