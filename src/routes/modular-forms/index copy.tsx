import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import {
  email,
  type InitialValues,
  minLength,
  required,
  useForm,
} from '@modular-forms/qwik';

type LoginForm = {
  firstName: string;
  lastName: string;
  email: string;
  minibio: string;

};

export const useFormLoader = routeLoader$<InitialValues<LoginForm>>(() => ({
  firstName: '',
  lastName: '',
  email: '',
  linkedin: '',
  minibio: '',
}));

export default component$(() => {
  const [loginForm, { Form, Field }] = useForm<LoginForm>({
    loader: useFormLoader(),
  });

  return (
    <Form class="w-full max-w-lg mx-auto mt-3.5 pb-96" >
      <h1 class="text-2xl font-bold mb-3.5">Solicitud de inscripción a SAIA</h1>
      <div class="flex flex-wrap -mx-3 mb-6">

        {/* *** firstName *** */}
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="firstName">
            Nombre
          </label>
          <Field
            name="firstName"
            validate={[
              required('Ingrese su nombre.'),
              minLength(2, 'Su nombre debe tener al menos 2 caracteres.'),
            ]}
          >
            {(field, props) => (
              <>
                <input {...props} class="appearance-none block w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-pink-300" type="text" required />
                {field.error && <div>{field.error}</div>}
              </>
            )}
          </Field>
        </div>
        {/* *** lastName *** */}
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="lastName">
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
                <input {...props} class="appearance-none block w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-pink-300" type="text" required />
                {field.error && <div>{field.error}</div>}
              </>
            )}
          </Field>
        </div>

        {/* *** linkedin *** */}
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="linkedin">
            Linkedin
          </label>
          <Field
            name="linkedin"
            validate={[
              required('Ingrese su url de linkedin.'),
              minLength(8, 'Su url de linkedin debe tener al menos 8 caracteres.'),
            ]}
          >
            {(field, props) => (
              <>
                <input {...props} class="appearance-none block w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-pink-300" type="text" required />
                {field.error && <div>{field.error}</div>}
              </>
            )}
          </Field>
        </div>


        {/* *** email *** */}
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="email">
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
                <input {...props} class="appearance-none block w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-pink-300" type="email" required />
                {field.error && <div>{field.error}</div>}
              </>
            )}
          </Field>
        </div>

        {/* *** minibio *** */}
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="minibio">
            Mini Bio
          </label>
          <Field
            name="minibio"
            validate={[
              required('Please enter your password.'),
              minLength(8, 'You password must have 8 characters or more.'),
            ]}
          >
            {(field, props) => (
              <>
                <textarea {...props} class="appearance-none block w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required />
                {field.error && <div>{field.error}</div>}
              </>
            )}
          </Field>
        </div>

      </div>
      <div class="md:flex md:items-center">
        <button class="rounded-full bg-transparent px-5 py-3 text-md font-semibold text-white shadow-sm ring-2 ring-inset ring-white hover:bg-white hover:text-black" >
          Enviar
        </button>


      </div>
    </Form>
  );
});