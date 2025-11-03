import { Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#hero" className="font-extrabold tracking-tight text-xl sm:text-2xl">
          <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">MyPortfolio</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
          <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
          <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="mailto:hello@example.com" aria-label="Email" className="p-2 rounded-full hover:bg-black/5 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-full hover:bg-black/5 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-black/5 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  )
}
