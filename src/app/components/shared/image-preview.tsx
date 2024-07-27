import Image from "next/image";

export default function ImagePreview({
  src,
  alt = src,
}: {
  src: string;
  alt?: string;
}) {
  return (
    <div className="relative w-16 h-16 shadow-lg">
      <Image
        src={src}
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        alt={alt}
        quality={100}
        placeholder="blur"
        sizes="100%"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4DwABAQEASQEYiK3/4gAAAABJRU5ErkJggg=="
      />
    </div>
  );
}
