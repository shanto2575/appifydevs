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
        <section className="relative flex h-[520px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#fff5f5] via-[#f8f9ff] to-[#eef3ff] px-6">

            <div className="pointer-events-none absolute left-[-120px] top-[-120px] h-[380px] w-[380px] rounded-full bg-red-400/20 blur-[100px]" />

            <div className="pointer-events-none absolute bottom-[-140px] right-[-120px] h-[420px] w-[420px] rounded-full bg-blue-400/20 blur-[110px]" />

            <div className="pointer-events-none absolute left-[45%] top-[-180px] h-[300px] w-[300px] rounded-full bg-purple-300/15 blur-[100px]" />
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.25]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(17,19,63,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(17,19,63,0.05) 1px, transparent 1px)",
                    backgroundSize: "45px 45px",
                }}
            />

            <div className="relative z-10 mx-auto max-w-5xl text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[5px] text-gray-500">
                    We Provide
                </p>
                <div className="mb-4 min-h-[65px]">
                    <h1 className="text-5xl font-bold tracking-tight text-[#11133f] md:text-6xl">
                        {text}
                        <span className="ml-1 inline-block h-[1em] w-[3px] animate-pulse bg-[#f3292f] align-middle" />
                    </h1>
                </div>
                <h2 className="mx-auto max-w-4xl text-3xl font-semibold leading-tight text-gray-800 md:text-4xl">
                    Let's Build Something{" "}
                    <span className="text-[#f3292f]">
                        Extraordinary
                    </span>{" "}
                    Together
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-500 md:text-base">
                    We create modern, scalable and user-friendly digital
                    solutions that help businesses grow and succeed.
                </p>

                <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">

                    <a
                        href="/services"
                        className="rounded-full bg-[#11133f] px-7 py-3 text-sm font-medium text-white shadow-lg shadow-[#11133f]/15 transition duration-300 hover:-translate-y-1 hover:bg-[#f3292f] hover:shadow-red-200"
                    >
                        Explore Services
                    </a>

                    <a
                        href="/contact"
                        className="rounded-full border border-gray-300 bg-white/80 px-7 py-3 text-sm font-medium text-gray-700 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#f3292f] hover:text-[#f3292f] hover:shadow-md"
                    >
                        Let's Talk
                    </a>

                </div>
            </div>
        </section>
    );
}