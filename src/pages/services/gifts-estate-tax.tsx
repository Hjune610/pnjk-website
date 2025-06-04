// src/pages/services/gifts-estate-tax.tsx
import Layout from "@/components/Layout";

export default function GiftsEstateTaxPage() {
  return (
    <Layout backgroundImage="/chicago1.jpg">
      {/* Header section */}
      <section className="pt-32 pb-20 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Gifts & Estate Tax</h1>
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
          Thoughtful estate and gift planning to preserve your legacy and reduce tax burdens for generations to come.
        </p>
      </section>

      {/* White content section */}
      <section className="bg-white text-black px-6 py-16 rounded-t-3xl rounded-b-3xl shadow-lg">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Estate & Trust Administration</h2>
            <p>
              PNJK collaborates with your legal and financial advisors to guide you through the complex processes of estate administration and trust taxation. Our team provides reliable support with federal and state filings, fiduciary reporting, and post-mortem planning to ensure a smooth transition of wealth and compliance with all tax obligations.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Federal Estate Tax Returns (Form 706)</li>
              <li>Gift Tax Returns (Form 709)</li>
              <li>State Inheritance and Gift Tax Filings</li>
              <li>Fiduciary Income Tax Returns (Form 1041)</li>
              <li>Foreign Trust Planning and Reporting</li>
              <li>Charitable Trust Compliance</li>
              <li>Judicial & Non-Judicial Fiduciary Accounting</li>
              <li>Probate Forensic Accounting & Litigation Support</li>
              <li>Post-Mortem Tax Planning & GST Exemption Allocation</li>
              <li>IRS and State Audit Representation</li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Estate Planning Strategies</h2>
            <p>
              We help individuals and families build customized estate plans that align with their financial goals, minimize tax liabilities, and protect wealth for future generations. From business succession to charitable giving, we offer strategies that bring peace of mind and clarity.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Integrated Estate Plan Development</li>
              <li>Business Succession Planning</li>
              <li>Retirement Plan Structuring (IRAs, Roth IRAs)</li>
              <li>Gifting & Wealth Transfer Strategies</li>
              <li>Charitable Contributions & Trust Planning</li>
              <li>Asset Protection Planning</li>
              <li>Business Valuation Services</li>
              <li>Probate Forensic Accounting & Litigation Support</li>
            </ul>
          </div>

        </div>
      </section>
    </Layout>
  );
}
