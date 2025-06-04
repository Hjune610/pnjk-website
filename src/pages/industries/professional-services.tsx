import Layout from "@/components/Layout";

export default function ProfessionalServicesPage() {
  return (
    <Layout backgroundImage="/chicago1.jpg">
      <section className="pt-32 pb-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Professional Services</h1>
        <p className="text-lg sm:text-xl text-gray-200">
          Tailored solutions for law, architecture, medical, and consulting firms.
        </p>
      </section>

      <section className="bg-white text-black px-6 py-16 rounded-t-3xl shadow-lg">
        <div className="max-w-4xl mx-auto space-y-6">
          <p>
            PNJK has a diverse practice that includes clients in specialized service industry areas such as law and other professional services organizations. We serve as auditors, consultants, and tax advisors for many law firms, architectural and engineering firms, investment managers and others in the professional services arena.
          </p>
          <p>
            Our approach focuses on helping clients gain improved control over tax burden, overhead, and cash flow while modernizing operations to better adapt to change.
          </p>
          <h2 className="text-2xl font-semibold mt-8">Our Services Include:</h2>
          <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-x-12">
            <li>Accounting</li>
            <li>State and local tax</li>
            <li>International tax</li>
            <li>Compensation & Benefits</li>
            <li>Estates & Trusts</li>
            <li>Litigation Support</li>
            <li>Cost segregation studies</li>
            <li>Entrepreneurial Services</li>
            <li>Risk Advisory</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
