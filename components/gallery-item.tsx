import Image from "next/image"

interface GalleryItemProps {
  src: string
  alt: string
  category: string
}

export function GalleryItem({ src, alt, category }: GalleryItemProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={500}
        height={400}
        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute bottom-0 w-full p-4">
          <span className="inline-block rounded-full bg-primary/80 px-3 py-1 text-xs font-medium text-white">
            {category}
          </span>
          <h3 className="mt-2 text-lg font-medium text-white">{alt}</h3>
        </div>
      </div>
    </div>
  )
}
