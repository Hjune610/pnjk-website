// src/pages/industries/construction.tsx
import Layout from "../../components/Layout";

export default function ConstructionPage() {
  return (
    <Layout backgroundImage="/chicago1.jpg">
      {/* Header */}
      <section className="pt-32 pb-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Construction</h1>
        <p className="text-lg sm:text-xl text-gray-200">
          Tailored accounting and advisory services for builders, developers, and contractors.
        </p>
      </section>

      {/* Content */}
      <section className="bg-white text-black px-6 py-16 rounded-t-3xl shadow-lg">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Industry Overview</h2>
            <p className="mb-4">
              We work with general contractors, commercial construction companies, large residential developers, construction managers, and specialty subcontractors. Our combination of strategic insight and personalized service helps lay the groundwork for long-term success and profitability.
            </p>
            <p className="mb-4">
              With deep experience in the construction industry, our professionals deliver the kind of specialized guidance typically found only at national firms—delivered with the hands-on approach you expect from a trusted partner.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">How We Help</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Project profitability evaluation methods</li>
              <li>Tax strategies for long-term contracts</li>
              <li>Compensation and incentive plan design</li>
              <li>Cash flow projections and budgeting</li>
              <li>Financial presentation for surety and banks</li>
              <li>Accounting system and technology analysis</li>
              <li>Assurance and accounting services</li>
              <li>Overhead cost rate audits</li>
              <li>Tax return preparation</li>
              <li>Local, state, and international taxation</li>
              <li>Cost segregation & Section 263 studies</li>
              <li>Business transaction & succession planning</li>
              <li>M&A consulting</li>
              <li>Internal control and system reviews</li>
              <li>Information system selection & assessment</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
