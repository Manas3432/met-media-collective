import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const dot = dotRef.current

    if (!cursor || !dot) return

    let mouseX = -100
    let mouseY = -100
    let cursorX = -100
    let cursorY = -100
    let frame

    const moveCursor = (event) => {
      mouseX = event.clientX
      mouseY = event.clientY

      dot.style.transform =
        `translate3d(${mouseX}px, ${mouseY}px, 0)`
    }

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15
      cursorY += (mouseY - cursorY) * 0.15

      cursor.style.transform =
        `translate3d(${cursorX}px, ${cursorY}px, 0)`

      frame = requestAnimationFrame(animate)
    }

    const updateCursor = (event) => {
      const target = event.target

      const section =
        target.closest('[data-cursor-theme]')

      const theme = section?.dataset.cursorTheme || 'light'

      cursor.dataset.theme = theme
      dot.dataset.theme = theme

      const interactive = target.closest(
        'a, button, input, textarea, select'
      )

      cursor.classList.toggle(
        'cursor--hover',
        Boolean(interactive)
      )
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', updateCursor)

    frame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', updateCursor)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor"
        aria-hidden="true"
      />

      <div
        ref={dotRef}
        className="custom-cursor-dot"
        aria-hidden="true"
      />
    </>
  )
}