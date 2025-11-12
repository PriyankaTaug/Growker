'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image?: string;
  type: 'image' | 'featured';
  client?: string;
  year?: string;
  tags?: string[];
};

const allProjects: Project[] = [
  {
    id: 1,
    title: 'AR 3D Design Concept',
    category: 'AR/3D',
    description: 'AR creation with 3D design to solve problems with innovative visualization and immersive experiences.',
    type: 'featured',
    client: 'Tech Innovations',
    year: '2024',
    tags: ['AR', '3D Design', 'Innovation'],
  },
  {
    id: 2,
    title: 'Modern Web Design',
    category: 'Web Design',
    description: 'A sleek and responsive website design that combines aesthetics with functionality.',
    image: '/images/web.jpg',
    type: 'image',
    client: 'Digital Solutions',
    year: '2024',
    tags: ['Web Design', 'UI/UX', 'Responsive'],
  },
  {
    id: 3,
    title: 'Brand Identity Design',
    category: 'Branding',
    description: 'Complete brand identity system with logo, color palette, and visual guidelines.',
    image: '/images/brand.jpg',
    type: 'image',
    client: 'Creative Agency',
    year: '2024',
    tags: ['Branding', 'Identity', 'Logo Design'],
  },
  {
    id: 4,
    title: 'Mobile App Development',
    category: 'Mobile App',
    description: 'Native mobile application with intuitive interface and seamless user experience.',
    image: '/images/mobile.jpg',
    type: 'image',
    client: 'AppStart',
    year: '2024',
    tags: ['Mobile', 'iOS', 'Android'],
  },
  {
    id: 5,
    title: 'E-commerce Platform',
    category: 'Web Design',
    description: 'Full-featured e-commerce solution with modern design and optimized performance.',
    image: '/images/website.jpg',
    type: 'image',
    client: 'Retail Pro',
    year: '2023',
    tags: ['E-commerce', 'Web Development', 'Shopify'],
  },
  {
    id: 6,
    title: 'Digital Marketing Campaign',
    category: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategy with social media and content creation.',
    image: '/images/digital.jpg',
    type: 'image',
    client: 'Growth Co',
    year: '2024',
    tags: ['Marketing', 'Social Media', 'SEO'],
  },
  {
    id: 7,
    title: 'Corporate Branding',
    category: 'Branding',
    description: 'Complete rebranding project for a Fortune 500 company with new visual identity.',
    image: '/images/brand.jpg',
    type: 'image',
    client: 'Enterprise Corp',
    year: '2023',
    tags: ['Branding', 'Corporate', 'Rebranding'],
  },
  {
    id: 8,
    title: '3D Product Visualization',
    category: 'AR/3D',
    description: 'Photorealistic 3D product renders for marketing and e-commerce applications.',
    type: 'featured',
    client: 'Product Co',
    year: '2024',
    tags: ['3D', 'Visualization', 'Rendering'],
  },
  {
    id: 9,
    title: 'Healthcare Mobile App',
    category: 'Mobile App',
    description: 'Patient management app with telemedicine features and secure data handling.',
    image: '/images/mobile.jpg',
    type: 'image',
    client: 'HealthTech',
    year: '2024',
    tags: ['Healthcare', 'Mobile', 'Security'],
  },
];

const categories = ['All', 'AR/3D', 'Web Design', 'Branding', 'Mobile App', 'Digital Marketing'];

export default function WorksPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 text-white pt-24">
        <div className="absolute inset-0 bg-[url('/images/bg.png')] opacity-10 bg-cover bg-center" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Our <span style={{ color: '#ff0000' }}>Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto">
            Showcasing our portfolio of innovative designs and successful digital solutions
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#ff0000] text-white shadow-lg shadow-red-500/30 scale-105'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/works/${project.id}`}
                className="group relative overflow-hidden rounded-2xl bg-neutral-100 aspect-[4/5] transition-all duration-500 hover:shadow-2xl hover:shadow-neutral-900/20 hover:-translate-y-2"
              >
                {project.type === 'featured' ? (
                  <div
                    className="relative h-full flex items-center justify-center p-8"
                    style={{ backgroundColor: '#ff0000' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent" />
                    <div className="relative z-10 w-full h-full bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                      <div className="text-white text-center">
                        <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <span className="text-4xl font-bold">3D</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-6 m-4 rounded-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-[#ff0000] uppercase tracking-wider">
                          {project.category}
                        </span>
                        {project.year && (
                          <span className="text-xs text-neutral-500">• {project.year}</span>
                        )}
                      </div>
                      <h3 className="font-bold text-neutral-900 mb-2 text-lg">{project.title}</h3>
                      <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      {project.tags && (
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-1 bg-neutral-100 text-neutral-600 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="relative h-full overflow-hidden">
                      <Image
                        src={project.image!}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-[#ff0000] uppercase tracking-wider bg-white/90 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                        {project.year && (
                          <span className="text-xs text-white/90 bg-white/20 px-3 py-1 rounded-full">
                            {project.year}
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-white mb-2 text-xl">{project.title}</h3>
                      <p className="text-sm text-white/90 mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      {project.tags && (
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-neutral-900 shadow-lg">
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
                      </div>
                    </div>
                  </>
                )}
              </Link>
            ))}
          </div>

          {/* Results Count */}
          <div className="mt-16 text-center">
            <p className="text-neutral-600">
              Showing <span className="font-semibold text-neutral-900">{filteredProjects.length}</span>{' '}
              {filteredProjects.length === 1 ? 'project' : 'projects'}
              {selectedCategory !== 'All' && (
                <>
                  {' '}
                  in <span className="font-semibold text-[#ff0000]">{selectedCategory}</span>
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Let's collaborate and bring your vision to life with our expertise and creative solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 text-sm font-medium text-white rounded-lg transition-all hover:opacity-90 hover:shadow-lg hover:shadow-red-500/30"
              style={{ backgroundColor: '#ff0000' }}
            >
              Start New Project
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 text-sm font-medium text-neutral-900 rounded-lg border-2 border-neutral-300 hover:border-neutral-400 transition-all"
            >
              View Our Services
            </Link>
          </div>
        </div>
    </section>
    </>
  );
}
