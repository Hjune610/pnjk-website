// src/pages/services/mergers-acquisitions.tsx
import Layout from "@/components/Layout";

export default function MergersAcquisitionsPage() {
  return (
    <Layout backgroundImage="/chicago1.jpg">
      {/* Header over background image */}
      <section className="pt-32 pb-20 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Mergers & Acquisitions</h1>
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
          Maximizing value, minimizing risk — guiding buyers and sellers through every step of the transaction.
        </p>
      </section>

      {/* Main content section */}
      <section className="bg-white text-black px-6 py-16 rounded-t-3xl rounded-b-3xl shadow-lg">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Our Approach</h2>
            <p>
              At PNJK, we help sellers achieve the highest after-tax proceeds and assist buyers in structuring deals that optimize future tax benefits. Our balanced approach fosters collaboration between negotiating parties, paving the way for smoother transactions and long-term success.
            </p>
            <p>
              Whether you're planning your exit, evaluating growth through acquisition, or considering a merger, our professionals provide tailored insights that align with your strategic objectives.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Our M&A Services Include:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Consulting on Purchase Accounting</li>
              <li>Due Diligence</li>
              <li>Strategic Planning</li>
              <li>Merger & Acquisition Target Identification</li>
              <li>Business Valuation</li>
              <li>Contract Negotiation & Review</li>
              <li>Strategic Tax Structuring</li>
              <li>Exit Strategy Analysis</li>
              <li>Positioning Your Company for Sale</li>
              <li>Buyer-Side Consulting</li>
            </ul>
          </div>

        </div>
      </section>
    </Layout>
  );
}
