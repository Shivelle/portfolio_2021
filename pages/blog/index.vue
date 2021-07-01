<template>
  <div class="is-fullheight">
    <Header />
    <div class="container mt-6">
      <div class="columns is-mobile">
        <ArticleCard
          v-for="(post, $index) in posts"
          :key="`post-${$index}`"
          :title="post.title"
          :image="post.media"
          :description="post.description"
        >
          <nuxt-link :to="post.path" class="font-bold text-xl mb-2">
            <button :to="post.path" class="button is-primary is-light">
              {{ $t('blog.read-more') }}
            </button>
          </nuxt-link>
        </ArticleCard>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from '~/components/ArticleCard'

export default {
  name: 'Blog',
  components: {
    ArticleCard
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

<style lang="scss" scoped>
  .is-fullheight {
    min-height: 100vh;
  }
</style>
