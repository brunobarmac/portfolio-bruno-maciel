import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      
      {/* --- CABEÇALHO --- */}
      <header className="flex justify-between items-center p-6 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold tracking-tighter">Bruno Maciel<span className="text-blue-600">.</span></h1>
        <nav className="space-x-6 hidden md:block font-medium text-slate-600">
          <Link href="#sobre" className="hover:text-blue-600 transition">Sobre Mim</Link>
          <Link href="#projetos" className="hover:text-blue-600 transition">Projetos</Link>
          <Link href="#livros" className="hover:text-blue-600 transition">Livros Favoritos</Link>
        </nav>
      </header>

      {/* --- SEÇÃO PRINCIPAL (HERO) SEM VÍDEO --- */}
      <section className="max-w-5xl mx-auto px-6 py-20 flex flex-col items-center text-center gap-8">
        <div className="max-w-3xl space-y-8">
          <h2 className="text-5xl font-extrabold leading-tight">
            Olá! Sou o Bruno. <br />
            <span className="text-blue-600">Dev, Solucionador de Problemas & Financeiro.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
          "Acredito que o crescimento real só acontece fora da zona de conforto. Sem assumir riscos calculados
           e ter dedicação extrema, não há recompensa. Encaro o medo de falhar não como um obstáculo, 
           mas como parte do processo de quem busca a excelência. Assumo 100% da responsabilidade pela minha trajetória: sei que os meus resultados
           dependem exclusivamente da minha capacidade de evoluir e resolver problemas complexos todos os dias."
          </p>
          <div className="flex justify-center space-x-4 pt-4">
            <Link href="#projetos" className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
              Ver Projetos
            </Link>
            <a href="https://github.com/brunobarmac" target="_blank" rel="noreferrer" className="border-2 border-slate-200 px-8 py-3 rounded-xl font-semibold hover:bg-slate-100 transition">
              Meu GitHub
            </a>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO SOBRE MIM --- */}
      <section id="sobre" className="bg-white py-20 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8 text-center">Um pouco sobre mim</h3>
          <div className="bg-slate-50 p-8 rounded-2xl text-slate-700 leading-relaxed space-y-4 text-lg border border-slate-100 shadow-sm">
            <p>
              Sou um desenvolvedor apaixonado por tecnologia e arquitetura de software. Gosto de explorar inteligência artificial integrando APIs (como o Gemini) para criar ferramentas que realmente ajudam as pessoas.
            </p>
            <p>
             Além disso, sou especializado em finanças e economia. Tenho um olhar crítico sobre a ineficiência e produção de riqueza do país, e entendo a necessidade de uma reforma tributária para o desenvolvimento nacional, sempre utilizando dados econômicos e financeiros para embasar minhas análises.
            </p>
            <p>
             Minhas principais características são:
             <br /><strong>Resiliência</strong> - Encaro desafios de frente e não desisto até encontrar uma solução.
             <br /><strong>Criatividade</strong> - Possuo a capacidade de pensar de forma inovadora e criar soluções únicas.
             <br /><strong>Liderança</strong> - Tenho facilidade em liderar equipes e projetos, motivando os outros a alcançar seus objetivos.
             <br /><strong>Comunicação</strong> - Sou capaz de me comunicar de forma clara e eficaz, tanto verbalmente quanto por escrito.
             <br /><strong>Empatia</strong> - Tenho a capacidade de entender e compartilhar os sentimentos dos outros, o que me ajuda a construir relacionamentos fortes e duradouros.
            </p>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO DE PROJETOS E GITS --- */}
      <section id="projetos" className="py-20 max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-12 text-center">Projetos em Destaque</h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* CARTÃO DE PROJETO 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition duration-300 group">
            <h4 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition">StudyPro</h4>
            <p className="text-slate-600 mb-6">
              Um assistente educacional inteligente focado em tutoria. Desenvolvido para transformar a rotina de estudos usando inteligência artificial de forma interativa.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-md font-medium">React Native</span>
              <span className="text-sm bg-purple-50 text-purple-700 px-3 py-1 rounded-md font-medium">Gemini API</span>
              <span className="text-sm bg-slate-100 text-slate-700 px-3 py-1 rounded-md font-medium">Expo</span>
            </div>
            <a href="https://github.com/brunobarmac/TCC_de_Bruno_e_Gemini_e_seus_amigos_e_o_rosinha" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition">
              Acessar Repositório &rarr;
            </a>
          </div>

          {/* CARTÃO DE PROJETO 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition duration-300 group">
            <h4 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition">App de Soluções</h4>
            <p className="text-slate-600 mb-6">
              Uma aplicação moderna desenvolvida com foco em performance e tipagem forte, resolvendo problemas reais do dia a dia com código limpo e escalável.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-sm bg-slate-100 text-slate-700 px-3 py-1 rounded-md font-medium">TypeScript</span>
              <span className="text-sm bg-slate-100 text-slate-700 px-3 py-1 rounded-md font-medium">Next.js</span>
            </div>
            <a href="https://github.com/brunobarmac/bruno-maciel-pamII ProjetoBruno" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition">
              Acessar Repositório &rarr;
            </a>
          </div>

           {/* CARTÃO DE PROJETO 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition duration-300 group md:col-span-2">
            <h4 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition">TCC: Análise Econômica e Tributária</h4>
            <p className="text-slate-600 mb-6">
              Trabalho relacionado a um projeto de TCC de finanças com um olhar econômico, onde o objetivo é abordar a ineficiência da Zona Franca de Manaus e a necessidade de uma reforma tributária para o desenvolvimento do país, utilizando dados econômicos e financeiros para embasar a análise. 
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-sm bg-green-50 text-green-700 px-3 py-1 rounded-md font-medium">Economia</span>
              <span className="text-sm bg-green-50 text-green-700 px-3 py-1 rounded-md font-medium">Finanças</span>
              <span className="text-sm bg-slate-100 text-slate-700 px-3 py-1 rounded-md font-medium">Pesquisa Acadêmica</span>
            </div>
            <a href="https://docs.google.com/document/d/1NTJfVI6JavcoCspc2Ky2A2HTYo2QV1Tj/export?format=pdf" target="_blank" rel="noreferrer" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition">
              Acessar documento &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* --- NOVA SEÇÃO: LIVROS FAVORITOS --- */}
      <section id="livros" className="bg-slate-100 py-20 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center">Meus Livros Favoritos</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* LIVRO 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-400 hover:shadow-md transition duration-300">
              <h4 className="text-xl font-bold mb-1 text-slate-800">A Revolução dos Bichos</h4>
              <p className="text-sm font-semibold text-blue-600 mb-4">George Orwell</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Uma brilhante alegoria sobre poder, política e a natureza humana. Fundamental para quem busca entender de forma crítica as dinâmicas sociais e estruturais da sociedade.
              </p>
            </div>

            {/* LIVRO 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-400 hover:shadow-md transition duration-300">
              <h4 className="text-xl font-bold mb-1 text-slate-800">O Contrato Social</h4>
              <p className="text-sm font-semibold text-blue-600 mb-4">Jean-Jacques Rousseau</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Obra indispensável sobre a formação do Estado, direitos e deveres civis. Fornece uma base teórica robusta para qualquer análise crítica sobre leis e economia.
              </p>
            </div>

            {/* LIVRO 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-400 hover:shadow-md transition duration-300">
              <h4 className="text-xl font-bold mb-1 text-slate-800">A Lógica do Cisne Negro</h4>
              <p className="text-sm font-semibold text-blue-600 mb-4">Nassim Nicholas Taleb</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                O impacto do altamente improvável. Um livro essencial para quem trabalha com finanças, riscos e tecnologia, mostrando como lidar com eventos imprevisíveis no mercado.
              </p>
            </div>
          </div>
        </div>
      </section>
              
    </main>
  );
}