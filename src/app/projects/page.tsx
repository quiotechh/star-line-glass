"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Building2, MapPin, Award, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Project {
  id: string;
  name: string;
  location: string;
  images: string[];
  description: string;
  category: string;
}

interface Client {
  name: string;
  logo: string;
  projectCount: number;
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Client data
  const clients: Client[] = [
    { name: "Zudio", logo: "/logo/zudio_logo.png", projectCount: 5 },
    {
      name: "Godrej Properties",
      logo: "/logo/godrej-seeklogo.png",
      projectCount: 3,
    },
    // { name: 'World Trade Center', logo: '/logos/wtc.png', projectCount: 2 },
    { name: "NIET", logo: "/logo/niet_logo.png", projectCount: 2 },
    { name: "Cantabil", logo: "/logo/cantabil_logo.png", projectCount: 2 },
    { name: "Beverly", logo: "/logo/beverly_logo.png", projectCount: 1 },
  ];

  // All projects
  const allProjects: Project[] = [
    {
      id: "World-Trade-Center",
      name: "World Trade Center - Ansal Plaza Mall",
      location: "New Delhi",
      images: ["/projects/ralling.jpeg", "/projects/ralling2.jpeg"],
      description:
        "Premium commercial railing installation at iconic World Trade Center mall",
      category: "Commercial",
    },
    {
      id: "zudio-krishna-nagar",
      name: "Zudio - Krishna Nagar",
      location: "Krishna Nagar, Delhi",
      images: [
        "/projects/krishna_nagar_zudio.jpeg",
        "/projects/krishna_nagar_zudio(2).jpeg",
      ],
      description:
        "Modern retail storefront glazing for Zudio fashion outlet in Krishna Nagar",
      category: "Commercial",
    },
    {
      id: "zudio-kashmiri-gate",
      name: "Zudio - Kashmiri Gate",
      location: "Kashmiri Gate, Delhi",
      images: [
        "/projects/kashmiri_gate_zudio.jpeg",
        "/projects/kashmere_gate_zudio.jpeg",
      ],
      description:
        "Complete glass facade installation for Zudio store at Kashmiri Gate metro station",
      category: "Commercial",
    },
    {
      id: "zudio-preet-vihar",
      name: "Zudio - Preet Vihar",
      location: "Preet Vihar, Delhi",
      images: [
        "/projects/preet_vihar_zudio.jpeg",
        "/projects/preet_vihar_zudio (2).jpeg",
      ],
      description:
        "Tempered glass storefront and display solutions for Zudio Preet Vihar outlet",
      category: "Commercial",
    },
    {
      id: "zudio-kaithal-haryana",
      name: "Zudio Store - Kaithal, Haryana",
      location: "Kaithal, Haryana",
      images: [
        "/projects/kaithlal_haryana_zudio.jpeg",
        "/projects/kaithlal_zudio.jpeg",
      ],
      description:
        "Comprehensive glazing project for Zudio retail store in Kaithal, Haryana",
      category: "Commercial",
    },
    {
      id: "hindon-zudio",
      name: "Zudio - Hindon",
      location: "Hindon Metro Station, Ghaziabad",
      images: ["/projects/hindon_metro_zudio.jpeg"],
      description:
        "Strategic retail glass installation at Hindon Metro Station for Zudio outlet",
      category: "Commercial",
    },
    {
      id: "NIET-college",
      name: "NIET College - Greater Noida",
      location: "Greater Noida",
      images: [
        "/projects/niet(1).jpeg",
        "/projects/niet(2).jpeg",
        "/projects/niet.jpeg",
      ],
      description:
        "Large-scale educational facility glazing for NIET College campus in Greater Noida",
      category: "Educational",
    },
    {
      id: "Godrej-sigma-03",
      name: "Godrej Sigma - 03",
      location: "Greater Noida",
      images: ["/projects/godrej_gk.jpeg"],
      description:
        "Premium residential tower glass facade for Godrej Sigma development",
      category: "Commercial",
    },
    {
      id: "Godrej-noida",
      name: "Godrej",
      location: "Sec 44, Noida",
      images: ["/projects/godrej_sec44.jpeg"],
      description:
        "High-rise commercial glazing solutions for Godrej property in Sector 44, Noida",
      category: "Commercial",
    },
    {
      id: "gurgaon",
      name: "Sec-39, Gurgaon",
      location: "Sec-39, Gurgaon",
      images: ["/projects/gurgaon_sec39.jpeg"],
      description:
        "Modern commercial building glass installation in Sector 39, Gurgaon",
      category: "Commercial",
    },
    {
      id: "SIGMA-3-godrej",
      name: "Godrej sigma - 03",
      location: "Greater Noida",
      images: [
        "/projects/greater_noida_godrej.jpeg",
        "/projects/gr_noida_godrej.jpeg",
      ],
      description:
        "Architectural glazing for Godrej Sigma residential complex in Greater Noida",
      category: "Commercial",
    },
    {
      id: "sec-103-gurgaon",
      name: "Sec-103, Gurgaon",
      location: "Sec-103, Gurgaon",
      images: ["/projects/sec103_gurgaon.jpeg"],
      description:
        "Commercial complex curtain wall system in Sector 103, Gurgaon",
      category: "Commercial",
    },
    {
      id: "banglore",
      name: "Century Real Estate",
      location: "Banglore",
      images: ["/projects/banglore.jpeg"],
      description:
        "Luxury residential glass facade for Century Real Estate project in Bangalore",
      category: "Residential",
    },
    {
      id: "manesar",
      name: "Sec-7",
      location: "Sec-7, Manesar",
      images: ["/projects/sec7_manesar.jpeg"],
      description:
        "Industrial and commercial glazing solutions in Sector 7, Manesar",
      category: "Commercial",
    },
    {
      id: "Plot-498-kundali",
      name: "Plot-498, Kundali",
      location: "Plot-498, Kundali, Haryana",
      images: ["/projects/haryana.jpeg"],
      description:
        "Residential property glass installation at Plot 498, Kundali, Haryana",
      category: "Residential",
    },
    {
      id: "Plot-242-kundali",
      name: "Plot-242, Kundali",
      location: "Plot-242, Kundali, Haryana",
      images: ["/projects/Plot 242 haryana.jpeg"],
      description:
        "Complete glazing solution for residential plot in Kundali, Haryana",
      category: "Residential",
    },
    {
      id: "Plot-342-kundali",
      name: "Plot-342, Kundali",
      location: "Plot-342, Kundali, Haryana",
      images: ["/projects/Plot 342 haryana.jpeg"],
      description:
        "Modern glass facade for residential development at Plot 342, Kundali",
      category: "Residential",
    },
    {
      id: "rohini",
      name: "Nithari",
      location: "Nithari Rohini Sec-22, Delhi",
      images: ["/projects/rohini.jpeg"],
      description:
        "Commercial storefront glazing in Nithari, Rohini Sector 22, Delhi",
      category: "Commercial",
    },
    {
      id: "kundali",
      name: "Kundali",
      location: "Kundali, Haryana",
      images: ["/projects/kundali haryana.jpeg"],
      description:
        "Comprehensive glass and glazing work for commercial property in Kundali",
      category: "Commercial",
    },
    {
      id: "Beverly-Golf-Avenue",
      name: "Beverly Golf Avenue",
      location: "Mohalli, Chandigarh",
      images: ["/projects/mohali.jpeg"],
      description:
        "Premium residential tower glazing at Beverly Golf Avenue, Mohali, Chandigarh",
      category: "Residential",
    },
  ];

