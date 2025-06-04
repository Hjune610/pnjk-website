// src/pages/services/international-tax.tsx
import Layout from "@/components/Layout";

export default function InternationalTaxPage() {
  return (
    <Layout backgroundImage="/chicago1.jpg">
      {/* Header section over background image */}
      <section className="pt-32 pb-20 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">International Tax</h1>
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
          Expert international tax strategies for a globally connected business world.
        </p>
      </section>

      {/* Main content section */}
      <section className="bg-white text-black px-6 py-16 rounded-t-3xl rounded-b-3xl shadow-lg">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Global Expertise for Growing Businesses</h2>
            <p>
              The globalization of trade and investment has reshaped the landscape of international taxation. With multiple jurisdictions competing for tax revenue, navigating compliance while optimizing returns has never been more complex—or more important.
            </p>
            <p>
              At PNJK, our experienced international tax team helps mid-sized companies develop strategies that align global operations with long-term business objectives. We understand how to minimize exposure, remain compliant, and identify planning opportunities across borders.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Our International Tax Services:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Business Entity Selection for International Operations</li>
              <li>Transfer Pricing Planning & Documentation</li>
              <li>Cross-Border Tax Planning, Consulting, and Reviews</li>
            </ul>
            <p>
              Whether expanding abroad or optimizing existing global structures, PNJK can help ensure your international tax strategy is aligned, efficient, and future-ready.
            </p>
          </div>

        </div>
      </section>
    </Layout>
  );
}
