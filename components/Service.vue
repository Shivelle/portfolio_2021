<template>
  <section class="section has-text-white is-fullheight">
    <div class="container">
      <div class="columns">
        <div class="column">
          <p>Mein Service</p>
          <h2 class="is-size-2 mb-6 mt-3 is-uppercase">
            Ihr <span class="txt-highlight">nächstes Projekt</span> ist meine Inspiration
          </h2>
          <!-- TODO: Finish list and 4 years section -->
          <ul>
            <li>Entwicklung</li>
            <li>Design</li>
          </ul>
        </div>
        <div class="column">
          <div class="dots-image pt-6 is-pulled-right">
            <img alt="Sarah" class="image" src="~assets/img/m2.jpg">
            <div class="dots" />
            <div class="experience-info is-size-1 is-uppercase has-text-weight-bold is-flex">
              <div class="experience-number">
                4
              </div>
              <div class="text pt-2">
                Jahre<br>Erfahrung<br>als Freelancer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.dots-image {
  display: inline-block;
  position: relative;

  .dots {
    position: absolute;
    z-index: 1;
    left: -25%;
    bottom: -19%;
    width: 101%;
    top: 70%;
    opacity: 0.9;
    background: url(~/assets/img/bg/dots.png) 0 0 repeat;
  }

  .experience-info {
    position: absolute;
    left: 10%;
    z-index: 2;
    margin-top: -6.5rem;
    top: 100%;

    .experience-number {
      font-weight: 600;
      line-height: 1;
      font-size: 10.75rem;
      margin-right: 1.75rem;
    }

    .text {
      font-size: 2.575rem;
      font-weight: 600;
      line-height: 1.25;
    }
  }
}
</style>
