import Head from 'next/head';
import Link from 'next/link';

export default function CollaboratePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Collaborate - Destinova AI</title>
        <meta
          name="description"
          content="Collaborate with Destinova AI for AI Chatbot solutions or discuss white-label opportunities."
        />
      </Head>

      <div className="max-w-2xl w-full space-y-10 text-center">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-500 to-gray-800 text-transparent bg-clip-text leading-tight">
          Collaborate with Us
        </h1>

        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          We’re open to partnerships, enterprise solutions, and white-label opportunities.  
          Let’s build the future of AI-powered ecommerce together.
        </p>

        {/* Info Cards */}
        <div className="mt-10 space-y-6">
          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-md text-left">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              🤝 AI Chatbot Collaboration
            </h2>
            <p className="text-gray-700">
              Call us at{" "}
              <a href="tel:+917041083626" className="text-orange-600 hover:underline font-medium">
                +91 704 108 3626
              </a>{" "}
              for chatbot collaboration opportunities.
            </p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-md text-left">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              ⚡ White-label Solutions
            </h2>
            <p className="text-gray-700">
              Interested in a White-label solution for enterprise?{" "}
              <Link href="/contact" className="text-orange-600 hover:underline font-medium">
                Contact us today
              </Link>{" "}
              to discuss your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
