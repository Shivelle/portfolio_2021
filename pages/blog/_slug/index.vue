<template>
  <div>
    <div class="container content pt-6 my-6 mobile-padding">
      <article v-if="post" class="has-text-white">
        <div class="py-4 mt-0">
          <b-image
            :src="post.media"
            :alt="post.title"
            class="my-4 mx-0"
          />
        </div>
        <h4 class="is-uppercase">
          {{ post.category }}
        </h4>
        <h1 class="is-size-1 mt-4">
          {{ post.title }}
        </h1>
        <b-taglist>
          <b-tag v-for="tag in post.tags" :key="tag" type="is-link">
            {{ tag }}
          </b-tag>
        </b-taglist>
        <div class="meta mb-6">
          <p class="has-text-grey-light">
            {{ $t('blog.created-at') }}
            {{ $dateFns.format(new Date(post.createdAt), 'dd.MM.yyy') }}
            {{ $t('blog.by') }} Sarah
          </p>
        </div>
        <nuxt-content class="post" :document="post" />
      </article>
    </div>
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

<style lang="scss">
  .header .title {
    display: none;
  }

  .content {
    h1,
    h2,
    h3,
    h4,
    strong {
      color: #fff !important;
    }

    strong {
      font-weight: bold;
    }

    figure img {
      max-height: 400px;
    }
  }

  pre[class*="language-"],
  :not(pre) > code[class*="language-"] {
    background: #333;

    code {
      color: #fff;
      text-shadow: none;
    }

    .number {
      background-color: transparent;
      padding: 0;
      min-width: 0;
      margin: 0;
      height: auto;
      font-size: inherit;
      border-radius: 0;
    }
  }

  pre {
    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string {
      background: hsla(0, 0%, 100%, 0.1);
      color: $primary;
    }

    .token.property,
    .token.tag,
    .token.boolean,
    .token.number,
    .token.symbol,
    .token.constant,
    .token.deleted {
      color: #e0007b;
    }

    .token.atrule,
    .token.attr-value,
    .token.keyword {
      color: #00abf5;
    }
  }

  a .icon-link {
    display: none;
  }
</style>
