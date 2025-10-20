export const dynamic = 'force-static';

export default function GalleryPage() {
  return (
    <div className="grid gap-4">
      <section>
        <h2 className="text-lg font-bold mb-2">Trending Videos</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'https://www.youtube.com/embed?listType=playlist&list=PLrEnWoR732-BHrPp_Pm8_VleD68f9s14-',
            'https://www.youtube.com/embed/dQw4w9WgXcQ',
            'https://www.youtube.com/embed/oHg5SJYRHA0',
          ].map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border bg-white">
              <iframe src={src} title={`yt-${i}`} width="100%" height="220" allowFullScreen />
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-lg font-bold mb-2">Photo Highlights</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["https://picsum.photos/600/400?1","https://picsum.photos/600/400?2","https://picsum.photos/600/400?3"].map((src,i)=>(
            <a key={i} href={src} target="_blank" className="block rounded-2xl overflow-hidden border bg-white">
              <img src={src} alt="highlight" width={600} height={400} />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
