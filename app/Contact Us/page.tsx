export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">

      <div className="max-w-3xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          Contact Us
        </h1>

        <p className="text-slate-600 mb-8">
          Have questions or suggestions? We'd love to hear from you.
        </p>

        <div className="bg-white p-8 rounded-2xl shadow space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            placeholder="Your Message"
            className="w-full border p-3 rounded-lg h-32"
          />

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
            Send Message
          </button>

        </div>

      </div>

    </main>
  );
}
