import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";
import { COMPANY, SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${COMPANY.name}. We're here to help with your technology needs. Contact us for consultations, quotes, or general inquiries.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Contact Us
            </span>
            <h1 className="heading-1 mt-3 mb-6">
              Let&apos;s discuss your project
            </h1>
            <p className="text-large">
              Have a project in mind? We&apos;d love to hear from you. Get in touch
              with our team and let&apos;s bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="card p-8">
              <h2 className="heading-3 mb-6">Send us a message</h2>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-border text-text-primary placeholder-text-quaternary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-border text-text-primary placeholder-text-quaternary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-border text-text-primary placeholder-text-quaternary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Company <span className="text-text-tertiary">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-border text-text-primary placeholder-text-quaternary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-border text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="software-development">Software Development</option>
                    <option value="it-consulting">IT Consulting</option>
                    <option value="data-analytics">Data & Analytics</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="telecommunications">Telecommunications</option>
                    <option value="accounting-tech">Accounting Technology</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-border text-text-primary placeholder-text-quaternary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="card p-8">
                <h3 className="text-lg font-semibold text-text-primary mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-center gap-4 text-text-secondary hover:text-primary transition-colors group"
                  >
                    <div className="icon-box">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-text-primary font-medium text-sm mb-0.5">Email</p>
                      <p className="text-sm">{COMPANY.email}</p>
                    </div>
                  </a>

                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="flex items-center gap-4 text-text-secondary hover:text-primary transition-colors group"
                  >
                    <div className="icon-box">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-text-primary font-medium text-sm mb-0.5">Phone</p>
                      <p className="text-sm">{COMPANY.phone}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 text-text-secondary">
                    <div className="icon-box flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-text-primary font-medium text-sm mb-0.5">Address</p>
                      <p className="text-sm">
                        {COMPANY.address.street}, {COMPANY.address.district}
                        <br />
                        {COMPANY.address.city}, {COMPANY.address.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 text-text-secondary">
                    <div className="icon-box flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-text-primary font-medium text-sm mb-0.5">Working Hours</p>
                      <p className="text-sm">
                        Mon - Fri: 8:00 AM - 6:00 PM (CAT)
                        <br />
                        Sat: 9:00 AM - 1:00 PM (CAT)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="card p-8">
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  Follow Us
                </h3>
                <p className="text-text-secondary text-sm mb-5">
                  Stay connected for the latest updates and tech insights.
                </p>
                <div className="flex gap-3">
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-bg-secondary border border-border flex items-center justify-center text-text-tertiary hover:bg-primary hover:border-primary hover:text-white transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-bg-secondary border border-border flex items-center justify-center text-text-tertiary hover:bg-primary hover:border-primary hover:text-white transition-all"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-bg-secondary border border-border flex items-center justify-center text-text-tertiary hover:bg-primary hover:border-primary hover:text-white transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="card p-0 overflow-hidden h-52">
                <div className="w-full h-full bg-bg-tertiary flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-text-primary font-medium">Kigali, Rwanda</p>
                    <p className="text-text-tertiary text-sm">East Africa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="heading-2 mt-3 mb-4">Frequently Asked Questions</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Common questions about working with us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What industries do you serve?",
                answer:
                  "We work with clients across finance, healthcare, education, retail, logistics, and government sectors.",
              },
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on scope. We provide detailed timelines during our initial consultation.",
              },
              {
                question: "Do you provide ongoing support?",
                answer:
                  "Yes, we offer comprehensive maintenance and support packages including bug fixes, updates, and technical assistance.",
              },
              {
                question: "What is your pricing model?",
                answer:
                  "We offer flexible pricing including fixed-price projects, time & materials, and retainer agreements.",
              },
              {
                question: "Can you work with existing systems?",
                answer:
                  "Yes, we specialize in integrating new solutions with existing systems and modernizing legacy applications.",
              },
            ].map((faq) => (
              <div key={faq.question} className="card">
                <h4 className="font-semibold text-text-primary mb-2">
                  {faq.question}
                </h4>
                <p className="text-text-secondary text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
