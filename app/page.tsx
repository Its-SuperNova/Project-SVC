import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"
import { Diamond, Shirt, Scissors, Palette, Layers, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-lavender-50 to-white py-20 md:py-28">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  Shree Venkateshwara Creations
                </h1>
                <p className="text-xl font-medium text-primary">Elevating Fashion with Precision and Style</p>
                <p className="text-muted-foreground max-w-md">
                  We are a premier provider of high-quality textile and garment accessories, offering innovative
                  solutions to elevate your fashion creations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/pastel-textile-accessories.png"
                  alt="Textile accessories showcase"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Highlight Section */}
        <section className="py-16 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Premium Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover our range of high-quality textile and garment accessories designed to enhance your fashion
                creations with precision and style.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Imported Accessories"
                description="Premium imported accessories sourced from the finest global manufacturers to enhance your garments."
                icon={Sparkles}
              />
              <ServiceCard
                title="Hotfix Stones & Studs"
                description="High-quality rhinestones and studs that add sparkle and elegance to your fashion creations."
                icon={Diamond}
              />
              <ServiceCard
                title="Special Knit Fabric"
                description="Specialized knit fabrics with unique textures and properties for distinctive garment designs."
                icon={Shirt}
              />
              <ServiceCard
                title="Chemical Lace Trim & Fabric"
                description="Intricate chemical lace trims and fabrics that add sophistication to your designs."
                icon={Scissors}
              />
              <ServiceCard
                title="Weld Print & Embossing"
                description="Advanced weld printing and embossing techniques to create textured and dimensional designs."
                icon={Palette}
              />
              <ServiceCard
                title="Heat Transfers & Vinyl"
                description="High-quality heat transfers and vinyl applications for durable and vibrant designs."
                icon={Layers}
              />
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/modern-textile-qc.png"
                  alt="Quality textile manufacturing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Why Choose Us</h2>
                <p className="text-muted-foreground">
                  At Shree Venkateshwara Creations, we pride ourselves on delivering excellence in every aspect of our
                  service.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="h-3 w-3 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Premium Quality</h3>
                      <p className="text-sm text-muted-foreground">
                        We source only the finest materials and accessories to ensure exceptional quality.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="h-3 w-3 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Reliability</h3>
                      <p className="text-sm text-muted-foreground">
                        Count on us for consistent quality and timely delivery for all your projects.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="h-3 w-3 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Innovation</h3>
                      <p className="text-sm text-muted-foreground">
                        We stay ahead of trends, bringing you the latest in textile and accessory innovations.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="h-3 w-3 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Competitive Pricing</h3>
                      <p className="text-sm text-muted-foreground">
                        Premium quality at competitive prices, providing excellent value for your investment.
                      </p>
                    </div>
                  </li>
                </ul>
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
            <Button asChild size="lg">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
