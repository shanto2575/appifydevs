"use client";

import { useEffect, useState } from "react";

const words = [
    "Software",
    "iOS App",
    "DevOps",
    "UI/UX Design",
    "Android App",
];

export default function HomeHeroSection() {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        const typingSpeed = deleting ? 60 : 120;

        const timer = setTimeout(() => {
            if (!deleting) {
                setText(currentWord.substring(0, text.length + 1));

                if (text.length + 1 === currentWord.length) {
                    setTimeout(() => {
                        setDeleting(true);
                    }, 1200);
                }
            } else {
                setText(currentWord.substring(0, text.length - 1));

                if (text.length === 1) {
                    setDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, deleting, wordIndex]);

    return (
        <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#fff5f5] via-[#f8f9ff] to-[#eef3ff] px-5 pb-14 pt-24 sm:px-6 sm:pb-16 sm:pt-28 md:min-h-[600px] md:pb-20 md:pt-32 lg:min-h-[640px]">

            {/* Background glow orbs */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-[260px] w-[260px] rounded-full bg-red-400/20 blur-[80px] sm:h-[320px] sm:w-[320px] sm:blur-[100px] md:h-[380px] md:w-[380px]" />

            <div className="pointer-events-none absolute -bottom-28 -right-24 h-[280px] w-[280px] rounded-full bg-blue-400/20 blur-[90px] sm:h-[340px] sm:w-[340px] sm:blur-[110px] md:h-[420px] md:w-[420px]" />

            <div className="pointer-events-none absolute left-[45%] -top-32 hidden h-[300px] w-[300px] rounded-full bg-purple-300/15 blur-[100px] sm:block" />

            {/* Grid pattern */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.2] sm:opacity-[0.25]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(17,19,63,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(17,19,63,0.05) 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                }}
            />

            <div className="relative z-10 mx-auto w-full max-w-5xl text-center">

                {/* Small label */}
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[4px] text-gray-500 sm:text-xs sm:tracking-[5px] md:text-sm">
                    We Provide
                </p>

                {/* Typing headline */}
                <div className="mb-3 flex min-h-[52px] items-center justify-center sm:min-h-[68px] md:min-h-[80px]">
                    <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#11133f] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px]">
                        {text}
                        <span className="ml-1 inline-block h-[0.9em] w-[3px] animate-pulse bg-[#f3292f] align-middle" />
                    </h1>
                </div>

                {/* Sub heading */}
                <h2 className="mx-auto max-w-4xl text-xl font-semibold leading-snug text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl">
                    Let&apos;s Build Something{" "}
                    <span className="text-[#f3292f]">Extraordinary</span>{" "}
                    Together
                </h2>

                {/* Description */}
                <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-6 text-gray-500 sm:mt-5 sm:text-sm md:text-base md:leading-7">
                    We create modern, scalable and user-friendly digital
                    solutions that help businesses grow and succeed.
                </p>

                {/* Buttons */}
                <div className="mt-7 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:items-center">
                    <a
                        href="/services"
                        className="w-full rounded-full bg-[#11133f] px-7 py-3.5 text-center text-[13px] font-medium text-white shadow-lg shadow-[#11133f]/15 transition duration-300 hover:-translate-y-1 hover:bg-[#f3292f] hover:shadow-red-200 sm:w-auto sm:text-sm"
                    >
                        Explore Services
                    </a>

                    <a
                        href="/contact"
                        className="w-full rounded-full border border-gray-300 bg-white/80 px-7 py-3.5 text-center text-[13px] font-medium text-gray-700 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#f3292f] hover:text-[#f3292f] hover:shadow-md sm:w-auto sm:text-sm"
                    >
                        Let&apos;s Talk
                    </a>
                </div>
            </div>
        </section>
    );
}