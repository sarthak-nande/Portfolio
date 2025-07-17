"use client";

import {
  ArrowRight,
  Code,
  Database,
  Globe,
  Mail,
  MapPin,
  Phone,
  Calendar,
  GraduationCap,
  Briefcase,
  Award,
  Star,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/contact-form";
import { ProjectsSection } from "@/components/projects-section";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    { name: "JavaScript", level: 90, icon: "🟨" }, // Yellow box (JS color)
    { name: "Java", level: 90, icon: "☕" }, // Coffee (official Java icon)
    { name: "Python", level: 85, icon: "🐍" },
    { name: "Spring Boot", level: 80, icon: "🌱" }, // Seedling (Spring)
    { name: "React", level: 90, icon: "⚛️" }, // Atom (React logo)
    { name: "Node.js", level: 85, icon: "🟢" }, // Green circle (Node.js color)
    { name: "HTML/CSS", level: 95, icon: "🧱" }, // Brick (structure/layout)
    { name: "MySQL", level: 80, icon: "🐬" }, // Dolphin (MySQL official logo)
    { name: "MongoDB", level: 80, icon: "🍃" }, // Leaf (MongoDB logo)
    { name: "Data Structures", level: 80, icon: "🧩" }, // Puzzle (building block logic)
    { name: "UI/UX Design", level: 75, icon: "🎨" }, // Palette (design)
  ];

  const experiences = [
    {
      type: "education",
      title: "Computer Science & Engineering",
      organization: "SKN Sinhgad College of Engineering",
      location: "Pandharpur",
      period: "2021 - 2025",
      description:
        "Completed Bachelor's degree with focus on software development and data structures.",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      type: "work",
      title: "Intern",
      organization: "Cognizant Technology Solution",
      location: "Remote",
      period: "March 2025 - July 2025",
      description:
        "Worked On The Technologies Such As Spring Boot, MySQL, React.js, Spring Security, Spring MVC, PL/SQL, SOLID Principle, Git & GitHub",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      type: "education",
      title: "Higher Secondary Education",
      organization: "Pemraj Sarda College",
      location: "Ahilyanagar",
      period: "2019 - 2021",
      description:
        "Completed with distinction in Science stream with Mathematics and Computer Science.",
      icon: <GraduationCap className="h-5 w-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute w-2 h-2 bg-purple-400 rounded-full animate-float opacity-20"
          style={{
            left: `${mousePosition.x * 0.01}%`,
            top: `${mousePosition.y * 0.01}%`,
            animationDelay: "0s",
          }}
        />
        <div
          className="absolute w-1 h-1 bg-purple-300 rounded-full animate-float opacity-30"
          style={{
            left: `${mousePosition.x * 0.02}%`,
            top: `${mousePosition.y * 0.02}%`,
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute w-3 h-3 bg-purple-500 rounded-full animate-float opacity-10"
          style={{
            left: `${mousePosition.x * 0.005}%`,
            top: `${mousePosition.y * 0.005}%`,
            animationDelay: "2s",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div
              className={`flex items-center space-x-2 transition-all duration-500 ${
                isVisible ? "animate-fade-in-left" : "opacity-0"
              }`}
            >
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center animate-pulse-slow hover:animate-wiggle cursor-pointer">
                <span className="text-white font-bold text-sm">SN</span>
              </div>
              <span className="font-bold text-xl text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                Sarthak Nande
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Experience", "Projects", "Contact"].map(
                (item, index) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-purple-400 transition-all duration-200 hover:scale-110 animate-fade-in-down relative group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )
              )}
            </div>
            <Button onClick={() => document.getElementById("contact")?.scrollIntoView({behavior : "smooth"})} className="bg-purple-600 hover:bg-purple-700 transition-all duration-200 hover:scale-105 text-white animate-glow hover:animate-shake">
              <Sparkles className="h-4 w-4 mr-2 animate-wiggle" />
              Hire Me
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-center min-h-[600px]">
            <div
              className={`space-y-6 lg:space-y-8 transition-all duration-1000 ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="space-y-4">
                <Badge
                  variant="outline"
                  className="text-purple-400 border-purple-400 animate-bounce-slow hover:animate-wiggle cursor-pointer"
                >
                  <Star className="h-3 w-3 mr-1 animate-spin-slow" />
                  Computer Science Student
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  <span className="animate-typewriter inline-block">
                    Building Digital
                  </span>
                  <br />
                  <span className="text-purple-400"> Experiences</span>
                </h1>
                <p
                  className="text-xl text-gray-300 leading-relaxed animate-fade-in-up"
                  style={{ animationDelay: "0.5s" }}
                >
                  Passionate developer crafting innovative web solutions with
                  modern technologies. Specializing in full-stack development
                  and user-centered design.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior : "smooth"})}
                  className="bg-purple-600 hover:bg-purple-700 transition-all duration-200 hover:scale-105 hover:shadow-lg text-white animate-glow group"
                >
                  <Sparkles className="h-4 w-4 mr-2 animate-wiggle" />
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:animate-bounce-slow" />
                </Button>
                <Button
                  size="lg"
                  onClick={() => window.open("/sarthak_nande_resume.pdf", "_blank")}
                  variant="outline"
                  className="hover:scale-105 transition-all duration-200 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white group hover-lift"
                >
                  Download CV
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:rotate-90" />
                </Button>
              </div>

              <div className="flex space-x-6">
                {[
                  { number: "8+", label: "Projects", delay: "0.2s" },
                  { number: "4+", label: "Years Learning", delay: "0.4s" },
                  { number: "10+", label: "Technologies", delay: "0.6s" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center animate-fade-in-up hover:animate-float cursor-pointer"
                    style={{ animationDelay: stat.delay }}
                  >
                    <div className="text-2xl font-bold text-white counter hover:text-purple-400 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 flex items-center justify-center ${
                isVisible ? "animate-fade-in-right" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative w-72 h-72 xl:w-80 xl:h-80 group">
                <div className="absolute inset-0 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse-slow group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative w-full h-full bg-purple-600 rounded-full p-1">
                  <div className="w-full h-full bg-gray-800 rounded-full p-4 hover-lift">
                    <Image
                      src="/sarthak-photo.png"
                      alt="Sarthak Nande"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                </div>
                {/* Floating elements around photo */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-float opacity-80">
                  <Code className="h-4 w-4 text-white m-2 animate-wiggle" />
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-float opacity-60"
                  style={{ animationDelay: "1s" }}
                >
                  <Star className="h-3 w-3 text-white m-1.5 animate-spin-slow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <Sparkles className="inline h-8 w-8 mr-2 animate-wiggle" />
              Technical Skills
            </h2>
            <p className="text-xl text-gray-300">
              Technologies I work with to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 cursor-pointer group animate-fade-in-up hover:scale-105 bg-gray-700 border-gray-600 hover-lift glass-effect"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-2xl mb-2 animate-float group-hover:animate-wiggle">
                    {skill.icon}
                  </div>
                  <div className="w-12 h-12 bg-purple-600 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12 animate-glow">
                    <Code className="h-6 w-6 text-white animate-pulse-slow" />
                  </div>
                  <p className="font-medium text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {skill.name}
                  </p>
                  <div className="w-full bg-gray-600 rounded-full h-2 mb-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full transition-all duration-1000 animate-slide-in"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`,
                      }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-400 animate-fade-in-up">
                    {skill.level}%
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                <Star className="inline h-8 w-8 mr-2 animate-spin-slow" />
                About Me
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="animate-fade-in-up hover:text-white transition-colors duration-300 cursor-default">
                  👋 Hi there! I'm Sarthak Nande, a passionate Computer Science
                  and Engineering student at SKN Sinhgad College of Engineering,
                  Pandharpur. 🎓
                </p>
                <p
                  className="animate-fade-in-up hover:text-white transition-colors duration-300 cursor-default"
                  style={{ animationDelay: "0.2s" }}
                >
                  🌐 In the web development realm, I'm well-versed in HTML, CSS,
                  and JavaScript. I'm also comfortable with technologies like
                  Node.js and React, which I use to craft dynamic and
                  user-friendly web applications.
                </p>
                <p
                  className="animate-fade-in-up hover:text-white transition-colors duration-300 cursor-default"
                  style={{ animationDelay: "0.4s" }}
                >
                  🚀 Beyond coding, I'm a curious learner and a team player,
                  always ready to collaborate on exciting projects. Let's
                  connect and explore opportunities in the tech world!
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3 animate-fade-in-up hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <MapPin className="h-5 w-5 text-purple-400 animate-bounce-slow" />
                  <span className="text-gray-300 hover:text-white transition-colors duration-300">
                    Ahilyanagar, India
                  </span>
                </div>
                <div
                  className="flex items-center space-x-3 animate-fade-in-up hover:scale-105 transition-transform duration-300 cursor-pointer"
                  style={{ animationDelay: "0.2s" }}
                >
                  <Globe className="h-5 w-5 text-purple-400 animate-wiggle" />
                  <span className="text-gray-300 hover:text-white transition-colors duration-300">
                    Available Worldwide
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-fade-in-right">
              <Card className="bg-gray-800 border-gray-600 hover:scale-105 transition-all duration-300 hover-lift glass-effect group">
                <CardContent className="p-6 text-center">
                  <Database className="h-8 w-8 text-purple-400 mx-auto mb-3 animate-bounce-slow group-hover:animate-wiggle" />
                  <h3 className="font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    Backend Development
                  </h3>
                  <p className="text-sm text-gray-300">
                    Node.js, Spring Boot, Fast API, Java, Python, Database Design
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-600 hover:scale-105 transition-all duration-300 hover-lift glass-effect group">
                <CardContent className="p-6 text-center">
                  <Globe
                    className="h-8 w-8 text-purple-500 mx-auto mb-3 animate-bounce-slow group-hover:animate-wiggle"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <h3 className="font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    Frontend Development
                  </h3>
                  <p className="text-sm text-gray-300">
                    React, JavaScript, HTML/CSS, UI/UX
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-600 col-span-2 hover:scale-105 transition-all duration-300 hover-lift glass-effect group">
                <CardContent className="p-6 text-center">
                  <Code
                    className="h-8 w-8 text-purple-600 mx-auto mb-3 animate-bounce-slow group-hover:animate-wiggle"
                    style={{ animationDelay: "0.4s" }}
                  />
                  <h3 className="font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    Full-Stack Expertise
                  </h3>
                  <p className="text-sm text-gray-300">
                    End-to-end application development with modern technologies
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800 transition-colors duration-300"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <Award className="inline h-8 w-8 mr-2 animate-wiggle" />
              Experience & Education
            </h2>
            <p className="text-xl text-gray-300">
              My journey in technology and learning
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-600 animate-glow"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-start space-x-6 animate-fade-in-up hover:scale-[1.02] transition-all duration-300 group`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg ${
                      exp.type === "education"
                        ? "bg-purple-600"
                        : exp.type === "work"
                        ? "bg-purple-700"
                        : "bg-purple-500"
                    }   cursor-pointer group-hover:scale-110 transition-transform duration-300`}
                  >
                    {exp.icon}
                  </div>

                  <Card className="flex-1 hover:shadow-lg transition-all duration-300 bg-gray-700 border-gray-600 hover-lift glass-effect group-hover:border-purple-500">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg text-white group-hover:text-purple-400 transition-colors duration-300">
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-purple-400 font-medium hover:text-purple-300 transition-colors duration-300">
                            {exp.organization}
                          </CardDescription>
                        </div>
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1 text-xs border-gray-500 text-gray-300 hover:border-purple-400 hover:text-purple-400 transition-colors duration-300 animate-fade-in-up"
                        >
                          <Calendar className="h-3 w-3 animate-wiggle" />
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-2 hover:text-white transition-colors duration-300 cursor-default">
                        {exp.description}
                      </p>
                      <div className="flex items-center text-sm text-gray-400 hover:text-gray-300 transition-colors duration-300">
                        <MapPin className="h-3 w-3 mr-1 animate-bounce-slow" />
                        {exp.location}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <Sparkles className="inline h-8 w-8 mr-2 animate-wiggle" />
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to bring your ideas to life? Let's discuss your next
              project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in-left">
              <div className="grid gap-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    info: "sarthaknande19@gmail.com",
                    color: "text-purple-400",
                    delay: "0s",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    info: "+91 9021271962",
                    color: "text-purple-500",
                    delay: "0.2s",
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    info: "Ahilyanagar, India",
                    color: "text-purple-600",
                    delay: "0.4s",
                  },
                ].map((contact, index) => (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gray-700 border-gray-600 hover-lift glass-effect group"
                  >
                    <CardContent className="p-6">
                      <contact.icon
                        className={`h-8 w-8 ${contact.color} mx-auto mb-3 animate-bounce-slow group-hover:animate-wiggle`}
                        style={{ animationDelay: contact.delay }}
                      />
                      <h3 className="font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                        {contact.title}
                      </h3>
                      <p className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">
                        {contact.info}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto text-center animate-fade-in-up">
          <div className="flex justify-center space-x-6 mb-4">
            {["GitHub", "LinkedIn", "Behance", "Twitter"].map(
              (social, index) => (
                <Link
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-all duration-200 hover:scale-110 animate-fade-in-up hover:animate-wiggle"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {social}
                </Link>
              )
            )}
          </div>
          <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300 cursor-default">
            © 2025 Sarthak Nande. All rights reserved.
            <Sparkles className="inline h-4 w-4 ml-2 animate-wiggle" />
          </p>
        </div>
      </footer>
    </div>
  );
}
