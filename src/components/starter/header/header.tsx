import { component$ } from '@builder.io/qwik';
import { SaiaLogo } from '../icons/saia';

 


export default component$(() => {
  return (
        <header class="bg-transparent">
      <nav class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="/" class="-m-1.5 p-1.5"title="saia">
            <SaiaLogo height={50} width={133} />
          </a>
        </div>

        <div class="lg:hidden gap-x-12 flex-1 items-center justify-end">
          {/* <a href="https://www.instagram.com/saia_ar/" class="rounded-full bg-transparent px-2 py-1 text-xs font-semibold text-white shadow-sm ring-2 ring-inset ring-white hover:bg-transparent hover:text-white">Instagram</a> */}
          {/* <a href="https://twitter.com/SAIA_AR" class="rounded-full bg-transparent px-2 py-1 text-xs font-semibold text-white shadow-sm ring-2 ring-inset ring-white hover:bg-transparent hover:text-white">Twitter</a> */}
          {/* <a href="https://www.linkedin.com/company/sociedad-argentina-de-inteligencia-artificial" class="rounded-full bg-transparent px-2 py-1 text-xs font-semibold text-white shadow-sm ring-2 ring-inset ring-white hover:bg-transparent hover:text-white">LinkedIn</a> */}
          <a href="mailto:comunidad@saia.ar" class="rounded-full bg-white px-2 py-1 text-xs font-semibold text-black shadow-sm ring-2 ring-inset ring-white hover:bg-transparent hover:text-white">Ser Parte</a>
        </div>
      </nav>

</header>


  );
});
