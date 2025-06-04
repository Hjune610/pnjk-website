// src/pages/industries/manufacturing-distribution.tsx
import Layout from "../../components/Layout";

export default function ManufacturingDistributionPage() {
  return (
    <Layout backgroundImage="/chicago1.jpg">
      {/* Header */}
      <section className="pt-32 pb-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Manufacturing & Distribution
        </h1>
        <p className="text-lg sm:text-xl text-gray-200">
          Strategic guidance to help industrial businesses thrive in a competitive marketplace.
        </p>
      </section>

      {/* Content */}
      <section className="bg-white text-black px-6 py-16 rounded-t-3xl shadow-lg">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Industry Expertise</h2>
            <p className="mb-4">
              We serve a diverse range of manufacturing and distribution clients, from startups seeking capital to established businesses preparing for exit strategies. Our goal is to increase operational efficiency, manage risk, and drive profitability through tailored financial and strategic services.
            </p>
            <p className="mb-4">
              In addition to traditional accounting, audit, and tax support, our team offers industry-specific insights that help you make informed decisions throughout your business lifecycle.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Our Services Include:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Audits, Reviews, and Compilations</li>
              <li>Business Valuations</li>
              <li>Buy/Lease Agreements</li>
              <li>International Services</li>
              <li>Inventory Control Procedures</li>
              <li>Inventory Cost Study</li>
              <li>Mergers and Acquisitions</li>
              <li>State and Local Tax Consulting</li>
              <li>Strategic Planning</li>
              <li>Tax Planning and Compliance</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
