export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Contact', href: '#contact' },
]

export const SKILLS = [
  {
    glyph: 'Δ',
    name: 'Django / Python',
    sub: 'REST · ORM · Auth · Celery · WebSockets',
    index: '01',
  },
  {
    glyph: 'M',
    name: 'MERN Stack',
    sub: 'MongoDB · Express · React · Node.js',
    index: '02',
  },
  {
    glyph: 'Σ',
    name: 'MySQL',
    sub: 'Schema design · Query optimisation · Indexing',
    index: '03',
  },
  {
    glyph: 'J',
    name: 'Java & C#',
    sub: 'OOP · Architecture · Systems design',
    index: '04',
  },
  {
    glyph: '⌗',
    name: 'HTML / CSS / JS',
    sub: 'Semantic · Animation · DOM mastery',
    index: '05',
  },
  {
    glyph: 'Λ',
    name: 'DevOps & Heroku',
    sub: 'CI/CD · Pipelines · Cloud deployments',
    index: '06',
  },
  {
    glyph: 'Φ',
    name: 'React / Vite',
    sub: 'Components · State · Performance',
    index: '07',
  },
  {
    glyph: 'Ξ',
    name: 'Azure & Cloud',
    sub: 'Entra SSO · Storage · Monitoring',
    index: '08',
  },
]

export const PROJECTS = [
  {
    num: '01',
    title: 'FireTrek',
    year: '2024',
    status: 'Production',
    description:
      'Full-stack IoT firearm asset tracking platform with real-time geolocation, JWT authentication, WebSocket telemetry streams, and a PostGIS spatial backend. Built from the ground up — hardware to deploy.',
    tags: ['Django', 'React', 'PostGIS', 'Redis', 'Celery', 'WebSockets'],
    link: '#',
  },
  {
    num: '02',
    title: 'Apto2',
    year: '2024',
    status: 'Production',
    description:
      'Enterprise fitness coaching platform. Azure Entra SSO, Harness CI/CD pipelines, Sentry error tracking, MemCachier performance layer, Snyk security scanning. Production grade from day one.',
    tags: ['Django', 'MySQL', 'Azure', 'Heroku', 'Snyk', 'Sentry'],
    link: '#',
  },
  {
    num: '03',
    title: 'IDD Portal',
    year: '2025',
    status: 'Production',
    description:
      'Corporate procurement document generator with Word export, multi-level approval workflows, document versioning, and a full block-based content architecture. Rebuilt from scratch after a complete audit.',
    tags: ['Django', 'Python-docx', 'HTMX', 'PostgreSQL'],
    link: '#',
  },
  {
    num: '04',
    title: 'Atlas Backend',
    year: '2025',
    status: 'In Progress',
    description:
      'Multi-tenant SaaS project management platform for South African engineering and municipal clients. Designed for scale — multi-tenancy baked into the schema from the start.',
    tags: ['Node.js', 'Express', 'MongoDB', 'SaaS', 'Multi-tenant'],
    link: '#',
  },
]

export const PHILOSOPHY = [
  {
    num: 'I',
    title: 'Intention over velocity.',
    body: "I'd rather ship something deliberate in three days than something sloppy in one. Architecture decisions made at the start haunt you at the end. I build for the version that comes after.",
  },
  {
    num: 'II',
    title: 'Systems thinking, always.',
    body: 'Every feature is downstream of a design decision. I think in pipelines, schemas, and edge cases — not just tickets. If you can\'t explain the data model, you don\'t understand the product.',
  },
  {
    num: 'III',
    title: 'Never stop learning.',
    body: 'The field moves fast. I move faster. Every project teaches me something the last one couldn\'t. The intern title is a temporary label. The work is permanent.',
  },
]

export const CONTACT = {
  email: 'sthembiso@mcira.dev',
  github: 'github.com/sthembisomcira',
  linkedin: 'linkedin.com/in/sthembisomcira',
  location: 'Johannesburg, South Africa',
}