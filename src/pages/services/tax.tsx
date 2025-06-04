import Layout from "@/components/Layout";

export default function TaxServicesPage() {
  return (
    <Layout backgroundImage="/chicago1.jpg">
      {/* Header section */}
      <section className="pt-32 pb-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Tax Services</h1>
        <p className="text-lg sm:text-xl text-gray-200">
          Strategic guidance for local, federal, and international tax success.
        </p>
      </section>

      {/* White content section with two columns */}
      <section className="bg-white text-black px-6 py-16 rounded-t-3xl rounded-b-3xl shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">

          {/* Left column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">A Global, Integrated Tax Approach</h2>
            <p className="mb-4">
              PNJK offers a broad range of fully integrated tax services, including International Tax and Transfer Pricing solutions tailored for multi-national and global companies. With taxes playing a key role in profitability and strategic planning, our advisors combine deep industry knowledge with innovative solutions to help your company grow and stay compliant worldwide.
            </p>
            <p className="mb-4">
              Our team stays current on evolving tax legislation, ensuring you capitalize on savings opportunities while complying with all applicable rules and filing requirements. We provide ongoing, year-round support for individuals, businesses, and global enterprises.
            </p>
            <p className="mb-4">
              From federal to international tax structures, PNJK is committed to delivering efficient, forward-thinking strategies that reduce your tax liability and maximize your financial outcomes.
            </p>
          </div>

          {/* Right column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Our Tax Services Include:</h2>

            <h3 className="text-lg font-semibold mt-4 mb-2">Federal Tax Services</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Business Tax</li>
              <li>Individual, Estate, Gift and Trust Tax</li>
              <li>Income Tax Provision (ASC 740 – Formerly FAS 109)</li>
              <li>Examination Representation</li>
              <li>Financial Statement Presentation of Income Tax Liabilities</li>
              <li>Exempt Organization Tax</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-2">State and Local Tax Services</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Income and Franchise Tax Returns</li>
              <li>Sales and Use Tax Reverse Audits</li>
              <li>Voluntary Disclosures</li>
              <li>Multi-state Nexus Study</li>
              <li>Procedure Reviews</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-2">International Tax Services</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Transfer Pricing Analysis and Studies</li>
              <li>International Assignment Services</li>
              <li>Due Diligence</li>
              <li>Foreign Tax Credits and Earnings Repatriation</li>
              <li>Asset Transfers</li>
              <li>Permanent Establishment Rules</li>
              <li>Income Tax Treaties</li>
            </ul>
          </div>

        </div>
      </section>
    </Layout>
  );
}
