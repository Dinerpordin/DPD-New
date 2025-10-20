export type Post = { slug: string; title: string; date: string; excerpt: string; body: string };
export const posts: Post[] = [
  { slug:'welcome', title:'Why Opinion Matters', date:'2025-10-20', excerpt:'Launching our opinion section', body:`
**Welcome!** This is a simple file-based post. You can add more in code.

- Write in markdown-like text
- Keep it short and readable
` },
];
