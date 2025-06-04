import Layout from "@/components/Layout";

export default function NotForProfitPage() {
  return (
    <Layout backgroundImage="/chicago1.jpg">
      <section className="pt-32 pb-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Not-for-Profit & Foundation</h1>
        <p className="text-lg sm:text-xl text-gray-200">
          Supporting organizations in fulfilling their mission with expert guidance.
        </p>
      </section>

      <section className="bg-white text-black px-6 py-16 rounded-t-3xl shadow-lg">
        <div className="max-w-4xl mx-auto space-y-6">
          <p>
            PNJK provides tax compliance and advisory services to exempt organizations. Our professionals offer a broad range of skills and experience in auditing and other assurance services to help our not-for-profit clients succeed in carrying out their missions.
          </p>
          <h2 className="text-2xl font-semibold mt-8">Our Services Include:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Financial statement audits</li>
            <li>Preparation and filing of Form 990/990T</li>
            <li>A-133 compliance audits</li>
            <li>Capital / financing assistance</li>
            <li>Corporate compliance assistance</li>
            <li>Tax compliance – payroll / donor issues</li>
            <li>State tax return filing</li>
            <li>IT assistance and consulting</li>
            <li>Benefit plan consulting</li>
            <li>Internal control assessments</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
