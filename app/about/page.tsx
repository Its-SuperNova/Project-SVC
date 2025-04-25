import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-6">About Us</h1>
              <p className="text-xl text-muted-foreground">
                Learn about our journey, vision, and commitment to excellence in the textile and garment accessory
                industry.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Our Story</h2>
                <p className="text-muted-foreground">
                  Founded in 2005, Shree Venkateshwara Creations began as a small family business with a passion for
                  quality textile accessories. Over the years, we have grown into a trusted name in the industry,
                  serving fashion designers, garment manufacturers, and textile companies across the country.
                </p>
                <p className="text-muted-foreground">
                  Our journey has been defined by a commitment to excellence, innovation, and customer satisfaction. We
                  continuously strive to source the finest materials and develop new techniques to meet the evolving
                  needs of the fashion industry.
                </p>
                <p className="text-muted-foreground">
                  Today, we are proud to be a leading provider of premium textile and garment accessories, known for our
                  quality, reliability, and exceptional service.
                </p>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image src="/textile-team-collaboration.png" alt="Our team at work" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 bg-slate-50">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading innovator and provider of premium textile and garment accessories, setting new
                  standards of excellence in the fashion industry through quality, creativity, and sustainable
                  practices.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower fashion creators with high-quality accessories and innovative solutions that enhance their
                  designs, while maintaining the highest standards of customer service, ethical business practices, and
                  environmental responsibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Quality</h3>
                <p className="text-muted-foreground">
                  We are committed to providing the highest quality products that meet or exceed industry standards and
                  customer expectations.
                </p>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously explore new techniques, materials, and designs to offer innovative solutions to our
                  customers.
                </p>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-muted-foreground">
                  We conduct our business with honesty, transparency, and ethical practices, building trust with our
                  customers and partners.
                </p>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
                <p className="text-muted-foreground">
                  We prioritize understanding and meeting our customers' needs, providing personalized service and
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gradient-to-b from-white to-lavender-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">
                  We source only the finest materials and accessories to ensure exceptional quality in every product.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 22v-5" />
                    <path d="M9 8V2" />
                    <path d="M15 8V2" />
                    <path d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path d="M12 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                <p className="text-muted-foreground">
                  Count on us for consistent quality and timely delivery for all your projects, every time.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM15.42 15.42l6.37-6.37a4.5 4.5 0 0 0-6.37-6.36L9.06 9.05" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We stay ahead of trends, bringing you the latest in textile and accessory innovations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 8c-2.8 0-5 2.2-5 5 0 2.8 2.2 5 5 5 2.8 0 5-2.2 5-5 0-2.8-2.2-5-5-5z" />
                    <path d="M19 8c-1.4 0-2.5 1.1-2.5 2.5 0 1.4 1.1 2.5 2.5 2.5 1.4 0 2.5-1.1 2.5-2.5 0-1.4-1.1-2.5-2.5-2.5z" />
                    <path d="M5 8c-1.4 0-2.5 1.1-2.5 2.5 0 1.4 1.1 2.5 2.5 2.5 1.4 0 2.5-1.1 2.5-2.5 0-1.4-1.1-2.5-2.5-2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
                <p className="text-muted-foreground">
                  Premium quality at competitive prices, providing excellent value for your investment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
