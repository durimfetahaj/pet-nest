import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Banner */}
      <section className="relative">
        <div className="container px-4 py-12 md:px-6 md:py-24 lg:py-32">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Everything Your Pet Needs in One Place
              </h1>
              <p className="max-w-150 text-muted-foreground md:text-xl">
                Premium quality products for your furry friends. From nutritious
                food to comfortable accessories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="font-medium" asChild>
                  <Link href="/shop">Shop Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="font-medium">
                  View Deals
                </Button>
              </div>
            </div>
            <div className="relative h-75 sm:h-100 lg:h-125 rounded-xl overflow-hidden">
              <Image
                src="/images/hero.png"
                alt="Happy dog"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* <ProductCategories />

      <FeaturedProducts />

      <WhyChoose />

      <Testimonials />

      <Newsletter /> */}
    </main>
  );
}
