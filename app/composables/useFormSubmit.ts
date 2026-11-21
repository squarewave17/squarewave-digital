/**
 * Sends a form to a Formspree-style endpoint: POST JSON, Accept: application/json.
 * Any service that accepts that shape works (Formspree, Basin, a tiny function).
 *
 * With no endpoint configured, falls back to opening the visitor's email app
 * with the same details filled in, so an enquiry is never silently dropped
 * while the endpoint is being set up.
 */
export type FormPayload = Record<string, string | string[] | boolean>

export type SendResult = { ok: true; via: 'endpoint' | 'mailto' } | { ok: false; error: string }

function mailtoUrl(to: string, subject: string, payload: FormPayload) {
  const lines = Object.entries(payload)
    .filter(([k, v]) => !k.startsWith('_') && v !== '' && v !== false)
    .map(([k, v]) => `${k.replace(/_/g, ' ')}: ${Array.isArray(v) ? v.join(', ') : String(v)}`)
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`
}

export function useFormSubmit() {
  const sending = ref(false)

  async function send(endpoint: string, payload: FormPayload, fallback: { to: string; subject: string }): Promise<SendResult> {
    if (!endpoint) {
      window.location.href = mailtoUrl(fallback.to, fallback.subject, payload)
      return { ok: true, via: 'mailto' }
    }

    sending.value = true
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        let detail = ''
        try {
          const body = (await res.json()) as { errors?: { message?: string }[]; error?: string }
          detail = body.errors?.map((e) => e.message).filter(Boolean).join(' ') || body.error || ''
        } catch {
          // Not JSON; fall through to the status code.
        }
        return { ok: false, error: detail || `the form service replied with ${res.status}` }
      }
      return { ok: true, via: 'endpoint' }
    } catch (e) {
      return { ok: false, error: e instanceof Error ? e.message : 'network error' }
    } finally {
      sending.value = false
    }
  }

  return { sending, send }
}
