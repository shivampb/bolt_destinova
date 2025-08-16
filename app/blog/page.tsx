import Head from "next/head";

export default function BlogComingSoon() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center px-6">
      <Head>
        <title>Blog - Coming Soon | Destinova AI</title>
        <meta name="description" content="Our AI blog is launching soon. Stay tuned for updates!" />
      </Head>

      {/* Logo */}
      <div className="absolute top-8 left-8">
        <img
          src="https://destinovaailabs.com/wp-content/uploads/2024/11/logo-dark-1.png"
          alt="Destinova AI Logo"
          className="h-10 w-auto"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center text-center space-y-6">
      <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-orange-500 via-yellow-400 to-white text-transparent bg-clip-text pb-2 leading-[1.2]">
  Blog Coming Soon
</h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
          We’re working on something insightful & exciting.  
          Our blog will feature the latest in <span className="text-orange-400 font-semibold">AI innovation, eCommerce,</span> and <span className="text-orange-400 font-semibold">business growth strategies.</span>
        </p>

        {/* Subscribe Section */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-72 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-orange-500 outline-none transition"
          />
          <button className="px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg transition">
            Notify Me 🚀
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Destinova AI Labs. All rights reserved.
      </footer>
    </div>
  );
}
