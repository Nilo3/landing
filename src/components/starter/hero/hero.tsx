import { component$ } from '@builder.io/qwik';
import styles from './hero.module.css';

export default component$(() => {
  return (
    <div class={['container', styles.hero]}>
<div class=" py-16 px-4 md:px-0">
  <div class="container mx-auto">
    <h1 class="text-white text-left text-3xl md:text-5xl font-bold leading-tight mb-8 md:mb-12 max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl">
      Conectando al ecosistema IA
          </h1>
      <p class="text-left">Estamos construyendo una organización para el desarrollo de la Inteligencia Artificial en todo el país</p>
      <p class="text-left"> <span class="font-black">y para el beneficio de toda la población argentina.</span></p>
          
  </div>



</div>

    </div>
  );
});
