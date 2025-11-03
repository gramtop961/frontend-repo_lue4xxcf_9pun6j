import { ExternalLink, Code } from 'lucide-react'

const projects = [
  {
    title: 'Interactive Dashboard',
    description: 'A real-time analytics dashboard featuring smooth animations and responsive charts.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: '3D Landing Experience',
    description: 'A playful hero with 3D interactions powered by Spline for a modern brand.',
    tags: ['Spline', 'Vite', 'Accessibility'],
    link: '#',
  },
  {
    title: 'API-First SaaS Starter',
    description: 'A clean starter template with authentication and a scalable component system.',
    tags: ['FastAPI', 'MongoDB', 'shadcn/ui'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Selected Work</h2>
          <p className="text-gray-600 mt-2">A few projects that highlight my focus on interactivity, performance, and polish.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-xl border border-black/10 bg-white/60 backdrop-blur hover:shadow-lg transition-all overflow-hidden">
              <div className="p-5">
                <div className="flex items-center gap-2 text-indigo-600 mb-3">
                  <Code className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wide">Project</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">{t}</span>
                  ))}
                </div>

                <a href={p.link} className="inline-flex items-center gap-1 text-indigo-600 font-semibold hover:text-indigo-700">
                  View details <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
