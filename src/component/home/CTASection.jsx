"use client";

import Link from "next/link";
import { Calendar, MessageSquareQuote } from "lucide-react";

export default function CTASection() {
    return (
        <section className="relative overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80')",
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-20 md:flex-row md:px-10 lg:px-16">

                {/* Text */}
                <h3 className="text-center text-xl font-semibold text-white md:text-left md:text-2xl lg:text-[26px]">
                    Schedule a Meeting with Us for a Detailed Discussion
                </h3>

                {/* Buttons */}
                <div className="flex flex-shrink-0 flex-col gap-4 sm:flex-row">

                    {/* Book a Meeting */}
                    <Link
                        href="/contact"
                        className="flex items-center justify-center gap-2 rounded-md bg-[#f4512c] px-7 py-3.5 text-sm font-semibold text-white transition duration-200 hover:bg-[#d93d1b] hover:shadow-[0_8px_25px_rgba(244,81,44,0.45)]"
                    >
                        <Calendar size={18} strokeWidth={2.2} />
                        Book a Meeting
                    </Link>

                    {/* Get a Quote */}
                    <Link
                        href="/contact"
                        className="flex items-center justify-center gap-2 rounded-md bg-[#0b1437] px-7 py-3.5 text-sm font-semibold text-white transition duration-200 hover:bg-[#152159] hover:shadow-[0_8px_25px_rgba(11,20,55,0.45)]"
                    >
                        <MessageSquareQuote size={18} strokeWidth={2.2} />
                        Get a Quote
                    </Link>
                </div>
            </div>
        </section>
    );
}