// File: apps/web/src/components/Layout.tsx

import { Link } from 'react-router-dom';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-matte text-white">
      <header className="bg-brand-gold text-brand.black shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wide">BLACKSTONE HR</h1>
          <nav className="space-x-6">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/services" className="hover:underline">Services</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </nav>
        </div>
      </header>
      <main className="p-6">{children}</main>
      <footer className="text-sm text-center text-brand.gold py-4 border-t border-brand.gold mt-10">
        © {new Date().getFullYear()} Blackstone HR. All rights reserved.
      </footer>
    </div>
  );
}
