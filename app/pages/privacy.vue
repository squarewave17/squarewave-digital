<script setup lang="ts">
import { contact } from '~/data/nav'

useSeoMeta({
  title: 'Privacy notice',
  description: 'How Squarewave Digital handles personal data: enquiries, the project planner, hosting, and your rights under UK GDPR.',
})

const contents = [
  { id: 'who', label: 'Who I am' },
  { id: 'collect', label: 'What I collect' },
  { id: 'why', label: 'Why I use it' },
  { id: 'share', label: 'Who I share it with' },
  { id: 'keep', label: 'How long I keep it' },
  { id: 'transfers', label: 'International transfers' },
  { id: 'rights', label: 'Your rights' },
  { id: 'children', label: 'Children' },
  { id: 'changes', label: 'Changes' },
]
</script>

<template>
  <LegalPage title="Privacy notice" updated="21 November 2026" :contents="contents" status="Draft for launch. Fill the placeholders and have it checked if you want it signed off.">
    <template #intro>
      <p>
        This is how {{ contact.legalName }} trading as Squarewave Digital (“I”, “me”, “Squarewave”) uses
        personal information. I am based in the United Kingdom. This page is a working draft for the rebuild, not a substitute for legal advice.
      </p>
    </template>

    <h2 id="who">Who I am</h2>
    <ul>
      <li><strong>Trading name:</strong> Squarewave Digital</li>
      <li><strong>Legal name:</strong> {{ contact.legalName }}</li>
      <li><strong>Email:</strong> <a :href="contact.emailHref">{{ contact.email }}</a></li>
      <li><strong>Phone:</strong> <a :href="contact.phoneHref">{{ contact.phone }}</a></li>
      <li><strong>ICO registration:</strong> <span class="tok">[ICO NUMBER or “not registered”]</span></li>
    </ul>
    <p>I am the controller for enquiry and client-relationship data I collect through this website.</p>

    <h2 id="collect">What I collect</h2>
    <h3>When you use the project planner or contact me</h3>
    <ul>
      <li>Name, email, phone, company name</li>
      <li>The contents of your brief (project type, needs, dates, budget band, description)</li>
      <li>Technical basics the host or forms tool may log (IP address, time, browser)</li>
    </ul>
    <h3>When you email or call</h3>
    <p>Whatever you send or say that I need in order to reply and do the work.</p>
    <h3>When you are a client</h3>
    <ul>
      <li>Contract, billing, and project files</li>
      <li>Login details if we use the <a :href="contact.clientArea">client area</a> or other tools we agree</li>
    </ul>
    <h3>When you use the site</h3>
    <p>See the <NuxtLink to="/cookies">cookie notice</NuxtLink>. I do not need a marketing profile to send you a proposal.</p>
    <p>I do not ask for special category data on the planner. Please do not put other people’s private details in the description box unless they know.</p>

    <h2 id="why">Why I use it</h2>
    <div class="table-scroll">
      <table>
        <thead>
          <tr><th>Purpose</th><th>Lawful basis (UK GDPR)</th></tr>
        </thead>
        <tbody>
          <tr><td>Reply to an enquiry and decide if I can help</td><td>Legitimate interests, or steps toward a contract</td></tr>
          <tr><td>Prepare and perform a contract</td><td>Contract</td></tr>
          <tr><td>Invoices, tax, legal records</td><td>Legal obligation</td></tr>
          <tr><td>Keep the site secure and working</td><td>Legitimate interests</td></tr>
          <tr><td>Optional analytics, if switched on</td><td>Consent, or legitimate interests if the tool is essential and privacy-preserving. <span class="tok">[CONFIRM BEFORE LAUNCH]</span></td></tr>
        </tbody>
      </table>
    </div>
    <p>I do not sell your information. I do not run a surprise newsletter because you asked for a quote.</p>

    <h2 id="share">Who I share it with</h2>
    <p>Only people who need it to do the job:</p>
    <ul>
      <li><strong>Specialists I bring onto a project.</strong> I share what they need to do their part. They must not use it for their own marketing.</li>
      <li><strong>Processors I use to run the studio.</strong> Form submissions from this site are delivered by Formspree, Inc. (United States). Others: email, hosting, accounting, the client-area host. <span class="tok">[LIST TOOLS]</span></li>
      <li><strong>HMRC, insurers, advisers, or police</strong> when the law or a dispute requires it.</li>
    </ul>
    <p>The client area lives on a separate hostname. Treat that host as a processor.</p>

    <h2 id="keep">How long I keep it</h2>
    <ul>
      <li><strong>Enquiries that do not become work:</strong> 18 months, then delete or anonymise, unless I need them for a dispute.</li>
      <li><strong>Clients:</strong> for the contract and then 6 years for tax and legal records, unless the law says longer.</li>
      <li><strong>Server and security logs:</strong> 90 days, unless I am investigating abuse.</li>
    </ul>

    <h2 id="transfers">International transfers</h2>
    <p>If a processor stores data outside the UK, I will use a lawful transfer mechanism (for example the UK addendum to standard contractual clauses). <span class="tok">[CONFIRM WHERE EMAIL, HOSTING AND ANALYTICS LIVE]</span></p>

    <h2 id="rights">Your rights</h2>
    <p>You can ask to access, correct, delete, or restrict the data I hold, object to legitimate-interests processing, and ask for portability where that right applies. You can complain to the <a href="https://ico.org.uk/">Information Commissioner’s Office</a>.</p>
    <p>Email <a :href="contact.emailHref">{{ contact.email }}</a>. I may need to check it is you.</p>

    <h2 id="children">Children</h2>
    <p>This site is for business enquiries. I do not knowingly collect data from children.</p>

    <h2 id="changes">Changes</h2>
    <p>I will update the date at the top when this notice changes. Material changes get a clearer note on the site or by email if you are a client.</p>
    <p class="links"><NuxtLink to="/cookies">Cookies</NuxtLink> <NuxtLink to="/terms">Terms</NuxtLink> <NuxtLink to="/contact">Contact</NuxtLink></p>
  </LegalPage>
</template>
