// src/pages/industries/banking-financial.tsx
import Layout from "../../components/Layout";

export default function BankingFinancialPage() {
  return (
    <Layout backgroundImage="/chicago1.jpg">
      {/* Header Section */}
      <section className="pt-32 pb-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Banking & Financial Services</h1>
        <p className="text-lg sm:text-xl text-gray-200">
          Strategic accounting and advisory for financial institutions navigating change and complexity.
        </p>
      </section>

      {/* Content Section */}
      <section className="bg-white text-black px-6 py-16 rounded-t-3xl shadow-lg">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Industry Insight</h2>
            <p className="mb-4">
              We recognize that the banking and financial services industry often demands more than traditional accounting services. Our professionals have deep experience helping institutions manage regulatory burdens, economic fluctuations, and tax complexities with tailored, proactive solutions.
            </p>
            <p className="mb-4">
              PNJK has supported a wide range of institutions including commercial and savings banks, credit unions, trust companies, broker-dealers, and registered investment advisors. We understand the evolving landscape and provide insights that meet your institution’s operational and compliance goals.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">How We Help</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Implementation of new accounting standards</li>
              <li>Investment impairment and complex accounting issues</li>
              <li>Regulatory examination support</li>
              <li>Investigation of embezzlement and fraud</li>
              <li>M&A support: branch and institutional acquisitions</li>
              <li>Due diligence for insurance agency acquisitions</li>
              <li>Capital loss & charitable contribution analysis</li>
              <li>Private foundation establishment and strategy</li>
              <li>Technology advisory including control reviews</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
