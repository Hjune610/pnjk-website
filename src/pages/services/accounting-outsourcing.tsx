// src/pages/services/accounting-outsourcing.tsx
import Layout from "../../components/Layout";

export default function AccountingOutsourcingPage() {
  return (
    <Layout backgroundImage="/chicago1.jpg">
      {/* Header */}
      <section className="pt-32 pb-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Accounting Outsourcing</h1>
        <p className="text-lg sm:text-xl text-gray-200">
          Scalable, dedicated virtual accounting departments tailored to your business.
        </p>
      </section>

      {/* Content */}
      <section className="bg-white text-black px-6 py-16 rounded-t-3xl shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="mb-4">
              The importance of daily bookkeeping cannot be overstated. Without proper accounting support, it&apos;s difficult to make informed decisions or understand the health of your business.
            </p>
            <p className="mb-4">
              PNJK assigns a dedicated team of professionals to serve as your virtual accounting department, including a full-charge bookkeeper and a manager. Additional staff can be added as your business grows.
            </p>
            <p className="mb-4">
              Whether you&apos;re a startup or a growing business, we offer customizable outsourcing solutions tailored to your operations, team, and reporting needs.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">Full-Charge Staff Accountant</h3>
            <p className="mb-4">
              Manages daily transactions like vendor bills, customer invoices, payments, and deposits. Maintains accurate ledgers for accounts receivable, payable, and cash, and provides routine reports.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">Accounting Manager</h3>
            <p className="mb-4">
              Reviews books periodically to ensure accuracy and completeness. Provides a detailed monthly financial report package and management letter outlining key business insights.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Our Accounting Services</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Post all bank transactions (daily, weekly, or monthly)</li>
              <li>Post all credit card transactions (daily, weekly, or monthly)</li>
              <li>Record all other business transactions</li>
              <li>Monthly, quarterly, and yearly account reconciliations</li>
              <li>Prepare year-end consolidated financial statements (GAAP)</li>
              <li>Provide accounting & tax advice for strategic planning and tax efficiency</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
