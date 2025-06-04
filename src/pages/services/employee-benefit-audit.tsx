// src/pages/services/employee-benefit-audit.tsx
import Layout from "@/components/Layout";

export default function EmployeeBenefitAuditPage() {
  return (
    <Layout backgroundImage="/chicago1.jpg">
      {/* Header over background image */}
      <section className="pt-32 pb-20 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Employee Benefit Plan Audit</h1>
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
          Ensure the financial integrity and compliance of your employee benefit plans with PNJK’s specialized audit services.
        </p>
      </section>

      {/* Main white content section with two columns */}
      <section className="bg-white text-black px-6 py-16 rounded-t-3xl rounded-b-3xl shadow-lg">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">80-120 Participant Rule</h2>
            <p>
              Federal law generally requires retirement plans with 100+ participants to undergo an audit as part of their annual Form 5500 filing.
            </p>
            <p>
              The <strong>80-120 Participant Rule</strong> allows plans to maintain their previous year’s category (small or large) until the participant count at the beginning of a year exceeds 120. Once that happens, an audit is required and remains mandatory until the count drops below 100.
            </p>

            <h2 className="text-2xl font-semibold">Audit Approach</h2>
            <p>
              PNJK delivers thorough benefit plan audits that help protect assets and ensure legal compliance. Our clients range from 100 to several thousand participants.
            </p>
            <p>
              Our audits support the financial integrity of your plan while assisting in accurate and complete Form 5500 filings.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Plans We Audit</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Defined Benefit Pension Plans</li>
              <li>Defined Contribution Plans</li>
              <li>Profit Sharing Plans</li>
              <li>401(k) Audit</li>
              <li>403(b) Audit</li>
              <li>Health and Welfare Plans (VEBA)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8">Our Services</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Limited Scope Audits</li>
              <li>Full Scope Audits</li>
              <li>Form 5500 Preparation & Filing</li>
              <li>ERISA Compliance</li>
              <li>Plan Operations & Funding Reviews</li>
              <li>Transaction & Eligibility Testing</li>
            </ul>
          </div>

        </div>
      </section>
    </Layout>
  );
}
