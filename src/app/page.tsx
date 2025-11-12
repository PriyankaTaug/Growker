'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamically import heavy components with loading states
const ProjectsCarousel = dynamic(() => import("./components/ProjectsCarousel"), {
  loading: () => <div className="w-full h-96 bg-neutral-100 animate-pulse rounded-2xl" />,
  ssr: false,
});

const BlogShowcase = dynamic(() => import("./components/BlogShowcase"), {
  loading: () => <div className="w-full h-96 bg-neutral-50 animate-pulse rounded-2xl" />,
});

export default function Home() {
  // Handle smooth scroll when page loads with hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    }
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="hero-img" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="text-zinc-300 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight">
            Future Begins Here
          </h1>
          <a
            href="/works"
            className="mt-10 inline-flex items-center justify-center rounded border px-6 py-3 text-sm tracking-wide"
            style={{ borderColor: '#ff0000', color: '#ff0000' }}
          >
            View Our Works
          </a>
        </div>
      </section>

      {/* About Us / Core Features */}
      <section id="about" className="py-32 bg-white text-neutral-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-6">
              What makes us different
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              We combine creative excellence with strategic thinking to deliver digital solutions that drive real results for your business.
            </p>
          </div>

          <div className="about-features-grid">
            <div className="column gap-6">
              <article className="feature-card">
                <div className="flex gap-5">
                  <span className="icon">C</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">Creative excellence</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Thoughtful brand strategies, timeless designs, and versatile visual language that resonates with your audience.
                    </p>
                  </div>
                </div>
              </article>

              <article className="feature-card">
                <div className="flex gap-5">
                  <span className="icon">S</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">Strategic approach</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Data-driven insights and innovative solutions tailored to your unique business goals and market position.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <figure className="about-features-image">
              <Image
                src="/images/girl.jpg"
                alt="Growker team member"
                width={360}
                height={560}
                className="about-features-img"
                loading="lazy"
                quality={75}
              />
            </figure>

            <div className="column gap-6">
              <article className="feature-card">
                <div className="flex gap-5">
                  <span className="icon">T</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">Expert team</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Handpicked professionals with world-class technical and communication skills, ready to bring your vision to life.
                    </p>
                  </div>
                </div>
              </article>

              <article className="feature-card">
                <div className="flex gap-5">
                  <span className="icon">R</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">Results-driven</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      We measure success by the impact we create—increased engagement, growth, and meaningful connections with your customers.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 bg-neutral-50 text-neutral-900">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column (light theme like reference) */}
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
              Build your dream with us.
            </h2>
            <p className="mt-6 text-neutral-600 leading-7">
              Transform your vision into reality with our comprehensive digital solutions. From branding to development, we deliver excellence at every step.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="/services"
                className="inline-flex items-center gap-3 rounded-full bg-black text-white px-6 py-3 text-sm font-medium shadow-sm hover:opacity-90 transition-opacity"
              >
                View All Services
                <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-white/20 ring-1 ring-white/30">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right mosaic (pastel cards) */}
          <div className="services-grid">
            {/* Mike card */}
            <article className="services-photo-card">
              <figure>
                <Image
                  src="/images/mobile.jpg"
                  alt="Mobile App Development"
                  width={240}
                  height={240}
                  className="services-photo-img"
                  loading="lazy"
                  quality={75}
                />
                <div className="services-tag">
                  <span className="role">Mobile App Development</span>
                 
                </div>
              </figure>
            </article>

            {/* Branding & Design */}
            <article className="services-info-card services-info-card--green">
              <h3>Branding & Designing</h3>
              <p>
                Craft compelling brand identities with thoughtful strategies, timeless logos, and versatile visual language that resonates with your audience and drives engagement.
              </p>
            </article>

            {/* Latisha card */}
            <article className="services-photo-card">
              <figure>
                <Image
                  src="/images/website.jpg"
                  alt="Website Development"
                  width={240}
                  height={240}
                  className="services-photo-img"
                  loading="lazy"
                  quality={75}
                />
                <div className="services-tag">
                  <span className="role">Website Development</span>
                 
                </div>
              </figure>
            </article>

            {/* Digital Marketing with image overlay */}
            <article className="services-info-card services-card-span-2 services-info-card--overlay">
              <div className="bg-img" aria-hidden="true">
                <Image 
                  src="/images/digital.jpg" 
                  alt="" 
                  fill
                  className="object-cover"
                  loading="lazy"
                  quality={75}
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-white">Digital Marketing</h3>
                <p className="text-white/90">
                  Drive growth with data-driven strategies, innovative campaigns, and comprehensive digital solutions that connect, engage, and convert your target audience.
                </p>
              </div>
            </article>
            

            {/* Asger card */}
            <article className="services-photo-card">
              <figure>
                <Image
                  src="/images/web.jpg"
                  alt="Digital Marketing"
                  width={240}
                  height={240}
                  className="services-photo-img"
                  loading="lazy"
                  quality={75}
                />
                <div className="services-tag">
                  <span className="role">Digital Marketing</span>
                 
                </div>
              </figure>
            </article>

            {/* Assurance card */}
            {/* <article className="services-info-card services-info-card--orange">
              <h3>Rest assured</h3>
              <p>
                There are no crazy fees or legal hassle to worry about.
              </p>
            </article> */}
          </div>
        </div>
      </section>

      {/* Projects We have Completed Section */}
      <section id="works" className="py-24 bg-white text-neutral-900">
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

          {/* Project Cards Carousel */}
          <div className="w-full">
            <Suspense fallback={<div className="w-full h-96 bg-neutral-100 animate-pulse rounded-2xl" />}>
              <ProjectsCarousel />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Project Impact / Testimonials Section */}
      <section className="py-24 bg-neutral-50 text-neutral-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              What Our <span style={{ color: "#ff0000" }}>Projects</span> Achieve
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Our projects deliver measurable results and create lasting impact for our clients.
            </p>
          </div>

          {/* Project Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: "#ff0000" }}>
                200+
              </div>
              <div className="text-sm md:text-base text-neutral-600 font-medium">
                Projects Completed
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: "#ff0000" }}>
                150+
              </div>
              <div className="text-sm md:text-base text-neutral-600 font-medium">
                Happy Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: "#ff0000" }}>
                98%
              </div>
              <div className="text-sm md:text-base text-neutral-600 font-medium">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: "#ff0000" }}>
                50+
              </div>
              <div className="text-sm md:text-base text-neutral-600 font-medium">
                Awards Won
              </div>
            </div>
          </div>

          {/* Project Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    style={{ color: "#ff0000" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                "The AR 3D Design Concept project exceeded our expectations. The innovative approach and attention to detail transformed our product presentation."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center font-semibold text-neutral-700">
                  JD
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">John Davis</div>
                  <div className="text-sm text-neutral-600">CEO, Tech Innovations</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    style={{ color: "#ff0000" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                "Their mobile app development project helped us reach 100K+ users in just 3 months. The team's expertise is unmatched."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center font-semibold text-neutral-700">
                  SM
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">Sarah Martinez</div>
                  <div className="text-sm text-neutral-600">Founder, AppStart</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    style={{ color: "#ff0000" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                "The website redesign project increased our conversion rate by 250%. Outstanding work and professional service throughout."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center font-semibold text-neutral-700">
                  RK
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">Robert Kim</div>
                  <div className="text-sm text-neutral-600">Director, Digital Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="w-full h-96 bg-neutral-50 animate-pulse rounded-2xl" />}>
        <BlogShowcase />
      </Suspense>
    </>
  );
}
