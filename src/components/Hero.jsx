import Spline from '@splinetool/react-spline'
import { Rocket } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 sm:pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-white/70 backdrop-blur mb-4">
            <Rocket className="w-4 h-4 text-indigo-600" />
            <span className="text-xs font-medium">Tech • Interactive • Modern</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Building delightful, interactive products
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
            I’m a developer focused on crafting smooth, playful experiences on the web. Explore my work and get in touch to build something great together.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-indigo-600 text-white font-semibold shadow-sm hover:bg-indigo-700 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-2.5 rounded-md border border-black/10 font-semibold hover:border-black/20 transition-colors">
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative h-[55vh] sm:h-[60vh] md:h-[65vh] rounded-xl overflow-hidden">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
