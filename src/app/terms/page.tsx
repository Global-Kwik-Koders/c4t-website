import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${COMPANY.name}. Read our terms and conditions for using our services.`,
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Legal
          </span>
          <h1 className="heading-1 mt-3 mb-6">Terms of Service</h1>
          <p className="text-text-tertiary mb-10">
            Last updated: December 2025
          </p>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="heading-3 mb-4">1. Agreement to Terms</h2>
                <p className="text-text-secondary mb-4">
                  By accessing or using the services provided by {COMPANY.fullName} (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">2. Services</h2>
                <p className="text-text-secondary mb-4">
                  {COMPANY.name} provides technology solutions including but not limited to:
                </p>
                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                  <li>Software development and programming</li>
                  <li>IT consulting and digital transformation</li>
                  <li>Cloud solutions and infrastructure</li>
                  <li>Data analytics and business intelligence</li>
                  <li>Telecommunications services</li>
                  <li>Accounting technology solutions</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-3 mb-4">3. Client Responsibilities</h2>
                <p className="text-text-secondary mb-4">
                  As a client, you agree to:
                </p>
                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                  <li>Provide accurate and complete information as required for service delivery</li>
                  <li>Respond to requests for information in a timely manner</li>
                  <li>Make payments according to agreed-upon terms</li>
                  <li>Use our services in compliance with applicable laws</li>
                  <li>Not misuse or attempt to gain unauthorized access to our systems</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-3 mb-4">4. Intellectual Property</h2>
                <p className="text-text-secondary mb-4">
                  Unless otherwise agreed in writing:
                </p>
                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                  <li>We retain ownership of all pre-existing intellectual property</li>
                  <li>Upon full payment, clients receive ownership or license rights to deliverables as specified in the project agreement</li>
                  <li>We may retain the right to use general knowledge and techniques gained during projects</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-3 mb-4">5. Confidentiality</h2>
                <p className="text-text-secondary mb-4">
                  Both parties agree to maintain the confidentiality of proprietary information shared during the course of our engagement. This includes business strategies, technical specifications, and any other information marked as confidential.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">6. Payment Terms</h2>
                <p className="text-text-secondary mb-4">
                  Payment terms are specified in individual project agreements. Generally:
                </p>
                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                  <li>Invoices are due within 30 days of issuance unless otherwise specified</li>
                  <li>Late payments may incur additional charges</li>
                  <li>We reserve the right to suspend services for overdue accounts</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-3 mb-4">7. Warranties and Disclaimers</h2>
                <p className="text-text-secondary mb-4">
                  We strive to deliver high-quality services but provide them &quot;as is&quot; without warranties of any kind, express or implied, except as specifically stated in project agreements. We do not guarantee that our services will be uninterrupted or error-free.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">8. Limitation of Liability</h2>
                <p className="text-text-secondary mb-4">
                  To the maximum extent permitted by law, {COMPANY.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">9. Termination</h2>
                <p className="text-text-secondary mb-4">
                  Either party may terminate services with written notice as specified in project agreements. Upon termination, clients are responsible for payment of all services rendered up to the termination date.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">10. Governing Law</h2>
                <p className="text-text-secondary mb-4">
                  These terms are governed by the laws of the Republic of Rwanda. Any disputes shall be resolved through arbitration in Kigali, Rwanda, or through the competent courts of Rwanda.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">11. Changes to Terms</h2>
                <p className="text-text-secondary mb-4">
                  We reserve the right to modify these terms at any time. Changes will be effective upon posting to our website. Continued use of our services after changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">12. Contact Information</h2>
                <p className="text-text-secondary mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-bg-secondary rounded-xl p-6 border border-border">
                  <p className="text-text-primary font-medium">{COMPANY.fullName}</p>
                  <p className="text-text-secondary">{COMPANY.address.street}, {COMPANY.address.district}</p>
                  <p className="text-text-secondary">{COMPANY.address.city}, {COMPANY.address.country}</p>
                  <p className="text-text-secondary mt-2">Email: {COMPANY.email}</p>
                  <p className="text-text-secondary">Phone: {COMPANY.phone}</p>
                </div>
              </section>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link href="/privacy" className="text-primary font-medium hover:underline">
              View Privacy Policy →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
