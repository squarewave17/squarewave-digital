<script setup lang="ts">
import { businessNav, agencyNav, studioNav, legalNav, contact } from '~/data/nav'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer on-slate">
    <div class="wrap">
      <div class="footer__grid">
        <nav class="footer__col" aria-label="For businesses">
          <h2 class="footer__h">For businesses</h2>
          <ul>
            <li v-for="item in businessNav" :key="item.to">
              <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <nav class="footer__col" aria-label="For agencies">
          <h2 class="footer__h">For agencies</h2>
          <ul>
            <li v-for="item in agencyNav" :key="item.to">
              <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <nav class="footer__col" aria-label="Studio">
          <h2 class="footer__h">Studio</h2>
          <ul>
            <li v-for="item in studioNav" :key="item.to">
              <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="footer__col">
          <h2 class="footer__h">Contact</h2>
          <address class="footer__address">
            <a :href="contact.emailHref">{{ contact.email }}</a>
            <a :href="contact.phoneHref">{{ contact.phone }}</a>
            <a v-if="contact.github" :href="contact.github" rel="noopener">GitHub: {{ contact.githubUser }}</a>
            <span>{{ contact.baseLine }}</span>
          </address>
          <a class="footer__client" :href="contact.clientArea">Client area (existing clients)</a>
        </div>
      </div>

      <div class="footer__base">
        <p>
          © {{ year }} Squarewave Digital. {{ contact.legalName }} trading as Squarewave Digital.
        </p>
        <ul class="footer__legal">
          <li v-for="item in legalNav" :key="item.to">
            <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding-block: var(--sp-7) var(--sp-4);
  font-size: var(--fs-0);
}

.footer__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--sp-5) var(--sp-4);
}

@media (max-width: 56em) {
  .footer__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 30em) {
  .footer__grid {
    grid-template-columns: 1fr;
  }
}

.footer__h {
  font-size: var(--fs-1);
  font-weight: var(--w-bold);
  color: #fff;
  margin-bottom: var(--sp-2);
}

.footer__col ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.45rem;
}

.footer__col a {
  color: #d7d7dc;
  text-decoration-color: transparent;
}

.footer__col a:hover {
  color: #fff;
  text-decoration-color: var(--hl);
}

.footer__address {
  display: grid;
  gap: 0.45rem;
  font-style: normal;
}

.footer__client {
  display: inline-block;
  margin-top: var(--sp-3);
  color: #b3b3bb;
}

.footer__base {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--sp-2) var(--sp-4);
  margin-top: var(--sp-6);
  padding-top: var(--sp-3);
  border-top: 1px solid var(--rule);
  color: #b3b3bb;
}

.footer__legal {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: var(--sp-3);
}

.footer__legal a {
  color: #b3b3bb;
  text-decoration-color: transparent;
}

.footer__legal a:hover {
  color: #fff;
  text-decoration-color: var(--hl);
}

.footer .tok {
  background: var(--hl);
  color: var(--ink);
}
</style>
