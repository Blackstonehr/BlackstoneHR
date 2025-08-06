// File: apps/web/src/pages/Home.tsx
import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-brand-matte text-white px-4 font-body">
      <img
        src="/GoldhouseLettered.png"
        alt="Blackstone HR Logo"
        className="w-64 mb-8"
      />

      <h1 className="text-5xl font-extrabold text-brand-gold font-display tracking-wide">
        Blackstone HR
      </h1>

      <p className="text-lg mt-4 max-w-xl text-gray-300">
        We provide top-tier HR services with precision, confidentiality, and professionalism. Join the elite.
      </p>

      <div className="mt-8">
        <button className="px-6 py-3 text-lg bg-brand-gold text-brand-matte font-bold rounded-lg shadow-md hover:opacity-90 transition-opacity">
          Book a Consultation
        </button>
      </div>
    </main>
  );
}
