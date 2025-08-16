import Head from 'next/head';
import Link from 'next/link';

export default function CollaboratePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Collaborate - Destinova AI</title>
        <meta
          name="description"
          content="Collaborate with Destinova AI for AI Chatbot solutions or discuss white-label opportunities."
        />
      </Head>

      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="mt-6 text-3xl font-extrabold text-gray-900">
            Collaborate with Destinova AI
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We're open to partnerships and enterprise solutions.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">AI Chatbot Collaboration</h2>
            <p className="text-gray-600">
              Call us at <a href="tel:+917041083626" className="text-[#f87936] hover:underline">+91 704 108 3626</a> for AI Chatbot collaboration opportunities.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">White-label Solutions</h2>
            <p className="text-gray-600">
              Interested in a White-label solution for enterprise?{' '}
              <Link href="/contact" className="text-[#f87936] hover:underline">
                Contact us today
              </Link> to discuss your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}