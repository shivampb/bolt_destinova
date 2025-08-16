"use client";
import Head from "next/head";
import { useState } from "react";

export default function DemoFormPage() {
  const [formData, setFormData] = useState({
    individualName: "",
    individualEmail: "",
    individualPhone: "",
    companyName: "",
    companyIndustry: "",
    companySize: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <Head>
        <title>Book a Demo - Destinova AI Labs</title>
        <meta
          name="description"
          content="Book a live demo of our Agentic AI Ecommerce Chatbot."
        />
      </Head>

      {/* Header Section */}
      <header className="w-full bg-white shadow-sm border-b border-orange-100 py-6 px-6 flex justify-between items-center">
        <img
          src="https://destinovaailabs.com/wp-content/uploads/2024/11/logo-dark-1.png"
          alt="Destinova AI Labs"
          className="h-10 w-auto"
        />
        <h1 className="text-lg font-semibold text-gray-800">
          Book Your <span className="text-[#FF7626]">Live Demo</span>
        </h1>
      </header>

      {/* Full Page Form */}
      <main className="flex-1 w-full flex items-center justify-center px-6 py-10">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl bg-white rounded-xl shadow-xl border border-orange-100 p-10 flex flex-col space-y-8"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Let’s Get You Started 🚀
            </h2>
            <p className="mt-2 text-gray-600">
              Fill out the form and our team will connect with you shortly.
            </p>
          </div>

          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="individualName"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                id="individualName"
                name="individualName"
                type="text"
                required
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#FF7626] focus:ring-[#FF7626] sm:text-sm px-3 py-2"
                placeholder="John Doe"
                value={formData.individualName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="individualEmail"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="individualEmail"
                name="individualEmail"
                type="email"
                required
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#FF7626] focus:ring-[#FF7626] sm:text-sm px-3 py-2"
                placeholder="you@example.com"
                value={formData.individualEmail}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="individualPhone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                id="individualPhone"
                name="individualPhone"
                type="tel"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#FF7626] focus:ring-[#FF7626] sm:text-sm px-3 py-2"
                placeholder="+91 98765 43210"
                value={formData.individualPhone}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Company Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700"
              >
                Company Name
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#FF7626] focus:ring-[#FF7626] sm:text-sm px-3 py-2"
                placeholder="Destinova AI Labs"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="companyIndustry"
                className="block text-sm font-medium text-gray-700"
              >
                Industry
              </label>
              <input
                id="companyIndustry"
                name="companyIndustry"
                type="text"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#FF7626] focus:ring-[#FF7626] sm:text-sm px-3 py-2"
                placeholder="E-commerce / Retail"
                value={formData.companyIndustry}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="companySize"
                className="block text-sm font-medium text-gray-700"
              >
                Company Size
              </label>
              <input
                id="companySize"
                name="companySize"
                type="text"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#FF7626] focus:ring-[#FF7626] sm:text-sm px-3 py-2"
                placeholder="50-200 employees"
                value={formData.companySize}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#FF7626] focus:ring-[#FF7626] sm:text-sm px-3 py-2"
              placeholder="Tell us more about your needs..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full md:w-1/3 flex justify-center py-3 px-6 rounded-lg text-white font-semibold bg-[#FF7626] hover:bg-[#e65f17] shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF7626] transition-all"
            >
              🚀 Book My Demo
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
