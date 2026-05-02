"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
      pulseSpeed: number
      pulseOffset: number

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth
        this.y = Math.random() * canvasHeight
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.5 + 0.1
        this.pulseSpeed = Math.random() * 0.02 + 0.01
        this.pulseOffset = Math.random() * Math.PI * 2

        // Colors based on the brand palette - orange/amber tones
        const colors = [
          "254, 89, 0",    // Primary orange
          "255, 119, 51",  // Lighter orange
          "200, 70, 0",    // Darker orange
          "255, 150, 50",  // Amber
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update(canvasWidth: number, canvasHeight: number, time: number) {
        this.x += this.speedX
        this.y += this.speedY

        // Boundary wrapping
        if (this.x < 0) this.x = canvasWidth
        if (this.x > canvasWidth) this.x = 0
        if (this.y < 0) this.y = canvasHeight
        if (this.y > canvasHeight) this.y = 0

        // Pulsing opacity
        this.opacity = 0.2 + Math.sin(time * this.pulseSpeed + this.pulseOffset) * 0.15
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`
        ctx.fill()

        // Add glow effect
        ctx.shadowBlur = 15
        ctx.shadowColor = `rgba(${this.color}, ${this.opacity * 0.5})`
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    const initParticles = () => {
      particles = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000)
      for (let i = 0; i < Math.min(particleCount, 100); i++) {
        particles.push(new Particle(canvas.width, canvas.height))
      }
    }

    const drawConnections = (ctx: CanvasRenderingContext2D) => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.15
            ctx.beginPath()
            ctx.strokeStyle = `rgba(254, 89, 0, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const drawGradientOrbs = (ctx: CanvasRenderingContext2D, time: number) => {
      // Large subtle gradient orbs that move slowly
      const orbs = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, radius: 300, speed: 0.0003 },
        { x: canvas.width * 0.8, y: canvas.height * 0.7, radius: 400, speed: 0.0002 },
        { x: canvas.width * 0.5, y: canvas.height * 0.5, radius: 350, speed: 0.00025 },
      ]

      orbs.forEach((orb, index) => {
        const offsetX = Math.sin(time * orb.speed + index) * 100
        const offsetY = Math.cos(time * orb.speed + index) * 100

        const gradient = ctx.createRadialGradient(
          orb.x + offsetX,
          orb.y + offsetY,
          0,
          orb.x + offsetX,
          orb.y + offsetY,
          orb.radius
        )
        gradient.addColorStop(0, "rgba(254, 89, 0, 0.08)")
        gradient.addColorStop(0.5, "rgba(254, 89, 0, 0.03)")
        gradient.addColorStop(1, "rgba(254, 89, 0, 0)")

        ctx.beginPath()
        ctx.arc(orb.x + offsetX, orb.y + offsetY, orb.radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })
    }

    let time = 0
    const animate = () => {
      time++
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Clear and redraw
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw gradient orbs
      drawGradientOrbs(ctx, time)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update(canvas.width, canvas.height, time)
        particle.draw(ctx)
      })

      // Draw connections
      drawConnections(ctx)

      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    initParticles()
    animate()

    const handleResize = () => {
      resizeCanvas()
      initParticles()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "#000000" }}
    />
  )
}
