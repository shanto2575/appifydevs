"use client";

import Link from "next/link";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    {
        name: "HOW WE WORKS",
        href: "/services",
        dropdown: [
            { name: "Hire Dedicate Team", href: "/services/hire-dedicated-team" },
            { name: "Project Based", href: "/services/project-based" },
        ],
    },
    { name: "BLOGS", href: "/blogs" },
    { name: "CAREER", href: "/careers" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setOpen(false);
        setDropdownOpen(false);
    }, [pathname]);

    const isActive = (href) => {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(`${href}/`);
    };

    return (
        <header className="fixed left-0 top-0 z-50 w-full bg-white">
            <nav className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-6 lg:px-8">

                {/* Logo */}
                <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="text-[27px] font-bold tracking-tight"
                >
                    <span className="text-[#f3292f]">Appify</span>
                    <span className="text-black">Devs.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-7 md:flex">
                    {LINKS.map((link) => {
                        const active = isActive(link.href);
                        const hasDropdown = !!link.dropdown;

                        return (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() =>
                                    hasDropdown && setDropdownOpen(true)
                                }
                                onMouseLeave={() =>
                                    hasDropdown && setDropdownOpen(false)
                                }
                            >
                                <Link
                                    href={link.href}
                                    className={`
                                        group relative flex items-center gap-1 py-2
                                        text-[12px] font-medium tracking-[3px]
                                        transition-colors duration-300
                                        ${
                                            active
                                                ? "text-[#f3292f]"
                                                : "text-gray-500 hover:text-[#f3292f]"
                                        }
                                    `}
                                >
                                    {link.name}

                                    {hasDropdown && (
                                        <ChevronDown
                                            size={14}
                                            strokeWidth={2.5}
                                            className={`transition-transform duration-300 ${
                                                dropdownOpen ? "rotate-180" : ""
                                            }`}
                                        />
                                    )}

                                    {/* Animated underline */}
                                    <span
                                        className={`
                                            absolute bottom-0 left-0 h-[2px] w-full
                                            origin-left bg-[#f3292f]
                                            transition-transform duration-300 ease-out
                                            ${
                                                active
                                                    ? "scale-x-100"
                                                    : "scale-x-0 group-hover:scale-x-100"
                                            }
                                        `}
                                    />
                                </Link>

                                {/* Dropdown */}
                                {hasDropdown && (
                                    <div
                                        className={`
                                            absolute left-0 top-full w-[240px]
                                            origin-top rounded-md border-t-2 border-[#f3292f]
                                            bg-white p-2 shadow-[0_10px_35px_rgba(0,0,0,0.12)]
                                            transition-all duration-300 ease-out
                                            ${
                                                dropdownOpen
                                                    ? "visible translate-y-0 opacity-100"
                                                    : "invisible -translate-y-2 opacity-0"
                                            }
                                        `}
                                    >
                                        {link.dropdown.map((sub) => {
                                            const subActive = pathname === sub.href;
                                            return (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    className={`
                                                        relative block rounded px-4 py-3
                                                        text-[13px] font-medium
                                                        transition-all duration-200
                                                        ${
                                                            subActive
                                                                ? "border-l-2 border-[#f3292f] bg-[#f3292f]/5 pl-5 text-[#f3292f]"
                                                                : "border-l-2 border-transparent text-gray-700 hover:border-[#f3292f] hover:bg-gray-50 hover:pl-5 hover:text-[#f3292f]"
                                                        }
                                                    `}
                                                >
                                                    {sub.name}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {/* Contact Button */}
                    <Link
                        href="/contact"
                        className={`
                            ml-2 flex items-center gap-2 rounded-full
                            px-4 py-2 text-[13px] font-medium text-white
                            transition
                            ${
                                isActive("/contact")
                                    ? "bg-[#f3292f]"
                                    : "bg-[#11133f] hover:bg-[#f3292f]"
                            }
                        `}
                    >
                        CONTACT

                        <span
                            className={`
                                flex h-8 w-8 items-center justify-center rounded-full
                                ${
                                    isActive("/contact")
                                        ? "bg-white text-[#f3292f]"
                                        : "bg-[#f3292f]"
                                }
                            `}
                        >
                            <MessageCircle size={17} strokeWidth={2} />
                        </span>
                    </Link>
                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="rounded-md bg-[#11133f] p-2 text-white md:hidden"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {open && (
                <div
                    id="mobile-menu"
                    className="mx-4 mt-2 rounded-xl bg-white p-5 shadow-xl md:hidden"
                >
                    <div className="flex flex-col gap-4">
                        {LINKS.map((link) => {
                            const active = isActive(link.href);

                            return (
                                <div key={link.name}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className={`
                                            text-sm font-medium tracking-[2px]
                                            transition
                                            ${
                                                active
                                                    ? "text-[#f3292f]"
                                                    : "text-gray-600 hover:text-[#f3292f]"
                                            }
                                        `}
                                    >
                                        {link.name}
                                    </Link>

                                    {/* Mobile dropdown items */}
                                    {link.dropdown && (
                                        <div className="mt-3 flex flex-col gap-3 border-l-2 border-gray-200 pl-4">
                                            {link.dropdown.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    onClick={() => setOpen(false)}
                                                    className={`
                                                        text-[13px] font-medium transition
                                                        ${
                                                            pathname === sub.href
                                                                ? "text-[#f3292f]"
                                                                : "text-gray-500 hover:text-[#f3292f]"
                                                        }
                                                    `}
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}

                        {/* Mobile Contact */}
                        <Link
                            href="/contact"
                            onClick={() => setOpen(false)}
                            className={`
                                flex w-fit items-center gap-2 rounded-full
                                px-5 py-2 text-sm text-white
                                ${
                                    isActive("/contact")
                                        ? "bg-[#f3292f]"
                                        : "bg-[#11133f]"
                                }
                            `}
                        >
                            CONTACT
                            <MessageCircle size={17} />
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}