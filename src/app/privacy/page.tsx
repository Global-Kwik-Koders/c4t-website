import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${COMPANY.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Legal
          </span>
          <h1 className="heading-1 mt-3 mb-6">Privacy Policy</h1>
          <p className="text-text-tertiary mb-10">
            Last updated: December 2025
          </p>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="heading-3 mb-4">1. Introduction</h2>
                <p className="text-text-secondary mb-4">
                  {COMPANY.fullName} (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services or visit our website.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">2. Information We Collect</h2>
                <p className="text-text-secondary mb-4">
                  We may collect the following types of information:
                </p>

                <h3 className="text-lg font-semibold text-text-primary mt-6 mb-3">Personal Information</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                  <li>Name and contact details (email, phone number, address)</li>
                  <li>Company name and job title</li>
                  <li>Payment and billing information</li>
                  <li>Communication records and correspondence</li>
                </ul>

                <h3 className="text-lg font-semibold text-text-primary mt-6 mb-3">Technical Information</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Website usage data and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-3 mb-4">3. How We Use Your Information</h2>
                <p className="text-text-secondary mb-4">
                  We use your information for the following purposes:
                </p>
                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                  <li>To provide and maintain our services</li>
                  <li>To communicate with you about projects and services</li>
                  <li>To process payments and send invoices</li>
                  <li>To respond to inquiries and provide customer support</li>
                  <li>To send newsletters and marketing communications (with consent)</li>
                  <li>To improve our services and website</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-3 mb-4">4. Legal Basis for Processing</h2>
                <p className="text-text-secondary mb-4">
                  We process your personal data based on the following legal grounds:
                </p>
                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                  <li><strong>Contract:</strong> Processing necessary to fulfill our contractual obligations</li>
                  <li><strong>Consent:</strong> Where you have given explicit consent</li>
                  <li><strong>Legitimate Interest:</strong> For our business operations where your rights are not overridden</li>
                  <li><strong>Legal Obligation:</strong> Where required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-3 mb-4">5. Data Sharing and Disclosure</h2>
                <p className="text-text-secondary mb-4">
                  We do not sell your personal information. We may share your data with:
                </p>
                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                  <li><strong>Service Providers:</strong> Third parties who assist in our operations (hosting, analytics, payment processing)</li>
                  <li><strong>Business Partners:</strong> With your consent, for collaborative projects</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In case of merger, acquisition, or asset sale</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-3 mb-4">6. Data Security</h2>
                <p className="text-text-secondary mb-4">
                  We implement appropriate technical and organizational measures to protect your personal data, including:
                </p>
                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection</li>
                </ul>
                <p className="text-text-secondary mt-4">
                  However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">7. Data Retention</h2>
                <p className="text-text-secondary mb-4">
                  We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including:
                </p>
                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                  <li>Active client data: Duration of business relationship plus 7 years</li>
                  <li>Marketing data: Until you opt out or withdraw consent</li>
                  <li>Website analytics: Up to 26 months</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-3 mb-4">8. Your Rights</h2>
                <p className="text-text-secondary mb-4">
                  You have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                  <li><strong>Deletion:</strong> Request deletion of your data (subject to legal requirements)</li>
                  <li><strong>Restriction:</strong> Request restriction of processing</li>
                  <li><strong>Portability:</strong> Request transfer of your data</li>
                  <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
                </ul>
                <p className="text-text-secondary mt-4">
                  To exercise these rights, contact us using the details below.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">9. Cookies</h2>
                <p className="text-text-secondary mb-4">
                  Our website uses cookies to enhance your experience. Cookies are small files stored on your device. We use:
                </p>
                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand website usage</li>
                  <li><strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)</li>
                </ul>
                <p className="text-text-secondary mt-4">
                  You can control cookies through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">10. International Data Transfers</h2>
                <p className="text-text-secondary mb-4">
                  Your data may be transferred to and processed in countries outside Rwanda. We ensure appropriate safeguards are in place for such transfers, including standard contractual clauses or other approved mechanisms.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">11. Children&apos;s Privacy</h2>
                <p className="text-text-secondary mb-4">
                  Our services are not directed to individuals under 18. We do not knowingly collect personal data from children. If you believe we have collected data from a child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">12. Changes to This Policy</h2>
                <p className="text-text-secondary mb-4">
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">13. Contact Us</h2>
                <p className="text-text-secondary mb-4">
                  For questions about this Privacy Policy or to exercise your rights, please contact us:
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
            <Link href="/terms" className="text-primary font-medium hover:underline">
              View Terms of Service →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
