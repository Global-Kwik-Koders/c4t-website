import Link from "next/link";
import {
  ArrowRight,
  Monitor,
  Cpu,
  Database,
  Cloud,
  Network,
  FileSpreadsheet,
  CheckCircle,
  Globe,
  Users,
  Award,
  Headphones,
} from "lucide-react";
import { COMPANY, SERVICES, STATS } from "@/lib/constants";
import AfricaMap from "@/components/AfricaMap";

const iconMap: { [key: string]: React.ElementType } = {
  Code: Monitor,
  Lightbulb: Cpu,
  BarChart3: Database,
  Cloud: Cloud,
  Wifi: Network,
  Calculator: FileSpreadsheet,
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center pt-20 pb-10 md:pt-24 md:pb-12 relative overflow-hidden">
        {/* Africa Map Background - responsive */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none hidden md:block w-[350px] h-[400px] md:w-[400px] md:h-[450px] lg:w-[500px] lg:h-[550px] xl:w-[550px] xl:h-[600px]">
          <AfricaMap />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0 lg:max-w-2xl">
            {/* Badge */}
            <div className="badge mb-6 inline-flex">
              <Globe className="w-3.5 h-3.5 mr-1.5" />
              Serving Rwanda & Beyond
            </div>

            {/* Main Heading */}
            <h1 className="heading-1 mb-6">
              We build digital solutions that{" "}
              <span className="gradient-text">drive growth</span>
            </h1>

            {/* Description */}
            <p className="text-large max-w-2xl mx-auto lg:mx-0 mb-10">
              {COMPANY.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/services" className="btn-secondary">
                Our Services
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16 max-w-4xl mx-auto lg:mx-0">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center p-4 md:p-6 rounded-xl bg-bg-secondary">
                <div className="text-2xl md:text-4xl font-semibold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-text-tertiary text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-14">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="heading-2 mt-3 mb-4">Our Services</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              End-to-end technology solutions that help businesses thrive in the digital age.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon] || Monitor;
              return (
                <div key={service.id} className="card">
                  <div className="icon-box-lg mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    {service.shortDescription}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {service.features.slice(0, 3).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-text-tertiary"
                      >
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-primary text-sm font-medium inline-flex items-center hover:underline"
                  >
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="heading-2 mt-3 mb-5">
                Your trusted technology partner
              </h2>
              <p className="text-text-secondary mb-8">
                We combine deep technical expertise with a client-centric approach.
                Our team delivers solutions that make a real difference for your business.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Globe,
                    title: "Regional & Global Reach",
                    description:
                      "Based in Rwanda, serving clients across Africa and internationally.",
                  },
                  {
                    icon: Users,
                    title: "Expert Team",
                    description:
                      "Experienced professionals with diverse industry backgrounds.",
                  },
                  {
                    icon: Headphones,
                    title: "Dedicated Support",
                    description:
                      "Ongoing maintenance and support to ensure your success.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="icon-box flex-shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">
                        {item.title}
                      </h4>
                      <p className="text-text-secondary text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="bg-bg-secondary rounded-2xl p-10 border border-border">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Monitor, label: "Modern Stack" },
                  { icon: Cloud, label: "Cloud Native" },
                  { icon: Award, label: "Quality Assured" },
                  { icon: Cpu, label: "Scalable Solutions" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white rounded-xl p-6 border border-border text-center"
                  >
                    <div className="icon-box-lg mx-auto mb-3">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium text-text-primary">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-5">
              Ready to start your project?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Let&apos;s discuss how we can help you achieve your technology goals.
              Get in touch with our team today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-7 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
