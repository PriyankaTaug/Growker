'use client';

import { useState } from 'react';
import Link from 'next/link';

type Job = {
  id: number;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
};

const jobs: Job[] = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    description: 'We are looking for an experienced frontend developer to join our team and help build amazing digital experiences.',
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    department: 'Design',
    type: 'Full-time',
    location: 'Hybrid',
    description: 'Create beautiful and intuitive user interfaces that delight users and drive business results.',
  },
  {
    id: 3,
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    type: 'Full-time',
    location: 'Remote',
    description: 'Drive growth through innovative digital marketing strategies and campaigns.',
  },
  {
    id: 4,
    title: 'Product Manager',
    department: 'Product',
    type: 'Full-time',
    location: 'Hybrid',
    description: 'Lead product development initiatives and work with cross-functional teams to deliver exceptional products.',
  },
  {
    id: 5,
    title: 'Backend Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    description: 'Build scalable and robust backend systems that power our applications and services.',
  },
  {
    id: 6,
    title: 'Brand Designer',
    department: 'Design',
    type: 'Full-time',
    location: 'On-site',
    description: 'Craft compelling brand identities and visual systems that resonate with audiences.',
  },
];

const benefits = [
  {
    icon: '💰',
    title: 'Competitive Salary',
    description: 'We offer competitive compensation packages that reflect your skills and experience.',
  },
  {
    icon: '🏥',
    title: 'Health Insurance',
    description: 'Comprehensive health, dental, and vision insurance for you and your family.',
  },
  {
    icon: '🏖️',
    title: 'Flexible Time Off',
    description: 'Take the time you need to recharge with our flexible vacation policy.',
  },
  {
    icon: '💻',
    title: 'Remote Work',
    description: 'Work from anywhere with our flexible remote work options.',
  },
  {
    icon: '📚',
    title: 'Learning & Development',
    description: 'Continuous learning opportunities with courses, conferences, and workshops.',
  },
  {
    icon: '🎯',
    title: 'Career Growth',
    description: 'Clear career paths and opportunities for advancement within the company.',
  },
];

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const departments = ['All', 'Engineering', 'Design', 'Marketing', 'Product'];
  
  const filteredJobs =
    selectedDepartment === 'All'
      ? jobs
      : jobs.filter((job) => job.department === selectedDepartment);

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
              Join Our Team
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-white to-neutral-300 bg-clip-text text-transparent">
            Build Your <span className="bg-gradient-to-r from-[#ff0000] to-red-600 bg-clip-text text-transparent">Career</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Join a team of creative professionals and work on exciting projects that make a difference.
          </p>
          <Link
            href="#open-positions"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#ff0000]/30"
            style={{ backgroundColor: '#ff0000' }}
          >
            View Open Positions
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
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Why Join <span style={{ color: '#ff0000' }}>Growker</span>?
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              We're building a culture of innovation, creativity, and excellence. Join us and be part of something special.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 border border-neutral-200/50 hover:border-[#ff0000]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#ff0000]/5"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#ff0000] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20 bg-gradient-to-b from-neutral-50/50 to-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Open <span style={{ color: '#ff0000' }}>Positions</span>
            </h2>
            <p className="text-lg text-neutral-600">
              Explore our current job openings and find the perfect role for you.
            </p>
          </div>

          {/* Department Filters */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedDepartment === dept
                    ? 'bg-[#ff0000] text-white shadow-lg shadow-red-500/30 scale-105'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="group relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-neutral-200/50 hover:border-[#ff0000]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#ff0000]/5 hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-[#ff0000] transition-colors">
                        {job.title}
                      </h3>
                      <span className="px-3 py-1 text-xs font-semibold text-[#ff0000] bg-[#ff0000]/10 rounded-full">
                        {job.department}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-4">
                      <span className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20.25 14.15v4.25c0 .414-.336.75-.75.75h-4.5a.75.75 0 01-.75-.75v-4.25m16 0v-4.25A2.25 2.25 0 0019.5 8h-15a2.25 2.25 0 00-2.25 2.25v4.25m16 0V9.75a2.25 2.25 0 00-2.25-2.25h-15a2.25 2.25 0 00-2.25 2.25v4.5m16 0V12a2.25 2.25 0 00-2.25-2.25h-15a2.25 2.25 0 00-2.25 2.25v2.25m16 0h-2.25M3.75 14.15h2.25m-2.25 0v-4.25m0 0H1.5m1.5 0h3m-3 0V9.75m0 0H1.5m1.5 0h3m-3 0v-1.5m0 0H1.5m1.5 0h3"
                          />
                        </svg>
                        {job.type}
                      </span>
                      <span className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                        {job.location}
                      </span>
                    </div>
                    <p className="text-neutral-600 leading-relaxed">{job.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <Link
                      href={`/careers/${job.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#ff0000]/30"
                      style={{ backgroundColor: '#ff0000' }}
                    >
                      Apply Now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600 text-lg">
                No positions available in this department at the moment.
              </p>
              <p className="text-neutral-500 mt-2">
                Check back later or subscribe to our newsletter for updates.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Our <span style={{ color: '#ff0000' }}>Process</span>
            </h2>
            <p className="text-lg text-neutral-600">
              Simple and transparent application process designed to find the best fit for both you and us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Apply', description: 'Submit your application and portfolio' },
              { step: '02', title: 'Review', description: 'Our team reviews your application' },
              { step: '03', title: 'Interview', description: 'Meet with the team and discuss fit' },
              { step: '04', title: 'Offer', description: 'Receive an offer and join the team' },
            ].map((process, index) => (
              <div
                key={index}
                className="relative text-center group"
              >
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#ff0000] to-red-600 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#ff0000]/20">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{process.title}</h3>
                <p className="text-neutral-600">{process.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#ff0000] to-transparent transform translate-x-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Don't See a Role That Fits?
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#ff0000]/30"
            style={{ backgroundColor: '#ff0000' }}
          >
            Get in Touch
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
