<script setup lang="ts">
import { contact, rates } from '~/data/nav'

useSeoMeta({
  title: 'Terms and conditions',
  description: 'Draft terms for enquiries, project work and agency engagements with Squarewave Digital. The proposal or partner agreement wins if it says something different.',
})

const contents = [
  { id: 'who', label: 'Who I am' },
  { id: 'site', label: 'This website' },
  { id: 'enquiries', label: 'Enquiries' },
  { id: 'proposals', label: 'Proposals and the contract' },
  { id: 'responsibilities', label: 'Your responsibilities' },
  { id: 'specialists', label: 'Specialists' },
  { id: 'fees', label: 'Fees and payment' },
  { id: 'changes', label: 'Changes' },
  { id: 'ip', label: 'Intellectual property' },
  { id: 'hosting', label: 'Hosting, domains, and care' },
  { id: 'liability', label: 'Warranties and liability' },
  { id: 'cancellation', label: 'Cancellation' },
  { id: 'confidentiality', label: 'Confidentiality' },
  { id: 'agencies', label: 'Working with agencies' },
  { id: 'use', label: 'Acceptable use of this site' },
  { id: 'law', label: 'Law' },
  { id: 'updates', label: 'Changes to these terms' },
]
</script>

<template>
  <LegalPage title="Terms and conditions" updated="21 November 2026" :contents="contents" status="Draft for launch. Have a solicitor review this alongside the partner agreement before relying on it.">
    <template #intro>
      <p>
        These terms are a working draft for {{ contact.legalName }} trading as Squarewave Digital.
        They cover use of this website and, unless a signed proposal or contract says otherwise, project work I do for you.
      </p>
      <p>If a proposal, statement of work, or signed contract conflicts with this page, <strong>the proposal or signed contract wins</strong> for that project. This is not legal advice.</p>
    </template>

    <h2 id="who">1. Who I am</h2>
    <p>Squarewave Digital is a small UK studio led by {{ contact.legalName }}. You are contracting with {{ contact.legalName }}, not with “an agency” and not with the specialists I may involve (unless a separate contract says so).</p>
    <p>Contact: <a :href="contact.emailHref">{{ contact.email }}</a>, <a :href="contact.phoneHref">{{ contact.phone }}</a>.</p>

    <h2 id="site">2. This website</h2>
    <p>The site is for information and enquiries. I try to keep it accurate. I do not promise it is complete or always up. Do not rely on budget bands as a quote. They are starting points; see <NuxtLink to="/how-it-works">How it works</NuxtLink>.</p>

    <h2 id="enquiries">3. Enquiries</h2>
    <p>Sending the <NuxtLink to="/project-planner">project planner</NuxtLink> or an email is not a contract. I do not have to take the work. If I say no, I will try to say so clearly. I aim to reply within {{ contact.responseTime }} but that is a target, not a service-level agreement.</p>

    <h2 id="proposals">4. Proposals and the contract</h2>
    <p>Work starts when we both agree a written proposal (email acceptance is enough unless I ask for a signature) and, if I have asked for it, any deposit has cleared.</p>
    <p>The proposal sets scope, price, timing, and who does what, including whether a specialist will be involved. I remain responsible to you for the delivery I sold, including work I subcontract.</p>

    <h2 id="responsibilities">5. Your responsibilities</h2>
    <p>You will give me, in reasonable time: decisions, feedback, copy, images, and access I need; materials you have the right to use; and a contact who can actually say yes.</p>
    <p>If you stall, dates move. If the stall is long enough that the job has to be re-scoped or re-quoted, I will say so in writing.</p>

    <h2 id="specialists">6. Specialists</h2>
    <p>I may use trusted freelancers, including the studio’s designer and SEO specialist. You still deal with me. I pay them; you do not pick up a surprise third invoice unless we agreed a direct arrangement in writing.</p>

    <h2 id="fees">7. Fees and payment</h2>
    <p>Prices are in GBP and exclusive of VAT if I am or become VAT-registered (<span class="tok">[VAT NUMBER or “not registered”]</span>).</p>
    <p>Typical pattern (change in the proposal if needed): deposit before work starts; staged invoices on larger jobs; final invoice before or at launch, as the proposal says.</p>
    <p>Late payment: I may pause work and, where the law allows, charge interest. I do not use unpaid sites as leverage in a cute way; I also do not continue unpaid work indefinitely.</p>

    <h2 id="changes">8. Changes</h2>
    <p>New pages, new features, or “while you are there” items that are not in scope are new work. I will price them before doing them, unless we have a <NuxtLink to="/services/care-retainers">care retainer</NuxtLink> that already covers that class of change.</p>

    <h2 id="ip">9. Intellectual property</h2>
    <p>Unless the proposal says otherwise:</p>
    <ul>
      <li><strong>Before invoices for a phase are paid:</strong> I keep the IP in the work I (or my subcontractors) created for that phase.</li>
      <li><strong>After those invoices are paid:</strong> you own the deliverables created specifically for you, so you can use them for your business.</li>
      <li><strong>I keep:</strong> my underlying tools, snippets, frameworks, and know-how. You get a licence to use them as part of the deliverable, not to resell my kit as a product.</li>
      <li><strong>Third-party things</strong> (fonts, stock, plugins, platforms, open-source licences) stay under their own terms. I will not pretend I can sell you WordPress.</li>
    </ul>
    <p>I may show the work in my own portfolio later, unless you ask me in writing not to. There is no public portfolio on the site at launch; this clause is for when there is.</p>

    <h2 id="hosting">10. Hosting, domains, and care</h2>
    <p>Hosting and retainers are optional and separately agreed. I am not a 24/7 operations centre. If I host, I will say what is included and how you can leave. I will not build a trap.</p>
    <p>You are responsible for renewing domains you own, unless we have agreed I handle a specific domain.</p>

    <h2 id="liability">11. Warranties and liability</h2>
    <p>I will do the work with reasonable care and skill. I do not guarantee search rankings, sales, or ad performance.</p>
    <p>I am not liable for loss of profit, loss of data you did not back up, or indirect loss. My total liability for a project is limited to the fees you paid for that project in the 12 months before the claim, except where the law does not allow a limit (for example, death or personal injury caused by negligence, or fraud).</p>
    <p>If a third-party platform breaks, changes its API, or suspends an account, that is not automatically my breach.</p>

    <h2 id="cancellation">12. Cancellation</h2>
    <p>You may cancel in writing. Work already done, and costs already committed (including specialist time I cannot undo), remain payable. Deposits are as set in the proposal.</p>
    <p>I may cancel if you do not pay, do not provide what I need, or ask me to do something unlawful or that I cannot stand behind. I will confirm in writing.</p>

    <h2 id="confidentiality">13. Confidentiality</h2>
    <p>We both keep private information private, except where we must disclose it by law or to people who need it to do the work (and who are under a duty of confidence).</p>

    <h2 id="agencies">14. Working with agencies</h2>
    <p>Where you are an agency engaging me for <NuxtLink to="/agencies">overflow, batch or audit work</NuxtLink>, these points apply in addition to the rest of this page. A signed partner agreement wins over this section where they differ.</p>
    <ul>
      <li><strong>You are my client.</strong> Your client is not. I take instructions from you, invoice you, and am accountable to you. I have no contract with your client unless we all sign one.</li>
      <li><strong>No solicitation.</strong> I will not approach, pitch to, or accept direct work from a client I met through you, during the engagement and for 12 months after it ends, unless you agree in writing. If your client contacts me directly, I will tell you.</li>
      <li><strong>White-label or named.</strong> We agree in writing, before any client contact, whether I appear as part of your team or as a named contractor. I will not misrepresent my status beyond what we agreed.</li>
      <li><strong>Confidentiality.</strong> Section 13 applies to your business and your clients’ businesses. I may sign your NDA instead if you prefer; where both exist, the stricter clause applies.</li>
      <li><strong>Intellectual property.</strong> On payment, the deliverables created for you transfer to you to pass on to your client, on the same basis as section 9. Until payment, I keep them.</li>
      <li><strong>Case studies.</strong> Unlike section 9, agency work is private by default. I will only describe it publicly, anonymised, if the partner agreement allows it.</li>
      <li><strong>Contractor status.</strong> I am an independent contractor, not an employee or worker. I control how and when the work is done within the agreed scope, may use substitutes with your consent, and am responsible for my own tax. For long engagements, we both take advice on IR35.</li>
      <li><strong>Blocks and batches.</strong> Pre-paid blocks are paid before work starts and expire after {{ rates.blockValidity }}; unused days are not refunded unless I cancel. Batch work is fixed-price against a written spec; changes to the spec are new work.</li>
      <li><strong>Payment.</strong> {{ rates.payment }}. I may charge statutory interest and compensation on late payment under the Late Payment of Commercial Debts (Interest) Act 1998, and pause work while an invoice is overdue.</li>
      <li><strong>Your tools.</strong> Where I work in your systems, you are responsible for giving and removing access and for backups of your own data. I will not keep copies of your repositories or client data after the engagement ends unless you ask me to.</li>
    </ul>

    <h2 id="use">15. Acceptable use of this site</h2>
    <p>Do not attack, scrape in an abusive way, or use the planner to send rubbish. I may block abuse.</p>

    <h2 id="law">16. Law</h2>
    <p>These terms are governed by the law of England and Wales. Courts of England and Wales have jurisdiction.</p>

    <h2 id="updates">17. Changes to these terms</h2>
    <p>I may update this page. The version that applies to a project is the one in force when we agreed the proposal, unless we agree a change.</p>
    <p class="links"><NuxtLink to="/privacy">Privacy</NuxtLink> <NuxtLink to="/cookies">Cookies</NuxtLink> <NuxtLink to="/contact">Contact</NuxtLink></p>
  </LegalPage>
</template>
