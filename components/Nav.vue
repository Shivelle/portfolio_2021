<template>
  <nav class="navbar has-background-black-ter" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="~assets/img/svg/bird.svg" width="112" height="28">
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="mainNav">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="mainNav" class="navbar-end">
      <div class="navbar-start">
        <a class="navbar-item has-text-light">
          Portfolio
        </a>

        <a class="navbar-item has-text-light" href="/blog">
          Blog
        </a>
      </div>
    </div>
  </nav>
</template>
