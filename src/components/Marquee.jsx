import styles from '../styles/Marquee.module.css'

const ITEMS = [
  'Django', '·', 'MERN Stack', '·', 'MySQL', '·',
  'Java', '·', 'C#', '·', 'React', '·', 'Node.js', '·',
  'DevOps', '·', 'Heroku', '·', 'Azure', '·',
  'Ψ Systems thinking Ψ', '·', 'Δ Full-Stack Δ', '·',
  'Ω Always Learning Ω', '·', 'Σ Precision Σ', '·',
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>{item}</span>
        ))}
      </div>
    </div>
  )
}