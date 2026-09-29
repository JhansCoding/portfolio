import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Braces,
  Cloud,
  Database,
  Download,
  Gauge,
  Mail,
  MapPin,
  Network,
  ShieldCheck,
} from "lucide-react";

const linkedinUrl =
  "https://www.linkedin.com/in/jhans-jhonnatan-timana-juarez-23a569219";

const expertise = [
  {
    number: "01",
    title: "Backend platforms",
    description:
      "Java services and reusable components built with Quarkus, Spring Boot, WebFlux, Jakarta EE, REST and GraphQL.",
    icon: Braces,
  },
  {
    number: "02",
    title: "Distributed systems",
    description:
      "Event-driven architectures with Kafka, Kafka Streams, Redis, PostgreSQL, MongoDB and asynchronous workflows.",
    icon: Network,
  },
  {
    number: "03",
    title: "Production reliability",
    description:
      "Performance analysis across heap, garbage collection, memory stability and saturation under load.",
    icon: Gauge,
  },
  {
    number: "04",
    title: "Cloud & security",
    description:
      "Containerized systems on Azure, AWS, AKS and Kubernetes with OAuth2, JWT, MFA and secure delivery pipelines.",
    icon: ShieldCheck,
  },
];

const selectedWork = [
  {
    id: "platform-engineering",
    eyebrow: "BANKING · PLATFORM ENGINEERING",
    title: "Reusable Java libraries and Quarkus extensions",
    body: "Engineering shared backend components for adoption across multiple squads, with a focus on modularity, testability, migration safety and measurable runtime behavior.",
    tags: ["Java", "Quarkus", "Performance", "Kafka", "Redis"],
    note: "Current work · NTT DATA",
  },
  {
    id: "enterprise-workflows",
    eyebrow: "ENTERPRISE · SECURE INTEGRATION",
    title: "Asynchronous compensation and CRM workflows",
    body: "Built Spring Boot services that connected Azure capabilities with Oracle PL/SQL business logic, protected by OAuth 2.0 and MFA flows.",
    tags: ["Spring Boot", "Azure", "Oracle", "OAuth2", "MFA"],
    note: "HRF SAC",
  },
  {
    id: "data-modernization",
    eyebrow: "TELECOM · DATA MODERNIZATION",
    title: "Relational-to-MongoDB migration platform",
    body: "Led data-model migration from SQL to MongoDB, including NoSQL schema design, a dedicated transformation service and integration through telecom protocols.",
    tags: ["MongoDB", "Spring Boot", "GraphQL", "NETCONF", "RESTCONF"],
    note: "Thradex & Telecom",
  },
  {
    id: "digital-platforms",
    eyebrow: "PRODUCTS · EVENT-DRIVEN SYSTEMS",
    title: "Backend foundations for digital products",
    body: "Delivered services for electronic invoicing, e-commerce, education, payments, notifications and auditing with secure APIs and asynchronous messaging.",
    tags: ["Kafka", "PostgreSQL", "Spring Cloud", "Elasticsearch", "Docker"],
    note: "Tecboss",
  },
];

const experience = [
  {
    period: "2025 — PRESENT",
    company: "NTT DATA Europe & Latam",
    role: "Java Software Backend Engineer",
    detail:
      "Shared libraries, Quarkus extensions, performance validation and Spring-to-Quarkus migration support for engineering squads in banking.",
  },
  {
    period: "APR — SEP 2025",
    company: "HRF SAC",
    role: "Java Software Backend Engineer",
    detail:
      "Asynchronous enterprise services, Azure integrations, secure file handling and delivery for a compensation and CRM platform.",
  },
  {
    period: "2023 — 2024",
    company: "Thradex & Telecom",
    role: "Java Backend Software Developer",
    detail:
      "MongoDB modernization, Spring Boot microservices, telecom integrations and containerized AWS deployments.",
  },
  {
    period: "2020 — 2023",
    company: "Tecboss",
    role: "Java Developer",
    detail:
      "Microservices for commerce, billing, education, notifications, payments, auditing and configuration management.",
  },
  {
    period: "JAN — MAY 2020",
    company: "INGYTAL",
    role: "Backend Developer",
    detail:
      "Java and Spring enhancements for the VUCE foreign-trade platform, including PostgreSQL optimization and automated tests.",
  },
];

const skillGroups = [
  {
    title: "Application",
    items: ["Java", "Quarkus", "Spring Boot", "Spring WebFlux", "RxJava", "Jakarta EE", "GraphQL"],
  },
  {
    title: "Data & messaging",
    items: ["Kafka", "Kafka Streams", "PostgreSQL", "MongoDB", "Redis", "Oracle PL/SQL", "R2DBC"],
  },
  {
    title: "Platform",
    items: ["Azure", "AWS", "AKS", "Kubernetes", "Docker", "OpenShift", "Azure DevOps"],
  },
  {
    title: "Quality & insight",
    items: ["JUnit", "Mockito", "OpenTelemetry", "Grafana", "Loki", "Kibana", "SonarQube"],
  },
];

