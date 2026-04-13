import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from '../styles/About.module.css'

export default function About() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal()
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal({ threshold: 0.1 })

  return (
    <section className={styles.about} id="about">
      <div
        ref={leftRef}
        className={`${styles.left} ${leftVisible ? styles.revealed : ''}`}
      >
        <span className={styles.sectionNum}>// 01</span>
        <h2 className={styles.sectionTitle}>
          The<br />
          <em>mind</em><br />
          behind it.
        </h2>
      </div>

      <div
        ref={rightRef}
        className={`${styles.right} ${rightVisible ? styles.revealed : ''}`}
      >
        <p className={styles.body}>
          I&apos;m a <strong>full-stack developer</strong> from South Africa who builds
          things end-to-end — databases, backends, frontends, and the infrastructure
          that ties them together. Professionally, I&apos;ve worked as an intern.
          But the work I&apos;ve shipped doesn&apos;t read like a beginner&apos;s portfolio.
          <br /><br />
          I obsess over <strong>system design</strong> the way engineers obsess over
          tolerances. I care about <strong>what the user feels</strong> as much as
          what the server returns. I believe the best code is the code nobody notices —
          because it just <strong>works.</strong>
        </p>

        <blockquote className={styles.quote}>
          I&apos;m not waiting to be given the senior title.
          I&apos;m already doing the work.
        </blockquote>

        <div className={styles.tags}>
          {['Greek Mythology', 'Cars & Engineering', 'Continuous Learning', 'System Architecture'].map((t) => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}