<script setup lang="ts">
/**
 * The animated lightbulb figure from the original site.
 * The clip has a white background; multiply blending drops it onto the
 * paper so it reads as ink on the page. Paused for reduced motion.
 */
const video = ref<HTMLVideoElement | null>(null)

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches && video.value) {
    video.value.pause()
    video.value.removeAttribute('autoplay')
  }
})
</script>

<template>
  <div class="bulb" aria-hidden="true">
    <video
      ref="video"
      class="bulb__video"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      poster="/img/lightbulb-poster.jpg"
      width="902"
      height="1124"
    >
      <source src="/video/lightbulb.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<style scoped>
.bulb {
  pointer-events: none;
  user-select: none;
}

.bulb__video {
  width: 100%;
  height: auto;
}
</style>
