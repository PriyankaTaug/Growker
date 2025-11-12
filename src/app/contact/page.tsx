'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white pt-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff0000]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff0000]/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff0000]/5 rounded-full blur-3xl" />
        </div>
        
        <div className="absolute inset-0 bg-[url('/images/bg.png')] opacity-5 bg-cover bg-center" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-[#ff0000] uppercase tracking-wider px-4 py-2 rounded-full bg-[#ff0000]/10 backdrop-blur-sm border border-[#ff0000]/20">
              Get In Touch
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-white to-neutral-300 bg-clip-text text-transparent">
            Let's <span className="bg-gradient-to-r from-[#ff0000] to-red-600 bg-clip-text text-transparent">Talk</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Get in touch and let's create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 bg-gradient-to-b from-white via-neutral-50/50 to-white">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information - Modern Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-neutral-200/50 shadow-xl shadow-neutral-900/5">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-3">
                      Get in Touch
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#ff0000] to-red-600 rounded-full" />
                  </div>
                  
                  <p className="text-neutral-600 mb-8 leading-relaxed">
                    We're here to help and answer any questions you might have. We look forward to hearing from you.
                  </p>

                  {/* Contact Methods */}
                  <div className="space-y-6 mb-8">
                    <a
                      href="mailto:hello@growker.com"
                      className="group flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200/50 hover:border-[#ff0000]/30 hover:shadow-lg hover:shadow-[#ff0000]/5 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff0000] to-red-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#ff0000]/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-6 h-6 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-900 mb-1 group-hover:text-[#ff0000] transition-colors">
                          Email
                        </h3>
                        <p className="text-neutral-600 group-hover:text-neutral-900 transition-colors">
                          hello@growker.com
                        </p>
                      </div>
                    </a>

                    <a
                      href="tel:+1234567890"
                      className="group flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200/50 hover:border-[#ff0000]/30 hover:shadow-lg hover:shadow-[#ff0000]/5 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff0000] to-red-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#ff0000]/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-6 h-6 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-900 mb-1 group-hover:text-[#ff0000] transition-colors">
                          Phone
                        </h3>
                        <p className="text-neutral-600 group-hover:text-neutral-900 transition-colors">
                          +1 (234) 567-890
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200/50">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff0000] to-red-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#ff0000]/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-6 h-6 text-white"
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
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-900 mb-1">Location</h3>
                        <p className="text-neutral-600">
                          123 Innovation Street<br />
                          Creative City, CC 12345
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-4">Follow Us</h3>
                    <div className="flex gap-3">
                      {['LinkedIn', 'Twitter', 'Instagram', 'Facebook'].map((social, index) => (
                        <a
                          key={social}
                          href="#"
                          className="group relative w-12 h-12 rounded-xl bg-gradient-to-br from-neutral-100 to-white border border-neutral-200 hover:border-[#ff0000]/30 hover:bg-gradient-to-br hover:from-[#ff0000] hover:to-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#ff0000]/20"
                          aria-label={social}
                        >
                          <span className="text-sm font-medium text-neutral-700 group-hover:text-white transition-colors group-hover:scale-110 inline-block">
                            {social[0]}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Modern Glassmorphism */}
            <div className="lg:col-span-2">
              <div className="relative">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff0000]/5 via-transparent to-red-600/5 rounded-3xl blur-3xl" />
                
                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-neutral-200/50 shadow-2xl shadow-neutral-900/5">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-3">
                      Send us a Message
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#ff0000] to-red-600 rounded-full" />
                    <p className="text-neutral-600 mt-4">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label
                          htmlFor="name"
                          className={`block text-sm font-medium mb-2 transition-colors ${
                            focusedField === 'name' ? 'text-[#ff0000]' : 'text-neutral-900'
                          }`}
                        >
                          Full Name <span className="text-[#ff0000]">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="w-full px-4 py-3.5 rounded-xl border-2 border-neutral-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:border-[#ff0000] focus:bg-white focus:ring-4 focus:ring-[#ff0000]/10 transition-all duration-300 placeholder:text-neutral-400"
                            placeholder="John Doe"
                          />
                          {focusedField === 'name' && (
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff0000]/5 to-transparent pointer-events-none" />
                          )}
                        </div>
                      </div>
                      <div className="relative">
                        <label
                          htmlFor="email"
                          className={`block text-sm font-medium mb-2 transition-colors ${
                            focusedField === 'email' ? 'text-[#ff0000]' : 'text-neutral-900'
                          }`}
                        >
                          Email Address <span className="text-[#ff0000]">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="w-full px-4 py-3.5 rounded-xl border-2 border-neutral-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:border-[#ff0000] focus:bg-white focus:ring-4 focus:ring-[#ff0000]/10 transition-all duration-300 placeholder:text-neutral-400"
                            placeholder="john@example.com"
                          />
                          {focusedField === 'email' && (
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff0000]/5 to-transparent pointer-events-none" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Phone and Company Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label
                          htmlFor="phone"
                          className={`block text-sm font-medium mb-2 transition-colors ${
                            focusedField === 'phone' ? 'text-[#ff0000]' : 'text-neutral-900'
                          }`}
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3.5 rounded-xl border-2 border-neutral-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:border-[#ff0000] focus:bg-white focus:ring-4 focus:ring-[#ff0000]/10 transition-all duration-300 placeholder:text-neutral-400"
                          placeholder="+1 (234) 567-890"
                        />
                      </div>
                      <div className="relative">
                        <label
                          htmlFor="company"
                          className={`block text-sm font-medium mb-2 transition-colors ${
                            focusedField === 'company' ? 'text-[#ff0000]' : 'text-neutral-900'
                          }`}
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('company')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3.5 rounded-xl border-2 border-neutral-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:border-[#ff0000] focus:bg-white focus:ring-4 focus:ring-[#ff0000]/10 transition-all duration-300 placeholder:text-neutral-400"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="relative">
                      <label
                        htmlFor="service"
                        className={`block text-sm font-medium mb-2 transition-colors ${
                          focusedField === 'service' ? 'text-[#ff0000]' : 'text-neutral-900'
                        }`}
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('service')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-neutral-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:border-[#ff0000] focus:bg-white focus:ring-4 focus:ring-[#ff0000]/10 transition-all duration-300 appearance-none cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        <option value="web-design">Web Design</option>
                        <option value="mobile-app">Mobile App Development</option>
                        <option value="branding">Branding & Design</option>
                        <option value="ar-3d">AR/3D Design</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className={`block text-sm font-medium mb-2 transition-colors ${
                          focusedField === 'message' ? 'text-[#ff0000]' : 'text-neutral-900'
                        }`}
                      >
                        Message <span className="text-[#ff0000]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={6}
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-neutral-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:border-[#ff0000] focus:bg-white focus:ring-4 focus:ring-[#ff0000]/10 transition-all duration-300 resize-none placeholder:text-neutral-400"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full md:w-auto px-10 py-4 text-sm font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff0000]/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        style={{ backgroundColor: '#ff0000' }}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <>
                              <svg
                                className="animate-spin h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                />
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                              </svg>
                            </>
                          )}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-[#ff0000] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </button>
                    </div>

                    {/* Success/Error Messages */}
                    {submitStatus === 'success' && (
                      <div className="p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 text-green-800 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-white"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        </div>
                        <span className="font-medium">Message sent successfully! We'll get back to you soon.</span>
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="p-4 rounded-xl bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 text-red-800 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-white"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                        <span className="font-medium">Something went wrong. Please try again.</span>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    </>
  );
}
