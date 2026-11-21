<script setup lang="ts">
import { contact, rates, forms } from '~/data/nav'

useSeoMeta({
  title: 'Partner enquiry for agencies',
  description: 'Tell me what is stuck. I read every enquiry myself and reply within one working day. Overflow, batch work and delivery audits for agencies, starting with a pilot day.',
})

const form = reactive({
  name: '',
  role: '',
  agency: '',
  website: '',
  email: '',
  phone: '',
  stuck: [] as string[],
  about: '',
  stack: '',
  when: '',
  appear: '',
  gotcha: '',
})

const { sending, send } = useFormSubmit()
const submitted = ref(false)
const via = ref<'endpoint' | 'mailto'>('endpoint')
const error = ref('')

async function submit(e: Event) {
  error.value = ''
  // The form is novalidate so the browser does not style it; ask it to check and report here.
  if (!(e.target as HTMLFormElement).reportValidity()) return
  if (!form.stuck.length) {
    error.value = 'Tick at least one thing that is stuck. “Not sure” is fine.'
    return
  }
  // A filled honeypot is a bot. Show it the confirmation and send nothing.
  if (form.gotcha) {
    submitted.value = true
    return
  }

  const subject = `Partner enquiry: ${form.agency}`
  const result = await send(
    forms.agency,
    {
      _subject: subject,
      _replyto: form.email,
      form: 'partner-enquiry',
      name: form.name,
      role: form.role,
      agency: form.agency,
      website: form.website,
      email: form.email,
      phone: form.phone,
      stuck: form.stuck,
      about: form.about,
      stack: form.stack,
      when: form.when,
      appear: form.appear,
    },
    { to: contact.email, subject },
  )

  if (result.ok) {
    via.value = result.via
    submitted.value = true
    return
  }
  error.value = `That did not send (${result.error}). Email ${contact.email} with the same details and I will pick it up.`
}
</script>

