'use client';

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Amigo Contracting Services",
    category: "Construction",
    description: "Professional construction company website with project galleries and service showcases.",
    image: "/PROJECTS/AMIGO CONTRACTING SERVICES.png",
    caseStudyLink: "/case-studies/amigo-contracting-services",
    websiteLink: "https://amigocontracting.com",
    featured: true
  },
  {
    id: 2,
    title: "Flowga Yoga Studio",
    category: "Wellness",
    description: "Modern yoga studio website with class scheduling and instructor profiles.",
    image: "/PROJECTS/FLOWGA.png",
    caseStudyLink: "/case-studies/flowga-yoga-studio",
    websiteLink: "https://flowgayoga.com",
    featured: true
  },
  {
    id: 3,
    title: "Aeries Aviation",
    category: "Aviation",
    description: "Aviation company website featuring fleet information and charter services.",
    image: "/PROJECTS/AERIES.png",
    caseStudyLink: "/case-studies/aeries",
    websiteLink: "https://aeriesaviation.com",
    featured: false
  },
  {
    id: 4,
    title: "Lila Hart Fashion",
    category: "Fashion",
    description: "Elegant fashion brand website with product showcases and online store integration.",
    image: "/PROJECTS/LILAHART.png",
    caseStudyLink: "/case-studies/lila-hart",
    websiteLink: "https://lilahart.com",
    featured: false
  },
  {
    id: 5,
    title: "SportLink Events",
    category: "Sports",
    description: "Sports event management platform with registration and ticketing systems.",
    image: "/PROJECTS/SPORTLINK.png",
    caseStudyLink: "/case-studies/sportlink-events",
    websiteLink: "https://sportlinkevents.com",
    featured: false
  }
];

export default function ProjectsPage() {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-green-600">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our portfolio of successful web development projects. Each website is designed to drive business growth and deliver exceptional user experiences.
          </p>
        </div>
      </section>


      {/* Featured Projects */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our most successful and impactful web development projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.filter(project => project.featured).map((project) => (
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
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex gap-3">
                    <Link
                      href={project.caseStudyLink}
                      className="btn-primary-enhanced flex-1 text-center"
                    >
                      View Case Study
                    </Link>
                    <Link
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex-1 text-center"
                    >
                      Visit Website
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              All Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Complete collection of our web development projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
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
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex gap-3">
                    <Link
                      href={project.caseStudyLink}
                      className="btn-primary-enhanced flex-1 text-center"
                    >
                      View Case Study
                    </Link>
                    <Link
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex-1 text-center"
                    >
                      Visit Website
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
