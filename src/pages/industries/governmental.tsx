// src/pages/industries/governmental-agencies.tsx
import Layout from "../../components/Layout";

export default function GovernmentalAgenciesPage() {
  return (
    <Layout backgroundImage="/chicago1.jpg">
      {/* Header Section */}
      <section className="pt-32 pb-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Governmental Agencies</h1>
        <p className="text-lg sm:text-xl text-gray-200">
          Trusted auditing and advisory support for public sector organizations.
        </p>
      </section>

      {/* Content Section */}
      <section className="bg-white text-black px-6 py-16 rounded-t-3xl shadow-lg">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Experience That Matters</h2>
            <p className="mb-4">
              PNJK offers a broad range of audit and assurance services specifically tailored to the unique needs of governmental agencies. Our success in this sector is rooted in ongoing professional development and strong, collaborative relationships with our public-sector clients.
            </p>
            <p className="mb-4">
              We have deep knowledge of regulatory and operational challenges faced by agencies across housing, education, commercial financing, and municipal services. Our approach ensures compliance while supporting transparency, accountability, and sound fiscal management.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Our Services Include:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>A-133 compliance audits (Single Audits)</li>
              <li>Employee benefit plan audits and services</li>
              <li>Board education and governance seminars</li>
              <li>Corporate compliance support</li>
              <li>Financial statement audits</li>
              <li>Internal control assessments</li>
              <li>Information technology consulting</li>
              <li>Payroll and donor-related tax compliance</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