<template>
  <div>
    <PageIntro title="Partner enquiry" audience="agency">
      <p>
        Short on purpose. Tell me what is stuck and roughly what shape it is. I read it myself and reply within
        <strong>{{ contact.responseTime }}</strong>.
      </p>
      <p>
        Slots: I work with {{ rates.partnerSlots }} agencies at a time. <strong>{{ rates.slotsStatus }}</strong> If they are
        ever full, send this anyway and I will tell you when one opens.
      </p>
      <template #actions>
        <NuxtLink to="/agencies#how-it-runs">How agency work runs</NuxtLink>
        <a :href="contact.emailHref">Prefer email? {{ contact.email }}</a>
      </template>
    </PageIntro>

    <section class="section">
      <div class="wrap enquire">
        <div v-if="submitted" class="done" role="status">
          <h2>Got it.</h2>
          <p v-if="via === 'mailto'">
            Your email app should have opened with this filled in; send it and it lands with me. If nothing opened,
            email <a :href="contact.emailHref">{{ contact.email }}</a> with the same details.
          </p>
          <p>
            I will read this and reply to the email you gave me within {{ contact.responseTime }}. If it
            is a fit, we book a call. If the slots are full, I will say when one opens. If it is not a fit, I will say so
            and, where I can, point you at someone who is.
          </p>
          <p class="links">
            Meanwhile: <NuxtLink to="/agencies#how-it-runs">how agency work runs</NuxtLink> <NuxtLink to="/faq#agencies">FAQ for agencies</NuxtLink>
          </p>
        </div>

        <form v-else class="form" novalidate @submit.prevent="submit($event)">
          <fieldset>
            <legend>You</legend>
            <div class="form__row">
              <div class="field">
                <label class="field__label" for="name">Name</label>
                <input id="name" v-model="form.name" class="input" type="text" name="name" autocomplete="name" required />
              </div>
              <div class="field">
                <label class="field__label" for="role">Role <span class="field__req">(optional)</span></label>
                <input id="role" v-model="form.role" class="input" type="text" name="role" placeholder="founder, delivery lead, head of dev" autocomplete="organization-title" />
              </div>
            </div>
            <div class="form__row">
              <div class="field">
                <label class="field__label" for="agency">Agency name</label>
                <input id="agency" v-model="form.agency" class="input" type="text" name="agency" autocomplete="organization" required />
              </div>
              <div class="field">
                <label class="field__label" for="website">Agency website <span class="field__req">(optional)</span></label>
                <input id="website" v-model="form.website" class="input" type="url" name="website" inputmode="url" placeholder="yourstudio.co.uk" />
              </div>
            </div>
            <div class="form__row">
              <div class="field">
                <label class="field__label" for="email">Email address</label>
                <input id="email" v-model="form.email" class="input" type="email" name="email" autocomplete="email" required />
              </div>
              <div class="field">
                <label class="field__label" for="phone">Phone number <span class="field__req">(optional)</span></label>
                <input id="phone" v-model="form.phone" class="input" type="tel" name="phone" autocomplete="tel" />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>What is stuck</legend>
            <div class="choices">
              <label class="choice"><input v-model="form.stuck" type="checkbox" value="overflow" /> Overflow or backlog on live projects</label>
              <label class="choice"><input v-model="form.stuck" type="checkbox" value="batch" /> A batch job (migration, bulk pages, estate updates, accessibility)</label>
              <label class="choice"><input v-model="form.stuck" type="checkbox" value="audit" /> Delivery keeps slipping and I want it looked at</label>
              <label class="choice"><input v-model="form.stuck" type="checkbox" value="cover" /> Cover for a developer (leave, notice period, gap)</label>
              <label class="choice"><input v-model="form.stuck" type="checkbox" value="not-sure" /> Not sure, let’s talk</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Tell me about it</legend>
            <div class="field">
              <label class="field__label visually-hidden" for="about">What is the work?</label>
              <textarea id="about" v-model="form.about" class="textarea" name="about" required placeholder="What is the work, what stack, what is the deadline, and what have you already tried?"></textarea>
            </div>
            <div class="field">
              <label class="field__label" for="stack">Stack <span class="field__req">(optional)</span></label>
              <input id="stack" v-model="form.stack" class="input" type="text" name="stack" placeholder="WordPress, Laravel, React, something else…" />
            </div>
          </fieldset>

          <fieldset>
            <legend>When do you need hands</legend>
            <div class="choices choices--row">
              <label class="choice"><input v-model="form.when" type="radio" name="when" value="week" required /> This week</label>
              <label class="choice"><input v-model="form.when" type="radio" name="when" value="month" /> This month</label>
              <label class="choice"><input v-model="form.when" type="radio" name="when" value="quarter" /> Next quarter</label>
              <label class="choice"><input v-model="form.when" type="radio" name="when" value="ongoing" /> Ongoing</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>How you would like me to appear <span class="field__req">(optional)</span></legend>
            <div class="choices">
              <label class="choice"><input v-model="form.appear" type="radio" name="appear" value="white-label" /> Under your name (white-label)</label>
              <label class="choice"><input v-model="form.appear" type="radio" name="appear" value="named" /> As a named contractor</label>
              <label class="choice"><input v-model="form.appear" type="radio" name="appear" value="undecided" /> Not decided yet</label>
            </div>
          </fieldset>

          <div class="hp" aria-hidden="true">
            <label for="enquire-gotcha">Leave this field empty</label>
            <input id="enquire-gotcha" v-model="form.gotcha" type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
          </div>

          <p v-if="error" class="form__error" role="alert">{{ error }}</p>

          <div class="btn-row">
            <button class="btn" type="submit" :disabled="sending">{{ sending ? 'Sending…' : 'Send enquiry' }}</button>
          </div>
        </form>

        <aside class="enquire__aside">
          <div class="panel stack">
            <h2 class="aside__h">What happens next</h2>
            <ol class="tight">
              <li>Confirmation that this arrived.</li>
              <li>I read it.</li>
              <li>You hear from me within {{ contact.responseTime }}.</li>
              <li>A call, a one-page partner agreement, then a first block, batch or audit.</li>
            </ol>
          </div>
          <div class="panel stack">
            <h2 class="aside__h">Where and when</h2>
            <p>{{ contact.baseLine }} {{ contact.ukHours }} is kept free for calls. {{ contact.overnight }}</p>
            <p>{{ rates.pilot }}</p>
          </div>
          <div class="panel stack">
            <h2 class="aside__h">Not an agency?</h2>
            <p>Businesses start with the <NuxtLink to="/project-planner">project planner</NuxtLink>.</p>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<style scoped>
.enquire {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(16rem, 1fr);
  gap: var(--sp-6);
  align-items: start;
}

.enquire__aside {
  display: grid;
  gap: var(--sp-3);
  position: sticky;
  top: var(--sp-3);
}

.stack {
  display: grid;
  gap: var(--sp-2);
}

.aside__h {
  font-size: var(--fs-3);
  font-weight: var(--w-bold);
}

.tight {
  display: grid;
  gap: 0.5rem;
}

@media (max-width: 56em) {
  .enquire {
    grid-template-columns: 1fr;
  }

  .enquire__aside {
    position: static;
  }
}
</style>
