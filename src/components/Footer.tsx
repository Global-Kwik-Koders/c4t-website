import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-border">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/CGI Logo-Transparent-v1.png"
                alt="C4T Global Impact"
                width={160}
                height={45}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Leading technology solutions provider based in Rwanda, delivering innovative digital services across Africa and beyond.
            </p>
            <div className="flex gap-3">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-bg-tertiary flex items-center justify-center text-text-tertiary hover:bg-primary hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-bg-tertiary flex items-center justify-center text-text-tertiary hover:bg-primary hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-bg-tertiary flex items-center justify-center text-text-tertiary hover:bg-primary hover:text-white transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-primary font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-text-primary font-semibold mb-5">Services</h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-text-secondary text-sm hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-text-primary font-semibold mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-text-secondary text-sm hover:text-primary transition-colors flex items-center gap-2.5"
                >
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{COMPANY.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-text-secondary text-sm hover:text-primary transition-colors flex items-center gap-2.5"
                >
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{COMPANY.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-text-secondary text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  {COMPANY.address.street}, {COMPANY.address.district}
                  <br />
                  {COMPANY.address.city}, {COMPANY.address.country}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-custom py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-tertiary text-sm">
              &copy; {currentYear} {COMPANY.fullName}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-text-tertiary hover:text-text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-text-tertiary hover:text-text-secondary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