  const categories = ["all", "Residential", "Commercial"];

  const filteredProjects =
    selectedCategory === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Client Carousel */}
      <ClientCarousel clients={clients} />

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#13007D] mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-[#FB0309] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our portfolio of exceptional glass installations across
              various sectors
            </p>
          </motion.div>

          {/* Category Tabs */}
          <Tabs
            defaultValue="all"
            className="mb-12"
            onValueChange={setSelectedCategory}
          >
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-2 sm:grid-cols-5 h-auto gap-2 bg-transparent">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-[#13007D] data-[state=active]:text-white bg-white border-2 border-gray-200 hover:border-[#13007D] transition-all py-3 px-4 capitalize rounded-lg"
                >
                  {category === "all" ? "All Projects" : category}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-12">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}

// Hero Section
function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-[#13007D] via-[#13007D]/95 to-[#13007D]/80"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-repeat animate-pulse"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-6 bg-[#FB0309] hover:bg-[#FB0309]/90 text-white px-6 py-2 text-sm">
            Portfolio
          </Badge>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
            Our <span className="text-[#FB0309]">Projects</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8">
            Transforming spaces with premium glass solutions
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-white">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Award className="h-5 w-5 text-[#FB0309]" />
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Building2 className="h-5 w-5 text-[#FB0309]" />
              <span>500+ Projects</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection() {
  const stats = [
    { number: "15+", label: "Projects Completed", icon: Building2 },
    { number: "6+", label: "Major Clients", icon: Users },
    { number: "15+", label: "Years of Excellence", icon: Award },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#13007D]/10 mb-4">
                  <Icon className="h-8 w-8 text-[#13007D]" />
                </div>
                <h3 className="text-4xl sm:text-5xl font-bold text-[#13007D] mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Client Carousel
function ClientCarousel({ clients }: { clients: Client[] }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#13007D] mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-gray-600">
            Partnering with industry leaders to deliver excellence
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -50 + "%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={index}
                className="shrink-0 w-32 sm:w-40 md:w-48"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-center h-24 transition-all duration-300">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Project Card Component
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden border-2 hover:border-[#13007D] transition-all hover:shadow-2xl group h-full">
        {/* Image Carousel */}
        <div className="relative h-64 bg-linear-to-br from-gray-100 to-gray-200">
          <Carousel
            className="w-full h-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {project.images.map((image, idx) => (
                <CarouselItem key={idx}>
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={image}
                      alt={`${project.name} - Image ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>

          {/* Category Badge */}
          <Badge className="absolute top-4 left-4 bg-[#13007D] text-white z-10">
            {project.category}
          </Badge>
        </div>

        {/* Content */}
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-[#13007D] mb-3 group-hover:text-[#FB0309] transition-colors line-clamp-2">
            {project.name}
          </h3>

          <div className="flex items-center gap-2 text-gray-600 mb-3">
            <MapPin className="h-4 w-4 text-[#FB0309] shrink-0" />
            <span className="text-sm">{project.location}</span>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
