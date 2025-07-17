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
  video?: string
  image?: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "Real Estate CRM",
    description: "Full-stack web application with Spring Boot & Thymleaf",
    longDescription:
      "A comprehensive Real Estate CRM platform built with modern web technologies. The system includes features such as user authentication, property listings management, lead tracking, appointment scheduling, integrated messaging, and an admin dashboard for analytics and agent performance monitoring. Designed to streamline the workflow for real estate agents and enhance the experience for property buyers and sellers.",
    tech: ["Spring Boot", "Thymleaf", "MySQL", "Spring Security"],
    category: "Full Stack",
    video: "https://res.cloudinary.com/dur46xyvo/video/upload/v1752736393/Screen_Recording_2025-07-17_123615_bskhea.mp4",
    demoUrl: "https://realestatecrm-c5mb.onrender.com/",
    githubUrl: "https://github.com/sarthak-nande/realestatecrm",
    featured: true,
  },
  {
    id: 2,
    title: "Interactive Learning Platform",
    description: "Interactive Platform To Learn New Coding Languges, Enroll Course/Path",
    longDescription:
      "An interactive learning platform built with modern web technologies to enhance personalized education. Features include user authentication, real-time collaborative coding environments, AI-powered assessments, video lessons, quizzes, progress tracking, and a dynamic dashboard for learners and instructors. The platform supports multiple domains, enabling users to learn at their own pace while receiving intelligent feedback and mentorship.",
    tech: ["Node.js", "React.js", "Redux.js", "MongoDB", "JWT"],
    category: "FullStack",
    video: "https://res.cloudinary.com/dur46xyvo/video/upload/v1750425691/interactive_learning_platform_oe3tn0.mp4",
    githubUrl: "https://github.com/sarthak-nande/interactive-learning-platfrom",
    featured: true,
  },
  {
    id: 3,
    title: "E-Gate Pass",
    description: "Cross-platform mobile app for productivity",
    longDescription:
      "A secure and scalable E-Gate Pass Management System developed to streamline gate pass approvals within educational institutions. The platform supports multi-level approvals involving students, teachers, guardians, HODs, hostel rectors, and security personnel. Key features include role-based access control, real-time status tracking, notification system, and a mobile-friendly interface to manage gate pass requests efficiently and securely.",
    tech: ["React Native", "Node.js", "Redux", "AsyncStorage", "MongoDB", "JWT"],
    category: "Mobile",
    video: "https://res.cloudinary.com/dur46xyvo/video/upload/v1750423949/y9lve76kemrwrq8mllzh.mp4",
    githubUrl: "https://github.com/sarthak-nande/E-GetPass",
    featured: true,
  },
]

const categories = ["All", "Full Stack", "Frontend", "Mobile", "Data Science", "AI/ML"]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showAll, setShowAll] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

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
                {project.video ? (
                  <video
                    src={project.video}
                    className={`object-cover group-hover:scale-110 transition-transform duration-500 animate-float ${
                      viewMode === "list" ? "h-full" : "w-full h-48"
                    }`}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className={`object-cover group-hover:scale-110 transition-transform duration-500 animate-float ${
                      viewMode === "list" ? "h-full" : "w-full h-48"
                    }`}
                  />
                )}

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
                      onClick={() => setSelectedProject(project)}
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

        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="max-w-2xl w-full bg-gray-800 border-gray-600">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl text-white">{selectedProject.title}</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    ✕
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {selectedProject.video ? (
                  <video
                    src={selectedProject.video}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    controls
                    autoPlay
                    muted
                    loop
                  />
                ) : (
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <p className="text-gray-300 mb-4">{selectedProject.longDescription}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tech.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-600 text-gray-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  {selectedProject.demoUrl && (
                    <Button asChild className="bg-purple-600 hover:bg-purple-700">
                      <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {selectedProject.githubUrl && (
                    <Button variant="outline" asChild className="border-gray-600 text-gray-300 bg-transparent">
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

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

