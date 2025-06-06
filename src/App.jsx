function App() {
  return (
    <>
      <header className="bg-red-800 text-stone-100 py-4 px-6 text-center animate-pulse">
        <h1 className="text-sm md:text-base font-bold">
          🌧️ Mais de 20 enchentes só este ano. Imagine se cada vizinho soubesse a tempo. <br />
          Juntos, podemos evitar tragédias.
        </h1>
      </header>

      <section className="relative">
        <img
          src="src\assets\temporal-cajati-1 1.svg"
          alt="Rua alagada em Cajati"
          className="w-full h-[70vh] object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Ribeira Alert</h1>
            <p className="text-lg md:text-xl mb-6">O app que transforma avisos em salvação. Por você, por todos.</p>
            <a
              href="#formulario"
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-10 rounded-lg font-semibold shadow-lg transition"
            >
              Quero Fazer Parte
            </a>
          </div>
          

        </div>
      </section>

      <section className="bg-blue-200 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">🗣️ Vozes da Comunidade</h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-left bg-gray-50 p-6 rounded-xl shadow-md  hover:scale-105">
              <p className="text-lg italic mb-4">
              "O Ribeira atingiu 9,28 metros e a água se aproxima da região central. Casas e lojas estão alagadas. Pelo menos 73 famílias foram retiradas das residências e alojadas em escolas."

              </p>
              <p className="font-semibold text-gray-800">Defesa Civil</p>
            </div>
            <img
              src="src\assets\defesa-civil-de-juquia-informa-sobre-as-fortes-chuvas 1.svg"
              alt="Alagamento em Registro"
              className="rounded-xl shadow-lg"
            />

            <div className="text-left bg-gray-100 p-6 rounded-xl shadow-md  hover:scale-105">
              <p className="text-lg italic mb-4">
              "Moro em Pariquera-Açu, e essa é a situação da minha cidade devido às fortes chuvas que iniciaram hoje por volta das 6 da manhã. A cidade precisará de muita ajuda depois disso!"
              </p>
              <p className="font-semibold text-gray-800">Gustavo V., morador local</p>
            </div>
            <img
              src="src\assets\photo-2025-02-08-19-41-12 1.svg"
              alt="Enchente na região"
              className="rounded-xl shadow-lg w-80"
            />
          </div>
        </div>
      </section>


      <section className="bg-orange-100 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Por que o Ribeira Alert é essencial?</h2>
          <p className="text-base md:text-lg mb-10 max-w-3xl mx-auto">
            Cada alerta emitido pode significar uma vida salva. O Ribeira Alert conecta moradores, informa em tempo real e guia ações seguras em momentos críticos.
          </p>
          <div className="grid md:grid-cols-3 gap-8 ">
            <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-3">🚨 Alertas em Tempo Real</h3>
              <p>Notificações diretas sobre riscos iminentes. Cada segundo conta.</p>
              <img className="pt-8" src="src\assets\Group 2 (1).svg" alt="alerta em tempo real" />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-3">🗺️ Mapa de Riscos</h3>
              <p>Visualize áreas críticas e proteja quem você ama com dados confiáveis.</p>
              <img className="pt-8" src="src\assets\ChatGPT Image 10 de abr. de 2025, 20_10_38 1.svg" alt="mapa de riscos registro" />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-3">🌍 Voz da Comunidade</h3>
            <p>Compartilhe relatos do seu local envie textos, fotos ou vídeos sobre enchentes, deslizamentos ou outros eventos. Sua informação pode ajudar outras pessoas em tempo real.</p>
            <img src="src\assets\comu.svg" alt="comunidade" />
            </div>

          </div>
          <div className="flex justify-center mt-10">
            <img className="w-150 md:w-150" src="src/assets/iPhone 15 Pro.svg" alt="Mockup do Ribeira Alert" />
          </div>
        </div>
        <section className="flex flex-col flex-wrap justify-center items-center mt-10 place-content-center">
            <div className="box-border p-4 text-center">
              <h1 className="text-[50px] mb-10">
                👥 <strong>Comunidade</strong>
              </h1>
              <p className="mb-10 text-lg">
                Na emergência, cada gesto conta. <br />
                Por isso, criamos um espaço onde moradores podem se ajudar, <br /> compartilhar informações valiosas e fortalecer uma rede solidária:
              </p>
              <ul className="text-start list-disc list-inside text-lg">
                <li className="mb-3">
                  <strong>Avisos Locais: </strong> informe sobre quedas de energia, vias interditadas ou perigos iminentes.
                </li>
                <li className="mb-3">
                  <strong>Rede de Voluntários: </strong>conecte-se com quem quer ajudar.
                </li>
                <li>
                  <strong>Fotos & Vídeos: </strong>registre e alerte a todos com imagens reais do que está acontecendo.
                </li>
              </ul>
            </div>
          </section>
      </section>


      <section id="formulario" className="bg-orange-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">💡 Faça Parte da Rede de Alerta</h2>
          <p className="mb-6 text-gray-700">
            Preencha o formulário e junte-se à comunidade que se protege unida.
          </p>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScbSMKPsSW7ikv0CaAKWlVbSO1ZRrvHW8Vjlt_QcnP9mLCnVg/viewform?embedded=true"
            width="100%"
            height="1808"
            frameBorder="0"
            className="w-full rounded-lg shadow-xl"
            title="Formulário de Cadastro"
          >
            Carregando…
          </iframe>
        </div>
      </section>

      <footer className="bg-gray-800 text-stone-300 text-center py-6">
        <p className="text-sm md:text-base ">
          <strong>© 2025 Ribeira Alert</strong> • Criado por <a className="hover:underline" href="https://br.linkedin.com/in/vinicius-batista-dias-921347352">Vinícius</a> para a comunidade
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 pt-5 text-sm md:text-base text-center">
            <img
              className="w-8 md:w-10"
              src="src\assets\instagram.svg"
              alt="Instagram"
            />
            <a
              href="https://www.instagram.com/ribeira_alert/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 hover:underline"
            >
              Instagram
            </a>
          </div>


      </footer>
    </>
  );
}

export default App;
