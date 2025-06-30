"use client";

import { useState } from "react";

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgvydlla";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      setError("Something went wrong. Please try again later.");
    }
  };

  if (submitted) {
    return (
      <div id="contact" className="p-6 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl text-center">
        <h2 className="text-2xl font-semibold text-purple-400 mb-2">Thank you!</h2>
        <p className="text-gray-300">Your message has been received. I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form id="contact" onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-6 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl shadow-lg flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-white mb-2 text-center">Get in Touch</h2>
      {error && <div className="text-red-400 text-sm mb-2 text-center">{error}</div>}
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        className="px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[120px]"
        required
      />
      <button
        type="submit"
        className="mt-2 py-2 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full font-medium hover:scale-105 transition-all duration-300"
      >
        Send Message
      </button>
    </form>
  );
}; 