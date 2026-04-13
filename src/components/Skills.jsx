import { useScrollReveal } from '../hooks/useScrollReveal'
import { SKILLS } from '../data'
import styles from '../styles/Skills.module.css'

export default function Skills() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal()
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.05 })

  return (
    <section className={styles.skills} id="skills">
      <div
        ref={headRef}
        className={`${styles.header} ${headVisible ? styles.revealed : ''}`}
      >
        <div className={styles.headerLeft}>
          <span className={styles.sectionNum}>// 02</span>
          <h2 className={styles.sectionTitle}>
            The<br /><em>arsenal.</em>
          </h2>
        </div>
        <p className={styles.desc}>
          Every tool chosen deliberately.<br />
          Every skill earned through building, breaking,<br />
          and building again.
        </p>
      </div>

      <div
        ref={gridRef}
        className={`${styles.grid} ${gridVisible ? styles.gridRevealed : ''}`}
      >
        {SKILLS.map((skill, i) => (
          <div
            key={skill.name}
            className={styles.skillRow}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className={styles.glyph} aria-hidden="true">{skill.glyph}</div>
            <div className={styles.info}>
              <div className={styles.skillName}>{skill.name}</div>
              <div className={styles.skillSub}>{skill.sub}</div>
            </div>
            <div className={styles.skillIndex} aria-hidden="true">{skill.index}</div>
          </div>
        ))}
      </div>
    </section>
  )
}