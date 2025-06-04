import Layout from "@/components/Layout";

export default function AuditAndAssurancePage() {
  return (
    <Layout backgroundImage="/services-bg.jpg">
      <div className="max-w-3xl mx-auto text-white">
        <h1 className="text-4xl font-bold mb-6">Audit & Assurance</h1>
        <p className="text-lg mb-4">
          Our Audit & Assurance services provide stakeholders with confidence in financial reporting. We offer independent audits, internal control reviews, and assurance solutions that meet regulatory standards and strategic goals.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-white">
          <li>Financial Statement Audits</li>
          <li>Employee Benefit Plan Audits</li>
          <li>Review and Compilation Services</li>
          <li>Agreed-Upon Procedures</li>
        </ul>
      </div>
    </Layout>
  );
}
