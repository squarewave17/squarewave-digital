<script setup lang="ts">
import { primaryNav, contact } from '~/data/nav'

const { open, close } = useMenu()
</script>

<template>
  <nav id="site-menu" class="menu" :aria-hidden="!open" aria-label="Site menu">
    <button class="menu__close" type="button" :tabindex="open ? 0 : -1" @click="close">
      <span aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M3 3l12 12M15 3L3 15" />
        </svg>
      </span>
      <span class="visually-hidden">Close menu</span>
    </button>

    <div class="menu__top">
      <NuxtLink to="/" class="menu__logo" :tabindex="open ? 0 : -1" aria-label="Squarewave Digital, home">
        <img src="/img/logo.png" alt="" width="700" height="207" />
      </NuxtLink>

      <ul class="menu__list">
        <li v-for="(item, i) in primaryNav" :key="item.to" :style="{ '--i': i }">
          <NuxtLink :to="item.to" class="menu__link" :tabindex="open ? 0 : -1">{{ item.label }}</NuxtLink>
        </li>
      </ul>
    </div>

    <div class="menu__bottom">
      <div class="menu__ctas">
        <NuxtLink to="/agencies/enquire" class="btn btn--paper" :tabindex="open ? 0 : -1">Partner enquiry</NuxtLink>
        <NuxtLink to="/project-planner" class="menu__quiet" :tabindex="open ? 0 : -1">Plan a project, for businesses</NuxtLink>
      </div>
      <address class="menu__contact">
        <a :href="contact.phoneHref" :tabindex="open ? 0 : -1">{{ contact.phone }}</a>
        <a :href="contact.emailHref" :tabindex="open ? 0 : -1">{{ contact.email }}</a>
      </address>
    </div>
  </nav>
</template>

<style scoped>
.menu {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  width: var(--menu-w);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--sp-5);
  padding: clamp(2rem, 9vh, 5.5rem) clamp(1.5rem, 3.5vw, 3.5rem) clamp(1.5rem, 6vh, 3.5rem);
  background: var(--slate);
  color: #fff;
  overflow-y: auto;
  visibility: hidden;
  transition: visibility 0s linear var(--dur-slow);
}

.site--open .menu {
  visibility: visible;
  transition-delay: 0s;
}

/* The close disc pokes out of the panel's left edge, as it did on the old site. */
.menu__close {
  position: absolute;
  left: -1.625rem;
  top: 50%;
  width: 3.25rem;
  height: 3.25rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 0;
  background: var(--paper);
  color: var(--ink);
  cursor: pointer;
  transform: translateY(-50%) scale(0);
  transition: transform var(--dur) var(--ease-out);
}

.site--open .menu__close {
  transform: translateY(-50%) scale(1);
  transition-delay: 380ms;
}

.menu__close:hover {
  background: var(--hl);
}

.menu__logo {
  display: block;
  width: clamp(10rem, 14vw, 13rem);
  margin-bottom: var(--sp-5);
}

.menu__logo img {
  filter: invert(1);
}

.menu__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.35rem;
}

.menu__list li {
  opacity: 0;
  transform: translateX(1.25rem);
  transition:
    opacity var(--dur) var(--ease-out),
    transform var(--dur) var(--ease-out);
}

.site--open .menu__list li {
  opacity: 1;
  transform: none;
  transition-delay: calc(180ms + var(--i) * 55ms);
}

.menu__link {
  display: inline-block;
  padding: 0.45rem 0;
  font-size: clamp(1.5rem, 2.4vw, 2rem);
  font-weight: var(--w-semi);
  color: #fff;
  text-decoration: none;
  position: relative;
}

/* Highlighter stroke under the link on hover and on the current page. */
.menu__link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0.3rem;
  height: 4px;
  border-radius: 2px;
  background: var(--hl);
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform var(--dur) var(--ease-out);
}

.menu__link:hover::after,
.menu__link.router-link-active::after {
  transform: scaleX(1);
}

.menu__bottom {
  display: grid;
  gap: var(--sp-4);
}

.menu__ctas {
  display: grid;
  gap: var(--sp-2);
  justify-items: start;
}

.menu__quiet {
  color: #fff;
  font-weight: var(--w-semi);
  text-decoration-color: #6f6f7a;
}

.menu__quiet:hover {
  text-decoration-color: var(--hl);
}

.menu__contact {
  display: grid;
  gap: 0.35rem;
  font-style: normal;
  font-size: var(--fs-1);
}

.menu__contact a {
  color: #d7d7dc;
  text-decoration-color: transparent;
}

.menu__contact a:hover {
  color: #fff;
  text-decoration-color: var(--hl);
}

@media (max-width: 48em) {
  .menu {
    padding-left: 2.5rem;
  }

  .menu__close {
    top: 4.5rem;
  }
}
</style>
