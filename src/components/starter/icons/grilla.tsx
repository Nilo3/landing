import { component$ } from '@builder.io/qwik';

export const Grilla = component$((props) => {
  return (
    <div>
      <img src={props.url} alt="Description of the image" />
    </div>
  );
});