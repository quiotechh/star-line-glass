"use client";

import { useState, useRef, FormEvent } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  Building2,
  ArrowRight,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "success" | "error" | null;
  message: string;
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Contact Form & Info Combined Section */}
      <ContactSection />

      {/* Map Section */}
      <MapSection />
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
      className="relative h-[50vh] min-h-[400px] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/contact_1.jpg"
          alt="Contact Image"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      <div className="relative flex h-full items-center px-4 sm:px-8 lg:px-16">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Let{"'"}s Start a{" "}
              <span className="text-[#FB0309]">Conversation</span>
            </h1>
            <p className="text-lg text-gray-200 md:text-xl">
              We{"'"}re here to help you with your glass manufacturing needs.
              Get in touch with our expert team today.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const serviceId = "service_1o3uflg";
      const templateId = "template_7f6gfyn";
      const publicKey = "qoXYjVQBNPQ9E9bud";

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey,
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! We will get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["Sales: +91 9811031824", "Enquiry: +91 9811031849"],
      link: "tel:+919811031824",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["starlineglassind22@gmail.com"],
      link: "mailto:starlineglassind22@gmail.com",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: Closed"],
      link: null,
      color: "bg-orange-50 text-orange-600",
    },
    {
      icon: Building2,
      title: "Visit Us",
      details: ["Khasra No. 712 Khasra No. 713, Industrial Area, Meerut road, Behind HLM College, Vill Duhai, Muradnagar, Ghaziabad, UP 201206"],
      link: null,
      color: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <section
      ref={ref}
      className="bg-linear-to-b from-white to-gray-50 py-16 md:py-24"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        {/* Contact Cards Grid */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-2xl"
              >
                <div
                  className={`mb-4 inline-flex rounded-xl p-3 ${card.color}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">
                  {card.title}
                </h3>
                {card.details.map((detail, idx) => (
                  <p key={idx} className="text-sm text-gray-600">
                    {card.link && idx === 0 ? (
                      <Link
                        href={card.link}
                        className="hover:text-[#FB0309] transition-colors font-medium"
                      >
                        {detail}
                      </Link>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#FB0309] transition-all duration-300 group-hover:w-full"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Form and Info Row */}
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Form - Takes 3 columns */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="rounded-2xl bg-white p-8 shadow-xl md:p-10">
              <div className="mb-8">
                <h2 className="mb-2 text-3xl font-bold text-[#13007D]">
                  Send us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we{"'"}ll get back to you shortly.
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-all focus:border-[#13007D] focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-all focus:border-[#13007D] focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-all focus:border-[#13007D] focus:outline-none"
                      placeholder="+91 98110 31849"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-all focus:border-[#13007D] focus:outline-none"
                      placeholder="Project Inquiry"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-all focus:border-[#13007D] focus:outline-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {status.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-3 rounded-xl p-4 ${
                      status.type === "success"
                        ? "bg-green-50 text-green-800"
                        : "bg-red-50 text-red-800"
                    }`}
                  >
                    {status.type === "success" && (
                      <CheckCircle className="h-5 w-5" />
                    )}
                    <p className="text-sm font-medium">{status.message}</p>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#13007D] px-8 py-4 font-semibold text-white transition-all hover:bg-[#13007D]/90 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Side Info - Takes 2 columns */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <div className="sticky top-24 space-y-6">
              {/* Why Contact Us Card */}
              <div className="rounded-2xl bg-linear-to-br from-[#13007D] to-[#13007D]/80 p-8 text-white shadow-xl">
                <h3 className="mb-4 text-2xl font-bold">Why Contact Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#FB0309]" />
                    <span>Expert consultation for your glass needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#FB0309]" />
                    <span>Custom solutions tailored to your project</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#FB0309]" />
                    <span>Quick response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#FB0309]" />
                    <span>20+ years of industry experience</span>
                  </li>
                </ul>
              </div>

              {/* Visit Factory Card */}
              <div className="rounded-2xl border-2 border-[#FB0309] bg-white p-6 shadow-lg">
                <MapPin className="mb-3 h-8 w-8 text-[#FB0309]" />
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Visit Our Factory
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  Schedule a tour to see our state-of-the-art manufacturing
                  facility in action.
                </p>
                <Link
                  href="https://www.google.com/search?sca_esv=2d75fd89a7b477b4&authuser=1&sxsrf=ANbL-n4wj2XZr3prMvGNaHc9V1A8sbaKVA:1769595077173&kgmid=/g/11wtph0ngd&q=STAR+LINE+GLASS+INDUSTRIES+(Unit+-+2)&shem=bdsle,ptotple,shrtsdl&shndl=30&source=sh/x/loc/uni/m1/1&kgs=0df508bdad3cefbb&utm_source=bdsle,ptotple,shrtsdl,sh/x/loc/uni/m1/1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-semibold text-[#FB0309] transition-all hover:gap-3"
                >
                  Get Directions
                  <ArrowRight className="h-4 w-4 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Map Section
function MapSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="mb-4 text-4xl font-bold text-[#13007D]">
            Find Us on Map
          </h2>
          <div className="mx-auto mb-4 h-1 w-24 bg-[#FB0309]"></div>
          <p className="text-lg text-gray-600">
            Visit our manufacturing facility to see our operations
          </p>
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-2xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.9873847392426!2d77.31694231508076!3d28.58059798243891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzUwLjIiTiA3N8KwMTknMDguMiJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </motion.div>

        {/* Location Buttons */}
        <motion.div
          className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Link
            href="https://share.google/F3kk9oliqdApAvxdw"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 rounded-xl bg-[#13007D] px-8 py-4 font-semibold text-white transition-all hover:bg-[#13007D]/90 hover:shadow-lg"
          >
            <MapPin className="h-5 w-5" />
            Primary Location
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="https://share.google/HWnCXy7LadKgtxjau"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 rounded-xl border-2 border-[#13007D] bg-white px-8 py-4 font-semibold text-[#13007D] transition-all hover:bg-[#13007D] hover:text-white"
          >
            <MapPin className="h-5 w-5" />
            Secondary Location
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
