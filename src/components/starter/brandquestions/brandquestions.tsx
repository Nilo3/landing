import { component$ } from "@builder.io/qwik"
import image from "/images/dossier.jpg"
import { Image } from '@unpic/qwik'

export default component$(() => {
  return (
    <>
      <div class="w-full flex justify-center">
        <div class="border-t border-gray-200 w-1/2"></div>
      </div>
      <div class="bg-black py-16 sm:py-24 md:py-32 lg:py-40 -mt-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row justify-between">
            <div class="mx-auto max-w-2xl lg:mx-40 xl:mx-24 2xl:mx-0 lg:flex-1">
              <h2 class="text-2xl ml-10 md:ml-0 sm:text-4xl font-bold tracking-tight text-white">
                Dossier de prensa
              </h2>
              <div class="mt-10 md:ml-4">
                <a
                  href="/public/pdf/dossier-prensa.pdf"
                  target="_blank"
                  download="Dossier de prensa SAIA"
                  class="rounded-full bg-transparent px-24 sm:ml-12 md:ml-0 py-2 text-md font-semibold  text-white shadow-sm ring-2 ring-inset ring-white hover:bg-white hover:text-black"
                >
                  Descargar
                </a>
              </div>
            </div>
            <div class="lg:flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0">
              <Image
                src={image}
                alt="Dossier de prensa"
                class="rounded-2xl lg:mr-24 ml-4 md:ml-0 "
                width="288"
                height="288"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ¿Qué es SAIA? */}
      <div class="bg-white py-16 sm:py-24 md:py-32 lg:py-40 xl:py-48">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              ¿Qué es SAIA?
            </h2>
            <p class="mt-4 sm:mt-6 text-base sm:text-lg leading-6 sm:leading-8 text-gray-600">
              SAIA es una Sociedad Argentina de Inteligencia Artificial que
              tiene como objetivo principal promover el avance, desarrollo y
              aplicaciones de la inteligencia artificial en Argentina.
              Trabajamos en estrecha colaboración con expertos, académicos y
              profesionales para impulsar la innovación y difundir el
              conocimiento en este campo.
            </p>
          </div>
        </div>
      </div>

      {/*}
        <div class="bg-white py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
              <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">¿Qué es SAIA?</h2>
              <p class="mt-6 text-lg leading-8 text-gray-600">SAIA es una Sociedad Argentina de Inteligencia Artificial que tiene como objetivo principal promover el avance, desarrollo y aplicaciones de la inteligencia artificial en Argentina. Trabajamos en estrecha colaboración con expertos, académicos y profesionales para impulsar la innovación y difundir el conocimiento en este campo.</p>
            </div>
          </div>
        </div>
      */}

      {/* ¿Cómo puede SAIA ayudarme? */}

      <div class="bg-black py-16 sm:py-24 md:py-32 lg:py-40 xl:py-48">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-2xl sm:text-4xl font-bold tracking-tight text-white sm:text-6xl">
              ¿Cómo puede SAIA ayudarme?
            </h2>
            <p class="mt-4 sm:mt-6 text-base sm:text-lg leading-6 text-white">
              SAIA puede ayudarte brindando recursos, conocimientos y
              oportunidades en el ámbito de la inteligencia artificial.
              Organizamos eventos, conferencias y talleres donde puedes aprender
              sobre las últimas tendencias y prácticas en IA. Además, ofrecemos
              una plataforma de networking donde puedes conectarte con
              profesionales y expertos en el campo.
            </p>
          </div>
        </div>
      </div>

      {/*}
      <div class="bg-black py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
              <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">¿Cómo puede SAIA ayudarme?</h2>
              <p class="mt-6 text-lg leading-8 text-white">SAIA puede ayudarte brindando recursos, conocimientos y oportunidades en el ámbito de la inteligencia artificial. Organizamos eventos, conferencias y talleres donde puedes aprender sobre las últimas tendencias y prácticas en IA. Además, ofrecemos una plataforma de networking donde puedes conectarte con profesionales y expertos en el campo.</p>
            </div>
          </div>
      </div>
    */}

      {/* ¿Qué hace SAIA diferente de otras organizaciones? */}
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              ¿Qué hace SAIA diferente de otras organizaciones?
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Lo que distingue a SAIA es nuestra estrecha relación con una
              fundación. Al ser parte de una fundación, tenemos una visión más
              amplia y un compromiso adicional con la ética y la responsabilidad
              social en el desarrollo y aplicación de la inteligencia
              artificial. Además, nuestra red de colaboradores y aliados nos
              permite acceder a una amplia gama de recursos y experiencias en
              este campo.
            </p>
          </div>
        </div>
      </div>
    </>
  )
})