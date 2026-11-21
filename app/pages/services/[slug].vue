<script setup lang="ts">
import { serviceBySlug } from '~/data/services'

const route = useRoute()
const page = serviceBySlug(String(route.params.slug))

if (!page) {
  throw createError({ statusCode: 404, statusMessage: 'Service not found', fatal: true })
}
</script>

<template>
  <ContentPage v-if="page" :page="page" />
</template>
