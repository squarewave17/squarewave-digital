<script setup lang="ts">
import { contact, forms } from '~/data/nav'

useSeoMeta({
  title: 'Project planner',
  description: 'Tell me what you need. I read every submission and reply within a couple of days. No agents, no coming soon.',
})

const year = new Date().getFullYear()
const years = Array.from({ length: 5 }, (_, i) => String(year + i))
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const form = reactive({
  name: '',
  email: '',
  company: '',
  phone: '',
  type: '',
  brief: '',
  needs: [] as string[],
  month: '',
  year: '',
  whenDone: false,
  budget: '',
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
  if (!form.needs.length) {
    error.value = 'Tick at least one thing you need. “Not sure” is fine.'
    return
  }
  // A filled honeypot is a bot. Show it the confirmation and send nothing.
  if (form.gotcha) {
    submitted.value = true
    return
  }

  const launch = form.whenDone
    ? 'When it is done'
    : form.year === 'later'
      ? 'Not that far ahead'
      : [form.month, form.year].filter(Boolean).join(' ') || 'Not given'
  const subject = `Project planner: ${form.name}${form.company ? `, ${form.company}` : ''}`
  const result = await send(
    forms.planner,
    {
      _subject: subject,
      _replyto: form.email,
      form: 'project-planner',
      name: form.name,
      email: form.email,
      company: form.company,
      phone: form.phone,
      type: form.type,
      brief: form.brief,
      needs: form.needs,
      launch,
      budget: form.budget,
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
    <PageIntro title="Project planner">
      <p>Fill this in and I will get back to you to talk it through.</p>
      <p>
        You do not need to know exactly what you need. This is a sketch so I can see the shape of the work. We will go
        into detail on a call, about <strong>{{ contact.callLength }}</strong>, and I will follow with a
        written proposal if it is a fit.
      </p>
      <p>
        I read this. There is no “right agent” and no routing team. Typical first reply:
        <strong>{{ contact.responseTime }}</strong>.
      </p>
      <template #actions>
        <NuxtLink to="/how-it-works">How the process works</NuxtLink>
        <a :href="contact.emailHref">Prefer email? {{ contact.email }}</a>
      </template>
    </PageIntro>

    <section class="section">
      <div class="wrap planner">
        <div v-if="submitted" class="done" role="status">
          <h2>Got it.</h2>
          <p v-if="via === 'mailto'">
            Your email app should have opened with the brief filled in; send it and it lands with me. If nothing opened,
            email <a :href="contact.emailHref">{{ contact.email }}</a> with the same details.
          </p>
          <p>
            I will read this and reply to the email you gave me within {{ contact.responseTime }}. If it
            looks like a fit, we will book a call. If it does not, I will say so.
          </p>
          <p class="links">
            Meanwhile: <NuxtLink to="/how-it-works">how a project runs</NuxtLink> <NuxtLink to="/faq">FAQ</NuxtLink>
          </p>
        </div>

        <form v-else class="form" novalidate @submit.prevent="submit($event)">
          <fieldset>
            <legend>Your details</legend>
            <div class="form__row">
              <div class="field">
                <label class="field__label" for="name">Name</label>
                <input id="name" v-model="form.name" class="input" type="text" name="name" autocomplete="name" required />
              </div>
              <div class="field">
                <label class="field__label" for="email">Email address</label>
                <input id="email" v-model="form.email" class="input" type="email" name="email" autocomplete="email" required />
              </div>
            </div>
            <div class="form__row">
              <div class="field">
                <label class="field__label" for="company">Company name <span class="field__req">(optional)</span></label>
                <input id="company" v-model="form.company" class="input" type="text" name="company" autocomplete="organization" />
              </div>
              <div class="field">
                <label class="field__label" for="phone">Phone number</label>
                <input id="phone" v-model="form.phone" class="input" type="tel" name="phone" autocomplete="tel" required />
                <span class="field__hint">So I can actually call you.</span>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Type of project</legend>
            <div class="choices choices--row">
              <label class="choice"><input v-model="form.type" type="radio" name="type" value="website" required /> Website</label>
              <label class="choice"><input v-model="form.type" type="radio" name="type" value="application" /> Application</label>
              <label class="choice"><input v-model="form.type" type="radio" name="type" value="other" /> Something else?</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Brief description</legend>
            <div class="field">
              <label class="field__label visually-hidden" for="brief">What are you trying to get done?</label>
              <textarea id="brief" v-model="form.brief" class="textarea" name="brief" required placeholder="What are you trying to get done? Rough is fine."></textarea>
            </div>
          </fieldset>

          <fieldset>
            <legend>What do you need</legend>
            <div class="choices choices--row">
              <label class="choice"><input v-model="form.needs" type="checkbox" value="design" /> Design</label>
              <label class="choice"><input v-model="form.needs" type="checkbox" value="development" /> Development</label>
              <label class="choice"><input v-model="form.needs" type="checkbox" value="seo" /> SEO</label>
              <label class="choice"><input v-model="form.needs" type="checkbox" value="cms" /> CMS</label>
              <label class="choice"><input v-model="form.needs" type="checkbox" value="ecommerce" /> E-commerce</label>
              <label class="choice"><input v-model="form.needs" type="checkbox" value="not-sure" /> Not sure</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Ideal launch date</legend>
            <div class="form__row">
              <div class="field">
                <label class="field__label" for="month">Month</label>
                <select id="month" v-model="form.month" class="select" name="month" :disabled="form.whenDone">
                  <option value="">Any month</option>
                  <option v-for="m in months" :key="m" :value="m">{{ m }}</option>
                </select>
              </div>
              <div class="field">
                <label class="field__label" for="year">Year</label>
                <select id="year" v-model="form.year" class="select" name="year" :disabled="form.whenDone">
                  <option value="">Choose a year</option>
                  <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
                  <option value="later">I don’t think that far ahead</option>
                </select>
              </div>
            </div>
            <label class="choice"><input v-model="form.whenDone" type="checkbox" name="whenDone" /> When it’s done</label>
          </fieldset>

          <fieldset>
            <legend>Budget</legend>
            <div class="choices">
              <label class="choice"><input v-model="form.budget" type="radio" name="budget" value="200-3000" required /> £200 to £3,000</label>
              <label class="choice"><input v-model="form.budget" type="radio" name="budget" value="3000-10000" /> £3,000 to £10,000</label>
              <label class="choice"><input v-model="form.budget" type="radio" name="budget" value="10000+" /> £10,000 and up</label>
            </div>
            <span class="field__hint">A starting point, not a quote. <NuxtLink to="/how-it-works#budgets">What these bands usually mean</NuxtLink>.</span>
          </fieldset>

          <div class="hp" aria-hidden="true">
            <label for="planner-gotcha">Leave this field empty</label>
            <input id="planner-gotcha" v-model="form.gotcha" type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
          </div>

          <p v-if="error" class="form__error" role="alert">{{ error }}</p>

          <div class="btn-row">
            <button class="btn" type="submit" :disabled="sending">{{ sending ? 'Sending…' : 'Send brief' }}</button>
            <span class="field__hint">I reply within {{ contact.responseTime }}.</span>
          </div>
        </form>

        <aside class="planner__aside">
          <div class="panel stack">
            <h2 class="aside__h">What happens next</h2>
            <ol class="tight">
              <li>Confirmation that this arrived.</li>
              <li>I read it.</li>
              <li>You hear from me within {{ contact.responseTime }}.</li>
              <li>Call, then a proposal, then you decide.</li>
            </ol>
            <p class="links"><NuxtLink to="/how-it-works#after-you-submit">After you submit, in more detail</NuxtLink></p>
          </div>
          <div class="panel panel--agency stack">
            <h2 class="aside__h">Running an agency?</h2>
            <p>Use the <NuxtLink to="/agencies/enquire">partner enquiry</NuxtLink> instead. Different questions, same person reading it.</p>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<style scoped>
.planner {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(16rem, 1fr);
  gap: var(--sp-6);
  align-items: start;
}

.planner__aside {
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

.panel--agency {
  background: var(--slate);
  color: #e9e9ec;
}

.panel--agency .aside__h {
  color: #fff;
}

.panel--agency a {
  color: #fff;
  text-decoration-color: #6f6f7a;
}

@media (max-width: 56em) {
  .planner {
    grid-template-columns: 1fr;
  }

  .planner__aside {
    position: static;
  }
}
</style>
