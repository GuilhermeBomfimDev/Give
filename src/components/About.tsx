import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, Target, Lightbulb, Heart } from "lucide-react";

function About() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "We GIVE with Passion",
      description:
        "Every project is crafted with dedication and attention to detail, ensuring exceptional results.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Client-Focused Approach",
      description:
        "Your success is our priority. We work closely with you to understand and exceed your expectations.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description:
        "We stay ahead of technology trends to deliver cutting-edge solutions that drive your business forward.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Team",
      description:
        "Our diverse team of experts works together to bring different perspectives and skills to every project.",
    },
  ];

  const team = [
    {
      name: "Eduardo Pimentel",
      role: "Backend and Automations Developer & Tech Lead",
      image: "/images/perfilEduardo.jpg",
      description:
        "5+ years of experience in software architecture, automation systems and team leadership.",
    },
    {
      name: "Guilherme Bomfim",
      role: "Full-Stack Web Developer",
      image: "/images/perfilGuilherme1.jpg",
      description:
        "3+ years in modern web technologies and cloud infrastructure.",
    },
    {
      name: "Victor Menezes",
      role: "Mobile Developer",
      image: "/images/perfilVictor.jpg",
      description:
        "Mid-level developer in iOS and Android development with 2+ years of experience.",
    },
    /*{
      name: "João Pedro",
      role: "UI/UX Designer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
      description:
        "Creates beautiful and intuitive user experiences that users love.",
    },*/
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-primary font-mono">GIVE</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a passionate team of software developers, designers, and
              innovators dedicated to creating exceptional digital solutions
              that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2025, GIVE began as a simple idea between two
                  friends: create personal projects that could make everyday
                  life. But soon we thought, “Why not do this for others too?”
                  That spark turned into a mission to help businesses of all
                  sizes solve problems and unlock their full potential through
                  technology.
                </p>
                <p>
                  For us, great software is more than just code – it’s about
                  understanding each client’s unique challenges, crafting
                  solutions that truly make a difference, and delivering results
                  that exceed expectations. Every project is an opportunity to
                  GIVE our best.
                </p>
                <p>
                  Today, what started with two passionate developers has grown
                  into a full-service software house, helping companies turn
                  their ideas into impactful digital products – and we’re just
                  getting started.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we work
              with our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      {value.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented individuals who make GIVE's success possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full"
                    />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
            To GIVE businesses of all sizes the power of technology by crafting
            innovative, reliable, and scalable software solutions. What began as
            a passion for creating tools to make life easier has become our
            commitment to helping others achieve growth, efficiency, and lasting
            success. We strive to be your trusted technology partner on every
            step of your digital transformation journey.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
