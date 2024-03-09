import { component$ } from "@builder.io/qwik"

export default component$(() => {
  return (
    <div class={["container"]}>
      <div class="container">
        <div class="flex flex-row ">
          <div class="md:py-16 md:px-0">
            <div class="mx-auto">
              <h1 class="text-white text-left lg:-mr-12 text-3xl md:text-5xl font-bold leading-tight mb-8 md:mb-12 max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-2">
                Conectando al ecosistema IA
              </h1>
              <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p class="text-left text-lg leading-8">
                  La Sociedad Argentina de Inteligencia Artificial es una
                  organización independiente, sin fines de lucro dedicada a
                  hacer investigaciones, generar encuentros, fortalecer los
                  nuevos medios de educación y conscientizar a la sociedad sobre
                  el desarrollo ético de la IA.
                </p>
                <div class="hidden mt-10 lg:flex lg:gap-x-12 lg:flex-1 lg:items-center lg:justify-start">
                  <a
                    href="https://tally.so/r/mBdlK5"
                    target="_blank"
                    class="rounded-full bg-transparent px-5 py-3 w-60 text-md font-semibold text-white shadow-sm ring-2 ring-inset ring-white hover:bg-white hover:text-black"
                  >
                    Ser Parte
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden lg:block mt-44 lg:ml-12 lg:mt-60 xl:mt-24 xl:ml-8">
            <iframe
              class="rounded-lg"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/T6PjcjKL7yQ?autoplay=1&mute=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
})
