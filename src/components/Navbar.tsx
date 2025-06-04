import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [industriesOpen, setIndustriesOpen] = useState(false);
    const [activeService, setActiveService] = useState<string | null>(null);

    const servicesRef = useRef<HTMLDivElement>(null);
    const industriesRef = useRef<HTMLDivElement>(null);

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

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="sm:hidden text-white text-2xl focus:outline-none"
                >
                    ☰
                </button>

                <nav
                    className={`flex-col sm:flex-row sm:flex items-center gap-x-4 sm:gap-x-14 sm:-ml-10 text-sm sm:text-base absolute sm:static bg-black sm:bg-transparent w-full sm:w-auto left-0 top-16 sm:top-0 p-6 sm:p-0 z-40 transition-all duration-300 ease-in-out ${menuOpen ? "flex" : "hidden sm:flex"}`}
                >
                    <Link href="/about" className="hover:text-blue-400 transition">About</Link>

                    {/* Services Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => {
                                setServicesOpen(!servicesOpen);
                                setIndustriesOpen(false);
                            }}
                            className="hover:text-blue-400 transition cursor-pointer"
                        >
                            Services <span className="inline-block text-[10px] transform scale-x-125 scale-y-75">▼</span>
                        </button>
                        <div
                            ref={servicesRef}
                            className={`fixed inset-x-0 top-24 bg-white border-t-2 border-b-2 border-x-2 border-gray-600 text-black z-50 shadow-xl overflow-y-auto transition-all duration-700 ease-in-out ${servicesOpen ? "opacity-100 max-h-full translate-y-0" : "opacity-0 max-h-0 -translate-y-40 pointer-events-none"}`}
                        >
                            <div className="w-full flex gap-0 min-h-full items-stretch">
                                <div className="w-1/3 bg-gray-900 border-r-2 border-gray-500 px-[5%] py-[5%] flex flex-col justify-start">
                                    <h3 className="text-3xl text-white font-semibold mb-2">Services</h3>
                                    <p className="text-sm text-white py-8">
                                        Companies of all sizes consider us their trusted advisors, relying on us to help them grow beyond their expectations. Through a full menu of professional services, and our diverse experience and knowledge, we can do the same for you. Our services include corporate tax consulting, international tax/transfer pricing, accounting, audit, and so much more.                  </p>
                                </div>
                                <div className="w-1/3 border-r-2 border-gray-500 bg-gray-800 px-[5%] py-[5%] flex flex-col gap-4 justify-start">
                                    <a onMouseEnter={() => setActiveService("assurance")} className="font-medium text-white hover:text-blue-600 cursor-pointer">
                                        Assurance Services →
                                    </a>
                                    <a onMouseEnter={() => setActiveService("tax")} className="font-medium text-white hover:text-blue-600 py-8 cursor-pointer">
                                        Tax Services →
                                    </a>
                                    <a onMouseEnter={() => setActiveService("risk")} className="font-medium text-white hover:text-blue-600 cursor-pointer">
                                        Enterprise Risk →
                                    </a>
                                    <Link href="/services/accounting-outsourcing" className="font-medium text-white hover:text-blue-600 py-8">Outsourcing</Link>
                                    <Link href="/services/wealth-management" className="font-medium text-white hover:text-blue-600">Wealth Management</Link>
                                </div>
                                <div className="w-1/3 bg-gray-700 px-[5%] py-[5%] flex flex-col gap-y-8 justify-start">
                                    {activeService === "assurance" && (
                                        <>
                                            <h4 className="text-white text-2xl font-bold mb-2">Assurance Services:</h4>
                                            <Link href="/services/audit-assurance" className="text-white hover:text-blue-500">Audit & Assurance</Link>
                                            <Link href="/services/employee-benefit-audit" className="text-white hover:text-blue-500">Employee Benefit Plan Audit</Link>
                                            <Link href="/services/mergers-acquisitions" className="text-white hover:text-blue-500">Mergers & Acquisitions</Link>
                                        </>
                                    )}
                                    {activeService === "tax" && (
                                        <>
                                            <h4 className="text-white text-2xl font-bold mb-2">Tax Services:</h4>
                                            <Link href="/services/corporate-tax" className="text-white hover:text-blue-500">Corporate Tax</Link>
                                            <Link href="/services/international-tax" className="text-white hover:text-blue-500">International Tax</Link>
                                            <Link href="/services/individual-tax" className="text-white hover:text-blue-500">Individual Tax</Link>
                                            <Link href="/services/gifts-estate-tax" className="text-white hover:text-blue-500">Gifts & Estate Tax</Link>
                                        </>
                                    )}
                                    {activeService === "risk" && (
                                        <>
                                            <h4 className="text-white text-2xl font-bold">Enterprise Risk:</h4>
                                            <Link href="/services/internal-audit" className="text-white hover:text-blue-500">Internal Audit</Link>
                                            <Link href="/services/forensic-litigation" className="text-white hover:text-blue-500">Forensic & Litigation</Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Industries Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => {
                                setIndustriesOpen(!industriesOpen);
                                setServicesOpen(false);
                            }}
                            className="hover:text-blue-400 transition cursor-pointer"
                        >
                            Industries <span className="inline-block text-[10px] transform scale-x-125 scale-y-75">▼</span>
                        </button>
                        <div
                            ref={industriesRef}
                            className={`fixed inset-x-0 top-24 bg-white border-t-2 border-b-2 border-x-2 border-gray-600 text-black z-50 shadow-xl overflow-y-auto transition-all duration-700 ease-in-out ${industriesOpen ? "opacity-100 max-h-full translate-y-0" : "opacity-0 max-h-0 -translate-y-40 pointer-events-none"}`}
                        >
                            <div className="w-full flex gap-0 min-h-full items-stretch">
                                <div className="w-1/3 bg-gray-900 border-r-2 border-gray-500 px-[5%] py-[5%] flex flex-col justify-start">
                                    <h3 className="text-3xl text-white font-semibold mb-2">Industries</h3>
                                    <p className="text-sm text-white py-8">
                                        We understand the difficulties you may encounter in running your business. Our experts help you navigate industry-specific accounting, tax, and audit challenges.
                                    </p>
                                </div>
                                <div className="w-2/3 bg-gray-800 px-[5%] py-[5%] grid grid-cols-2 gap-y-4 text-white">
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

                    {/* Other links */}
                    <Link href="/career" className="hover:text-blue-400 transition">Career</Link>
                    <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
                </nav>
            </div>
        </header>
    );
}
