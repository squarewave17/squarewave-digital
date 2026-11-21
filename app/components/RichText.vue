<script setup lang="ts">
/**
 * Renders a line of copy with two small conventions from the content files:
 *   [label](/path)   → an internal link
 *   [PLACEHOLDER]    → a highlighted token to fill before launch
 * Everything else is plain text. No HTML is ever injected.
 */
const props = defineProps<{ text: string }>()

type Seg = { kind: 'text'; value: string } | { kind: 'link'; label: string; to: string } | { kind: 'tok'; value: string }

const segments = computed<Seg[]>(() => {
  const out: Seg[] = []
  const re = /\[([^\]]+)\]\(([^)]+)\)|(\[[A-Z][A-Z0-9 /,.'’+-]*\])/g
  let last = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(props.text))) {
    if (m.index > last) out.push({ kind: 'text', value: props.text.slice(last, m.index) })
    if (m[3]) out.push({ kind: 'tok', value: m[3] })
    else out.push({ kind: 'link', label: m[1]!, to: m[2]! })
    last = m.index + m[0].length
  }
  if (last < props.text.length) out.push({ kind: 'text', value: props.text.slice(last) })
  return out
})
</script>

<template>
  <span>
    <template v-for="(s, i) in segments" :key="i">
      <NuxtLink v-if="s.kind === 'link'" :to="s.to">{{ s.label }}</NuxtLink>
      <span v-else-if="s.kind === 'tok'" class="tok">{{ s.value }}</span>
      <template v-else>{{ s.value }}</template>
    </template>
  </span>
</template>
