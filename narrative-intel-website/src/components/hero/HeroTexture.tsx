'use client'

import React, { useEffect, useRef } from 'react'

type HeroTextureProps = {
  color: string
}

export function HeroTexture({ color }: HeroTextureProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const resizeRef = useRef<ResizeObserver | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const setCanvasSize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
      const width = parent.clientWidth
      const height = parent.clientHeight
      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    setCanvasSize()
    resizeRef.current = new ResizeObserver(setCanvasSize)
    resizeRef.current.observe(canvas.parentElement as Element)

    let start = performance.now()

    const draw = (t: number) => {
      const ms = t - start
      const w = canvas.width / (ctx.getTransform().a || 1)
      const h = canvas.height / (ctx.getTransform().a || 1)

      // background gradient
      const grad = ctx.createLinearGradient(0, 0, w, h)
      grad.addColorStop(0, '#ffffff')
      grad.addColorStop(1, '#f6f3ea')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)

      // animated diagonal lines (very subtle)
      ctx.globalAlpha = 0.08
      ctx.lineWidth = 1
      ctx.strokeStyle = color
      const lines = 48
      const speed = 0.00015 // slow
      const phase = ms * speed
      const gap = Math.max(12, Math.min(24, Math.floor(w / lines)))
      for (let i = -h; i < w + h; i += gap) {
        const offset = Math.sin((i + phase * 100) * 0.01) * 6
        ctx.beginPath()
        ctx.moveTo(i + offset, -10)
        ctx.lineTo(i + h + offset, h + 10)
        ctx.stroke()
      }
      ctx.globalAlpha = 1

      if (!prefersReduced) rafRef.current = requestAnimationFrame(draw)
    }

    if (!prefersReduced) {
      rafRef.current = requestAnimationFrame(draw)
    } else {
      draw(performance.now())
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (resizeRef.current && canvas.parentElement) resizeRef.current.disconnect()
    }
  }, [color])

  return <canvas ref={canvasRef} className="block w-full h-full rounded-[10px] border border-black/10" />
}

export default HeroTexture

