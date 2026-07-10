/**
 * Farble 5 Max landing content. Every metric, logo, name, quote, and price
 * below is SAMPLE DATA for a fictional product and must be replaced before
 * any real launch.
 */

export const PRODUCT = 'Farble 5 Max';

export const nav = {
  brand: 'Farble',
  links: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Docs', href: '#' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: 'Start free trial',
};

export const hero = {
  eyebrow: 'FARBLE 5 MAX',
  title: 'Built for the problems you can\'t get wrong.',
  subtitle:
    'Frontier reasoning with a 2M-token context window. Bring the whole codebase, the whole contract, the whole problem.',
  primaryCta: 'Start free trial',
  secondaryCta: 'Read the docs',
};

// Logo wall: invented brand names rendered as SVG monograms (no real logos).
export const logos = [
  'Loomline',
  'Kestrel Systems',
  'Ferrostat',
  'Palisade Robotics',
  'Quartzite',
  'Arrowedge',
];

export const features = {
  heading: 'One model. No compromise picks.',
  sub:
    'You shouldn\'t have to choose between the smart model and the fast one. Max is both, priced sanely.',
  large: {
    title: 'The whole problem fits.',
    body:
      'Two million tokens of context. Feed it the monorepo, the data room, or six months of tickets. It reads everything before it answers.',
  },
  cells: [
    {
      title: 'It does, not just says.',
      body:
        'Native tool use and multi-step plans that execute. Reviewed diffs, filed tickets, finished jobs.',
    },
    {
      title: 'Fast where it counts.',
      body:
        'First token in under a second, even at full context. Thinking depth you choose per request.',
    },
    {
      title: 'Your data stays yours.',
      body:
        'No training on your inputs. SOC 2 Type II, region pinning, and a real audit log.',
    },
  ],
};

export const comparison = {
  heading: 'Watch it earn the "Max."',
  tabs: [
    {
      id: 'refactor',
      label: 'Refactor a legacy module',
      prompt:
        'Refactor billing/legacy_invoicer.py for testability without changing behavior.',
      standard: [
        'Suggests splitting the file into smaller functions.',
        'Recommends adding unit tests.',
        'Notes that the global config makes this hard.',
      ],
      max: [
        'Reads all 41 call sites across the repo before touching anything.',
        'Extracts the tax engine behind an interface, leaves behavior identical.',
        'Writes 23 characterization tests, runs them, reports 2 pre-existing bugs.',
        'Opens a reviewed diff, not a suggestion.',
      ],
    },
    {
      id: 'filing',
      label: 'Find the contradiction',
      prompt:
        'Two clauses in this 400-page filing conflict. Find them and explain the exposure.',
      standard: [
        'Summarizes the document at a high level.',
        'Asks which sections you want it to focus on.',
        'Flags that it may have missed context.',
      ],
      max: [
        'Holds the entire 400 pages in context at once.',
        'Locates the indemnity cap in §7.4 and the uncapped carve-out in Schedule C.',
        'Quotes both, in full, with page numbers.',
        'Estimates the exposure delta and names who signs off.',
      ],
    },
    {
      id: 'migration',
      label: 'Plan and execute a migration',
      prompt:
        'Move our job queue from Redis to Postgres. Plan it, then do the first slice.',
      standard: [
        'Outlines a generic migration checklist.',
        'Warns about downtime in the abstract.',
        'Leaves the implementation to you.',
      ],
      max: [
        'Inventories every enqueue and dequeue site in the codebase.',
        'Writes the dual-write shim and the backfill job.',
        'Ships the first slice behind a flag, with a rollback path.',
        'Files the follow-up tickets for the remaining slices.',
      ],
    },
  ],
};

export const testimonials = [
  {
    quote:
      'We stopped routing hard tickets to seniors first. Max takes the first pass now, and its first pass usually holds.',
    name: 'Mai Trần',
    role: 'Staff Engineer, Loomline',
  },
  {
    quote:
      'The 2M context isn\'t a spec-sheet number. It read our entire billing service and found the race we\'d hunted for a quarter.',
    name: 'Jonas Petersen',
    role: 'CTO, Ferrostat',
  },
  {
    quote:
      'It\'s the first model where the demo didn\'t oversell. Production behaves like the sales call.',
    name: 'Priya Raghavan',
    role: 'Platform Lead, Palisade Robotics',
  },
];

export const pricing = {
  heading: 'Priced for how you actually use it.',
  sub: 'Every plan gets the same model. You pay for throughput, not intelligence.',
  plans: [
    {
      name: 'Solo',
      price: '$0',
      cadence: 'to start',
      forWho: 'Evenings and side projects',
      includes: ['Metered Max access', '200K context window', 'Community support'],
      cta: 'Start free trial',
      featured: false,
    },
    {
      name: 'Team',
      price: '$40',
      cadence: 'per seat / month',
      forWho: 'Teams shipping weekly',
      includes: [
        'Full 2M context window',
        'Shared workspaces',
        'Priority throughput',
        'Usage analytics',
      ],
      cta: 'Start free trial',
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      cadence: 'talk to us',
      forWho: 'Compliance and scale',
      includes: [
        'Region pinning',
        'SSO and SCIM',
        'Audit log and DLP',
        'Dedicated capacity',
      ],
      cta: 'Talk to sales',
      featured: false,
    },
  ],
};

export const faq = {
  heading: 'Questions, answered straight.',
  items: [
    {
      q: 'What makes Max different from the standard Farble 5?',
      a: 'Same model family, dialed to the ceiling: the full 2M-token context window, the highest thinking budget per request, and priority serving so latency stays low even at full context.',
    },
    {
      q: 'Do you train on my data?',
      a: 'No. Your inputs and outputs are never used to train our models. It is written into every plan\'s terms, not just Enterprise.',
    },
    {
      q: 'What happens when I hit the context limit?',
      a: 'Max degrades gracefully rather than erroring: it summarizes the least-relevant regions first and tells you exactly what it compressed, so you are never surprised by silent truncation.',
    },
    {
      q: 'Can I switch from my current provider without rewriting prompts?',
      a: 'Yes. The API is OpenAI-compatible, so most teams point their base URL at Farble and ship the same day. A migration guide covers the handful of parameter differences.',
    },
    {
      q: 'How does per-request thinking depth work?',
      a: 'You set a thinking budget per call. Quick lookups stay cheap and fast; hard reasoning gets more compute only when you ask for it. You never pay premium rates for trivial requests.',
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes, from the dashboard, effective at the end of the cycle. Your data exports in one click, and we keep nothing after you leave.',
    },
  ],
};

export const finalCta = {
  heading: 'Bring it the problem you\'ve been avoiding.',
  sub: 'Free trial, full 2M context, no card required. Judge it on your hardest work.',
  cta: 'Start free trial',
};

export const footer = {
  brand: 'Farble',
  tagline: 'Frontier reasoning for work you can\'t get wrong.',
  links: ['Docs', 'Pricing', 'Security', 'Status', 'Privacy', 'Terms'],
};
