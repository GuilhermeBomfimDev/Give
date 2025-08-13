import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Code,
  Smartphone,
  Globe,
  Database,
  ArrowRight,
  Users,
  Award,
  Zap,
} from "lucide-react";

function Home() {
  const projects = [
    {
      title: "Financial Analytics Dashboard",
      description:
        "Real-time financial data visualization and control of your sales.",
      tech: ["C#", ".NET", "MySQL", "Bootstrap"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    },
    {
      title: "Smart Address Finder App",
      description:
        "AI-powered app that extracts and organizes address data from text.",
      tech: ["C#", "Python", "AI", "API"],
      image:
        "/src/images/printBuscaCep.jpg",
    },
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software Development",
      description:
        "Tailored software solutions built to meet your specific business needs.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Modern, responsive web applications using cutting-edge technologies.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Solutions",
      description:
        "Robust database design, optimization, and management services.",
    },
  ];

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      number: "50+",
      label: "Happy Clients",
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: "100+",
      label: "Projects Completed",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      number: "5+",
      label: "Years Experience",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              We <span className="text-primary font-mono">GIVE</span> Life to
              Your Ideas
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional software development company specializing in custom
              solutions, web applications, and mobile development. We transform
              your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  View Our Work
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">About Us</h2>
              <p className="mb-6 text-gray-600">
                At Give, we specialize in creating innovative software
                solutions. Our dedicated team delivers professional projects
                tailored to meet your business needs, ensuring a seamless user
                experience.
              </p>
              <Button>Contact</Button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&q=70"
                alt="Programmer working on software development"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive software development services to help your
              business grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our recent work and success stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-md font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button size="lg" variant="outline">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your ideas to life with our
            expertise
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Get Started Today
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
