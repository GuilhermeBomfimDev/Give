import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      title: "Financial Analytics Dashboard",
      description:
        "A sales management system with customer registration, temporary cart handling, and order processing. Built with ASP.NET Core MVC and MySQL, designed to streamline sales operations from product selection to final transaction.",
      image:
        "/src/gifs/Midia1.gif",
      tech: ["C#", ".NET", "MySQL", "Bootstrap"],
      category: "Web Application",
      year: "2025",
      client: "SRT Ar condicionados",
      features: [
        "Multi-vendor marketplace",
        "Real-time inventory",
        "Admin dashboard",
      ],
      link: "https://github.com/GuilhermeBomfimDev/StrAnalytics",
    },
    {
      title: "Smart Address Finder App",
      description:
        "AI-powered application that extracts and organizes address information from unformatted text, providing a clear and structured view of location data.",
      image:
        "/src/images/printBuscaCep.jpg",
      tech: ["C#", "Python", "AI", "API"],
      category: "Mobile App",
      year: "2025",
      client: "Personal Project",
      features: [
        "Windows Forms desktop interface",
        "AI-based address extraction",
        "Automatic data structuring",
        "Predefined column headers for clean display",
        "Real-time text processing",
      ],
      link: "https://github.com/GuilhermeBomfimDev/AppBuscaCep",
    },
  ];

  const categories = [
    "All",
    "Web Application",
    "Mobile App",
    "Healthcare",
    "Finance",
    "Education",
    "IoT",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary font-mono">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful projects across various
              industries. Each project represents our commitment to excellence
              and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "bg-primary hover:bg-primary/90"
                    : ""
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                      {project.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.year}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Client:
                    </h4>
                    <p className="text-gray-600">{project.client}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Key Features:
                    </h4>
                    <ul className="grid grid-cols-2 gap-1 text-sm text-gray-600">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-md font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button asChild size="sm" variant="outline">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Case Study
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our
            expertise and dedication
          </p>

          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Projects;
