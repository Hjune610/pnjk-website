// src/pages/services/individual-tax.tsx
import Layout from "@/components/Layout";

export default function IndividualTaxPage() {
  return (
    <Layout backgroundImage="/chicago1.jpg">
      {/* Header over background */}
      <section className="pt-32 pb-20 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Individual Tax</h1>
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
          Personalized tax strategies that align your business activities with your long-term financial goals.
        </p>
      </section>

      {/* White content section */}
      <section className="bg-white text-black px-6 py-16 rounded-t-3xl rounded-b-3xl shadow-lg">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Tailored Planning for Your Life</h2>
            <p>
              At PNJK, we go beyond basic tax filing—we build trusted, long-term relationships with individuals and families to provide insight, strategy, and peace of mind. Your personal and business finances are often interconnected, especially if you’re a shareholder, partner, or owner of a flow-through entity.
            </p>
            <p>
              From the timing and classification of income to retirement planning and estate strategies, our professionals ensure that your tax approach is comprehensive and responsive to your entire financial picture.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Our Individual Tax Services:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Income Tax Planning & Compliance</li>
              <li>Federal and State Tax Return Preparation (including multi-state)</li>
              <li>IRS & State Audit Representation</li>
              <li>Retirement Tax Planning</li>
              <li>Gift & Estate Plan Reviews</li>
              <li>Estate & Trust Planning</li>
              <li>Tax Penalty Appeals</li>
            </ul>
            <p>
              With PNJK as your advisor, you gain proactive guidance from professionals who stay ahead of tax law changes—and understand how those changes affect you.
            </p>
          </div>

        </div>
      </section>
    </Layout>
  );
}
