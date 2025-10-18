import React from 'react';
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";

const TermsOfServicePage: React.FC = () => {
  // --- IMPORTANT: Customize these variables ---
  const companyName = "Mike Pfunk"; // Or your official company name
  const websiteName = "mikepfunk.com";
  const serviceName = "AI-Forge";
  const websiteUrl = "https://mikepfunk.com";
  const serviceUrl = "https://ai-forge.mikepfunk.com";
  const effectiveDate = "October 18, 2025";
  const contactEmail = "support@mikepfunk.com"; // TODO: Replace with your actual contact email
  const jurisdiction = "the State of Massachusetts, United States"; // TODO: Replace with your actual state/country

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8 mt-20">
        <Card className="glass-morph p-8 md:p-12 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-funk-blue text-glow mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-funk-grey mb-8">
            Last Updated: {effectiveDate}
          </p>

          <p className="mb-6 text-funk-grey">
            Welcome to {websiteName} and its subdomains, including the {serviceName} service ({serviceUrl}). These Terms of Service ("Terms") govern your access to and use of our websites, services, and applications (collectively, the "Service"). Please read these Terms carefully before using the Service.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-funk-blue mb-3">1. Acceptance of Terms</h2>
            <p className="text-funk-grey">
              By accessing or using our Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-funk-blue mb-3">2. Description of Service</h2>
            <p className="text-funk-grey">
              The Service, including {serviceName}, provides users with access to a variety of AI-powered tools and resources. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We reserve the right to modify, suspend, or discontinue the Service at any time with or without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-funk-blue mb-3">3. User Accounts</h2>
            <p className="text-funk-grey">
              To access certain features of the Service, such as {serviceName}, you may be required to create an account. You can do this through third-party services like Google. You are responsible for safeguarding your account and for all activities that occur under your account. You agree to provide accurate, current, and complete information during the registration process.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-funk-blue mb-3">4. User Conduct</h2>
            <p className="text-funk-grey">You agree not to use the Service to:</p>
            <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-funk-grey">
              <li>Violate any applicable local, state, national, or international law.</li>
              <li>Generate or transmit any content that is unlawful, harmful, defamatory, obscene, or otherwise objectionable.</li>
              <li>Infringe upon the intellectual property rights of others.</li>
              <li>Attempt to gain unauthorized access to the Service, other accounts, or computer systems connected to the Service.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-funk-blue mb-3">5. Disclaimer of Warranties</h2>
            <p className="text-funk-grey">
              The Service is provided without warranties of any kind, either express or implied. {companyName} does not warrant that the Service will be uninterrupted, error-free, or secure. Your use of the Service is at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-funk-blue mb-3">6. Limitation of Liability</h2>
            <p className="text-funk-grey">
              To the fullest extent permitted by applicable law, {companyName} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, resulting from your use of the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-funk-blue mb-3">7. Governing Law</h2>
            <p className="text-funk-grey">
              These Terms shall be governed and construed in accordance with the laws of {jurisdiction}, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-funk-blue mb-3">8. Changes to Terms</h2>
            <p className="text-funk-grey">
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-funk-blue mb-3">9. Contact Us</h2>
            <p className="text-funk-grey">
              If you have any questions about these Terms, please contact us at: <a href={`mailto:${contactEmail}`} className="text-funk-blue hover:underline">{contactEmail}</a>.
            </p>
          </section>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;