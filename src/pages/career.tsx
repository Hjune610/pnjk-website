import Layout from "@/components/Layout";

export default function CareersPage() {
  return (
    <Layout backgroundImage="/chicago1.jpg">
      {/* Header */}
      <section className="pt-32 pb-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Careers at PNJK</h1>
        <p className="text-lg sm:text-xl text-gray-200">
          Discover your future with PNJK Partners, LLP.
        </p>
      </section>

      {/* Content */}
      <section className="bg-white text-black px-6 py-16 rounded-t-3xl shadow-lg">
        <div className="max-w-4xl mx-auto space-y-8">

          <h2 className="text-2xl font-semibold">What to Expect Working at PNJK</h2>
          <p>
            As a full-service accounting firm, PNJK Partners LLP offers audit, tax, and financial advisory services to businesses and high-net-worth individuals. We've grown into a trusted and innovative firm recognized for efficiency, professional excellence, and personalized service. Our client base ranges from startups to global enterprises, tax-exempt organizations, and prominent individuals.
          </p>
          <p>
            We are always interested in hearing from qualified, motivated individuals. If you're looking to grow your career with a firm that values both excellence and balance, reach out to our Human Resources department.
          </p>

          <h2 className="text-2xl font-semibold">Firm Culture</h2>
          <p>
            PNJK’s culture is key to our success. We operate as a collaborative team of experts committed to outstanding client service. Many of our partners come from Big Four backgrounds and have shaped a culture that values teamwork, mentoring, lateral decision-making, open communication, and a family-oriented environment.
          </p>
          <p>
            We invest in our people through professional development, ongoing education, and new opportunities to grow and lead. Our environment empowers innovation and rewards initiative.
          </p>

          <h2 className="text-2xl font-semibold">Work/Life Balance</h2>
          <p>
            We prioritize work/life balance and have implemented a variety of policies and programs to support our team:
          </p>
          <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-x-10">
            <li>Part-time and Term-time Working</li>
            <li>Flexible Working Hours</li>
            <li>Job Share Arrangements</li>
            <li>Maternity Leave Agreement</li>
            <li>Paternity Leave Agreement</li>
            <li>Parental Leave Agreement</li>
            <li>Compassionate Leave / Emergency Care Support</li>
            <li>Working Time Policy</li>
          </ul>

          <h2 className="text-2xl font-semibold">Current Job Postings</h2>
          <p className="text-gray-500 italic">No current openings at this time. Please check back soon.</p>

          <h2 className="text-2xl font-semibold">Contact HR</h2>
          <p>
            Interested in working with us? Reach out to our HR department using the contact information below.
          </p>

          {/* Placeholder for a future form integration */}
          <div className="border border-gray-300 p-6 rounded-lg bg-gray-50 text-sm">
            <p><strong>Office:</strong> 1 - 855 - PNJKLLP (765-5557)</p>
            <p><strong>Email:</strong> admin@PNJKLLP.com</p>
            <p><strong>Phone:</strong> 1 - 855 - 765 - 5558</p>
          </div>

        </div>
      </section>
    </Layout>
  );
}
