<script setup lang="ts">
import { contact } from '~/data/nav'

useSeoMeta({
  title: 'Cookie notice',
  description: 'Which cookies Squarewave Digital uses, why, and how to control them.',
})

const contents = [
  { id: 'short', label: 'The short version' },
  { id: 'table', label: 'What this site uses' },
  { id: 'control', label: 'How to control cookies' },
  { id: 'contact', label: 'Contact' },
]
</script>

<template>
  <LegalPage title="Cookies" updated="21 November 2026" :contents="contents" status="Draft. Align the table with the real build before launch. Do not ship a banner that lies.">
    <template #intro>
      <p>
        This site is run by {{ contact.legalName }} trading as Squarewave Digital. The
        <NuxtLink to="/privacy">privacy notice</NuxtLink> covers personal data. This page covers cookies and similar storage.
      </p>
    </template>

    <h2 id="short">The short version</h2>
    <p>I use cookies that make the site and forms work. I do not need advertising cookies to take an enquiry.</p>
    <p>If I add analytics or a marketing pixel later, that is optional, and I will ask before setting those cookies, or I will not add them.</p>

    <h2 id="table">What this site uses</h2>
    <p>This site is built as static pages. At launch it sets no cookies of its own. The rows below cover what may apply once forms and the client area are wired in. <span class="tok">[CONFIRM FROM THE REAL BUILD]</span></p>
    <div class="table-scroll">
      <table>
        <thead>
          <tr><th>Name or type</th><th>Whose</th><th>Purpose</th><th>Duration</th><th>Needed?</th></tr>
        </thead>
        <tbody>
          <tr><td>Form submission token</td><td>Forms service</td><td>Submit the planner and partner enquiry safely</td><td>Session</td><td>Yes, on the forms</td></tr>
          <tr><td>Cookie-preference cookie</td><td>This site</td><td>Remember your choice if a banner is ever shown</td><td>12 months</td><td>Only if a banner exists</td></tr>
          <tr><td>Analytics</td><td>None</td><td>Understand traffic</td><td>n/a</td><td>No. Only with consent if used</td></tr>
          <tr><td>Client-area cookies</td><td>client.squarewavedigital.co.uk</td><td>Log you in</td><td>As that install sets</td><td>Yes, if you use the client area</td></tr>
        </tbody>
      </table>
    </div>
    <p>Third-party embeds (maps, video, social) set their own cookies. There are no idle social widgets on this site.</p>

    <h2 id="control">How to control cookies</h2>
    <ul>
      <li>Browser controls: block or delete cookies in your browser settings. Essential cookies may mean the planner will not submit.</li>
      <li>If a banner is ever shown, use it. There is no “necessary only” button that still drops analytics.</li>
      <li>Client-area cookies are controlled by that login. Log out and clear site data if you use a shared computer.</li>
    </ul>

    <h2 id="contact">Contact</h2>
    <p>Questions about cookies or data: <a :href="contact.emailHref">{{ contact.email }}</a>.</p>
    <p class="links"><NuxtLink to="/privacy">Privacy</NuxtLink> <NuxtLink to="/terms">Terms</NuxtLink></p>
  </LegalPage>
</template>
