// src/pages/services/internal-audit.tsx
import Layout from "../../components/Layout";

export default function InternalAuditPage() {
  return (
    <Layout backgroundImage="/chicago1.jpg">
      {/* Header */}
      <section className="pt-32 pb-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Internal Audit Services</h1>
        <p className="text-lg sm:text-xl text-gray-200">
          Strengthening control, improving processes, and managing risk with expert internal audit services.
        </p>
      </section>

      {/* Content section */}
      <section className="bg-white text-black px-6 py-16 rounded-t-3xl shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          
          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="mb-4">
              PNJK provides a wide variety of risk, internal control, and internal audit consulting services for small, mid-size, and enterprise businesses across the United States. 
              Our services are led by experienced professionals with backgrounds from Big Four firms, bringing deep expertise and industry knowledge to each engagement.
            </p>
            <p className="mb-4">
              We help organizations identify risks, improve operational efficiency, and enhance governance by aligning audit activities with business objectives.
              Our internal audit services can be tailored to supplement in-house teams or serve as an outsourced audit function.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Our Internal Audit Offerings</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Sarbanes-Oxley (SOX) Compliance</li>
              <li>Subject Matter Expertise Support</li>
              <li>COSO Framework Surveys & Implementation</li>
              <li>Risk Assessment & Enterprise-Wide Risk Reviews</li>
              <li>Internal Audit Plan Development</li>
              <li>Day-to-Day Audit Management</li>
              <li>Reporting for Management & Audit Committees</li>
              <li>Business Process Assessments</li>
              <li>Network & IT Risk Consulting</li>
              <li>Compliance Program Evaluation</li>
              <li>Operational & Business Reviews</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
