// src/pages/services/wealth-management.tsx
import Layout from "../../components/Layout";

export default function WealthManagementPage() {
  return (
    <Layout backgroundImage="/chicago1.jpg">
      {/* Header */}
      <section className="pt-32 pb-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Wealth Management</h1>
        <p className="text-lg sm:text-xl text-gray-200">
          Helping families define, plan, and achieve their long-term financial goals.
        </p>
      </section>

      {/* Content */}
      <section className="bg-white text-black px-6 py-16 rounded-t-3xl shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
            <p className="mb-4">
              PNJK’s Wealth Management team brings years of hands-on leadership experience and objectivity to guide families in building a clear, actionable path toward their financial aspirations.
            </p>
            <p className="mb-4">
              We define wealth management as a disciplined, structured process that delivers personalized investment solutions, advanced planning, and consistent relationship management.
            </p>
            <p className="mb-4">
              Our services go beyond investment advice — we support families with strategies for wealth enhancement, transfer, protection, and charitable giving. By addressing each of these areas in a comprehensive manner, we significantly improve the likelihood of reaching long-term goals.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">How We Help</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Goal Setting</li>
              <li>Cash Flow Management & Balance Sheet Analysis</li>
              <li>Debt Management</li>
              <li>Compensation & Equity Compensation Planning</li>
              <li>Income Tax Planning & Preparation</li>
              <li>Insurance & Risk Management Planning</li>
              <li>Investment Planning</li>
              <li>Customized Asset Allocation Strategies</li>
              <li>Investment Policy Development</li>
              <li>Performance Evaluations</li>
              <li>Retirement & Benefits Planning</li>
              <li>Education Funding Planning</li>
              <li>Estate & Gift Planning</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
