import Layout from "@/components/Layout";

export default function EnterpriseRiskPage() {
  return (
    <Layout backgroundImage="/chicago1.jpg">
      {/* Header section over background */}
      <section className="pt-32 pb-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Enterprise Risk Services</h1>
        <p className="text-lg sm:text-xl text-gray-200">
          Intelligent risk management tailored to your business goals.
        </p>
      </section>

      {/* White content section with two columns */}
      <section className="bg-white text-black px-6 py-16 rounded-t-3xl rounded-b-3xl shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">

          {/* Left column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Turning Risk into Opportunity</h2>
            <p className="mb-4">
              Many companies face a wide variety of business risks, which are typically seen as threats to achieving objectives. However, when managed strategically, these same risks can become sources of opportunity.
            </p>
            <p className="mb-4">
              Our Enterprise Risk Services team helps organizations build value by taking a Risk Intelligent approach to managing financial, technological, and operational risks. This allows clients to identify key risk areas, coordinate efforts across departments, and pursue smart risk-taking as a driver of innovation and value creation.
            </p>
            <p className="mb-4">
              PNJK&apos;s experienced professionals guide businesses in developing robust governance structures, maintaining compliance, and improving reporting and transparency across operations.
            </p>
          </div>

          {/* Right column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Our Services Include:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Financial Statement Audit</li>
              <li>Attestation of Financial Information</li>
              <li>Regulatory Compliance & Reporting</li>
              <li>Agreed-Upon Procedures</li>
              <li>Sarbanes-Oxley Compliance</li>
              <li>Internal Audit</li>
              <li>Peer Review</li>
              <li>Business Valuation</li>
              <li>Management Consulting</li>
              <li>Forensic & Dispute Services</li>
              <li>Corporate Reporting Improvement</li>
            </ul>
          </div>

        </div>
      </section>
    </Layout>
  );
}
