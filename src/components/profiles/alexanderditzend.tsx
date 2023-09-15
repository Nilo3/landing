import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class={['container']}>

      <div class=" py-16 px-4 md:px-0">
        <div class="container mx-auto">
          <h1 class="text-white text-left text-3xl md:text-5xl font-bold leading-tight mb-8 md:mb-12 max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl">
            Alexander Ditzend
          </h1>
          <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <h2 class="text-white text-left text-2xl md:text-4xl font-bold leading-tight mb-8 md:mb-12 max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl">Bio</h2>
            <p class="text-left text-lg leading-8 mb-10">Alexander Ditzend es consultor, capacitador y programador especializado en Inteligencia Artificial aplicada a negocios.</p>
            <p class="text-left text-lg leading-8 mb-10">En los últimos años, acompañó a diferentes organizaciones a desarrollar productos y servicios basados en Inteligencia Artificial partiendo de apoyo a la dirección estratégica y llegando hasta la puesta en marcha junto a los equipos técnicos.</p>
            <p class="text-left text-lg leading-8 mb-10">Hoy preside la Sociedad Argentina de Inteligencia Artificial y dirige el Posgrado de Gestión Estratégica de Inteligencia Artificial y Automatización Empresarial en UCEMA.</p>

            <div class="mb-20">
              <h2 class="text-white text-left text-2xl md:text-4xl font-bold leading-tight mb-8 md:mb-12 max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl">Fotos</h2>
              <div class="mt-10 lg:flex lg:gap-x-12 lg:flex-1 lg:items-center lg:justify-start">
                <a href="https://drive.google.com/drive/folders/1ulgwVC5R7hefVav3WhbadNvHjhWMeam1?usp=share_link" class="rounded-full bg-transparent mx-2 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white hover:bg-white hover:text-black">Retratos en Google Drive</a>
              </div>
            </div>

            <div class="mb-20">

              <h2 class="text-white text-left text-2xl md:text-4xl font-bold leading-tight mb-8 md:mb-12 max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl">CV</h2>
              <div class="mt-10 lg:flex lg:gap-x-12 lg:flex-1 lg:items-center lg:justify-start">
                <a href="https://assets.saia.ar/saia/alexanderditzend/cv_alexander_ditzend_es.pdf" class="rounded-full bg-transparent mx-2 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white hover:bg-white hover:text-black">CV en castellano</a>

                <a href="https://assets.saia.ar/saia/alexanderditzend/cv_alexander_ditzend_en.pdf" class="rounded-full bg-transparent mx-2 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white hover:bg-white hover:text-black">Resume in english</a>
              </div>
            </div>


          </div>

        </div>



      </div>

    </div>




  );
});
