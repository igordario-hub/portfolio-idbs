import { Link } from 'react-router-dom'
import { Mail, Github, Linkedin, ArrowRight, BookOpen, Briefcase, GraduationCap } from 'lucide-react'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
            <GraduationCap size={16} />
            Sistemas de Informação · CIn / UFPE
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Igor Dário Barbosa Da Silva
          </h1>
          <p className="text-lg text-blue-100 max-w-xl mx-auto mb-8 leading-relaxed">
            Estudante de Sistemas de Informação no Centro de Informática da UFPE,
            com interesse em desenvolvimento de software e tecnologias web.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/portfolio"
              className="flex items-center gap-2 bg-white text-blue-700 font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition shadow"
            >
              Ver Portfólio <ArrowRight size={16} />
            </Link>
            <Link
              to="/sobre"
              className="flex items-center gap-2 border border-white/40 px-5 py-2.5 rounded-lg hover:bg-white/10 transition"
            >
              Sobre Mim
            </Link>
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <GraduationCap className="text-blue-600 mb-3" size={28} />
            <h3 className="font-semibold text-gray-800 mb-2">Formação</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Bacharelado em Sistemas de Informação · Centro de Informática · UFPE
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <BookOpen className="text-blue-600 mb-3" size={28} />
            <h3 className="font-semibold text-gray-800 mb-2">Interesse Principal</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Desenvolvimento de Software — criação de sistemas web e aplicações modernas.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <Briefcase className="text-blue-600 mb-3" size={28} />
            <h3 className="font-semibold text-gray-800 mb-2">Objetivo</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Atuar como desenvolvedor de software em projetos inovadores e de impacto real.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Formas de Contato</h2>
          <p className="text-gray-500 mb-8 text-sm">Fique à vontade para entrar em contato.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:idbs@cin.ufpe.br"
              className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-5 py-3 text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-blue-600 transition shadow-sm"
            >
              <Mail size={18} />
              idbs@cin.ufpe.br
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-5 py-3 text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-blue-600 transition shadow-sm"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-5 py-3 text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-blue-600 transition shadow-sm"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
