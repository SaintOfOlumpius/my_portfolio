import styles from '../styles/Hero.module.css'

export default function Hero() {
  const scrollToWork = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero}>
      {/* Decorative vertical rules */}
      <div className={styles.vRuleLeft} aria-hidden="true" />
      <div className={styles.vRuleRight} aria-hidden="true" />

      {/* Giant background numeral */}
      <div className={styles.bgNum} aria-hidden="true">01</div>

      {/* Main content grid */}
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.eyebrow}>
            <span>Full-Stack Developer</span>
          </div>

          <h1 className={styles.name}>
            <span className={styles.nameFirst}>Sthembiso</span>
            <span className={styles.nameLast}>Mcira.</span>
          </h1>

          <p className={styles.role}>Building what comes next</p>
        </div>

        <div className={styles.right}>
          <p className={styles.statement}>
            I don&apos;t just write code.<br />
            I build <strong>systems that think,</strong><br />
            scale, and endure —<br />
            from first line to last deploy.
          </p>

          <div className={styles.cta}>
            <button className={styles.btnFill} onClick={scrollToWork}>
              View Work
            </button>
            <button className={styles.btnStroke} onClick={scrollToContact}>
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className={styles.statsBar}>
        {[
          { num: '10+', label: 'Technologies' },
          { num: '12', label: 'Projects shipped' },
          { num: '3+', label: 'Years building' },
          { num: '∞', label: 'Still learning' },
          { num: 'Now', label: 'Available' },
        ].map(({ num, label }) => (
          <div key={label} className={styles.statCell}>
            <span className={styles.statNum}>{num}</span>
            <span className={styles.statLabel}>{label}</span>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </div>
    </section>
  )
}