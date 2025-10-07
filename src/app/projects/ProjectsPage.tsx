'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Amigo Contracting Services",
    category: "Construction",
    description: "Professional construction company website with project galleries and service showcases.",
    image: "/PROJECTS/AMIGO CONTRACTING SERVICES.png",
    caseStudyLink: "/case-studies/amigo-contracting-services"
  },
  {
    id: 2,
    title: "Flowga Yoga Studio",
    category: "Wellness",
    description: "Modern yoga studio website with class scheduling and instructor profiles.",
    image: "/PROJECTS/FLOWGA.png",
    caseStudyLink: "/case-studies/flowga-yoga-studio"
  },
  {
    id: 3,
    title: "Aeries Aviation",
    category: "Aviation",
    description: "Aviation company website featuring fleet information and charter services.",
    image: "/PROJECTS/AERIES.png",
    caseStudyLink: "/case-studies/aeries"
  },
  {
    id: 4,
    title: "Lila Hart Fashion",
    category: "Fashion",
    description: "Elegant fashion brand website with product showcases and online store integration.",
    image: "/PROJECTS/LILAHART.png",
    caseStudyLink: "/case-studies/lila-hart"
  },
  {
    id: 5,
    title: "SportLink Events",
    category: "Sports",
    description: "Sports event management platform with registration and ticketing systems.",
    image: "/PROJECTS/SPORTLINK.png",
    caseStudyLink: "/case-studies/sportlink-events"
  }
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", ...Array.from(new Set(projects.map(project => project.category)))];
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-green-600">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our recent projects and see how we've helped businesses transform their online presence with custom web solutions.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                <div className="project-image-container relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} - Professional web design project by Webloft Studio showcasing ${project.category.toLowerCase()} website development and custom design solutions`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 project-card-image"
                    loading="lazy"
                    priority={false}
                  />
                  <div className="project-overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">View Details</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium px-3 py-1 rounded-full animate-category-pulse">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-3">
                    <Link
                      href={project.caseStudyLink}
                      className="flex-1 bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 text-center flex items-center justify-center gap-2"
                    >
                      View Case Study
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create something amazing together. Get a free consultation and project estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300 inline-flex items-center justify-center"
            >
              Start Your Project
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300 inline-flex items-center justify-center"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
