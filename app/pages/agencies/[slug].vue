<script setup lang="ts">
import { agencyOfferBySlug } from '~/data/agencies'

const route = useRoute()
const page = agencyOfferBySlug(String(route.params.slug))

if (!page) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <ContentPage v-if="page" :page="page" />
</template>
