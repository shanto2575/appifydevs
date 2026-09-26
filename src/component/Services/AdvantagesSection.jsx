"use client";

import { Circle } from "lucide-react";

const advantages = [
    "Connect with service providers from around the globe.",
    "No need for formal offices or infrastructure.",
    "Reduced recruitment costs and a hassle-free hiring process.",
    "Hire specialists from anywhere in the world.",
    "Maintain total control and authority over your staff with effective monitoring.",
    "Access an experienced, dedicated team at a reasonable price.",
];

export default function AdvantagesSection() {
    return (
        <section className="bg-white px-6 py-20 md:px-10 lg:px-16">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">

                {/* Left — Heading */}
                <div>
                    <h2 className="text-2xl font-bold text-[#0b1437] md:text-3xl lg:text-[32px]">
                        Advantages
                    </h2>
                </div>

                {/* Right — List */}
                <ul className="flex flex-col gap-4">
                    {advantages.map((item, i) => (
                        <li
                            key={i}
                            className="flex items-start gap-3 text-[13px] leading-6 text-[#1a2b5c] md:text-sm"
                        >
                            <span className="mt-[6px] flex-shrink-0">
                                <Circle
                                    size={10}
                                    strokeWidth={3}
                                    className="fill-[#0b1437] text-[#0b1437]"
                                />
                            </span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}