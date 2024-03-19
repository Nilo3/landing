import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

interface TeamMember {
  nombre: string;
  posicion: string;
  foto: string;
}

interface TeamData {
  equipo: TeamMember[];
}

import teamData from '../../../public/images/team/team.json';

export default component$(() => {
  return (
    <>
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>
      <h4 class='text-white text-4xl justify-center flex mt-12 font-public-sans'>Equipo</h4>
      <div class="bg-gray-400 opacity-80 w-[75%] mx-auto mb-48 rounded-2xl">
        <div class="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {teamData.equipo.map((member, index) => (
            <div key={index} class="text-center">
              <img src={member.foto} alt={member.nombre} class="w-48 h-48 mx-auto rounded-full mt-4 md:mt-12 font-public-sans" width={0} height={0} />
              <p class="text-2xl font-extrabold md:mt-2 text-white font-public-sans">{member.nombre}</p>
              <p class=" mt-2 text-white mb-4 md:mb-12">{member.posicion}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Sociedad Argentina de Inteligencia Artificial',
  meta: [
    {
      name: 'quipo',
      content: 'SAIA - Sociedad Argentina de Inteligencia Artificial',
    },
  ],
};