import type { Metadata } from "next";
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
} from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore our comprehensive technology services including software development, IT consulting, cloud solutions, and more. ${COMPANY.name} delivers excellence.`,
};

const iconMap: { [key: string]: React.ElementType } = {
  Code: Monitor,
  Lightbulb: Cpu,
  BarChart3: Database,
  Cloud: Cloud,
  Wifi: Network,
  Calculator: FileSpreadsheet,
};

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "Understanding your business, goals, and challenges through consultation.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Developing a comprehensive strategy and roadmap for your project.",
  },
  {
    step: "03",
    title: "Development",
    description: "Building your solution using agile methodologies with regular updates.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Deploying your solution and providing ongoing support for success.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="heading-1 mt-3 mb-6">
              Technology solutions for your business
            </h1>
            <p className="text-large">
              From custom software development to cloud infrastructure, we provide
              end-to-end technology services that drive digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom">
          <div className="space-y-12">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon] || Monitor;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-32 card p-8 md:p-10"
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-10 items-center ${
                      !isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content */}
                    <div className={!isEven ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-4 mb-5">
                        <div className="icon-box-lg">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h2 className="heading-3">{service.title}</h2>
                      </div>
                      <p className="text-text-secondary mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 text-text-secondary"
                          >
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact" className="btn-primary">
                        Contact Us
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>

                    {/* Visual */}
                    <div className={!isEven ? "lg:order-1" : ""}>
                      <div className="bg-bg-secondary rounded-xl p-10 border border-border flex items-center justify-center min-h-[280px]">
                        <div className="text-center">
                          <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                            <Icon className="w-10 h-10 text-primary" />
                          </div>
                          <span className="text-text-tertiary text-sm">
                            {service.shortDescription}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="heading-2 mt-3 mb-4">How we deliver projects</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our proven methodology ensures successful project delivery with
              transparency and collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="card text-center">
                <div className="text-4xl font-semibold text-primary mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Technologies
            </span>
            <h2 className="heading-2 mt-3 mb-4">Built with modern tools</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We use cutting-edge technologies to build scalable, secure, and
              high-performance solutions.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "AWS",
              "Azure",
              "Docker",
              "Kubernetes",
              "PostgreSQL",
              "MongoDB",
              "TypeScript",
              "GraphQL",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-white rounded-lg p-4 border border-border text-center hover:border-primary transition-colors"
              >
                <span className="text-text-primary text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-5">
              Need a custom solution?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Every business is unique. Let&apos;s discuss your specific requirements
              and create a tailored solution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
