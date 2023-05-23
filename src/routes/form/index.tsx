import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Community from '~/components/forms/community/community';
// import Twcom from '~/components/forms/community/twcom';

export default component$(() => {
  return (
    <>
      <Community />
      {/* <Twcom /> */}
      <div role="presentation" class="ellipsis"></div>
    </>
  );
});


export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};