function SectionHeading({ index, label, title }) {
  return (
    <div className="section-heading">
      <p className="section-index">{index}</p>
      <div>
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="monogram" href="#top" aria-label="Jhans Timaná — home">
          JT<span>/</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#stack">Stack</a>
        </div>
        <a className="nav-contact" href="mailto:timanajhans@gmail.com">
          Let&apos;s talk <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="availability">
            <span aria-hidden="true" /> Based in Peru · Open to global opportunities
          </p>
          <h1>
            I build backend systems that stay <em>reliable</em> when complexity grows.
          </h1>
          <p className="hero-summary">
            Senior Java Backend Engineer with 6+ years across banking,
            telecommunications, e-commerce, education and public-sector systems.
            Focused on platform engineering, distributed architectures and production
            performance.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <ArrowDownRight size={17} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href={`${import.meta.env.BASE_URL}Jhans-Timana-CV.pdf`} download>
              <Download size={17} aria-hidden="true" /> Download résumé
            </a>
          </div>
        </div>

        <aside className="system-card" aria-label="Engineering profile overview">
          <div className="system-card-top">
            <span>ENGINEERING PROFILE</span>
            <span className="system-status">PRODUCTION-MINDED</span>
          </div>
          <div className="system-visual" aria-hidden="true">
            <div className="system-node node-api">API</div>
            <span className="system-line line-one" />
            <div className="system-node node-events">EVENTS</div>
            <span className="system-line line-two" />
            <div className="system-node node-data">DATA</div>
            <span className="system-pulse pulse-one" />
            <span className="system-pulse pulse-two" />
            <div className="system-core">
              <span>JAVA</span>
              <strong>BACKEND</strong>
            </div>
          </div>
          <div className="system-metrics">
            <div><strong>6+</strong><span>years building</span></div>
            <div><strong>5</strong><span>business domains</span></div>
            <div><strong>2</strong><span>cloud platforms</span></div>
          </div>
        </aside>
      </section>

      <div className="signal-strip" aria-label="Core technologies">
        <span>JAVA</span><i />
        <span>QUARKUS</span><i />
        <span>SPRING</span><i />
        <span>KAFKA</span><i />
        <span>KUBERNETES</span><i />
        <span>OBSERVABILITY</span>
      </div>

      <section className="section expertise-section" id="expertise">
        <SectionHeading index="01" label="CORE EXPERTISE" title="Engineering depth, end to end." />
        <div className="expertise-grid">
          {expertise.map(({ number, title, description, icon: Icon }) => (
            <article className="expertise-card" key={title}>
              <div className="expertise-card-top">
                <span>{number}</span>
                <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section work-section" id="work">
        <SectionHeading index="02" label="SELECTED WORK" title="Systems built for real operating constraints." />
        <div className="work-list">
          {selectedWork.map((item, index) => (
            <article className="work-item" id={item.id} key={item.id}>
              <div className="work-number">0{index + 1}</div>
              <div className="work-main">
                <p className="eyebrow">{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className="tags" aria-label={`Technologies used for ${item.title}`}>
                  {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <p className="work-note">{item.note}</p>
            </article>
          ))}
        </div>
        <p className="confidentiality-note">
          Work is described at a high level to respect client and banking confidentiality.
        </p>
      </section>

      <section className="section experience-section" id="experience">
        <SectionHeading index="03" label="EXPERIENCE" title="A progression through complex domains." />
        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline-row" key={item.company}>
              <div className="timeline-marker" aria-hidden="true">
                <span className={index === 0 ? "active" : ""} />
              </div>
              <p className="timeline-period">{item.period}</p>
              <div className="timeline-role">
                <h3>{item.company}</h3>
                <p>{item.role}</p>
              </div>
              <p className="timeline-detail">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section stack-section" id="stack">
        <SectionHeading index="04" label="TECHNICAL STACK" title="Tools chosen for dependable delivery." />
        <div className="stack-layout">
          <div className="stack-intro">
            <div className="stack-orbit" aria-hidden="true">
              <Cloud size={28} />
              <Database size={28} />
              <Network size={28} />
              <span>JVM</span>
            </div>
            <p>
              Comfortable across application code, data, cloud infrastructure,
              security, delivery and runtime diagnostics.
            </p>
          </div>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <div>
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section credentials-section">
        <div className="credentials-card">
          <p className="eyebrow">EDUCATION</p>
          <h2>Computer Science</h2>
          <p>CESCA Institute · Graduate</p>
          <span>2018 — 2021 · Piura, Peru</span>
        </div>
        <div className="credentials-card certifications">
          <p className="eyebrow">CERTIFICATION & TRAINING</p>
          <h2>Continuous technical growth</h2>
          <ul>
            <li>Microsoft Certified: Azure Fundamentals</li>
            <li>AWS Developer Associate exam preparation</li>
            <li>Spring, WebFlux, microservices, Docker & Kubernetes</li>
          </ul>
        </div>
        <div className="credentials-card languages">
          <p className="eyebrow">LANGUAGES</p>
          <div><strong>ES</strong><span>Spanish · Native</span></div>
          <div><strong>EN</strong><span>English · Advanced C1</span></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">LET&apos;S BUILD RELIABLE SYSTEMS</p>
          <h2>Have a backend challenge worth solving?</h2>
        </div>
        <div className="contact-links">
          <a href="mailto:timanajhans@gmail.com">
            <Mail size={20} aria-hidden="true" /> timanajhans@gmail.com
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            <BriefcaseBusiness size={20} aria-hidden="true" /> LinkedIn
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <p><MapPin size={20} aria-hidden="true" /> Peru · Remote / relocation</p>
        </div>
      </section>

      <footer>
        <a className="monogram" href="#top" aria-label="Back to top">JT<span>/</span></a>
        <p>Senior Java Backend Engineer · © 2026</p>
        <a href="#top">Back to top <ArrowUpRight size={14} aria-hidden="true" /></a>
      </footer>
    </main>
  );
}
