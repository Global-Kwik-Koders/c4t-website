import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  Rocket,
  Award,
  Shield,
  Users,
} from "lucide-react";
import { COMPANY, VALUES, STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${COMPANY.name} - our mission, vision, values, and innovative technology solutions.`,
};

const iconMap: { [key: string]: React.ElementType } = {
  Rocket,
  Award,
  Shield,
  Users,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="heading-1 mt-3 mb-6">
              Driving digital innovation in Africa
            </h1>
            <p className="text-large">
              {COMPANY.name} is a technology company committed to delivering innovative
              solutions that empower businesses and communities across the continent.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-bg-secondary border-y border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-semibold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-text-tertiary text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="heading-2 mt-3 mb-6">
                Building the future of technology in Africa
              </h2>
              <div className="space-y-4 text-text-secondary">
                <p>
                  {COMPANY.fullName} was founded with a simple yet powerful vision: to
                  bridge the technology gap and empower businesses across Africa with
                  world-class digital solutions.
                </p>
                <p>
                  Based in Kigali, Rwanda—a hub of innovation and technological
                  advancement—we bring together a team of passionate engineers,
                  designers, and strategists dedicated to transforming ideas into
                  impactful digital products.
                </p>
                <p>
                  Our journey began with a commitment to excellence and a deep
                  understanding of the unique challenges and opportunities in the
                  African market. Today, we serve clients across multiple industries.
                </p>
              </div>
            </div>

            {/* Visual */}
            <div className="bg-bg-secondary rounded-2xl p-10 border border-border">
              <div className="text-center">
                <div className="text-7xl font-semibold text-primary mb-3">
                  {COMPANY.founded}
                </div>
                <div className="text-text-secondary">Year Founded</div>
                <div className="divider my-8" />
                <div className="text-text-secondary">
                  Headquartered in <span className="text-text-primary font-medium">Kigali, Rwanda</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="card">
              <div className="icon-box-lg mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="heading-3 mb-4">Our Mission</h3>
              <p className="text-text-secondary">
                To empower businesses and organizations with innovative technology
                solutions that drive growth, efficiency, and positive impact. We are
                committed to delivering excellence in every project.
              </p>
            </div>

            {/* Vision */}
            <div className="card">
              <div className="icon-box-lg mb-5">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="heading-3 mb-4">Our Vision</h3>
              <p className="text-text-secondary">
                To be the leading technology partner for businesses across Africa and
                beyond, recognized for our innovation, integrity, and impact in enabling
                organizations to reach their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="heading-2 mt-3 mb-4">What drives us forward</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our core values guide everything we do, from how we build solutions to
              how we interact with clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value) => {
              const Icon = iconMap[value.icon] || Rocket;
              return (
                <div key={value.title} className="card text-center">
                  <div className="icon-box-lg mx-auto mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-5">
              Ready to work with us?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Let&apos;s collaborate to bring your ideas to life. Our team is ready to
              help you achieve your technology goals.
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
