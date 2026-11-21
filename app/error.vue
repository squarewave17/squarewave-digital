<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

useHead({ title: props.error.statusCode === 404 ? 'Page not found' : 'Something went wrong' })

const goHome = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
    <section class="section">
      <div class="wrap err">
        <Doodle3D src="/img/doodles/d04.png" alt="" class="err__doodle" />
        <div class="err__text">
          <h1>{{ error.statusCode === 404 ? 'That page is not here.' : 'Something went wrong.' }}</h1>
          <p class="lead">
            {{
              error.statusCode === 404
                ? 'The address may have changed when the site was rebuilt. Try the menu, or start from the home page.'
                : 'Try again in a moment. If it keeps happening, email me and I will look.'
            }}
          </p>
          <div class="btn-row">
            <button class="btn" type="button" @click="goHome">Go to the home page</button>
            <NuxtLink to="/contact" class="btn btn--ghost">Contact</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style scoped>
.err {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.5fr);
  gap: var(--sp-5) var(--sp-6);
  align-items: center;
}

.err__text {
  display: grid;
  gap: var(--sp-3);
}

.err__doodle {
  max-width: 20rem;
}

@media (max-width: 48em) {
  .err {
    grid-template-columns: 1fr;
  }
}
</style>
