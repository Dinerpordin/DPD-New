export const dynamic = 'force-static';

export default function Home(){
  return (
    <div className="grid gap-4">
      <h1 className="text-lg font-bold">Welcome to Dinerpordin</h1>
      <p className="opacity-80">Quick links to our most used tools.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[{t:'News',h:'/news'},{t:'Gallery',h:'/gallery'},{t:'Economy',h:'/economy'},{t:'Local',h:'/local'},{t:'Health AI',h:'/health'},{t:'AI Chat',h:'/chat'},{t:'Flight',h:'/flight'},{t:'Games',h:'/games'},{t:'Opinion',h:'/opinion'}].map(x=> (
          <a key={x.h} href={x.h} className="rounded-2xl border p-4 bg-white shadow-sm hover:shadow transition">
            <div className="font-semibold">{x.t}</div>
            <div className="text-sm opacity-70 mt-1">Open {x.t}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
