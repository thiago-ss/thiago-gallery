import Image from "next/image";
import { db } from "~/server/db";

const mockData = [
  "https://utfs.io/f/62ea6c44-9114-4cb1-8ad8-7cb089367ca8-qr2g2l.59.25.jpeg",
  "https://utfs.io/f/38ad3a21-0117-4263-8a69-b5b65a575ab7-qplv5p.35.34.jpeg",
  "https://utfs.io/f/dfaadbe6-78a4-4247-9e01-86dd0513bbe3-1jb3ov.jpg",
];

const mockImages = mockData.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  return (
    <main>
      <div className="flex flex-col gap-10 justify-center items-center">
        <h1 className="text-3xl font-bold text-center">Image Gallery</h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col gap-2">
              <h2>{post.name}</h2>
              <p>{post.createdAt.toLocaleDateString()}</p>
            </div>  
          ))}
          {mockImages.map((image) => (
            <Image
              width={300}
              height={300}
              key={image.id}
              src={image.url}
              alt={`Image ${image.id}`}
              className=" object-cover rounded-md"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
