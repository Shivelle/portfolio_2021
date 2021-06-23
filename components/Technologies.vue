<template>
  <section class="section fullpage has-text-white is-fullheight is-flex is-align-items-center">
    <div class="container">
      <h2 class="is-size-2 is-uppercase mb-6 mt-3 has-text-weight-bold">
        Genutzte Technologien
      </h2>
      <div class="is-flex is-flex-wrap-wrap is-justify-content-center is-align-content-center is-align-items-center is-align-self-center mt-6">
        <div
          v-for="(devicon, i) in devicons"
          :key="i"
          class="devicon"
          @mouseenter="devicon.isColored = true"
          @mouseleave="devicon.isColored = false"
        >
          <i
            :class="[`${devicon.icon} p-6`, {colored: devicon.isColored}]"
            :title="`${devicon.title}`"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      devicons: [
        {
          icon: 'devicon-figma-plain',
          title: 'Figma',
          isColored: false
        },
        {
          icon: 'devicon-photoshop-plain',
          title: 'Adobe Photoshop',
          isColored: false
        },
        {
          icon: 'devicon-illustrator-plain',
          title: 'Adobe Illustrator',
          isColored: false
        },
        {
          icon: 'devicon-xd-plain',
          title: 'Adobe XD',
          isColored: false
        },
        {
          icon: 'devicon-html5-plain-wordmark ',
          title: 'HTML5',
          isColored: false
        },
        {
          icon: 'devicon-css3-plain-wordmark',
          title: 'CSS3',
          isColored: false
        },
        {
          icon: 'devicon-sass-original',
          title: 'SASS/SCSS',
          isColored: false
        },
        {
          icon: 'devicon-tailwindcss-plain',
          title: 'Tailwind',
          isColored: false
        },
        {
          icon: 'devicon-bootstrap-plain-wordmark',
          title: 'Bootstrap',
          isColored: false
        },
        {
          icon: 'devicon-bulma-plain',
          title: 'Bulma',
          isColored: false
        },
        {
          icon: 'devicon-vuejs-plain-wordmark',
          title: 'Vue.js',
          isColored: false
        },
        {
          icon: 'devicon-jquery-plain-wordmark',
          title: 'jQuery',
          isColored: false
        },
        {
          icon: 'devicon-javascript-plain',
          title: 'JavaScript',
          isColored: false
        },
        {
          icon: 'devicon-rails-plain-wordmark ',
          title: 'Ruby on Rails',
          isColored: false
        },
        {
          icon: 'devicon-ruby-plain-wordmark',
          title: 'Ruby',
          isColored: false
        },
        {
          icon: 'devicon-wordpress-plain-wordmark',
          title: 'WordPress',
          isColored: false
        },
        {
          icon: 'devicon-postgresql-plain-wordmark',
          title: 'PostgreSQL',
          isColored: false
        },
        {
          icon: 'devicon-github-original-wordmark',
          title: 'Git',
          isColored: false
        },
        {
          icon: 'devicon-github-original-wordmark',
          title: 'GitHub',
          isColored: false
        },
        {
          icon: 'devicon-gitlab-plain-wordmark ',
          title: 'GitLab',
          isColored: false
        },
        {
          icon: 'devicon-heroku-original-wordmark',
          title: 'Heroku',
          isColored: false
        },
        {
          icon: 'devicon-vscode-plain-wordmark',
          title: 'VS Code',
          isColored: false
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/node_modules/devicon/devicon.min.css";

  .devicon {
    i {
      display: block;
      font-size: 5rem;
      opacity: 0.2;

      @include prefix('transition', '0.5s ease all');
    }

    &:hover i {
      opacity: 0.8;
    }
  }
</style>
