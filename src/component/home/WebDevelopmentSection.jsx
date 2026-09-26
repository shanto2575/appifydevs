"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const websites = [
    "/web1.jpg",
    "/web2.jpg",
    "/web3.jpg",
    "/web4.jpg",
    "/web5.jpg",
    "/web6.jpg",
];

export default function WebDevelopmentSection() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % websites.length);
        }, 2200);

        return () => clearInterval(interval);
    }, []);

    const getPosition = (index) => {
        let diff = index - active;

        if (diff > 3) diff -= websites.length;
        if (diff < -3) diff += websites.length;

        return diff;
    };

    return (
        <section className="relative overflow-hidden bg-white px-5 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-16">

            {/* ===== Background glow ===== */}
            <div className="pointer-events-none absolute right-[5%] top-[10%] h-[260px] w-[260px] rounded-full bg-red-100/40 blur-[90px] sm:h-[350px] sm:w-[350px] md:h-[500px] md:w-[500px] md:blur-[110px]" />

            <div className="pointer-events-none absolute -bottom-16 right-[15%] h-[240px] w-[240px] rounded-full bg-blue-100/30 blur-[90px] sm:h-[320px] sm:w-[320px] md:-bottom-[100px] md:h-[400px] md:w-[400px] md:blur-[110px]" />

            {/* ===== Main grid ===== */}
            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 sm:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">

                {/* ================= CAROUSEL — mobile e upore, desktop e daane ================= */}
                <div className="relative order-1 h-[240px] w-full overflow-hidden sm:h-[340px] md:h-[440px] lg:order-2 lg:h-[540px]">

                    {/* Main glow */}
                    <div className="absolute left-1/2 top-1/2 h-[220px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-100/30 blur-[80px] sm:h-[300px] sm:w-[420px] md:h-[360px] md:w-[520px] md:blur-[90px]" />

                    {/* Perspective container — SCALED for mobile */}
                    <div
                        className="absolute left-1/2 top-1/2 h-[420px] w-[680px] -translate-x-1/2 -translate-y-1/2 scale-[0.38] sm:scale-[0.55] md:scale-[0.72] lg:scale-100"
                        style={{
                            perspective: "1400px",
                        }}
                    >
                        {websites.map((image, index) => {
                            const position = getPosition(index);

                            let transform = "";
                            let opacity = 1;
                            let zIndex = 10;
                            let width = 390;
                            let height = 265;

                            /* CENTER */
                            if (position === 0) {
                                transform =
                                    "translateX(-50%) translateY(-50%) translateZ(120px) rotateY(0deg) scale(1)";
                                zIndex = 30;
                                opacity = 1;
                                width = 420;
                                height = 285;
                            }
                            /* LEFT */
                            else if (position === -1) {
                                transform =
                                    "translateX(-88%) translateY(-50%) translateZ(-30px) rotateY(28deg) scale(.84)";
                                zIndex = 20;
                                opacity = 0.9;
                                width = 380;
                                height = 255;
                            }
                            /* RIGHT */
                            else if (position === 1) {
                                transform =
                                    "translateX(-12%) translateY(-50%) translateZ(-30px) rotateY(-28deg) scale(.84)";
                                zIndex = 20;
                                opacity = 0.9;
                                width = 380;
                                height = 255;
                            }
                            /* FAR LEFT */
                            else if (position === -2) {
                                transform =
                                    "translateX(-125%) translateY(-50%) translateZ(-130px) rotateY(40deg) scale(.68)";
                                zIndex = 10;
                                opacity = 0.5;
                                width = 350;
                                height = 235;
                            }
                            /* FAR RIGHT */
                            else if (position === 2) {
                                transform =
                                    "translateX(25%) translateY(-50%) translateZ(-130px) rotateY(-40deg) scale(.68)";
                                zIndex = 10;
                                opacity = 0.5;
                                width = 350;
                                height = 235;
                            }
                            /* HIDDEN */
                            else {
                                transform =
                                    "translateX(-50%) translateY(-50%) translateZ(-300px) scale(.4)";
                                zIndex = 0;
                                opacity = 0;
                            }

                            return (
                                <div
                                    key={image}
                                    className="absolute left-1/2 top-1/2 overflow-hidden rounded-2xl border border-white/90 bg-white shadow-2xl"
                                    style={{
                                        width: `${width}px`,
                                        height: `${height}px`,
                                        transform,
                                        opacity,
                                        zIndex,
                                        transition:
                                            "all 900ms cubic-bezier(0.22, 1, 0.36, 1)",
                                        transformStyle: "preserve-3d",
                                    }}
                                >
                                    {/* Browser header */}
                                    <div className="flex h-8 items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-3">
                                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                                        <div className="ml-2 h-4 flex-1 rounded-full bg-gray-200" />
                                    </div>

                                    {/* Website image */}
                                    <Image
                                        src={image}
                                        alt={`Web project ${index + 1}`}
                                        width={600}
                                        height={400}
                                        priority={index === active}
                                        className="h-[calc(100%-32px)] w-full object-cover"
                                    />
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom reflection */}
                    <div className="pointer-events-none absolute bottom-[10px] left-1/2 h-[70px] w-[260px] -translate-x-1/2 rounded-[50%] bg-gradient-to-b from-gray-200/40 to-transparent blur-2xl sm:h-[90px] sm:w-[340px] md:bottom-[12px] md:h-[100px] md:w-[380px] lg:bottom-[15px] lg:h-[120px] lg:w-[450px]" />
                </div>

                {/* ================= TEXT — mobile e niche, desktop e bame ================= */}
                <div className="order-2 mx-auto max-w-xl text-center lg:order-1 lg:mx-0 lg:text-left">

                    <p className="mb-4 text-[11px] font-medium uppercase tracking-[4px] text-gray-500 sm:mb-5 sm:text-xs sm:tracking-[5px] md:mb-6 md:text-sm md:tracking-[6px]">
                        Web App Development
                    </p>

                    <h2 className="text-2xl font-semibold uppercase leading-[1.2] tracking-tight text-[#07143d] sm:text-3xl md:text-4xl lg:text-5xl">
                        Dynamic Web Solutions for
                        <span className="block">
                            Forward-Thinking Brands
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-lg text-[13px] leading-6 text-gray-500 sm:mt-5 sm:text-sm sm:leading-7 md:mt-6 md:text-base lg:mx-0 lg:text-lg">
                        We create modern, scalable and high-performance web
                        applications designed to help forward-thinking brands
                        grow, connect with customers and stand out in the
                        digital world.
                    </p>

                    <a
                        href="/contact"
                        className="mt-6 inline-flex rounded-full bg-[#07143d] px-6 py-3 text-[13px] font-medium text-white shadow-lg shadow-[#07143d]/10 transition duration-300 hover:-translate-y-1 hover:bg-[#f3292f] sm:mt-7 sm:px-7 sm:py-3.5 sm:text-sm md:mt-8"
                    >
                        Let&apos;s Build Together
                    </a>
                </div>
            </div>
        </section>
    );
}