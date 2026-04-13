import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { CONTACT } from '../data'
import styles from '../styles/Contact.module.css'

export default function Contact() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal()
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal({ threshold: 0.1 })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className={styles.contact} id="contact">
      <div
        ref={leftRef}
        className={`${styles.left} ${leftVisible ? styles.revealed : ''}`}
      >
        <span className={styles.sectionNum}>// 05</span>
        <div className={styles.bigText}>
          Let&apos;s<br />
          <span className={styles.outline}>build</span><br />
          something.
        </div>

        <div className={styles.details}>
          {[
            { label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
            { label: 'GitHub', value: CONTACT.github, href: `https://${CONTACT.github}` },
            { label: 'LinkedIn', value: CONTACT.linkedin, href: `https://${CONTACT.linkedin}` },
            { label: 'Location', value: CONTACT.location, href: null },
          ].map(({ label, value, href }) => (
            <div key={label} className={styles.detailItem}>
              <span className={styles.detailLabel}>{label}</span>
              {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className={styles.detailValue}>
                  {value}
                </a>
              ) : (
                <span className={styles.detailValue}>{value}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        ref={rightRef}
        className={`${styles.right} ${rightVisible ? styles.revealed : ''}`}
      >
        <p className={styles.formLabel}>Send a message</p>

        {status === 'sent' ? (
          <div className={styles.successMsg}>
            <span className={styles.successIcon}>✓</span>
            <p>Message received. I&apos;ll be in touch.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className={styles.input}
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className={styles.input}
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                placeholder="Tell me about the project..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {status === 'error' && (
              <p className={styles.errorMsg}>Something went wrong. Try emailing me directly.</p>
            )}

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}