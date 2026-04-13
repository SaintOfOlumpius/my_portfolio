import { useEffect, useRef } from 'react'

export function useCursor() {
  const dotRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    const move = (e) => {
      dot.style.left = `${e.clientX}px`
      dot.style.top = `${e.clientY}px`
    }

    const grow = () => dot.classList.add('expanded')
    const shrink = () => dot.classList.remove('expanded')

    window.addEventListener('mousemove', move)

    const interactives = document.querySelectorAll('a, button, [data-cursor]')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', grow)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [])

  return dotRef
}