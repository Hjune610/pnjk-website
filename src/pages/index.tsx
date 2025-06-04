// Imports
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { useState, useEffect, useRef } from "react";

// Font setup
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function Home() {
  // State management
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(null);

  // Refs must be inside the component function
  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

  // Lock scroll when a mega dropdown is open, and close when clicking outside
  useEffect(() => {
    document.body.style.overflow = servicesOpen ? "hidden" : "";

    function handleClickOutside(event: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
      if (
        industriesRef.current &&
        !industriesRef.current.contains(event.target as Node)
      ) {
        setIndustriesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesOpen, industriesOpen]);



  return (
    // Page wrapper with background image
    <div
      className={`${geistSans.className} ${geistMono.className} relative min-h-screen overflow-x-hidden bg-cover bg-center bg-pan`}
      style={{ backgroundImage: "url('/chicago1.jpg')" }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content container */}
      <div className="relative z-10 text-white p-8 sm:p-20">
        <div className="max-w-screen-xl mx-auto">

          {/* Header */}
          <header className="absolute top-4 left-0 right-0 z-50 px-4 sm:px-8">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
              <Link href="/" className="-ml-10 -mr-1">
                <Image
                  className="dark:invert"
                  src="/pnjk-logo3.png"
                  alt="PNJK CPA logo"
                  width={200}
                  height={43}
                  priority
                />
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="sm:hidden text-white text-2xl focus:outline-none"
              >
                ☰
              </button>

              {/* Navigation menu */}
              <nav
                className={`flex-col sm:flex-row sm:flex items-center gap-x-4 sm:gap-x-14 sm:-ml-10 text-sm sm:text-base absolute sm:static bg-black sm:bg-transparent w-full sm:w-auto left-0 top-16 sm:top-0 p-6 sm:p-0 z-40 transition-all duration-300 ease-in-out ${menuOpen ? "flex" : "hidden sm:flex"}`}
              >
                {/* Nav links */}
                <Link href="/about" className="hover:text-blue-400 transition">About</Link>

                {/* Services dropdown */}
                <div className="relative">
                  <button
                    onClick={() => {
                      setServicesOpen(!servicesOpen);
                      setIndustriesOpen(false); // Close Industries if open
                    }}
                    className="hover:text-blue-400 transition cursor-pointer"
                  >
                    Services<span className="inline-block text-[10px] transform scale-x-125 scale-y-75">▼</span>
                  </button>

                  {/* Mega dropdown panel */}
                  <div
                    ref={servicesRef}
                    className={`fixed inset-x-0 top-24 bg-white border-t-2 border-b-2 border-x-2 border-gray-600 text-black z-50 shadow-xl overflow-y-auto transition-all duration-800 ease-in-out ${servicesOpen ? 'opacity-100 max-h-full translate-y-0' : 'opacity-0 max-h-0 -translate-y-40 pointer-events-none'}`}
                  >
                    <div className="w-full flex gap-0 min-h-full items-stretch">
                      {/* Column 1: Intro text */}
                      <div className="w-1/3 bg-gray-900 border-r-2 border-gray-500 min-h-full px-[5%] py-[5%] flex flex-col justify-start">
                        <h3 className="text-3xl text-white font-semibold mb-2">Services</h3>
                        <p className="text-sm text-white py-8">
                          Companies of all sizes consider us their trusted advisors, relying on us to help them grow beyond their expectations. Through a full menu of professional services, and our diverse experience and knowledge, we can do the same for you. Our services include corporate tax consulting, international tax/transfer pricing, accounting, audit, and so much more.                      </p>
                      </div>

                      {/* Column 2: Menu links */}
                      <div className="w-1/3 border-r-2 border-gray-500 bg-gray-800 min-h-full px-[5%] py-[5%] flex flex-col gap-4 justify-start">
                        <a
                          onMouseEnter={() => setActiveService("assurance")}
                          className="flex justify-between items-center font-medium text-white hover:text-blue-600 cursor-pointer"
                        >
                          Assurance Services <span className="ml-2">→</span>
                        </a>
                        <a
                          onMouseEnter={() => setActiveService("tax")}
                          className="flex justify-between items-center font-medium text-white hover:text-blue-600 py-8 cursor-pointer"
                        >
                          Tax Services <span className="ml-2">→</span>
                        </a>
                        <a
                          onMouseEnter={() => setActiveService("risk")}
                          className="flex justify-between items-center font-medium text-white hover:text-blue-600 cursor-pointer"
                        >
                          Enterprise Risk <span className="ml-2">→</span>
                        </a>
                        <a href="/services/accounting-outsourcing" className="font-medium text-white hover:text-blue-600 py-8">Outsourcing</a>
                        <a href="/services/wealth-management" className="font-medium text-white hover:text-blue-600">Wealth Management</a>
                      </div>

                      {/* Column 3: Sub-options shown conditionally */}
                      <div className="w-1/3 bg-gray-700 min-h-full px-[5%] py-[5%] flex flex-col gap-y-8 justify-start">
                        {activeService === "assurance" && (
                          <>
                            <h4 className="text-white text-2xl font-bold mb-2">Assurance Services:</h4>
                            <a href="/services/audit-assurance" className="text-white hover:text-blue-500">Audit & Assurance</a>
                            <a href="/services/employee-benefit-audit" className="text-white hover:text-blue-500">Employee Benefit Plan Audit</a>
                            <a href="/services/mergers-acquisitions" className="text-white hover:text-blue-500">Mergers & Acquisitions</a>
                          </>
                        )}
                        {activeService === "tax" && (
                          <>
                            <h4 className="text-white text-2xl font-bold mb-2">Tax Services:</h4>
                            <a href="/services/corporate-tax" className="text-white hover:text-blue-500">Corporate Tax</a>
                            <a href="/services/international-tax" className="text-white hover:text-blue-500">International Tax</a>
                            <a href="/services/individual-tax" className="text-white hover:text-blue-500">Individual Tax</a>
                            <a href="/services/gifts-estate-tax" className="text-white hover:text-blue-500">Gifts & Estate Tax</a>
                          </>
                        )}
                        {activeService === "risk" && (
                          <>
                            <h4 className="text-white text-2xl font-bold">Enterprise Risk:</h4>
                            <a href="/services/internal-audit" className="text-white hover:text-blue-500">Internal Audit Service</a>
                            <a href="/services/forensic-litigation" className="text-white hover:text-blue-500">Forensic & Litigation</a>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Industries Dropdown (separate) */}
                <div className="relative">
                  <button
                    onClick={() => {
                      setIndustriesOpen(!industriesOpen);
                      setServicesOpen(false); // Close Services if open
                    }}

                    className="hover:text-blue-400 transition cursor-pointer"
                  >
                    Industries<span className="inline-block text-[10px] transform scale-x-125 scale-y-75">▼</span>
                  </button>

                  {/* Industries Mega Dropdown */}
                  <div
                    ref={industriesRef}
                    className={`fixed inset-x-0 top-24 bg-white border-t-2 border-b-2 border-x-2 border-gray-600 text-black z-50 shadow-xl overflow-y-auto transition-all duration-800 ease-in-out ${industriesOpen ? "opacity-100 max-h-full translate-y-0" : "opacity-0 max-h-0 -translate-y-40 pointer-events-none"
                      }`}
                  >
                    <div className="w-full flex gap-0 min-h-full items-stretch">
                      {/* Column 1: Intro */}
                      <div className="w-1/3 bg-gray-900 border-r-2 border-gray-500 min-h-full px-[5%] py-[5%] flex flex-col justify-start">
                        <h3 className="text-3xl text-white font-semibold mb-2">Industries</h3>
                        <p className="text-sm text-white py-8">
                          We understand the difficulties you may encounter in running your business, and we want to help. Our experienced and knowledgeable business accounting professionals and advisors are available to help you with various industries accounting, tax and audit needs.
                        </p>
                      </div>

                      {/* Column 2: Industry Links */}
                      <div className="w-2/3 bg-gray-800 min-h-full px-[5%] py-[5%] flex flex-col grid grid-cols-2 gap-4 justify-start text-white">
                        <Link href="/industries/manufacturing-distribution" className="hover:text-blue-500">Manufacturing & Distribution</Link>
                        <Link href="/industries/construction" className="hover:text-blue-500">Construction</Link>
                        <Link href="/industries/banking-financial" className="hover:text-blue-500">Banking & Financial Services</Link>
                        <Link href="/industries/governmental" className="hover:text-blue-500">Governmental Agencies</Link>
                        <Link href="/industries/healthcare" className="hover:text-blue-500">Healthcare</Link>
                        <Link href="/industries/nonprofit-foundations" className="hover:text-blue-500">Not-for-Profit & Foundations</Link>
                        <Link href="/industries/professional-services" className="hover:text-blue-500">Professional Services</Link>
                        <Link href="/industries/real-estate" className="hover:text-blue-500">Real Estate</Link>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Other nav links */}
                <Link href="/career" className="hover:text-blue-400 transition">Career</Link>
                <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
              </nav>
            </div>
          </header>

          {/* Hero Section */}
          <main className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">PNJK CPA Firm</h1>
            <p className="text-xl max-w-xl">Trusted accounting and tax services for individuals and businesses.</p>
            <div className="mt-6">
              <a
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
                href="/contact"
              >
                Get in Touch
              </a>
            </div>
          </main>

          {/* Footer */}
          <footer className="text-sm text-gray-300 text-center mt-10">
            © Copyright 2014 PNJK Partners, LLP. All Rights Reserved.
            Main office locations: Chicago (IL) | Houston (TX)
          </footer>
          <footer className="text-sm text-gray-300 text-center mt-10">
            Office: 1 - 855 - PNJKLLP (765-5557) | Email: admin@PNJKLLP.com
          </footer>
        </div>
      </div>
    </div>
  );
}
