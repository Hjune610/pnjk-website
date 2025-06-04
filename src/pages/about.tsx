// src/pages/about.tsx
import Layout from "../components/Layout";

export default function AboutPage() {
  return (
    <Layout backgroundImage="/chicago1.jpg">
      {/* Header section over background */}
      <section className="pt-32 pb-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg sm:text-xl text-gray-200">
          Discover our story, values, and mission at PNJK Partners, LLP.
        </p>
      </section>

      {/* White content section with two columns */}
      <section className="bg-white text-black px-6 py-16 rounded-t-3xl rounded-b-3xl shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">

          {/* Left column (your existing content) */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="mb-4">
              On a daily basis, you, as a business owner and executive management, deal with variety of responsibilities  and  risks. In addition, you also need to build up long term strategies for business success.  In order to focus your time on the things that are most critical to your business  and make right decision at right times, the importance of working with right professionals with copious experience  cannot be overemphasized.             </p>
            <p className="mb-4">
              As a full service public accounting firm, PNJK Partners, LLP works with enterprises as diverse as global public companies, start-ups, and middle-market companies; as well as high net worth individuals, Not-for-profit organizations, and entrepreneurial ventures across a variety of industries.
              Our partners and team members have many years of "Big 4" accounting firm experience. Along with our partners, our professionals are dedicated and committed to excellent customer service and top quality consulting expertise. PNJK is a innovative and rapidly growing certified public accounting firm located in the Greater Chicago area serving clients worldwide.             </p>
            <p className="mb-4">
              PNJK professionals have significant breadth and depth of knowledge in key service areas including consulting services comprised of external & internal audits, risk management, information technology and compliance. Other primary service lines include asset and business valuation, international tax (including transfer pricing), employee benefit plan audits, fund services, litigation support and forensic accounting, bankruptcy and insolvency and royalty audit.
            </p>
            <p className="mb-4">
              PNJK has deep expertise providing audit, tax and advisory services to clients in major industry groups including health care, clean tech, technology, real estate, construction, not-for-profit, manufacturing, automotive, distribution and retail.
            </p>
            <p className="mb-4">
              PNJK works with companies from their inception providing accounting, advisory and tax services. The firm serves incubators and start-ups with accounting services and advice. As companies grow, PNJK assists them every step of the way with a full complement of services to help them reach their goals.
            </p>
            <p className="mb-4">
              Our goal is to provide you and your business with innovative and professional guidance whenever you need.  PNJK's core values are to provide quality service, attract and develop a team of talented and highly trained professionals, stress innovation in all firm activities, act with integrity at all times, and be an effective and financially sound professional enterprise.
            </p>
          </div>

          {/* Right column (new content) */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Our Service & Industry Focus Areas:</h2>
            <h2 className="text-lg font-semibold mb-2">Service Areas: </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Attest & Assurance</li>
              <li>Tax Compliance & Research Services</li>
              <li>Consulting & Specialty Service</li>
              <li>International Accounting and Tax Services for Multi-national Companies</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-10 mb-4">Industries We Serve</h2>
            <ul className="list-disc list-inside columns-2 gap-x-12 space-y-1">
              <li>Apparel</li>
              <li>Architecture & Engineering</li>
              <li>Auto Dealerships</li>
              <li>Automotive Parts Manufacturing/Distributions</li>
              <li>Construction</li>
              <li>Customer Brokerage</li>
              <li>Dental Practices</li>
              <li>E-Commerce</li>
              <li>Employee Benefit Plans</li>
              <li>Financial Services</li>
              <li>Food Services</li>
              <li>Freight Forwarding</li>
              <li>Healthcare</li>
              <li>Heavy Equipment</li>
              <li>Law Firms</li>
              <li>Machinery & Machine Tools</li>
              <li>Manufacturing/Distribution</li>
              <li>Medical Device and Equipment</li>
              <li>Medical Practices</li>
              <li>Not-for-Profit</li>
              <li>Real Estate</li>
              <li>Restaurants</li>
              <li>Staffing</li>
              <li>Technology</li>
            </ul>


            <h2 className="text-2xl font-semibold mb-4 mt-10">What Sets Us Apart</h2>
            <p className="mb-4">
              We bring "Big 4" firm expertise with boutique firm agility. Our team is built on a foundation of senior professionals who prioritize strategy and service tailored to each client's needs.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
