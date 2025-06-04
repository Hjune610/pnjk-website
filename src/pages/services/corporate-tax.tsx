// src/pages/services/corporate-tax.tsx
import Layout from "@/components/Layout";

export default function CorporateTaxPage() {
  return (
    <Layout backgroundImage="/chicago1.jpg">
      {/* Header over background image */}
      <section className="pt-32 pb-20 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Corporate Tax</h1>
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
          Helping you navigate tax complexity with clarity, strategy, and compliance.
        </p>
      </section>

      {/* Main content section */}
      <section className="bg-white text-black px-6 py-16 rounded-t-3xl rounded-b-3xl shadow-lg">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Strategic Tax Planning</h2>
            <p>
              Taxes have a direct impact on corporate profitability and play a pivotal role in shaping business strategy. At PNJK, we offer a full spectrum of integrated tax services tailored to support your company’s growth—locally and globally.
            </p>
            <p>
              Our experienced tax professionals stay up to date with the latest legislative changes, ensuring that your company maximizes all available opportunities while maintaining full compliance with federal, state, and international regulations.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Our Corporate Tax Services:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Federal & State Tax Compliance</li>
              <li>Tax Provision Calculation & Reporting</li>
              <li>Uncertain Tax Position (UTP) Review</li>
              <li>Multi-State Nexus Tax Study</li>
            </ul>
            <p>
              Whether you're managing growth, entering new markets, or optimizing your current operations, PNJK’s tax planning support helps you make confident decisions with a focus on long-term profitability.
            </p>
          </div>

        </div>
      </section>
    </Layout>
  );
}
