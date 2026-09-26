"use client";

import Link from "next/link";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaYoutube,
    FaWhatsapp,
    FaFirefoxBrowser,
    FaScribd,
    FaXTwitter,
    FaGithub,
} from "react-icons/fa6";

const links = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "HOW WE WORKS", href: "/services" },
    { name: "BLOGS", href: "/blogs" },
    { name: "CAREER", href: "/careers" },
    { name: "CONTACT", href: "/contact" },
];

const socials = [
    {
        icon: FaFacebookF,
        href: "https://facebook.com",
        hover: "hover:bg-[#1877f2] hover:shadow-[0_8px_20px_rgba(24,119,242,0.5)]",
    },
    {
        icon: FaLinkedinIn,
        href: "https://linkedin.com",
        hover: "hover:bg-[#0a66c2] hover:shadow-[0_8px_20px_rgba(10,102,194,0.5)]",
    },
    {
        icon: FaYoutube,
        href: "https://youtube.com",
        hover: "hover:bg-[#ff0000] hover:shadow-[0_8px_20px_rgba(255,0,0,0.5)]",
    },
    {
        icon: FaWhatsapp,
        href: "https://whatsapp.com",
        hover: "hover:bg-[#25d366] hover:shadow-[0_8px_20px_rgba(37,211,102,0.5)]",
    },
    {
        icon: FaFirefoxBrowser,
        href: "#",
        hover: "hover:bg-[#ff7139] hover:shadow-[0_8px_20px_rgba(255,113,57,0.5)]",
    },
    {
        icon: FaScribd,
        href: "#",
        hover: "hover:bg-[#1e7b85] hover:shadow-[0_8px_20px_rgba(30,123,133,0.5)]",
    },
    {
        icon: FaXTwitter,
        href: "https://twitter.com",
        hover: "hover:bg-black hover:shadow-[0_8px_20px_rgba(0,0,0,0.5)]",
    },
    {
        icon: FaGithub,
        href: "https://github.com",
        hover: "hover:bg-[#333] hover:shadow-[0_8px_20px_rgba(51,51,51,0.5)]",
    },
];

export default function Footer() {
    return (
        <footer className="bg-[#0b1437] text-white">

            {/* Top */}
            <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-16">

                {/* Logo */}
                <div className="flex justify-center">
                    <Link href="/" className="text-[28px] font-bold tracking-tight">
                        <span className="text-[#f3292f]">Appify</span>
                        <span className="text-white">Devs.</span>
                    </Link>
                </div>

                {/* Nav Links */}
                <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                    {links.map((link, i) => {
                        const active = i === 0;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative py-1 text-[12px] font-medium uppercase tracking-[3px] transition ${
                                    active
                                        ? "text-[#f3292f]"
                                        : "text-white/90 hover:text-[#f3292f]"
                                }`}
                            >
                                {link.name}
                                {active && (
                                    <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#f3292f]" />
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Bottom */}
            <div className="border-t border-white/10">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-6 md:flex-row md:px-10 lg:px-16">

                    {/* Copyright */}
                    <p className="text-[13px] text-white/60">
                        © 2026 AppifyDevs. All rights reserved.
                    </p>

                    {/* Social Icons — bigger & modern */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {socials.map(({ icon: Icon, href, hover }, i) => (
                            <Link
                                key={i}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="social"
                                className={`group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:text-white ${hover}`}
                            >
                                <Icon
                                    size={18}
                                    className="transition-transform duration-300 group-hover:scale-110"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}