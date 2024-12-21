"use client"
import { useEffect, useRef } from "react"
import Typed from "typed.js"

interface TypedTextProps {
  strings: string[]
}

export function TypedText({ strings }: TypedTextProps) {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings,
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [strings])

  return (
    <div className="text-4xl font-bold">
      I am a <span ref={el} />
    </div>
  )
}