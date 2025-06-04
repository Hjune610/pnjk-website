import Layout from "@/components/Layout";

export default function HealthcarePage() {
  return (
    <Layout backgroundImage="/chicago1.jpg">
      <section className="pt-32 pb-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Healthcare</h1>
        <p className="text-lg sm:text-xl text-gray-200">
          Specialized services to meet the complex needs of healthcare providers.
        </p>
      </section>

      <section className="bg-white text-black px-6 py-16 rounded-t-3xl shadow-lg">
        <div className="max-w-4xl mx-auto space-y-6">
          <p>
            Our healthcare group includes auditors, consultants and tax advisors, all of whom spend a significant amount of time serving the healthcare industry. Our experience in healthcare covers an extensive range of clients and engagements including but not limited to critical access hospitals, acute care hospitals, rehabilitation hospitals, outpatient centers, long term care and skilled nursing facilities, residential care and assisted living facilities, psychiatric hospitals, home health agencies, physicians and physician groups.
          </p>
          <p>
            Our healthcare focus and flexibility allows us to adapt to the specific needs of our clients. We stay current with state and federal law and regulations to help you make proactive, objective and timely decisions. From the filing of third-party Medicare/Medicaid cost reports, to developing other strategic approaches to regulatory issues, PNJK helps its clients thrive amid uncertainty and change.
          </p>
          <h2 className="text-2xl font-semibold mt-8">Our Services Include:</h2>
          <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-x-12">
            <li>Audit & Accounting</li>
            <li>Employee Benefit Plan Services</li>
            <li>Healthcare Education through the PNJK Knowledge Hub</li>
            <li>Healthcare Management Consulting</li>
            <li>Information Technology Consulting for Healthcare</li>
            <li>Tax Strategy and Compliance</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
