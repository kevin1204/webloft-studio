'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Amigo Contracting Services",
    description: "A professional construction services website with lead capture optimization and mobile-first design. Features include service showcases, project galleries, and easy contact forms.",
    image: "/PROJECTS/AMIGO CONTRACTING SERVICES.png",
    category: "Construction",
    technologies: ["Webflow", "CMS", "SEO"],
    results: "+180% Lead Increase",
    link: "https://amigocontracting.com/",
    featured: true
  },
  {
    id: 2,
    title: "Aeries",
    description: "A modern business website built with Webflow, featuring clean design, responsive layout, and optimized user experience for better engagement and conversions.",
    image: "/PROJECTS/AERIES.png",
    category: "Business",
    technologies: ["Webflow", "Responsive Design"],
    results: "Improved User Experience",
    link: "https://wfm5-level-3.webflow.io/",
    featured: false
  },
  {
    id: 3,
    title: "Flowga Yoga Studio",
    description: "A wellness-focused website with online booking system and class management. Designed to help yoga studios manage their classes and attract new students.",
    image: "/PROJECTS/FLOWGA.png",
    category: "Wellness",
    technologies: ["Webflow", "Booking System", "CMS"],
    results: "+300% Online Bookings",
    link: "https://flowgav2.webflow.io/",
    featured: true
  },
  {
    id: 4,
    title: "Sportlink Events",
    description: "An event management platform with registration system and participant management. Built to handle large-scale sporting events and streamline the registration process.",
    image: "/PROJECTS/SPORTLINK.png",
    category: "Events",
    technologies: ["Webflow", "Registration System", "Database"],
    results: "500+ Participants Managed",
    link: "https://wfm5-level-1-course-build-725271.design.webflow.com/",
    featured: false
  },
  {
    id: 5,
    title: "Lila Hart",
    description: "A professional portfolio website showcasing creative work and services. Features elegant design, smooth animations, and optimized performance for creative professionals.",
    image: "/PROJECTS/LILAHART.png",
    category: "Portfolio",
    technologies: ["Webflow", "Animations", "Portfolio"],
    results: "Enhanced Brand Presence",
    link: "https://wfm5-level-1-course-build-725271.webflow.io/",
    featured: false
  }
];

const categories = ["All", "Construction", "Business", "Wellness", "Events", "Portfolio"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
              Our <span className="gradient-text-animated">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up stagger-1">
              Explore our portfolio of successful web development projects. Each website is designed to drive business growth and deliver exceptional user experiences.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4 animate-fade-in-up stagger-2">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 animate-fade-in-up stagger-${index + 1} ${
                  category === activeFilter 
                    ? "bg-green-500 text-white shadow-lg" 
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900 hover:text-green-700 dark:hover:text-green-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our most successful projects that delivered exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.filter(project => project.featured).map((project, index) => (
              <div key={project.id} className={`card-enhanced animate-fade-in-up stagger-${index + 1}`}>
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-green-600 font-semibold">
                    {project.results}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-hover text-green-600 hover:text-green-700 font-medium"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              All Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Complete portfolio of our web development work across various industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className={`card-enhanced animate-fade-in-up stagger-${(index % 3) + 1}`}>
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-green-600 font-semibold text-sm">
                    {project.results}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-hover text-green-600 hover:text-green-700 font-medium text-sm"
                  >
                    View →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Project Success Metrics
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Real results from our portfolio of successful projects.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 hover-glow rounded-xl transition-all duration-300 hover:scale-105 animate-fade-in-up stagger-1">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2 animate-pulse-slow">50+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Projects Completed</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Across various industries</div>
            </div>
            <div className="p-6 hover-glow rounded-xl transition-all duration-300 hover:scale-105 animate-fade-in-up stagger-2">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2 animate-pulse-slow">250%</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Average Lead Increase</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Within first 6 months</div>
            </div>
            <div className="p-6 hover-glow rounded-xl transition-all duration-300 hover:scale-105 animate-fade-in-up stagger-3">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2 animate-pulse-slow">98%</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Client Satisfaction</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Based on project reviews</div>
            </div>
            <div className="p-6 hover-glow rounded-xl transition-all duration-300 hover:scale-105 animate-fade-in-up stagger-4">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2 animate-pulse-slow">2-4</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Weeks Delivery</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Average project timeline</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-400 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a website that drives real business results. Get a free consultation today.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-block text-lg px-8 py-4"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}