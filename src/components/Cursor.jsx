import { useCursor }  from '../hooks/useCursor'
import styles from '../styles/Cursor.module.css'

export default function Cursor() {
  const dotRef = useCursor()

  return <div ref={dotRef} className={styles.dot} aria-hidden="true" />
}