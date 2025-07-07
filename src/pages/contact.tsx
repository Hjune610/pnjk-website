import Layout from '../components/Layout';

export default function ContactPage() {
  return (
    <Layout backgroundImage="/chicago1.jpg">
      <section className="pt-32 pb-20 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">We’d love to help your business succeed and grow. Fill out the form and we’ll reach out shortly.</p>
      </section>

      <section className="bg-white text-black px-6 py-16 rounded-t-3xl shadow-lg max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8">Send Us Inquiries</h2>

        <form
          action="https://formspree.io/f/mkgblgqn"
          method="POST"
          acceptCharset="UTF-8"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input type="hidden" name="_next" value="https://pnjk-website.vercel.app/contact" />

          <div>
            <label className="block mb-1 font-medium">First Name *</label>
            <input name="firstName" required className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Last Name *</label>
            <input name="lastName" required className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email *</label>
            <input name="email" type="email" required className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input name="phone" className="w-full border p-2 rounded" />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Company</label>
            <input name="company" className="w-full border p-2 rounded" />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Subject *</label>
            <input name="subject" required className="w-full border p-2 rounded" />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Message *</label>
            <textarea name="message" rows={5} required className="w-full border p-2 rounded"></textarea>
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Submit
            </button>
          </div>
        </form>

        <div className="mt-16">
          <h2 className="text-xl font-semibold mb-4">Our Locations</h2>
          <p className="mb-2"><strong>Illinois Office (Headquarters)</strong><br />
            1440 Renaissance Dr. Suite 430<br />
            Park Ridge, IL 60068</p>
          <p><strong>Houston Office</strong><br />
            1001 S. Dairy Ashford Rd. STE 125<br />
            Houston, TX 77077</p>
        </div>
      </section>
    </Layout>
  );
}
