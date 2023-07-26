import { component$ } from '@builder.io/qwik';
import { SaiaLogo } from '../icons/saia';




export default component$(() => {
  return (
    <header class="bg-transparent">
      <nav class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">

        {/* Logo */}
        <div class="flex lg:flex-1">
          <a href="/" class="-m-1.5 p-1.5" title="saia">
            <SaiaLogo height={50} width={133} />
          </a>
        </div>


        {/* Desktop Menu */}
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>



        <div class="lg:hidden gap-x-12 flex-1 items-center justify-end">
          {/* <a href="https://www.instagram.com/saia_ar/" class="rounded-full bg-transparent px-2 py-1 text-xs font-semibold text-white shadow-sm ring-2 ring-inset ring-white hover:bg-transparent hover:text-white">Instagram</a> */}
          {/* <a href="https://twitter.com/SAIA_AR" class="rounded-full bg-transparent px-2 py-1 text-xs font-semibold text-white shadow-sm ring-2 ring-inset ring-white hover:bg-transparent hover:text-white">Twitter</a> */}
          <a href="https://www.linkedin.com/company/sociedad-argentina-de-inteligencia-artificial" class="rounded-full bg-transparent px-2 py-1 text-xs font-semibold text-white shadow-sm ring-2 ring-inset ring-white hover:bg-transparent hover:text-white">LinkedIn</a>
          <a href="mailto:comunidad@saia.ar" class="rounded-full bg-transparent px-2 py-1 text-xs font-semibold text-white shadow-sm ring-1 ring-inset ring-white hover:ring-2 hover:ring-gray-300 hover:text-gray-300">Ser Parte</a>
        </div>
      </nav>

    </header>


  );
});
