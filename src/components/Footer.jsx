import { Mail, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Igor Dário Barbosa Da Silva · CIn/UFPE
        </p>
        <div className="flex gap-4">
          <a href="mailto:idbs@cin.ufpe.br" className="hover:text-white transition" title="E-mail">
            <Mail size={18} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" title="GitHub">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" title="LinkedIn">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
