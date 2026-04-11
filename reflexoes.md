# Reflexões de Aprendizado — Portfólio Pessoal React

**Disciplina:** Desenvolvimento de Software (DS)
**Aluno:** Igor Dário Barbosa Da Silva
**Login CIn:** idbs

---

## a) Escolha da Abordagem de Construção

Foi escolhido **Vite + React** como ferramenta de build para este projeto. O Vite é a abordagem mais moderna e recomendada atualmente para projetos React, oferecendo:

- **Tempo de inicialização e build significativamente menor** em comparação ao Create React App (CRA)
- **Hot Module Replacement (HMR)** extremamente rápido durante o desenvolvimento
- **Configuração mais simples e flexível**, sem ejetar configurações
- **Suporte nativo a ES Modules**, resultando em bundles mais eficientes

A escolha do Vite sobre o CRA foi motivada pela sua performance superior e por ser a ferramenta recomendada atualmente pela comunidade React. Para estilização, foi utilizado **TailwindCSS** (utility-first CSS) e **Lucide React** para ícones. Para navegação, foi usado **React Router DOM** com `HashRouter`, garantindo compatibilidade com a hospedagem estática do CIn.

---

## b) Principais Dificuldades

1. **Configuração do base path para o CIn:** O servidor hospeda o site em `/~idbs/`, exigindo que o Vite seja configurado com `base: '/~idbs/'` para que os assets (JS, CSS, imagens) sejam referenciados corretamente após o build.

2. **Roteamento em hospedagem estática:** O servidor do CIn não suporta redirecionamento de todas as rotas para `index.html` (necessário para `BrowserRouter`). A solução foi usar `HashRouter`, fazendo as rotas funcionarem via hash (`/#/sobre`, `/#/portfolio`), sem necessidade de configuração no servidor.

3. **Configuração do TailwindCSS com Vite:** A integração requer atenção ao `tailwind.config.js` e `postcss.config.js`, e o editor exibe warnings sobre as diretivas `@tailwind` (que são falsos positivos — o build funciona corretamente via PostCSS).

---

## c) Principais Aprendizados

1. **Componentização em React:** Dividir o site em componentes reutilizáveis (`Navbar`, `Footer`, páginas) facilita a manutenção, legibilidade e escalabilidade do projeto.

2. **React Router DOM:** Uso do `react-router-dom` para criar uma SPA com múltiplas rotas sem recarregar o browser, e diferença entre `BrowserRouter` e `HashRouter` em contextos de hospedagem estática.

3. **TailwindCSS:** A abordagem utility-first acelera muito o desenvolvimento de interfaces responsivas, eliminando a necessidade de escrever arquivos `.css` customizados para a maioria dos casos.

4. **Build estático com Vite:** O processo `npm run build` gera arquivos otimizados na pasta `dist/`, prontos para publicação em qualquer servidor web estático — basta copiar o conteúdo da pasta para o servidor.

5. **Base path em SPA:** Compreensão de que, ao hospedar em um subdiretório (como `/~idbs/`), o Vite precisa conhecer o base path para gerar os links de assets corretamente no HTML e JS resultante.

---

## d) Uso de Ferramentas de IA

Foi utilizada a ferramenta **Cascade (Windsurf AI)** como pair programmer durante o desenvolvimento deste projeto. A IA auxiliou principalmente em:

- **Geração do scaffold inicial:** estrutura de arquivos e configurações necessárias para um projeto Vite + React + TailwindCSS funcional.
- **Implementação dos componentes React:** estrutura de páginas, sistema de navegação e layout responsivo.
- **Configuração do base path** para a hospedagem no servidor do CIn e escolha do `HashRouter`.
- **Estilização com TailwindCSS:** sugestão de classes utilitárias para criar um layout moderno e responsivo.

A IA foi utilizada como ferramenta auxiliar para acelerar o desenvolvimento e resolver questões técnicas de configuração, enquanto as decisões de conteúdo, personalização e entendimento do código foram de responsabilidade do aluno.
