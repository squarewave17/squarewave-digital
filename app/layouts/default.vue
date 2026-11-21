<script setup lang="ts">
/**
 * The page lives inside a "card" that shrinks and slides left when the
 * menu opens, revealing the slate panel underneath. This is the one
 * piece of theatre carried over from the original site.
 *
 * Mechanics: while the menu is open the card is position:fixed to the
 * viewport, and the inner content is offset by the saved scroll position
 * so nothing visibly jumps. On close we wait for the transform to finish,
 * drop the fixed positioning and restore the scroll position.
 */
const { open, close } = useMenu()
const route = useRoute()

const pageWrap = ref<HTMLElement | null>(null)
const fixed = ref(false)
const savedScroll = ref(0)

watch(open, (isOpen) => {
  if (import.meta.server) return
  if (isOpen) {
    savedScroll.value = window.scrollY
    fixed.value = true
  }
})

function onTransitionEnd(e: TransitionEvent) {
  if (e.target !== pageWrap.value || e.propertyName !== 'transform') return
  if (!open.value && fixed.value) {
    fixed.value = false
    nextTick(() => window.scrollTo({ top: savedScroll.value, behavior: 'instant' as ScrollBehavior }))
  }
}

// Navigating from the menu: close it and land at the top of the new page.
watch(
  () => route.fullPath,
  () => {
    savedScroll.value = 0
    close()
  },
)

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape' && open.value) close()
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <div class="site" :class="{ 'site--open': open }">
    <a class="skip-link" href="#main">Skip to content</a>

    <SiteMenu />

    <div
      ref="pageWrap"
      class="page-wrap"
      :class="{ 'page-wrap--fixed': fixed, 'page-wrap--open': open }"
      :inert="open"
      @transitionend="onTransitionEnd"
    >
      <div class="page-inner" :style="fixed ? { transform: `translateY(-${savedScroll}px)` } : undefined">
        <SiteHeader />
        <main id="main" tabindex="-1">
          <slot />
        </main>
        <SiteFooter />
      </div>
    </div>

    <button v-if="open" class="scrim" type="button" @click="close">
      <span class="visually-hidden">Close menu</span>
    </button>
  </div>
</template>

<style>
.site {
  min-height: 100dvh;
  background: var(--slate);
}

.page-wrap {
  position: relative;
  z-index: 2;
  min-height: 100dvh;
  background: var(--paper);
  color: var(--fg);
  transform-origin: 50% 50%;
  will-change: transform;
}

.page-wrap--fixed {
  position: fixed;
  inset: 0;
  min-height: 0;
  height: 100dvh;
  overflow: hidden;
  transition:
    transform var(--dur-slow) var(--ease-in-out),
    border-radius var(--dur-slow) var(--ease-in-out),
    box-shadow var(--dur-slow) var(--ease-in-out);
}

.page-wrap--open {
  transform: translateX(var(--page-shift)) scale(var(--page-scale));
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-page);
}

.page-inner {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
  outline: none;
}

.scrim {
  position: fixed;
  inset: 0;
  right: var(--menu-w);
  z-index: 3;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: w-resize;
}
</style>
