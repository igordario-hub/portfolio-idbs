import { Target, Cpu, BookOpen, GraduationCap } from 'lucide-react'

const skills = [
  'JavaScript', 'TypeScript', 'React', 'HTML / CSS',
  'Python', 'Java', 'SQL', 'Git', 'Node.js', 'Linux',
]

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 space-y-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Sobre Mim</h1>
        <p className="text-gray-500 max-w-xl mx-auto text-sm">
          Conheça um pouco mais sobre minha trajetória e interesses.
        </p>
      </div>

      {/* Trajetória */}
      <section className="bg-white rounded-xl p-7 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="text-blue-600 shrink-0" size={24} />
          <h2 className="text-lg font-semibold text-gray-800">Trajetória Acadêmica</h2>
        </div>
        <p className="text-gray-600 leading-relaxed text-sm">
          Sou estudante de Bacharelado em Sistemas de Informação no Centro de Informática da
          Universidade Federal de Pernambuco (CIn/UFPE). Ao longo da graduação, venho desenvolvendo
          competências em engenharia de software, desenvolvimento web e análise de sistemas, com
          foco em construir soluções tecnológicas eficientes e bem estruturadas.
        </p>
      </section>

      {/* Interesses */}
      <section className="bg-white rounded-xl p-7 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="text-blue-600 shrink-0" size={24} />
          <h2 className="text-lg font-semibold text-gray-800">Interesses em Tecnologia</h2>
        </div>
        <p className="text-gray-600 leading-relaxed text-sm">
          Tenho especial interesse em <strong>desenvolvimento de software</strong>, com foco em
          aplicações web modernas. Gosto de entender como sistemas são projetados — desde a
          arquitetura até a experiência do usuário final. Também me interesso por boas práticas
          de engenharia de software, como clean code, testes automatizados e integração contínua.
        </p>
      </section>

      {/* Skills */}
      <section className="bg-white rounded-xl p-7 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-5">
          <Cpu className="text-blue-600 shrink-0" size={24} />
          <h2 className="text-lg font-semibold text-gray-800">Habilidades Técnicas</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map(skill => (
            <span
              key={skill}
              className="bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1 text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Objetivos */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-xl p-7">
        <div className="flex items-center gap-3 mb-4">
          <Target className="shrink-0" size={24} />
          <h2 className="text-lg font-semibold">Objetivos Profissionais</h2>
        </div>
        <p className="text-blue-100 leading-relaxed text-sm">
          Meu objetivo é atuar como desenvolvedor de software, contribuindo para projetos que
          gerem valor real para as pessoas. Busco oportunidades em que possa aplicar e aprofundar
          meus conhecimentos em desenvolvimento web, trabalhar em equipes colaborativas e
          crescer profissionalmente na área de tecnologia.
        </p>
      </section>
    </main>
  )
}
