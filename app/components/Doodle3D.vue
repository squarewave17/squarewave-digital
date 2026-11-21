<script setup lang="ts">
/**
 * A doodle as a paper cut-out in a shallow 3D scene.
 *
 * Layers, back to front: a grey offset blob, a highlighter blob (or the
 * illustration's own colour underlay when one exists), then the ink
 * line-art floating in front. The scene tilts toward the pointer and
 * leans gently with scroll position. Honour prefers-reduced-motion: no
 * tilt, no drift, just the layered image.
 */
const props = withDefaults(
  defineProps<{
    src: string
    color?: string
    alt?: string
    tilt?: number
    drift?: boolean
    blobs?: boolean
  }>(),
  { alt: '', tilt: 9, drift: true, blobs: true },
)

const el = ref<HTMLElement | null>(null)
const rx = ref(0)
const ry = ref(0)
const lean = ref(0)
const hovering = ref(false)
const reduce = ref(false)

function onMove(e: PointerEvent) {
  if (reduce.value || !el.value || e.pointerType === 'touch') return
  const r = el.value.getBoundingClientRect()
  const x = (e.clientX - r.left) / r.width - 0.5
  const y = (e.clientY - r.top) / r.height - 0.5
  ry.value = x * props.tilt * 2
  rx.value = -y * props.tilt * 2
  hovering.value = true
}

function onLeave() {
  rx.value = 0
  ry.value = 0
  hovering.value = false
}

let raf = 0
function onScroll() {
  if (raf) return
  raf = requestAnimationFrame(() => {
    raf = 0
    const r = el.value?.getBoundingClientRect()
    if (!r) return
    const c = (r.top + r.height / 2) / window.innerHeight - 0.5
    lean.value = Math.max(-1, Math.min(1, c)) * 7
  })
}

onMounted(() => {
  reduce.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce.value || !el.value) return
  const io = new IntersectionObserver(([entry]) => {
    if (entry?.isIntersecting) {
      window.addEventListener('scroll', onScroll, { passive: true })
      onScroll()
    } else {
      window.removeEventListener('scroll', onScroll)
    }
  })
  io.observe(el.value)
  onUnmounted(() => {
    io.disconnect()
    window.removeEventListener('scroll', onScroll)
    if (raf) cancelAnimationFrame(raf)
  })
})

const sceneStyle = computed(() => ({
  '--rx': `${rx.value + (hovering.value ? 0 : lean.value)}deg`,
  '--ry': `${ry.value}deg`,
}))
</script>

<template>
  <figure
    ref="el"
    class="doodle"
    :class="{ 'is-hover': hovering, 'doodle--drift': drift && !reduce }"
    @pointermove="onMove"
    @pointerleave="onLeave"
  >
    <div class="doodle__drift">
      <div class="doodle__scene" :style="sceneStyle">
        <span v-if="blobs && !color" class="doodle__blob doodle__blob--grey" aria-hidden="true" />
        <span v-if="blobs && !color" class="doodle__blob doodle__blob--hl" aria-hidden="true" />
        <img v-if="color" class="doodle__layer doodle__layer--color" :src="color" alt="" loading="lazy" decoding="async" />
        <img class="doodle__layer doodle__layer--ink" :src="src" :alt="alt" loading="lazy" decoding="async" />
      </div>
    </div>
    <figcaption v-if="$slots.default" class="doodle__caption"><slot /></figcaption>
  </figure>
</template>

<style scoped>
.doodle {
  margin: 0;
  width: 100%;
  max-width: 30rem;
  perspective: 1100px;
  touch-action: pan-y;
}

.doodle__drift {
  aspect-ratio: 1;
}

.doodle--drift .doodle__drift {
  animation: doodle-drift 7s ease-in-out infinite;
}

.doodle__scene {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
  transition: transform 650ms var(--ease-out);
}

.is-hover .doodle__scene {
  transition-duration: 120ms;
}

.doodle__layer {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  backface-visibility: hidden;
}

.doodle__layer--ink {
  transform: translateZ(44px);
}

.doodle__layer--color {
  transform: translateZ(-28px) scale(1.03);
  opacity: 0.95;
}

/* Hand-cut paper blobs for doodles that have no colour underlay of their own. */
.doodle__blob {
  position: absolute;
  display: block;
  border-radius: 48% 52% 55% 45% / 52% 40% 60% 48%;
}

.doodle__blob--hl {
  inset: 16% 10% 12% 18%;
  background: var(--hl);
  transform: translateZ(-60px) rotate(-7deg);
}

.doodle__blob--grey {
  inset: 8% 22% 22% 6%;
  background: var(--mist-2);
  opacity: 0.55;
  transform: translateZ(-96px) rotate(11deg);
}

.doodle__caption {
  margin-top: var(--sp-2);
  font-size: var(--fs-0);
  color: var(--fg-muted);
}

@keyframes doodle-drift {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-9px);
  }
}
</style>
