"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, Plus } from "lucide-react";

// Digits only, including country code — required format for wa.me links
const WHATSAPP_NUMBER = "919814820845";

const CONTACT_LINK_CLASS =
  "text-base sm:text-lg lg:text-xl text-[#e1ad66] hover:underline w-fit";

export default function StandalonePortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState("organic-india");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs: { question: string; answer: string }[] = [
    {
      question: "Who is Sania Gupta?",
      answer:
        "Founder of Digital Kangaroos (B2B & corporate websites) and Cart Potato (Shopify & D2C) — an eCommerce and CRO strategist who builds websites that grow revenue, not just look good.",
    },
    {
      question: "What has she built?",
      answer:
        "Two specialist agencies and 200+ websites across B2B, healthcare, industrial and D2C — see Case Studies above.",
    },
    {
      question: "Can I hire her directly for a project?",
      answer:
        "Project work runs through Digital Kangaroos or Cart Potato depending on your business type — reach out and she'll point you to the right team.",
    },
    {
      question: "Is she available for speaking or press?",
      answer:
        "Yes — keynotes, panels, podcasts and interviews on conversion-first design are all welcome. Use the contact options below.",
    },
  ];

  const caseStudies: Record<
    string,
    {
      title: string;
      subtitle: string;
      stats: { value: string; label: string }[];
      quote: { text: string; author: string; role: string };
    }
  > = {
    "organic-india": {
      title: "Organic India",
      subtitle: "Shopify Store Revamp + Subscription Integration",
      stats: [
        { value: "231%", label: "increase in conversion rate" },
        { value: "31%", label: "increase in total orders" },
        { value: "42%", label: "improvement in checkout completion rate" },
      ],
      quote: {
        text: "Cart Potato delivered a performance-driven Shopify revamp that significantly improved our customer journey and conversions. The new experience aligns perfectly with Organic India's values while driving measurable growth.",
        author: "Tildon Ferrao",
        role: "-D2C, Tata Consumer Products",
      },
    },
    "avon-steel": {
      title: "Avon Steel",
      subtitle: "Corporate Website Revamp",
      stats: [
        {
          value: "45%",
          label:
            "increase in website traffic within the first 3 months post-launch",
        },
        {
          value: "32%",
          label:
            "reduction in bounce rate through improved UI/UX & intuitive navigation",
        },
        {
          value: "60%",
          label: "increase in website inquiries via the contact form",
        },
      ],
      quote: {
        text: "Digital Kangaroos transformed our outdated site into a global-ready platform that reflects our leadership and drives qualified B2B leads.",
        author: "Marketing Head",
        role: "Avon Steel Ltd.",
      },
    },
    "octave-mettle": {
      title: "Octave Mettle",
      subtitle: "Shopify Store CRO Revamp",
      stats: [
        { value: "168%", label: "increase in conversion rate" },
        { value: "38%", label: "increase in average order value (AOV)" },
        { value: "29%", label: "increase in total online orders" },
      ],
      quote: {
        text: "Cart Potato helped us rethink our entire customer journey, not just redesign our website. Their CRO-first approach improved usability, strengthened our brand experience, and translated into measurable business growth. The revamped store is faster, more intuitive, and delivers a significantly better shopping experience for our customers.",
        author: "Yuvraj Arora",
        role: "-Partner, Octave Mettle",
      },
    },
    "qq-solutions": {
      title: "QQS Solutions",
      subtitle: "Corporate Company Website",
      stats: [
        { value: "70%", label: "increase in average session duration" },
        { value: "2.4x", label: "improvement in lead capture conversion rate" },
        { value: "100%", label: "compliance with Google Core Web Vitals" },
      ],
      quote: {
        text: "We needed a clean, intuitive site and Digital Kangaroos delivered with technical precision and a modern interface that builds client trust.",
        author: "Chairman",
        role: "Mr. Murali Cherat",
      },
    },
    "senses-india": {
      title: "Senses India",
      subtitle: "Website Revamp + Enhanced User Experience Optimization",
      stats: [
        { value: "+388%", label: "increase in Add-to-Cart actions" },
        { value: "+37%", label: "improvement in overall conversion rate" },
        {
          value: "2x",
          label: "faster mobile experience driving higher engagement",
        },
      ],
      quote: {
        text: "Partnering with Cart Potato completely transformed our online presence. The new website not only looks stunning but performs exceptionally well;  faster, smoother, and more conversion-focused. Our customers love the experience, and so do we.",
        author: "Anuj Shah",
        role: "-Founder, Senses India",
      },
    },
    "past-modern": {
      title: "Past Modern",
      subtitle: "Shopify Store Revamp + CRO Optimization",
      stats: [
        { value: "184%", label: "increase in conversion rate" },
        { value: "37%", label: "increase in total orders" },
        { value: "49%", label: "improvement in checkout completion rate" },
      ],
      quote: {
        text: "Sania is the go-to person for all our Shopify store needs from the complete revamp to ongoing optimization. We've been working with her for both our Indian and USA stores and the results have been phenomenal every single time. Couldn't trust anyone more with our brand.",
        author: "Shivang Chandna",
        role: "-Founder, Past Modern",
      },
    },
    "von-dutch": {
      title: "Von Dutch",
      subtitle: "Shopify Store CRO",
      stats: [
        { value: "+37%", label: "jump in e-commerce revenue" },
        { value: "1.2x", label: "increase in average order value" },
        { value: "25%", label: "growth in conversion rate" },
      ],
      quote: {
        text: "Our Shopify store CRO, led by Sania, has driven consistent traffic and revenue growth, especially in digital-first markets.",
        author: "Shivang Chandna",
        role: "-Founder, Past Modern",
      },
    },
    allter: {
      title: "Let's Allter",
      subtitle: "Custom Theme + Rewards & Subscription Integration",
      stats: [
        { value: "+39%", label: "repeat customer rate" },
        { value: "2.3x", label: "increase in subscriber base" },
        { value: "45%", label: "faster checkout experience" },
      ],
      quote: {
        text: "Cart Potato truly understood our vision. They transformed our Shopify store into a seamless, interactive experience that reflects our sustainable brand ethos. The results speak for themselves.",
        author: "Shivang Chandna",
        role: "-Founder, Past Modern",
      },
    },
  };

  return (
    <div className="bg-[#f8f4f4] text-[#201f1d] font-serif selection:bg-[#b68235]/30 min-h-screen">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-[#f8f4f4]/90 backdrop-blur-md border-b border-[#201f1d]/5">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-5 flex items-center justify-between">
          <a
            href="#"
            className="font-serif font-semibold text-xl sm:text-2xl tracking-tight text-[#201f1d]"
          >
            Sania Gupta
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            <a
              href="#about"
              className="text-[#201f1d] hover:text-[#b68235] transition-colors"
            >
              About
            </a>
            <a
              href="#clients"
              className="text-[#201f1d] hover:text-[#b68235] transition-colors"
            >
              Case Studies
            </a>
            <a
              href="#speaking"
              className="text-[#201f1d] hover:text-[#b68235] transition-colors"
            >
              Speaking
            </a>
            <a
              href="#contact"
              className="text-[#201f1d] hover:text-[#b68235] transition-colors"
            >
              Contact
            </a>
            <a
              href="mailto:sania@digitalkangaroos.com?subject=Consulting%20Inquiry"
              className="inline-flex items-center justify-center font-serif font-semibold text-xs sm:text-sm rounded-full px-5 py-2.5 bg-[#b68235] text-[#f8f4f4] shadow-md shadow-[#b68235]/30 hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              Work with me
            </a>
          </nav>

          {/* Mobile Hamburger Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="md:hidden p-2 text-[#201f1d] hover:text-[#b68235] transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#f8f4f4] border-b border-[#201f1d]/10 px-6 py-6 space-y-4 shadow-xl">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#201f1d] hover:text-[#b68235]"
            >
              About
            </a>
            <a
              href="#clients"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#201f1d] hover:text-[#b68235]"
            >
              Case Studies
            </a>
            <a
              href="#speaking"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#201f1d] hover:text-[#b68235]"
            >
              Speaking
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#201f1d] hover:text-[#b68235]"
            >
              Contact
            </a>
            <div className="pt-2">
              <a
                href="mailto:sania@digitalkangaroos.com?subject=Consulting%20Inquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-block w-full text-center font-serif font-semibold text-sm rounded-full px-5 py-3 bg-[#b68235] text-[#f8f4f4] shadow-md"
              >
                Work with me
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-[#201f1d] text-[#f8f4f4] overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto px-3 sm:px-5 lg:px-8 py-6 sm:py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.14em] text-[#e1ad66] font-medium mb-2 sm:mb-3">
              Founder · eCommerce &amp; B2B CRO Strategist
            </p>
            <h1 className="font-serif font-normal text-2xl sm:text-4xl lg:text-5xl leading-[1.12] sm:leading-[1.08] tracking-tight mb-4 sm:mb-5">
              Building high-converting businesses
              <br className="hidden sm:block" /> — not just beautiful{" "}
              <em className="text-[#e1ad66] italic font-serif">websites.</em>
            </h1>
            <p className="text-sm sm:text-base leading-relaxed max-w-[540px] text-[#f8f4f4]/75 mb-5 sm:mb-6 font-light">
              Sania Gupta grows brands through strategy, UX and Conversion Rate
              Optimization — as founder of Digital Kangaroos (B2B &amp;
              corporate) and Cart Potato (Shopify &amp; D2C).
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 font-serif">
              <a
                href="mailto:sania@digitalkangaroos.com?subject=Speaking%20Inquiry"
                className="inline-flex items-center justify-center font-semibold text-sm rounded-full px-6 py-3 bg-[#b68235] text-[#f8f4f4] shadow-md shadow-[#b68235]/35 hover:-translate-y-0.5 hover:shadow-xl transition-all text-center"
              >
                Book me to speak
              </a>
              <a
                href="mailto:sania@digitalkangaroos.com?subject=Consulting%20Inquiry"
                className="inline-flex items-center justify-center font-semibold text-sm rounded-full px-6 py-3 border border-[#f8f4f4]/50 text-[#f8f4f4] hover:bg-[#f8f4f4]/10 transition-all text-center"
              >
                Work with me
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-4 border-t border-[#f8f4f4]/10 lg:border-none lg:pt-0">
              <div>
                <p className="font-serif font-semibold text-xl sm:text-2xl lg:text-3xl text-[#e1ad66] m-0 tabular-nums">
                  10+
                </p>
                <p className="text-[11px] sm:text-xs text-[#f8f4f4]/65 mt-1">
                  Years in industry
                </p>
              </div>
              <div>
                <p className="font-serif font-semibold text-xl sm:text-2xl lg:text-3xl text-[#e1ad66] m-0 tabular-nums">
                  200+
                </p>
                <p className="text-[11px] sm:text-xs text-[#f8f4f4]/65 mt-1">
                  Websites delivered
                </p>
              </div>
              <div>
                <p className="font-serif font-semibold text-xl sm:text-2xl lg:text-3xl text-[#e1ad66] m-0 tabular-nums">
                  2
                </p>
                <p className="text-[11px] sm:text-xs text-[#f8f4f4]/65 mt-1">
                  Agencies built
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative max-w-[300px] sm:max-w-sm mx-auto lg:max-w-[400px] w-full">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl shadow-black/50 relative border border-[#f8f4f4]/10">
              <Image
                src="/extracted_60ec7261-46fe-454a-aa51-5d355901dde5.webp"
                alt="Headshot — Sania Gupta"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="text-center mt-3 sm:mt-4">
              <p className="font-serif font-semibold text-base sm:text-lg lg:text-xl m-0 text-[#f8f4f4]">
                Sania Gupta
              </p>
              <p className="text-[10px] sm:text-xs tracking-[0.08em] uppercase text-[#e1ad66] mt-1">
                Founder, Digital Kangaroos &amp; Cart Potato
              </p>
            </div>
          </div>
        </div>

        {/* Ambient Radial Accent */}
        <div className="absolute -top-32 -right-32 w-[360px] h-[360px] rounded-full bg-radial from-[#b68235]/25 to-transparent pointer-events-none" />
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* About Section */}
        <section
          id="about"
          className="py-10 sm:py-12 lg:py-16 grid grid-cols-1 md:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr] gap-6 sm:gap-12 lg:gap-16 border-b border-[#201f1d]/10"
        >
          <h6 className="text-sm sm:text-base tracking-[0.1em] uppercase text-[#201f1d]/80 m-0 font-bold">
            About
          </h6>
          <div className="max-w-[680px]">
            <p className="text-sm sm:text-base lg:text-lg italic text-[#7d5411] mb-4 sm:mb-5 font-serif">
              "A website is a business asset before it's a design object."
            </p>
            <p className="text-lg sm:text-2xl leading-snug font-serif mb-5 sm:mb-6 text-[#201f1d]">
              Sania started out designing websites the way most agencies do —
              chasing polish. It didn't take long to notice the gap: sites that
              won awards and portfolios but never moved the numbers that
              actually mattered to the businesses paying for them.
            </p>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-[#201f1d]/75 mb-4 sm:mb-5 font-light">
              That gap became her specialty. She built Digital Kangaroos to
              bring Conversion Rate Optimization into B2B and corporate web
              design — a space that still treats CRO as an afterthought — and
              later founded Cart Potato to apply the same discipline to Shopify
              and D2C, where buying psychology plays by entirely different
              rules.
            </p>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-[#201f1d]/75 font-light">
              Running two agencies at once is deliberate: it keeps her close to
              both sides of how businesses actually sell online, and it's the
              reason her point of view on design and revenue keeps getting
              sharper.
            </p>
          </div>
        </section>

        {/* Point of View Section */}
        <section className="py-10 sm:py-12 lg:py-16 border-b border-[#201f1d]/10">
          <h6 className="text-sm sm:text-base tracking-[0.1em] uppercase text-[#201f1d]/80 mb-8 sm:mb-10 font-bold">
            Point of view
          </h6>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="rounded-2xl border border-[#201f1d]/12 p-6 sm:p-8 bg-white/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="font-serif font-medium text-3xl sm:text-4xl text-[#b68235] tabular-nums mb-3">
                01
              </div>
              <h4 className="font-serif text-lg sm:text-xl font-semibold mb-2 text-[#201f1d]">
                Design is a conversion lever
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-[#201f1d]/75 font-light">
                Every layout choice is tested against one question: does this
                move a visitor closer to a decision?
              </p>
            </div>

            <div className="rounded-2xl border border-[#201f1d]/12 p-6 sm:p-8 bg-white/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="font-serif font-medium text-3xl sm:text-4xl text-[#b68235] tabular-nums mb-3">
                02
              </div>
              <h4 className="font-serif text-lg sm:text-xl font-semibold mb-2 text-[#201f1d]">
                B2B and D2C need different playbooks
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-[#201f1d]/75 font-light">
                Running both a corporate and a D2C agency is deliberate — the
                buying psychology, and the fixes, differ completely.
              </p>
            </div>

            <div className="rounded-2xl border border-[#201f1d]/12 p-6 sm:p-8 bg-white/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="font-serif font-medium text-3xl sm:text-4xl text-[#b68235] tabular-nums mb-3">
                03
              </div>
              <h4 className="font-serif text-lg sm:text-xl font-semibold mb-2 text-[#201f1d]">
                CRO is a discipline, not an afterthought
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-[#201f1d]/75 font-light">
                Optimization built into the first draft, not a plugin added
                post-launch.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies / Brands Section */}
        <section
          id="clients"
          className="py-10 sm:py-12 lg:py-16 border-b border-[#201f1d]/10"
        >
          <h6 className="text-sm sm:text-base tracking-[0.1em] uppercase text-[#201f1d]/80 mb-2 font-bold">
            Case studies
          </h6>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-[#201f1d]/75 mb-8 sm:mb-10 font-light">
            A selection of the businesses Digital Kangaroos and Cart Potato have worked with spanning healthcare, industrial and D2C.
          </p>

          {/* Brands Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
            {[
              {
                id: "organic-india",
                name: "Organic India",
                src: "/assets/Organic India 1.png",
              },
              {
                id: "avon-steel",
                name: "Avon Steel",
                src: "/assets/Avon Steels 1.png",
              },
              { id: "allter", name: "Allter", src: "/assets/image 1.png" },
              {
                id: "qq-solutions",
                name: "Q.Q Solutions",
                src: "/assets/QQ-Logo 1.png",
              },
              {
                id: "senses-india",
                name: "Senses",
                src: "/assets/Senses 1.png",
              },
              {
                id: "past-modern",
                name: "Past Modern",
                src: "/assets/image 20.png",
              },
              {
                id: "von-dutch",
                name: "Von Dutch",
                src: "/assets/Von Dutch 1.png",
              },
              {
                id: "octave-mettle",
                name: "Octave Mettle",
                src: "/assets/Group 1.png",
              },
            ].map((brand) => {
              const isActive = activeCaseStudy === brand.id;
              return (
                <button
                  key={brand.id}
                  onClick={() => setActiveCaseStudy(brand.id)}
                  className={`h-16 sm:h-20 flex items-center justify-center p-3 rounded-lg border transition-all duration-300 relative group cursor-pointer ${
                    isActive
                      ? "border-[#b68235] bg-white shadow-md ring-2 ring-[#b68235]/20"
                      : "border-[#201f1d]/10 bg-white/40 hover:border-[#b68235]/40 hover:bg-white/70"
                  }`}
                >
                  <div className="relative w-full h-10 sm:h-12">
                    <Image
                      src={brand.src}
                      alt={brand.name}
                      fill
                      className={`object-contain transition-all duration-300 ${
                        isActive
                          ? "grayscale-0 scale-105"
                          : "grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Case Study Detailed Card Display */}
          {caseStudies[activeCaseStudy] && (
            <div className="transition-all duration-300 space-y-6">
              {/* Top Banner with Title and Subtitle */}
              <div className="bg-[#f0ebe7] rounded-2xl p-6 sm:p-4 text-center border border-[#201f1d]/5">
                <h3 className="font-serif font-semibold text-2xl sm:text-3xl text-[#b68235] mb-1 sm:mb-2">
                  {caseStudies[activeCaseStudy].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#201f1d]/65 tracking-wide mb-6 sm:mb-8 font-medium">
                  {caseStudies[activeCaseStudy].subtitle}
                </p>

                {/* 3 Metrics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-6">
                  {caseStudies[activeCaseStudy].stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl p-2 sm:p-4 text-center border border-[#201f1d]/5 shadow-sm"
                    >
                      <p className="font-serif font-bold text-3xl sm:text-4xl text-[#b68235] mb-2 tabular-nums">
                        {stat.value}
                      </p>
                      <p className="text-xs sm:text-sm text-[#201f1d]/75 font-light leading-snug">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Quote Callout */}
              <div className="border-l-4 border-[#b68235] pl-4 sm:pl-6 py-2">
                <p className="font-serif italic text-lg sm:text-lg lg:text-xl text-[#201f1d]/90 leading-relaxed mb-4">
                  "{caseStudies[activeCaseStudy].quote.text}"
                </p>
                <div>
                  <p className="font-medium text-xs sm:text-sm text-[#201f1d]/85">
                    {caseStudies[activeCaseStudy].quote.author}
                  </p>
                  <p className="text-xs text-[#201f1d]/60 font-light mt-0.5">
                    {caseStudies[activeCaseStudy].quote.role}
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Speaking & Media Section */}
        <section
          id="speaking"
          className="py-10 sm:py-12 lg:py-16 border-b border-[#201f1d]/10"
        >
          <h6 className="text-sm sm:text-base tracking-[0.1em] uppercase text-[#201f1d]/80 mb-8 sm:mb-10 font-bold">
            Speaking &amp; media
          </h6>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
            <div>
              <h3 className="font-serif font-semibold text-xl sm:text-2xl mb-4 sm:mb-5 text-[#201f1d]">
                Topics
              </h3>
              <ul className="space-y-3 sm:space-y-4 font-light">
                {[
                  "The psychology behind high-converting Shopify stores",
                  "Why most D2C websites don't convert",
                  "Scaling Shopify and B2B brands profitably",
                  "Building CRO-first digital businesses",
                  "Women in entrepreneurship",
                ].map((topic, i) => (
                  <li
                    key={i}
                    className="text-sm sm:text-base text-[#201f1d]/80 pl-4 sm:pl-5 border-l-2 border-[#b68235]"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-xl sm:text-2xl mb-4 sm:mb-5 text-[#201f1d]">
                Best suited for
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                {[
                  "eCommerce & D2C summits",
                  "B2B growth conferences",
                  "Founder & entrepreneurship events",
                  "Podcasts & interviews",
                ].map((pill, pIdx) => (
                  <span
                    key={pIdx}
                    className="bg-[#b68235]/12 text-[#7d5411] text-[11px] sm:text-xs font-medium px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full"
                  >
                    {pill}
                  </span>
                ))}
              </div>
              <a
                href="mailto:sania@digitalkangaroos.com?subject=Speaking%20Inquiry"
                className="inline-flex items-center justify-center w-full sm:w-auto font-serif font-semibold text-xs sm:text-sm rounded-full px-6 py-3 border border-[#201f1d]/30 text-[#201f1d] hover:bg-[#201f1d]/5 transition-all text-center"
              >
                Send a speaking inquiry
              </a>
            </div>
          </div>
        </section>

        {/* Work With Me Section */}
        <section className="py-10 sm:py-12 lg:py-16 border-b border-[#201f1d]/10">
          <h6 className="text-sm sm:text-base tracking-[0.1em] uppercase text-[#201f1d]/80 mb-6 sm:mb-10 font-bold">
            Work with me
          </h6>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 sm:gap-12 items-start">
            <p className="font-serif text-xl sm:text-2xl lg:text-3xl leading-snug text-[#201f1d]">
              Engagements run through Digital Kangaroos or Cart Potato depending
              on your business — Sania advises directly on the strategic layer
              of both.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[
                "Shopify consulting",
                "CRO audits",
                "eCommerce strategy",
                "Workshops",
                "Advisory",
              ].map((item, i) => (
                <span
                  key={i}
                  className="bg-[#b68235]/12 text-[#7d5411] text-[11px] sm:text-xs font-medium px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10 sm:py-12 lg:py-16 grid grid-cols-1 md:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr] gap-6 sm:gap-12">
          <h6 className="text-sm sm:text-base tracking-[0.1em] uppercase text-[#201f1d]/80 m-0 font-bold">
            FAQ
          </h6>
          <div className="max-w-[700px] divide-y divide-[#201f1d]/10 border-y border-[#201f1d]/10">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question}>
                  <h6>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      id={`faq-trigger-${index}`}
                      className="w-full flex items-center justify-between gap-4 text-left py-4 sm:py-5 cursor-pointer group"
                    >
                      <span
                        className={`font-serif font-medium text-xl sm:text-2xl lg:text-3xl transition-colors duration-200 ${
                          isOpen
                            ? "text-[#b68235]"
                            : "text-[#201f1d] group-hover:text-[#b68235]"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <Plus
                        aria-hidden="true"
                        className={`shrink-0 w-5 h-5 transition-transform duration-300 ${
                          isOpen
                            ? "rotate-45 text-[#b68235]"
                            : "text-[#201f1d]/45 group-hover:text-[#b68235]"
                        }`}
                      />
                    </button>
                  </h6>
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-[#201f1d]/75 font-light pb-4 sm:pb-5 pr-8">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-[#201f1d] text-[#f8f4f4]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10 sm:mb-12">
            <div>
              <h3 className="font-serif font-medium text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 text-[#f8f4f4]">
                Let's talk.
              </h3>
              <div className="flex flex-col items-start gap-1 sm:gap-1.5">
                <a
                  href="mailto:sania@digitalkangaroos.com"
                  className={CONTACT_LINK_CLASS}
                >
                  sania@digitalkangaroos.com
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp: +91 9814820845"
                  className={CONTACT_LINK_CLASS}
                >
                  +91 9814820845
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 font-serif w-full sm:w-auto">
              <a
                href="mailto:sania@digitalkangaroos.com?subject=Speaking%20Inquiry"
                className="px-5 py-2.5 rounded-full border border-[#f8f4f4]/50 text-xs sm:text-sm text-[#f8f4f4] hover:bg-[#f8f4f4]/10 transition-colors text-center"
              >
                Speaking inquiry
              </a>
              <a
                href="mailto:sania@digitalkangaroos.com?subject=Media%20Inquiry"
                className="px-5 py-2.5 rounded-full border border-[#f8f4f4]/50 text-xs sm:text-sm text-[#f8f4f4] hover:bg-[#f8f4f4]/10 transition-colors text-center"
              >
                Media inquiry
              </a>
              <a
                href="mailto:sania@digitalkangaroos.com?subject=Consulting%20Inquiry"
                className="px-5 py-2.5 rounded-full border border-[#f8f4f4]/50 text-xs sm:text-sm text-[#f8f4f4] hover:bg-[#f8f4f4]/10 transition-colors text-center"
              >
                Consulting inquiry
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-[#f8f4f4]/25 pt-6 text-xs sm:text-sm text-[#f8f4f4]/80">
            <span>Copyright © 2026 Sania Gupta</span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/saniagupta/"
              className="font-medium text-[#e1ad66] underline underline-offset-4 decoration-[#e1ad66]/40 hover:decoration-[#e1ad66] hover:text-[#f0c589] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
