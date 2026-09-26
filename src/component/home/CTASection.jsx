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
                        "url('https://i.ibb.co.com/jPLxjWfN/meet.jpg')",
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-32 md:flex-row md:px-10 lg:px-16">

                {/* Text */}
                <h3 className="text-center text-2xl font-semibold leading-snug text-white md:text-left md:text-3xl lg:text-[30px]">
                    Schedule a Meeting with Us for a Detailed Discussion
                </h3>

                {/* Buttons */}
                <div className="flex flex-shrink-0 flex-col gap-4 sm:flex-row">

                    {/* Book a Meeting */}
                    <Link
                        href="/contact"
                        className="flex items-center justify-center gap-2.5 rounded-md bg-[#f4512c] px-8 py-4 text-[15px] font-semibold text-white transition duration-200 hover:bg-[#d93d1b] hover:shadow-[0_8px_25px_rgba(244,81,44,0.5)]"
                    >
                        <Calendar size={19} strokeWidth={2.2} />
                        Book a Meeting
                    </Link>

                    {/* Get a Quote */}
                    <Link
                        href="/contact"
                        className="flex items-center justify-center gap-2.5 rounded-md bg-[#0b1437] px-8 py-4 text-[15px] font-semibold text-white transition duration-200 hover:bg-[#152159] hover:shadow-[0_8px_25px_rgba(11,20,55,0.5)]"
                    >
                        <MessageSquareQuote size={19} strokeWidth={2.2} />
                        Get a Quote
                    </Link>
                </div>
            </div>
        </section>
    );
}