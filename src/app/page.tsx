import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });
  return (
    <main className="flex flex-col gap-10">
      <h1 className="text-center text-3xl font-bold">Image Gallery</h1>
      <div className="flex items-center justify-center gap-10 flex-wrap">
        {images.map((image) => (
          <div key={image.url} className="flex flex-col items-center gap-1">
            <h2>{image.name}</h2>
            <Image
              width={300}
              height={300}
              key={image.id}
              src={image.url}
              alt={image.name}
              className="h-52 rounded-md object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
