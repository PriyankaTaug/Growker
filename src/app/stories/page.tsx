'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Story = {
  id: number;
  title: string;
  client: string;
  category: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  featured?: boolean;
};

const stories: Story[] = [
  {
    id: 1,
    title: 'Transforming a Startup into a Market Leader',
    client: 'Tech Innovations',
    category: 'Success Story',
    excerpt: 'How we helped a tech startup scale from 0 to 100K users in just 6 months through strategic branding and digital marketing.',
    image: '/images/web.jpg',
    date: 'Dec 15, 2024',
    readTime: '8 min',
    featured: true,
  },
  {
    id: 2,
    title: 'Rebranding a Fortune 500 Company',
    client: 'Enterprise Corp',
    category: 'Case Study',
    excerpt: 'A complete brand transformation that modernized a legacy company and increased brand recognition by 300%.',
    image: '/images/brand.jpg',
    date: 'Nov 28, 2024',
    readTime: '10 min',
  },
  {
    id: 3,
    title: 'Building a Healthcare App That Saves Lives',
    client: 'HealthTech',
    category: 'Impact Story',
    excerpt: 'Developing a telemedicine platform that connected patients with doctors during critical times, serving over 50K users.',
    image: '/images/mobile.jpg',
    date: 'Nov 12, 2024',
    readTime: '7 min',
  },
  {
    id: 4,
    title: 'E-commerce Platform That Tripled Sales',
    client: 'Retail Pro',
    category: 'Success Story',
    excerpt: 'Redesigning an e-commerce platform with improved UX that resulted in 300% increase in conversion rates.',
    image: '/images/website.jpg',
    date: 'Oct 30, 2024',
    readTime: '6 min',
  },
  {
    id: 5,
    title: 'AR Experience That Wowed Customers',
    client: 'Product Co',
    category: 'Innovation',
    excerpt: 'Creating an immersive AR shopping experience that increased customer engagement by 250% and boosted sales.',
    image: '/images/digital.jpg',
    date: 'Oct 18, 2024',
    readTime: '9 min',
  },
  {
    id: 6,
    title: 'Digital Marketing Campaign That Went Viral',
    client: 'Growth Co',
    category: 'Case Study',
    excerpt: 'A creative social media campaign that reached 5M+ people and generated 10K+ leads in just one month.',
    image: '/images/girl.jpg',
    date: 'Sep 25, 2024',
    readTime: '5 min',
  },
];

const categories = ['All', 'Success Story', 'Case Study', 'Impact Story', 'Innovation'];

export default function StoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredStories =
    selectedCategory === 'All'
      ? stories
      : stories.filter((story) => story.category === selectedCategory);

  const featuredStory = stories.find((story) => story.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white pt-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff0000]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff0000]/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="absolute inset-0 bg-[url('/images/bg.png')] opacity-5 bg-cover bg-center" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-[#ff0000] uppercase tracking-wider px-4 py-2 rounded-full bg-[#ff0000]/10 backdrop-blur-sm border border-[#ff0000]/20">
              Client Stories
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-white to-neutral-300 bg-clip-text text-transparent">
            Our <span className="bg-gradient-to-r from-[#ff0000] to-red-600 bg-clip-text text-transparent">Stories</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Real stories from real clients. Discover how we've helped businesses transform and achieve remarkable results.
          </p>
        </div>
      </section>

      {/* Featured Story */}
      {featuredStory && (
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-8">
              <span className="text-sm font-semibold text-[#ff0000] uppercase tracking-wider">Featured Story</span>
            </div>
            <Link
              href={`/stories/${featuredStory.id}`}
              className="group relative block overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 text-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-96 md:h-auto min-h-[400px] overflow-hidden">
                  <Image
                    src={featuredStory.image}
                    alt={featuredStory.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={75}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 text-xs font-semibold text-[#ff0000] bg-[#ff0000]/10 rounded-full uppercase tracking-wider">
                      {featuredStory.category}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 group-hover:text-[#ff0000] transition-colors">
                    {featuredStory.title}
                  </h2>
                  <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
                    {featuredStory.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-neutral-400 mb-6">
                    <span className="font-medium text-white">{featuredStory.client}</span>
                    <span>•</span>
                    <time>{featuredStory.date}</time>
                    <span>•</span>
                    <span>{featuredStory.readTime} read</span>
                  </div>
                  <div className="inline-flex items-center gap-2 text-[#ff0000] font-semibold group-hover:gap-4 transition-all">
                    Read Full Story
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 group-hover:translate-x-2 transition-transform"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All Stories Section */}
      <section className="py-20 bg-gradient-to-b from-white to-neutral-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              All <span style={{ color: '#ff0000' }}>Stories</span>
            </h2>
            <p className="text-lg text-neutral-600">
              Explore our collection of success stories, case studies, and client transformations.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#ff0000] text-white shadow-lg shadow-red-500/30 scale-105'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories
              .filter((story) => !story.featured)
              .map((story) => (
                <Link
                  key={story.id}
                  href={`/stories/${story.id}`}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-neutral-200/50 hover:border-[#ff0000]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#ff0000]/5 hover:-translate-y-2"
                >
                  <div className="relative h-64 w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={75}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-semibold text-white bg-[#ff0000] rounded-full">
                        {story.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
                      <span className="font-medium text-neutral-700">{story.client}</span>
                      <span>•</span>
                      <time>{story.date}</time>
                      <span>•</span>
                      <span>{story.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#ff0000] transition-colors line-clamp-2">
                      {story.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {story.excerpt}
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff0000] group-hover:gap-3 transition-all">
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          {filteredStories.filter((story) => !story.featured).length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600 text-lg">
                No stories available in this category at the moment.
              </p>
              <p className="text-neutral-500 mt-2">
                Check back later for new stories.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Have a Story to Share?
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            If you're a client with an amazing success story, we'd love to feature it. Get in touch and let's share your journey.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#ff0000]/30"
            style={{ backgroundColor: '#ff0000' }}
          >
            Share Your Story
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
