import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Diamond, Shirt, Scissors, Palette, Layers, Sparkles } from "lucide-react"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-lavender-50 to-white py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-muted-foreground">
                Discover our comprehensive range of premium textile and garment accessories designed to elevate your
                fashion creations.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid gap-12">
              {/* Imported Accessories */}
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold">Imported Accessories</h2>
                  <p className="text-muted-foreground">
                    We source premium accessories from around the world to bring you the finest quality and most
                    innovative designs. Our imported accessories include buttons, zippers, trims, and decorative
                    elements that add a touch of elegance and uniqueness to your garments.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>Premium quality buttons and fasteners</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>Decorative zippers and pulls</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>Unique trims and embellishments</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>Custom hardware and metal accessories</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/textile-details.png"
                    alt="Imported fashion accessories"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Hotfix Stones & Studs */}
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="order-2 md:order-1 relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image src="/shimmering-embellishments.png" alt="Hotfix stones and studs" fill className="object-cover" />
                </div>
                <div className="order-1 md:order-2 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Diamond className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold">Hotfix Stones & Studs</h2>
                  <p className="text-muted-foreground">
                    Add sparkle and elegance to your designs with our premium hotfix stones and studs. We offer a wide
                    range of rhinestones, crystals, and metal studs in various sizes, colors, and finishes to enhance
                    your garments with brilliance and texture.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>Premium quality rhinestones and crystals</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>Metal studs in various finishes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>Custom patterns and designs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>Application tools and services</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Special Knit Fabric */}
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Shirt className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold">Special Knit Fabric</h2>
                  <p className="text-muted-foreground">
                    Our specialized knit fabrics offer unique textures, stretch properties, and finishes for distinctive
                    garment designs. We provide a variety of knit fabrics suitable for different applications, from
                    athletic wear to high fashion.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>Performance knits with moisture-wicking properties</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>Textured knits for dimensional designs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>Specialty stretch fabrics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>Custom-dyed and printed knit fabrics</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800&query=special knit fabric textile close up"
                    alt="Special knit fabrics"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Chemical Lace Trim & Fabric */}
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="order-2 md:order-1 relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800&query=chemical lace trim fabric detail"
                    alt="Chemical lace trim and fabric"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-1 md:order-2 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Scissors className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold">Chemical Lace Trim & Fabric</h2>
                  <p className="text-muted-foreground">
                    Our intricate chemical lace trims and fabrics add sophistication and elegance to your designs.
                    Available in various patterns, widths, and colors, our chemical lace products are perfect for adding
                    delicate details to garments.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>Delicate floral and geometric patterns</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>Custom-colored lace trims</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>Embroidered chemical lace</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>Stretch lace for form-fitting designs</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Weld Print & Embossing */}
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Palette className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold">Weld Print & Embossing</h2>
                  <p className="text-muted-foreground">
                    Our advanced weld printing and embossing techniques create textured and dimensional designs on
                    fabrics. These techniques add visual interest and tactile elements to your garments, making them
                    stand out.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>3D textured designs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>Custom patterns and logos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>Durable and washable finishes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>Metallic and specialty finishes</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800&query=fabric embossing textile printing detail"
                    alt="Weld print and embossing"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Heat Transfers & Vinyl */}
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="order-2 md:order-1 relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800&query=heat transfer vinyl application on fabric"
                    alt="Heat transfers and vinyl"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-1 md:order-2 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Layers className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold">Heat Transfers & Vinyl</h2>
                  <p className="text-muted-foreground">
                    Our high-quality heat transfers and vinyl applications create durable and vibrant designs on
                    fabrics. Perfect for logos, graphics, and decorative elements, our heat transfer products ensure
                    long-lasting results.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>Custom graphic designs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>Specialty vinyl finishes (metallic, glitter, holographic)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>Stretchable vinyl for athletic wear</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>Eco-friendly options</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Fashion Creations?</h2>
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
