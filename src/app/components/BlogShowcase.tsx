import Image from "next/image";
import Link from "next/link";

type BlogShowcaseProps = {
  id?: string;
  className?: string;
};

const blogPosts = [
  {
    title: "Beautiful Italy. Let's travel!",
    excerpt:
      "Explore historic streets, coastlines, and culinary delights across Italy's iconic cities.",
    image: "/images/website.jpg",
    category: "Travel Diaries",
    date: "Oct 12, 2024",
    dateTime: "2024-10-12",
    readTime: "5 min",
    href: "#",
  },
  {
    title: "Enjoy the beauty of the dewata bali beach",
    excerpt:
      "Experience sunset views, serene shorelines, and local culture on Bali's famous beaches.",
    image: "/images/digital.jpg",
    category: "Experience",
    date: "Sep 30, 2024",
    dateTime: "2024-09-30",
    readTime: "4 min",
    href: "#",
  },
  {
    title: "Enjoy the beauty of horyuji temple japan",
    excerpt:
      "Step into ancient Japan with a visit to the UNESCO heritage temple complex in Nara.",
    image: "/images/brand.jpg",
    category: "Culture",
    date: "Aug 18, 2024",
    dateTime: "2024-08-18",
    readTime: "6 min",
    href: "#",
  },
  {
    title: "Romantic moments under Eiffel Tower",
    excerpt:
      "Capture unforgettable memories beneath Paris' most iconic landmark and skyline.",
    image: "/images/girl.jpg",
    category: "City Lights",
    date: "Jul 22, 2024",
    dateTime: "2024-07-22",
    readTime: "3 min",
    href: "#",
  },
];

export default function BlogShowcase({ id, className = "" }: BlogShowcaseProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-24 bg-gradient-to-b from-white via-white to-neutral-50 ${className}`}
    >
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[110vw] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#ff0000]/20 via-fuchsia-200/30 to-sky-200/30 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ff0000]/20 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff0000]/80 shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff0000]" />
            Journal
          </span>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Our Latest Stories
          </h2>
          <p className="mt-4 text-base text-neutral-500 leading-7">
            Discover perspectives from our strategists, designers, and
            technologists covering the journeys that inspire the experiences we
            craft.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/90 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-15px_rgba(15,23,42,0.16)]"
            >
              <div className="relative h-60 w-full overflow-hidden bg-neutral-200">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={index === 0}
                  quality={75}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-neutral-700 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff0000]" />
                  {post.category}
                </div>
              </div>
              <div className="flex flex-1 flex-col px-7 pb-8 pt-9">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
                  <time dateTime={post.dateTime}>{post.date}</time>
                  <span className="h-1 w-1 rounded-full bg-neutral-300" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-[#ff0000]">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-500">
                  {post.excerpt}
                </p>
                <Link
                  href={post.href}
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[#ff0000] transition-all duration-300 hover:gap-3"
                >
                  Read Article
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

