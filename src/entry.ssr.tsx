/**
 * WHAT IS THIS FILE?
 *
 * SSR entry point, in all cases the application is render outside the browser, this
 * entry point will be the common one.
 *
 * - Server (express, cloudflare...)
 * - npm run start
 * - npm run preview
 * - npm run build
 *
 */
import { renderToStream, type RenderToStreamOptions } from '@builder.io/qwik/server';
import { manifest } from '@qwik-client-manifest';
import Root from './root';
// import type { AxiosResponse } from 'axios';
// import axios from 'axios';
// import * as fs from 'fs';
// import * as path from 'path';
// import articleTemplate from './article.tmp';

// interface NotionDbFilter {
//   filter: object;
// }


// const postData = async () => {

//   const headers = {
//     "Authorization": "Bearer secret_5xiMhf4tMNc9VYprmeBmC9IyrBiM4YIfegflTQbRdtr",
//     "Notion-Version": "2022-06-28",
//     "Content-Type": "application/json; charset=utf-8",
//   }

//   try {
//     const response: AxiosResponse = await axios.post('https://api.notion.com/v1/databases/45be3615ec4847dc9ab5ae6d35c04586/query', {}
//       , { headers });
//     console.log(response.data.results[0].properties.Name.title[0].plain_text)
//     const route0 = response.data.results[0].properties.Route.select.name
//     console.log(route0);

//     const __dirname = path.resolve();
//     const dirPath = path.join(__dirname, '/src/routes/route0');
//     const filePath = path.join(dirPath, 'index.tsx');
//     fs.mkdir(dirPath, { recursive: true }, (err) => {
//       if (err) throw err;
//     });

//     const title = response.data.results[0].properties.Name.title[0].plain_text
//     const pageContent = "pageContent"
//     const article = articleTemplate(title, pageContent)
//     console.log(article)

//     fs.writeFile(filePath, article, (err) => {
//       if (err) throw err;
//       console.log('File is created successfully.');
//     });
//     console.log(filePath);
//   } catch (error) {
//     console.error(error);
//   }
// };

// postData();



console.log('Starting SSR server...');

export default function (opts: RenderToStreamOptions) {
  return renderToStream(<Root />, {
    manifest,
    ...opts,
    // Use container attributes to set attributes on the html tag.
    containerAttributes: {
      lang: 'en-us',
      ...opts.containerAttributes,
    },
  });
}
