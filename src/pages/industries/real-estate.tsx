import Layout from "@/components/Layout";

export default function RealEstatePage() {
  return (
    <Layout backgroundImage="/chicago1.jpg">
      <section className="pt-32 pb-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Real Estate</h1>
        <p className="text-lg sm:text-xl text-gray-200">
          Empowering real estate professionals with strategic financial solutions.
        </p>
      </section>

      <section className="bg-white text-black px-6 py-16 rounded-t-3xl shadow-lg">
        <div className="max-w-4xl mx-auto space-y-6">
          <p>
            The real estate industry is vital to a strong local and national economy. That’s why PNJK has a dedicated team of professionals who work closely with owners, investors, developers, and others to help them overcome challenges and achieve their goals.
          </p>
          <h2 className="text-2xl font-semibold mt-8">Our Services Include:</h2>
          <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-x-12">
            <li>Assurance and accounting</li>
            <li>Tax return preparation</li>
            <li>Cost segregation studies and purchase price allocations</li>
            <li>Capitalization vs. expensing analysis</li>
            <li>Review of partnership / LLC agreements</li>
            <li>Section 754 basis adjustments</li>
            <li>Like-Kind Exchanges and Involuntary Conversions</li>
            <li>Low-income housing projects</li>
            <li>Planning for succession and M&A</li>
            <li>Internal controls and IT assessments</li>
            <li>Disaster recovery planning</li>
            <li>Business strategy and governance</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
