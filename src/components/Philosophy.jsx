import { useScrollReveal } from '../hooks/useScrollReveal'
import { PHILOSOPHY } from '../data'
import styles from '../styles/Philosophy.module.css'

export default function Philosophy() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal()
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal({ threshold: 0.1 })

  return (
    <section className={styles.philosophy} id="philosophy">
      <div
        ref={leftRef}
        className={`${styles.left} ${leftVisible ? styles.revealed : ''}`}
      >
        <span className={styles.sectionNum}>// 04</span>
        <div className={styles.bigText}>
          Code is<br />
          a craft.<br />
          <span className={styles.outline}>Not just</span><br />
          <span className={styles.outline}>a job.</span>
        </div>
      </div>

      <div
        ref={rightRef}
        className={`${styles.right} ${rightVisible ? styles.revealed : ''}`}
      >
        {PHILOSOPHY.map((item, i) => (
          <div
            key={item.num}
            className={styles.item}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className={styles.romanNum} aria-hidden="true">{item.num}</div>
            <div className={styles.content}>
              <strong>{item.title}</strong>
              {' '}{item.body.replace(item.title, '')}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}