import { component$ } from '@builder.io/qwik';


// interface PageData {
//   id: string;
//   created_time: string;
//   last_edited_time: string;
//   created_by: { id: string };
//   last_edited_by: { id: string };
//   icon: { type: string; emoji: string };
//   properties: {
//     Publish: { id: string; type: string; checkbox: boolean };
//     Section: { id: string; type: string; select: { id: string; name: string; color: string } };
//     Parent: { id: string; type: string; rich_text: Array<{ type: string; text: { content: string; link: null }; annotations: { bold: boolean; italic: boolean; strikethrough: boolean; underline: boolean; code: boolean; color: string }; plain_text: string; href: null }> };
//     Tags: { id: string; type: string; multi_select: Array<any> };
//     Name: { id: string; type: string; title: Array<{ type: string; text: { content: string; link: null }; annotations: { bold: boolean; italic: boolean; strikethrough: boolean; underline: boolean; code: boolean; color: string }; plain_text: string; href: null }> };
//   };
//   url: string;
//   public_url: null;
// }

console.log('blog')



export default component$(({ name = "Blog" }: { name?: string }) => {

  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}
)

