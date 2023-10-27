import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      {/* ¿Qué es SAIA? */}
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">¿Qué es SAIA?</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">SAIA es una Sociedad Argentina de Inteligencia Artificial que tiene como objetivo principal promover el avance, desarrollo y aplicaciones de la inteligencia artificial en Argentina. Trabajamos en estrecha colaboración con expertos, académicos y profesionales para impulsar la innovación y difundir el conocimiento en este campo.</p>
          </div>
        </div>
      </div>

      {/* ¿Cómo puede SAIA ayudarme? */}
      <div class="bg-black py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
              <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">¿Cómo puede SAIA ayudarme?</h2>
              <p class="mt-6 text-lg leading-8 text-white">SAIA puede ayudarte brindando recursos, conocimientos y oportunidades en el ámbito de la inteligencia artificial. Organizamos eventos, conferencias y talleres donde puedes aprender sobre las últimas tendencias y prácticas en IA. Además, ofrecemos una plataforma de networking donde puedes conectarte con profesionales y expertos en el campo.</p>
            </div>
          </div>
      </div>
      
      {/* ¿Qué hace SAIA diferente de otras organizaciones? */}
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">¿Qué hace SAIA diferente de otras organizaciones?</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">Lo que distingue a SAIA es nuestra estrecha relación con una fundación. Al ser parte de una fundación, tenemos una visión más amplia y un compromiso adicional con la ética y la responsabilidad social en el desarrollo y aplicación de la inteligencia artificial. Además, nuestra red de colaboradores y aliados nos permite acceder a una amplia gama de recursos y experiencias en este campo.</p>
          </div>
        </div>
      </div>



    </>
  );
})