"use client";

import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "HOW WE WORK", href: "/services" },
    { name: "BLOGS", href: "/blogs" },
    { name: "CAREER", href: "/careers" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    const isActive = (href) => {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(`${href}/`);
    };

    return (
        <header className="fixed left-0 top-0 z-50 w-full bg-white">
            <nav className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-6 lg:px-8">
                <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="text-[27px] font-bold tracking-tight"
                >
                    <span className="text-[#f3292f]">Appify</span>
                    <span className="text-black">Devs.</span>
                </Link>
                <div className="hidden items-center gap-7 md:flex">
                    {LINKS.map((link) => {
                        const active = isActive(link.href);

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`
                                    group relative py-2 text-[12px] font-medium
                                    tracking-[3px] transition-colors duration-300
                                    ${
                                        active
                                            ? "text-[#f3292f]"
                                            : "text-gray-500 hover:text-[#f3292f]"
                                    }
                                `}
                            >
                                {link.name}
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
                        );
                    })}
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
            {open && (
                <div
                    id="mobile-menu"
                    className="mx-4 mt-2 rounded-xl bg-white p-5 shadow-xl md:hidden"
                >
                    <div className="flex flex-col gap-4">
                        {LINKS.map((link) => {
                            const active = isActive(link.href);

                            return (
                                <Link
                                    key={link.name}
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
                            );
                        })}
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