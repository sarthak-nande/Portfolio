"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Github, Filter, Grid, List } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tech: string[]
  category: string
  image: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack web application with React and Node.js",
    longDescription:
      "A comprehensive e-commerce platform built with modern technologies. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    category: "Full Stack",
    image: "/placeholder.svg?height=200&width=300",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/sarthak/ecommerce",
    featured: true,
  },
  {
    id: 2,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for data analysis using Python",
    longDescription:
      "A powerful data visualization dashboard that helps businesses analyze their data with interactive charts, real-time updates, and customizable widgets.",
    tech: ["Python", "Flask", "D3.js", "PostgreSQL", "Chart.js"],
    category: "Data Science",
    image: "/placeholder.svg?height=200&width=300",
    demoUrl: "https://dashboard.example.com",
    githubUrl: "https://github.com/sarthak/dashboard",
    featured: true,
  },
  {
    id: 3,
    title: "Mobile Task Manager",
    description: "Cross-platform mobile app for productivity",
    longDescription:
      "A feature-rich task management application with offline support, push notifications, team collaboration, and advanced scheduling capabilities.",
    tech: ["React Native", "Firebase", "Redux", "AsyncStorage"],
    category: "Mobile",
    image: "/placeholder.svg?height=200&width=300",
    demoUrl: "https://taskapp.example.com",
    githubUrl: "https://github.com/sarthak/taskmanager",
    featured: true,
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description: "Real-time weather application with location services",
    longDescription:
      "A beautiful weather application that provides accurate forecasts, weather maps, and location-based alerts with a clean, intuitive interface.",
    tech: ["JavaScript", "OpenWeather API", "CSS3", "Geolocation"],
    category: "Frontend",
    image: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com/sarthak/weather-app",
    featured: false,
  },
  {
    id: 5,
    title: "Blog Management System",
    description: "Content management system for bloggers",
    longDescription:
      "A comprehensive CMS with rich text editor, media management, SEO optimization, and multi-author support for professional blogging.",
    tech: ["PHP", "MySQL", "Bootstrap", "TinyMCE"],
    category: "Full Stack",
    image: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com/sarthak/blog-cms",
    featured: false,
  },
  {
    id: 6,
    title: "Machine Learning Classifier",
    description: "Image classification using deep learning",
    longDescription:
      "An advanced image classification system using convolutional neural networks to identify and categorize images with high accuracy.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy"],
    category: "AI/ML",
    image: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com/sarthak/ml-classifier",
    featured: false,
  },
]

const categories = ["All", "Full Stack", "Frontend", "Mobile", "Data Science", "AI/ML"]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showAll, setShowAll] = useState(false)

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory,
  )

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-300 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Some of my recent work that showcases my skills
          </p>
        </div>

        {/* Filter and View Controls */}
        <div
          className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 hover:scale-105 animate-slide-in ${
                  selectedCategory === category
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : "border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Filter className="h-3 w-3 mr-1 animate-wiggle" />
                {category}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 hover:scale-105"
            >
              {viewMode === "grid" ? (
                <List className="h-4 w-4 animate-bounce-slow" />
              ) : (
                <Grid className="h-4 w-4 animate-bounce-slow" />
              )}
            </Button>
          </div>
        </div>

        {/* Projects Grid/List */}
        <div
          className={`${
            viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" : "flex flex-col gap-6"
          } transition-all duration-500`}
        >
          {displayedProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`group hover:shadow-xl transition-all duration-500 overflow-hidden animate-fade-in-up hover:scale-105 bg-gray-700 border-gray-600 hover-lift glass-effect ${
                viewMode === "list" ? "flex flex-row" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`relative overflow-hidden ${viewMode === "list" ? "w-1/3" : ""}`}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className={`object-cover group-hover:scale-110 transition-transform duration-500 animate-float ${
                    viewMode === "list" ? "h-full" : "w-full h-48"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.demoUrl && (
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white animate-zoom-in" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-gray-800/80 border-gray-600 text-white hover:bg-gray-700 animate-zoom-in"
                      style={{ animationDelay: "0.1s" }}
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>

                {project.featured && (
                  <Badge className="absolute top-2 left-2 bg-purple-600 text-white animate-pulse-slow">Featured</Badge>
                )}
              </div>

              <div className={viewMode === "list" ? "flex-1" : ""}>
                <CardHeader>
                  <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {viewMode === "list" ? project.longDescription : project.description}
                  </CardDescription>
                  <Badge variant="secondary" className="w-fit bg-gray-600 text-gray-300 animate-slide-in">
                    {project.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs animate-fade-in-up bg-gray-600 text-gray-300 hover:bg-purple-600 hover:text-white transition-colors duration-300 cursor-default"
                        style={{ animationDelay: `${techIndex * 0.05}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {viewMode === "grid" && (
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 bg-transparent hover:scale-105 border-gray-500 text-gray-300"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform animate-bounce-slow" />
                    </Button>
                  )}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {filteredProjects.length > 6 && (
          <div className="text-center mt-12 animate-fade-in-up">
            <Button
              onClick={() => setShowAll(!showAll)}
              className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105 text-white"
            >
              {showAll ? "Show Less" : `Load More Projects (${filteredProjects.length - 6} more)`}
              <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${showAll ? "rotate-90" : ""}`} />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
