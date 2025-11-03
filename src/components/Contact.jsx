import { Mail, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            I love building immersive, performant interfaces that feel alive. My toolkit spans modern
            frontend frameworks, robust backends, and a keen eye for detail. I focus on accessibility,
            clean architecture, and delightful micro-interactions.
          </p>
        </div>
        <div id="contact" className="md:justify-self-end w-full">
          <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-6">
            <div className="flex items-center gap-2 text-indigo-600 mb-4">
              <Mail className="w-5 h-5" />
              <span className="font-semibold">Contact</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">Want to collaborate or have a project in mind? Let’s talk.</p>
            <form action="mailto:hello@example.com" method="post" encType="text/plain" className="space-y-3">
              <input type="text" name="name" placeholder="Your name" className="w-full px-4 py-2 rounded-md border border-black/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/80" required />
              <input type="email" name="email" placeholder="Email" className="w-full px-4 py-2 rounded-md border border-black/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/80" required />
              <textarea name="message" placeholder="Message" rows="4" className="w-full px-4 py-2 rounded-md border border-black/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/80" required />
              <button type="submit" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors">
                Send <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
