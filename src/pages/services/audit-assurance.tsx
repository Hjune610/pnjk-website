import Layout from "@/components/Layout";

export default function AuditAssurancePage() {
  return (
    <Layout backgroundImage="/chicago1.jpg">
      {/* Header Section */}
      <section className="pt-32 pb-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Audit & Assurance</h1>
        <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
          PNJK’s Assurance Practice is committed to excellence and integrity. We do more than audit financial statements — we help uncover practical and profitable solutions to improve your systems and operations.
        </p>
      </section>

      {/* Content Section */}
      <section className="bg-white text-black px-6 py-16 rounded-t-3xl rounded-b-3xl shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">

          {/* Left Column: Core Services */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Core Assurance Services</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Financial Statement Audit Services</li>
              <li>GAAP and Other Comprehensive Basis of Accounting</li>
              <li>International Financial Reporting (IFRS Audit)</li>
              <li>Internal Controls Evaluation</li>
              <li>SEC Registrant Services (incl. SOX 404 Reporting & Quarterly Reviews)</li>
              <li>Information Technology Audit Services</li>
              <li>Service Auditor Reports (e.g., SOC 1, SOC 2)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Financial Reviews & Compilations</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Comparative Analytical & Ratio Analysis</li>
              <li>Well-organized Financial Data Presentation</li>
              <li>Limited Snapshot of Company Performance</li>
              <li>Industry Benchmarking</li>
            </ul>
          </div>

          {/* Right Column: Special Services */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Agreed-Upon Procedures</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Compliance Reporting</li>
              <li>Debt Covenant Analysis</li>
              <li>Transaction Testing</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Forecasts & Projections</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Cash Flow Analysis</li>
              <li>Loan Package Assistance</li>
              <li>Budget Preparation & Forecasting</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Why Choose PNJK?</h2>
            <p>
              PNJK’s Assurance Practice is committed to excellence and integrity. We do more than simply audit financial statements. We seek meaningful, practical and profitable solutions to systems and operational problems noted during the audit.              </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
