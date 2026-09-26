"use client";

import { Circle } from "lucide-react";

const advantages = [
    "Delivering the project at a fixed cost.",
    "Hire professionals from anywhere in the world.",
    "No need to manage project responsibilities from start to finish.",
    "We handle everything on your behalf.",
    "Clear upfront pricing and pre-set deadlines.",
    "An efficient and affordable solution.",
    "No physical infrastructure required to complete the project.",
    "Budget remains unchanged unless significant changes occur.",
];

export default function ProjectAdvantagesSection() {
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