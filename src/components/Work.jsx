import { useScrollReveal } from '../hooks/useScrollReveal'
import { PROJECTS } from '../data'
import styles from '../styles/Work.module.css'

function ProjectRow({ project, index }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })

  return (
    <article
      ref={ref}
      className={`${styles.project} ${isVisible ? styles.revealed : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className={styles.projNum} aria-hidden="true">{project.num}</div>

      <div className={styles.projTitle}>
        <h3>{project.title}</h3>
        <span
          className={`${styles.status} ${
            project.status === 'In Progress' ? styles.statusActive : ''
          }`}
        >
          {project.status}
        </span>
      </div>

      <p className={styles.projDesc}>{project.description}</p>

      <div className={styles.projMeta}>
        <div className={styles.tags}>
          {project.tags.map((t) => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
        <span className={styles.year}>{project.year}</span>
      </div>

      <div className={styles.arrow} aria-hidden="true">↗</div>
    </article>
  )
}

export default function Work() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal()

  return (
    <section className={styles.work} id="work">
      <div
        ref={headRef}
        className={`${styles.header} ${headVisible ? styles.revealed : ''}`}
      >
        <div>
          <span className={styles.sectionNum}>// 03</span>
          <h2 className={styles.sectionTitle}>
            The<br /><em>labours.</em>
          </h2>
        </div>
        <p className={styles.workNote}>
          Selected projects. Each one a problem<br />
          worth solving, solved properly.
        </p>
      </div>

      <div className={styles.list}>
        {PROJECTS.map((project, i) => (
          <ProjectRow key={project.num} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}