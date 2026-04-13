import { Github, ExternalLink, BookOpen } from 'lucide-react'
import { projects } from '../data/projects'

const disciplineStyle = {
  DS: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  CAD: 'bg-purple-50 text-purple-700 border-purple-200',
}

export default function Portfolio() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16 space-y-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Portfólio</h1>
        <p className="text-gray-500 max-w-xl mx-auto text-sm">
          Projetos desenvolvidos ao longo da graduação nas disciplinas do curso.
        </p>
        <p className="text-yellow-600 bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-2 text-sm mt-4 max-w-xl mx-auto">
    ⚠️ Observação: não curso a disciplina de CAD pois meu perfil curricular é o antigo, portanto o projeto apresentado é referentes apenas à disciplina de DS.
  </p>
      </div>

      {/* Project list */}
      <div className="grid gap-8">
        {projects.map(project => (
          <article
            key={project.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
          >
            {/* Image / placeholder */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-100 h-44 flex flex-col items-center justify-center gap-2 text-blue-400">
              <BookOpen size={44} />
              <span className="text-xs font-medium uppercase tracking-widest text-blue-300">
                {project.discipline}
              </span>
            </div>

            <div className="p-6">
              {/* Name + discipline badge */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="text-xl font-bold text-gray-800">{project.name}</h2>
                <span
                  className={`shrink-0 border rounded-full px-3 py-0.5 text-xs font-semibold ${
                    disciplineStyle[project.discipline] ?? 'bg-gray-50 text-gray-600 border-gray-200'
                  }`}
                >
                  {project.discipline}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Objective */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-700">Objetivo: </span>
                  {project.objective}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-600 rounded px-2.5 py-0.5 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Learnings */}
              {project.learnings && (
                <p className="text-xs text-gray-400 italic mb-5">
                  <strong className="text-gray-500 not-italic">Aprendizados:</strong>{' '}
                  {project.learnings}
                </p>
              )}

              {/* Links */}
              {(project.repo || project.prototype) && (
                <div className="flex gap-4 pt-2 border-t border-gray-100">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition"
                    >
                      <Github size={15} /> Repositório
                    </a>
                  )}
                  {project.prototype && (
                    <a
                      href={project.prototype}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition"
                    >
                      <ExternalLink size={15} /> Protótipo
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
