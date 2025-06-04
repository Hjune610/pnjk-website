// src/pages/services/forensic-litigation.tsx
import Layout from "../../components/Layout";

export default function ForensicLitigationPage() {
  return (
    <Layout backgroundImage="/chicago1.jpg">
      {/* Header */}
      <section className="pt-32 pb-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Forensic & Litigation Support</h1>
        <p className="text-lg sm:text-xl text-gray-200">
          Investigative expertise and litigation support to protect your financial interests.
        </p>
      </section>

      {/* Content */}
      <section className="bg-white text-black px-6 py-16 rounded-t-3xl shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">

          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="mb-4">
              Our Valuation and Forensic Team probes deep to uncover the truth and move matters forward efficiently. With a high tolerance for ambiguity, we convert complex data into actionable insights.
              PNJK professionals are frequently called upon to serve as expert witnesses in litigation matters, known for clarity, objectivity, and credibility.
            </p>
            <p className="mb-4">
              Our team consists of Certified Public Accountants (CPAs) and Certified Fraud Examiners (CFEs) who bring technical expertise, experience, and independence to even the most sensitive financial investigations and disputes.
            </p>
            <p className="mb-4">
              We are committed to providing high-quality resolutions and innovative strategies for protecting financial interests damaged by fraud, misconduct, or contractual conflicts.
            </p>
            <p className="mb-4">
              With a multidisciplinary mindset and deep industry understanding, we&apos;ve performed thousands of valuations that have stood up under regulatory and legal scrutiny.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Services Provided</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Economic Damage Analysis</li>
              <li>Business Valuations</li>
              <li>Forensic Accounting</li>
              <li>Fraud Investigations</li>
              <li>Intellectual Property Disputes</li>
              <li>Insurance Claim Analysis</li>
              <li>Shareholder Disputes</li>
              <li>Insolvency & Bankruptcy</li>
              <li>White Collar Criminal Tax Defense</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
