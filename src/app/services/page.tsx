import Image from "next/image";
import Link from "next/link";
import BlogShowcase from "../components/BlogShowcase";

export default function ServicesPage() {
  return (
    <>
      <section className="min-h-[60vh] px-6 py-32 mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold">Services</h1>
        <p className="mt-4 text-zinc-400">Services placeholder.</p>
      </section>

      {/* Projects We have Completed Section */}
      <section className="py-24 bg-white text-neutral-900">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header with title and buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 gap-6">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Projects We have{" "}
              <span style={{ color: "#ff0000" }}>Completed</span>
            </h2>
            <div className="flex items-center gap-4">
              <button className="text-neutral-900 hover:opacity-70 transition-opacity text-sm font-medium">
                Start New Project
              </button>
              <Link
                href="/works"
                className="px-6 py-3 text-sm font-medium text-white rounded transition-all hover:opacity-90"
                style={{ backgroundColor: "#ff0000" }}
              >
                View All Projects
              </Link>
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - AR 3D Design Concept */}
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/5]"
              style={{ backgroundColor: "#ff0000" }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full h-full bg-white/10 rounded-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-4xl">3D</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4 m-4 rounded-xl">
                <h3 className="font-bold text-neutral-900 mb-1">
                  • AR 3D Design Concept
                </h3>
                <p className="text-sm text-neutral-600">
                  AR creation with 3D design to solve problems with.
                </p>
              </div>
              <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center text-neutral-900 hover:opacity-80 transition-opacity">
                ×
              </button>
            </div>

            {/* Card 2 - Design/UI Project */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-100">
              <Image
                src="/images/web.jpg"
                alt="Design Project"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
                loading="lazy"
                quality={75}
              />
            </div>

            {/* Card 3 - Creative Design */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-100">
              <Image
                src="/images/brand.jpg"
                alt="Creative Design"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
                loading="lazy"
                quality={75}
              />
            </div>

            {/* Card 4 - Mobile App */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-100">
              <Image
                src="/images/mobile.jpg"
                alt="Mobile App"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
                loading="lazy"
                quality={75}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogShowcase id="blog" />
    </>
  );
}
