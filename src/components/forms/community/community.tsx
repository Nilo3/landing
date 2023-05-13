import { component$, useSignal, $ } from '@builder.io/qwik';
import { routeAction$, Form } from '@builder.io/qwik-city';
import axios from 'axios';



// @ts-ignore
export const addMember = async (props) => {
  const data = {
    parent: {
      database_id: '53ca4b0e511c4eaf9d952262856d509c',
    },
    properties: {
      Nombre: {
        title: [
          {
            text: {
              content: props.firstName,
            },
          },
        ],
      },
      Apellido: {
        rich_text: [
          {
            text: {
              content: props.lastName,
            },
          },
        ],
      },
      Email: {
        email: props.email,
      },
      MiniBio: {
        rich_text: [
          {
            text: {
              content: props.minibio,
            },
          },
        ],
      }
    },
  };

  const response = await axios.post('https://api.notion.com/v1/pages', data, {
    headers: {
      Authorization: 'Bearer secret_pBGv8w3pj5pMzkwU7UXVtKrKqDCAKxlqbGOKLQlbuWq',
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28',
    },
  });

  return response.data;
};


// @ts-ignore
export const submitForm = routeAction$((props) => {
  // Leave it as an exercise for the reader to implement this.
  console.log('FORM', props);
  addMember(props)
});

export default component$(() => {
  const fa = submitForm();
  return (

    <Form class="w-full max-w-lg mx-auto" action={fa}>
       <input type="hidden" name="jokeID" value="42" />
   <div class="flex flex-wrap -mx-3 mb-6">
     <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
       <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="nombre">
         Nombre
       </label>
       <input name="firstName" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="nombre" type="text" placeholder="Juan"></input>
     </div>
     <div class="w-full md:w-1/2 px-3">
       <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="apellido">
         Apellido
       </label>
       <input name="lastName" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="apellido" type="text" placeholder="Perez"></input>
     </div>
   </div>
   <div class="flex flex-wrap -mx-3 mb-6">
     <div class="w-full px-3">
       <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
         Email
       </label>
       <input name="email" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="juanperez@example.com"></input>
     </div>
   </div>
   <div class="flex flex-wrap -mx-3 mb-6">
     <div class="w-full px-3">
       <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="minibio">
         MiniBio
       </label>
       <textarea name="minibio" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="minibio" ></textarea>
     </div>
   </div>
   <div class="md:flex md:items-center">
     <button class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" >
       Enviar
     </button>
   </div>
 </Form>
        

      
  );
});
