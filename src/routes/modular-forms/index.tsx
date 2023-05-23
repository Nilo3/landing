import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { routeAction$ } from '@builder.io/qwik-city';
import {
  email,
  type InitialValues,
  minLength,
  required,
  useForm,
} from '@modular-forms/qwik';

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
  console.log('FORM', props);
  addMember(props)
});

type OnboardingForm = {
  firstName: string;
  lastName: string;
  email: string;
  province: string;
  learnedAbout: string;
  goal: string;
  about: string;
  volunteer: boolean;

};

export const useFormLoader = routeLoader$<InitialValues<OnboardingForm>>(() => ({
  firstName: '',
  lastName: '',
  email: '',
  province: '',
  learnedAbout: '',
  linkedin: '',
  goal: '',
  about: '',
  volunteer: false,
}));

export default component$(() => {
  const [onboardingForm, { Form, Field }] = useForm<OnboardingForm>({
    loader: useFormLoader(),
  });

  return (
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* <div class="md:flex md:items-center md:justify-between">
        <div class="min-w-0 flex-1 mb-20">
          <h2 class="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">Contanos sobre vos</h2>
        </div>

      </div> */}
      <Form >
        <div class="space-y-12">

          <div class="border-b border-white/10 pb-12">
            <h2 class="text-base font-semibold leading-7 text-white">Información Personal</h2>
            {/* <p class="mt-1 text-sm leading-6 text-gray-400">Usá una dirección en la </p> */}
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


              {/* *** firstName *** */}
              <div class="sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium leading-6 text-white">Nombre</label>
                <Field
                  name="firstName"
                  validate={[
                    required('Ingrese su nombre.'),
                    minLength(2, 'Su nombre debe tener al menos 2 caracteres.'),
                  ]}
                >
                  {(field, props) => (
                    <>
                      <input {...props} class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" type="text" required />
                      {field.error && <div>{field.error}</div>}
                    </>
                  )}
                </Field>
              </div>
              {/* *** lastName *** */}
              <div class="sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium leading-6 text-white">
                  Apellido
                </label>
                <Field
                  name="lastName"
                  validate={[
                    required('Ingrese su apellido.'),
                    minLength(2, 'Su apellido debe tener al menos 2 caracteres.'),
                  ]}
                >
                  {(field, props) => (
                    <>
                      <input {...props} class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" type="text" required />
                      {field.error && <div>{field.error}</div>}
                    </>
                  )}
                </Field>
              </div>
              {/* *** email *** */}
              <div class="sm:col-span-4">
                <label for="email" class="block text-sm font-medium leading-6 text-white">
                  Email
                </label>
                <Field
                  name="email"
                  validate={[
                    required('Ingrese su email.'),
                    email('El email no es válido.'),
                  ]}
                >
                  {(field, props) => (
                    <>
                      <input {...props} class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" type="email" required />
                      {field.error && <div>{field.error}</div>}
                    </>
                  )}
                </Field>
              </div>
              {/* *** province *** */}
              <div class="sm:col-span-3">
                <label for="province" class="block text-sm font-medium leading-6 text-white">
                  Provincia
                </label>
                <Field
                  name="province"
                  validate={[
                    required('Ingrese su province.'),
                    email('El email no es válido.'),
                  ]}
                >
                  {(field, props) => (
                    <>
                      <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black">
                        <option>Buenos Aires</option>
                        <option>Catamarca</option>
                        <option>CABA</option>
                        <option>Chaco</option>
                        <option>Chubut</option>
                        <option>Córdoba</option>
                        <option>Corrientes</option>
                        <option>Entre Ríos</option>
                        <option>Formosa</option>
                        <option>Jujuy</option>
                        <option>La Pampa</option>
                        <option>La Rioja</option>
                        <option>Mendoza</option>
                        <option>Misiones</option>
                        <option>Neuquén</option>
                        <option>Río Negro</option>
                        <option>Salta</option>
                        <option>San Juan</option>
                        <option>San Luis</option>
                        <option>Santa Cruz</option>
                        <option>Santa Fe</option>
                        <option>Santiago del Estero</option>
                        <option>Tierra del Fuego, Antártida e Islas del Atlántico Sur</option>
                        <option>Tucumán</option>
                      </select>
                      {field.error && <div>{field.error}</div>}
                    </>
                  )}
                </Field>
              </div>



            </div>



















          </div>

          <div class="border-b border-white/10 pb-12">
            <h2 class="text-base font-semibold leading-7 text-white">Trabajo</h2>
            <p class="mt-1 text-sm leading-6 text-gray-400">Perfil profesional</p>
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

              <div class="sm:col-span-4">
                <label for="username" class="block text-sm font-medium leading-6 text-white">Linkedin</label>
                <div class="mt-2">
                  <div class="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                    <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">linkedin.com/</span>
                    <Field
                      name="linkedin"
                      validate={[
                        required('Ingrese su url de linkedin.'),
                        minLength(8, 'Su url de linkedin debe tener al menos 8 caracteres.'),
                      ]}
                    >
                      {(field, props) => (
                        <>
                          <input {...props} class="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6" type="text" required />
                          {field.error && <div>{field.error}</div>}
                        </>
                      )}
                    </Field>
                  </div>
                </div>
              </div>

              <div class="col-span-full">
                <label class="block text-sm font-medium leading-6 text-white" for="about">
                  Sobre vos
                </label>
                <Field
                  name="about"
                  validate={[
                    required('Por favor completá este campo.'),
                    minLength(100, 'Tu respuesta es demasiado corta.'),
                  ]}
                >
                  {(field, props) => (
                    <>
                      <textarea {...props} class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" required />
                      {field.error && <div>{field.error}</div>}
                    </>
                  )}
                </Field>
              </div>

              <div class="col-span-full">
                <label class="block text-sm font-medium leading-6 text-white" for="goal">
                  ¿Cuál sería tu primer objetivo para unirte a la comunidad?
                </label>
                <Field
                  name="goal"
                  validate={[
                    required('Por favor completá este campo.'),
                    minLength(100, 'Tu respuesta es demasiado corta.'),
                  ]}
                >
                  {(field, props) => (
                    <>
                      <textarea {...props} class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" required />
                      {field.error && <div>{field.error}</div>}
                    </>
                  )}
                </Field>
              </div>


            </div>

          </div>





        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button class="rounded-full bg-transparent px-5 py-3 text-md font-semibold text-white shadow-sm ring-2 ring-inset ring-white hover:bg-white hover:text-black" >
            Enviar
          </button>
        </div>
      </Form >
    </div >
  );
});