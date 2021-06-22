<template>
  <div>
    <div class="sections-menu">
      <span
        v-for="(offset, index) in offsets"
        :key="index"
        class="menu-point"
        :class="{active: activeSection == index}"
        @click="scrollToSection(index)"
      />
    </div>
    <Hero />
    <Skills />
    <Projects />
    <Service />
    <Code />

    <section class="section fullpage is-flex is-align-items-center">
      <div class="container">
        <h2 class="is-size-2 has-text-white mb-6 mt-3 is-uppercase has-text-weight-bold">
          Reden wir
        </h2>
        <ContactForm />
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  data () {
    return {
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0
    }
  },
  mounted () {
    window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM) // Firefox
    window.addEventListener('mousewheel', this.handleMouseWheel, {
      passive: false
    }) // Other browsers
    window.addEventListener('touchstart', this.touchStart, {
      passive: false
    }) // Mobile devices
    window.addEventListener('touchmove', this.touchMove, {
      passive: false
    }) // Mobile devices
    this.calculateSectionOffsets()
  },
  destoy () {
    window.removeEventListener('mousewheel', this.handleMouseWheel, {
      passive: false
    }) // Other browsers
    window.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM) // Firefox
    window.removeEventListener('touchstart', this.touchStart) // Mobile devices
    window.removeEventListener('touchmove', this.touchMove) // Mobile devices
  },
  methods: {
    calculateSectionOffsets () {
      const sections = document.getElementsByTagName('section')
      const length = sections.length
      for (let i = 0; i < length; i++) {
        const sectionOffset = sections[i].offsetTop
        this.offsets.push(sectionOffset)
      }
    },
    scrollToSection (id, force = false) {
      if (this.inMove && !force) { return false }
      this.activeSection = id
      this.inMove = true
      document.getElementsByTagName('section')[id].scrollIntoView({
        behavior: 'smooth'
      })
      setTimeout(() => {
        this.inMove = false
      }, 400)
    },
    handleMouseWheel (e) {
      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveUp()
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown()
      }
      e.preventDefault()
      return false
    },
    moveDown () {
      this.inMove = true
      this.activeSection--
      if (this.activeSection < 0) { this.activeSection = this.offsets.length - 1 }
      this.scrollToSection(this.activeSection, true)
    },
    moveUp () {
      this.inMove = true
      this.activeSection++
      if (this.activeSection > this.offsets.length - 1) { this.activeSection = 0 }
      this.scrollToSection(this.activeSection, true)
    }
  }
}
</script>

<style lang="scss">
  section.fullpage {
    height: 100vh !important;
    width: 100%;
  }

  .sections-menu {
    position: fixed;
    right: 1rem;
    top: 50%;
    z-index: 3;

    @include prefix('transform', 'translateY(-50%)');

    .menu-point {
      width: 10px;
      height: 10px;
      background-color: #fff;
      display: block;
      border-radius: 100%;
      margin: 1rem 0;
      opacity: 0.8;

      @include prefix('transition', '0.5s ease all');

      &.active {
        opacity: 1;
        background-color: $orange;

        @include prefix('transform', 'scale(1.5)');
      }
    }
  }
</style>
