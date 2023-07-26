import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik"

export default component$(() => {
  return (
    <>
      <div id="nuestros-valores" class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <Image src="https://assets.saia.ar/saia/gr2.webp"
          layout="constrained"
          width={2830}
          height={1500}
          class="inset-0 w-full h-full object-cover object-center absolute z-[-1]"
          alt="SAIA Brand Gradient 3"
        />
        <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
          <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#C4003A] to-[#3A0832] opacity-90" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>
        <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
          <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#A80654] to-[#ffffff] opacity-90, 0, 600" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Nuestros valores</h2>
          {/* <p class="mt-6 text-lg leading-8 text-gray-300">Todo lo que hacemos está de acuerdo a estos cuatro principios.</p> */}
        </div>
      </div>


      {/* Innovacion */}
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Innovación</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">SAIA se compromete a fomentar y promover la innovación en el campo de la inteligencia artificial. Buscamos desarrollar nuevas soluciones, tecnologías y enfoques que impulsen el progreso y mejoren la vida de las personas en diferentes aspectos.</p>
          </div>
        </div>
      </div>

      {/* Colaboracion */}
      <div class="bg-black py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Colaboración</h2>
            <p class="mt-6 text-lg leading-8 text-white">Valoramos la colaboración y la sinergia entre profesionales, académicos y entidades de diversos sectores. Fomentamos la creación de redes de trabajo conjuntas, la participación en proyectos colaborativos y la difusión del conocimiento para construir una comunidad de inteligencia artificial sólida y cohesionada.</p>
          </div>
        </div>
      </div>

      {/* Transparencia */}
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Transparencia</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">SAIA se compromete a promover la transparencia en el desarrollo y aplicación de la inteligencia artificial. Buscamos fomentar la apertura y la divulgación de información sobre los algoritmos, modelos y datos utilizados en los sistemas de IA. Promovemos la comprensión pública de la inteligencia artificial y sus implicaciones, y abogamos por la rendición de cuentas y la toma de decisiones claras y justificables.</p>
          </div>
        </div>
      </div>

      {/* Ética */}
      <div class="bg-black py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Ética</h2>
            <p class="mt-6 text-lg leading-8 text-white">La ética es un pilar fundamental para SAIA. Promovemos el uso responsable y ético de la inteligencia artificial, teniendo en cuenta las implicaciones sociales, legales y morales. Buscamos garantizar la transparencia, la privacidad, la equidad y la seguridad en todas las aplicaciones de la inteligencia artificial.</p>
          </div>
        </div>
      </div>

    </>
  );
})