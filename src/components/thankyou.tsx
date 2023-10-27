import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class={['container']}>

      <div class=" py-16 px-4 md:px-0">
        <div class="container mx-auto">
          <h1 class="text-white text-left text-3xl md:text-5xl font-bold leading-tight mb-8 md:mb-12 max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl">
            Gracias
          </h1>
          <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <h2 class="text-white text-left text-2xl md:text-4xl font-bold leading-tight mb-8 md:mb-12 max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl">Bio</h2>
            <p class="text-left text-lg leading-8 mb-10">Nuestro equipo está procesando tus datos y te va a mandar un mail con tu código de miembro.</p>

          </div>

        </div>



      </div>

    </div>




  );
});
