import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GalleryItem } from "@/components/gallery-item"

export default function GalleryPage() {
  // Sample gallery items - in a real application, these would come from a database or CMS
  const galleryItems = [
    {
      src: "/placeholder.svg?height=600&width=800&query=rhinestone embellished fabric close up",
      alt: "Rhinestone Embellishment",
      category: "Hotfix Stones",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=decorative buttons and zippers for fashion",
      alt: "Decorative Accessories",
      category: "Imported Accessories",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=special knit fabric texture close up",
      alt: "Special Knit Fabric",
      category: "Fabrics",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=chemical lace trim detail on garment",
      alt: "Chemical Lace Detail",
      category: "Lace Trim",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=embossed pattern on textile",
      alt: "Embossed Pattern",
      category: "Weld Print",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=heat transfer vinyl design on t-shirt",
      alt: "Heat Transfer Design",
      category: "Heat Transfers",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=metallic studs on leather accessory",
      alt: "Metallic Studs",
      category: "Studs",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=colorful fabric trims and ribbons",
      alt: "Fabric Trims",
      category: "Accessories",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=sequin embellished fabric",
      alt: "Sequin Embellishment",
      category: "Embellishments",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=custom printed fabric pattern",
      alt: "Custom Print",
      category: "Printing",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=lace applique on wedding dress",
      alt: "Lace Applique",
      category: "Lace",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=beaded embellishment on evening gown",
      alt: "Beaded Embellishment",
      category: "Embellishments",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-6">Our Gallery</h1>
              <p className="text-xl text-muted-foreground">
                Explore our collection of premium textile and garment accessories that showcase our quality and
                craftsmanship.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <GalleryItem key={index} src={item.src} alt={item.alt} category={item.category} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in Our Products?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Contact us today to discuss how our premium textile and garment accessories can enhance your designs.
            </p>
            <a
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Contact Us Today
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
