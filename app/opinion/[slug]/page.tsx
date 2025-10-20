import { notFound } from 'next/navigation';
import { posts } from '../../../content/opinion/posts';

export function generateStaticParams(){
  return posts.map(p=>({ slug: p.slug }));
}

export default function OpinionPost({ params }: { params: { slug: string } }){
  const post = posts.find(p=>p.slug===params.slug);
  if (!post) return notFound();
  return (
    <article className="prose max-w-none">
      <h1 className="text-lg font-bold mb-2">{post.title}</h1>
      <p className="text-xs opacity-70">{post.date}</p>
      <div className="mt-4 whitespace-pre-wrap">{post.body}</div>
    </article>
  );
}
