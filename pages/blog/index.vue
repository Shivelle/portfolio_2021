<template>
  <div class="is-fullheight">
    <Header />
    <section class="container mt-6 mobile-padding">
      <p class="has-text-white mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus qui culpa delectus, eum numquam perspiciatis at harum!</p>
      <div class="columns is-multiline">
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
    </section>
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
    const posts = await $content(context.route.path).sortBy('createdAt', 'asc').fetch()

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

  .button {
    border-radius: 2px;
  }
</style>
