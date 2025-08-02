export function AboutSection() {
  const brands = ["HP", "Dell", "Apple", "Lenovo", "ASUS", "Acer"];

  return (
    <section id="about" className="py-16 sm:py-24 bg-secondary">
      <div className="container max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
          Your Trusted Tech Partner
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          ChromeWorld Central is a trusted computer store offering a wide range of top brands. We are committed to providing the best technology solutions to our customers, from high-performance desktops to ultra-portable laptops.
        </p>
        <div className="mt-12">
          <h3 className="text-base font-semibold text-foreground tracking-wider uppercase">
            Featuring Top Brands
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand) => (
              <div key={brand} className="col-span-1 flex justify-center items-center p-4 bg-background/50 rounded-lg h-20 transition-colors hover:bg-background">
                <span className="text-2xl font-semibold text-muted-foreground">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
