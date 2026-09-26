"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

const cards = [
    {
        title: "Hire Dedicated Team",
        image: "/services.svg",
        href: "/services/hire-dedicated-team",
        bullets: [
            "Manage your teams work schedule effortlessly.",
            "Retain your team for as long as needed.",
            "Make adjustments whenever necessary.",
        ],
        direction: "left",
        accent: "from-[#f3292f] to-[#ff7a5a]",
    },
    {
        title: "Project Based",
        image: "/project-based.jpg",
        href: "/services/project-based",
        bullets: [
            "Explore opportunities for further enhancements.",
            "Bring your ideas to life.",
            "Create software solutions tailored to your business needs.",
        ],
        direction: "right",
        accent: "from-[#0b1437] to-[#3b4a8a]",
    },
];

export default function EngagementApproachSection() {
    return (
        <section className="relative overflow-hidden bg-white px-6 py-24 md:px-10 lg:px-16">

            {/* Background decoration */}
            <div className="pointer-events-none absolute left-[-100px] top-10 h-[280px] w-[280px] rounded-full bg-[#f3292f]/5 blur-[100px]" />
            <div className="pointer-events-none absolute right-[-100px] bottom-10 h-[280px] w-[280px] rounded-full bg-[#0b1437]/5 blur-[100px]" />

            <div className="relative mx-auto max-w-6xl">

                {/* Heading */}
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    

                    <h2 className="mt-5 text-3xl font-bold text-[#0b1437] md:text-4xl lg:text-[38px]">
                        Our Engagement Approach
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-[13px] leading-6 text-[#1a2b5c]/70 md:text-sm md:leading-7">
                        We offer a unique approach to service delivery.
                        <br />
                        This has empowered us in two key ways through our
                        engagement models...
                    </p>
                </div>

                {/* Cards — items-stretch (default) makes both cards equal height */}
                <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_10px_40px_rgba(11,20,55,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_25px_60px_rgba(11,20,55,0.15)]"
                        >
                            {/* Top gradient border (on hover) */}
                            <div
                                className={`pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${card.accent} scale-x-0 transition-transform duration-500 group-hover:scale-x-100`}
                            />

                            {/* Subtle gradient overlay on hover */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1437]/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            {/* Illustration */}
                            <div className="relative flex justify-center">
                                <div className="transition-transform duration-500 group-hover:scale-105">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        width={320}
                                        height={200}
                                        className="h-auto w-full max-w-[280px] object-contain"
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="relative mt-8 text-xl font-bold text-[#0b1437] md:text-[22px]">
                                {card.title}
                            </h3>

                            {/* Divider */}
                            <div
                                className={`relative mt-3 h-[3px] w-12 rounded-full bg-gradient-to-r ${card.accent}`}
                            />

                            {/* Bullets */}
                            <ul className="relative mt-6 flex flex-col gap-3.5">
                                {card.bullets.map((bullet, bi) => (
                                    <li
                                        key={bi}
                                        className="flex items-start gap-3 text-[12.5px] leading-6 text-[#1a2b5c]/80 md:text-[13.5px]"
                                    >
                                        <span
                                            className={`mt-[3px] flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${card.accent} text-white shadow-sm`}
                                        >
                                            <Check size={11} strokeWidth={3.5} />
                                        </span>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>

                            {/* Explore button — mt-auto pushes it to the bottom */}
                            <div className="relative mt-auto flex justify-end pt-8">
                                <Link
                                    href={card.href}
                                    className={`group/btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${card.accent} px-6 py-3 text-[13px] font-semibold tracking-wide text-white shadow-[0_8px_25px_rgba(243,41,47,0.25)] transition-all duration-300 hover:shadow-[0_12px_35px_rgba(243,41,47,0.4)]`}
                                >
                                    {card.direction === "left" && (
                                        <ArrowLeft
                                            size={16}
                                            strokeWidth={2.5}
                                            className="transition-transform duration-300 group-hover/btn:-translate-x-1"
                                        />
                                    )}

                                    Explore

                                    {card.direction === "right" && (
                                        <ArrowRight
                                            size={16}
                                            strokeWidth={2.5}
                                            className="transition-transform duration-300 group-hover/btn:translate-x-1"
                                        />
                                    )}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}