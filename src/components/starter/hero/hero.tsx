import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class={['container']}>

      <div class=" py-16 px-4 md:px-0">
        <div class="container mx-auto">
          <h1 class="text-white text-left text-3xl md:text-5xl font-bold leading-tight mb-8 md:mb-12 max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl">
            Conectando al ecosistema IA
          </h1>
          <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p class="text-left text-lg leading-8">La Sociedad Argentina de Inteligencia Artificial es una organización independiente, sin fines de lucro dedicada a hacer investigaciones, generar encuentros, fortalecer los nuevos medios de educación y conscientizar a la sociedad sobre el desarrollo ético de la IA.</p>
            <div class="hidden mt-10 lg:flex lg:gap-x-12 lg:flex-1 lg:items-center lg:justify-start">
              <a href="mailto:comunidad@saia.ar" class="rounded-full bg-transparent px-5 py-3 text-md font-semibold text-white shadow-sm ring-2 ring-inset ring-white hover:bg-white hover:text-black">Ser Parte</a>
            </div>
          </div>

        </div>



      </div>

    </div>




  );
});
