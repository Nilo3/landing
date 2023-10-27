import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class={['container']}>

      <div class=" py-16 px-4 md:px-0">
        <div class="container mx-auto">
          <h1 class="text-white text-left text-3xl md:text-5xl font-bold leading-tight mb-8 md:mb-12 max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl">
            Ana Montes de Oca
          </h1>
          <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <h2 class="text-white text-left text-2xl md:text-4xl font-bold leading-tight mb-8 md:mb-12 max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl">Bio</h2>
            <p class="text-left text-lg leading-8 mb-10">Ana Montes de Oca es periodista, especialista en marketing digital y miembro del equipo de comunicación de la Sociedad Argentina de Inteligencia Artificial.</p>


            <div class="mb-20">
              <h2 class="text-white text-left text-2xl md:text-4xl font-bold leading-tight mb-8 md:mb-12 max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl">Fotos</h2>
              <div class="mt-10 lg:flex lg:gap-x-12 lg:flex-1 lg:items-center lg:justify-start">
                <a href="https://assets.saia.ar/saia/members/amontes/foto-perfil-ana-montes-de-oca.jpeg" class="rounded-full bg-transparent mx-2 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white hover:bg-white hover:text-black">Retrato en jpeg</a>
              </div>
            </div>

            <div class="mb-20">

              <h2 class="text-white text-left text-2xl md:text-4xl font-bold leading-tight mb-8 md:mb-12 max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl">CV</h2>
              <div class="mt-10 lg:flex lg:gap-x-12 lg:flex-1 lg:items-center lg:justify-start">
                <a href="https://assets.saia.ar/saia/members/amontes/cv-ana-2023.doc" class="rounded-full bg-transparent mx-2 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white hover:bg-white hover:text-black">CV en castellano</a>

              </div>
            </div>


          </div>

        </div>



      </div>

    </div>




  );
});
