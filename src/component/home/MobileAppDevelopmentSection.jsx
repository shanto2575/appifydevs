"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const mobileApps = [
    "/mobile1.jpg",
    "/mobile2.jpg",
    "/mobile3.jpg",
    "/mobile4.jpg",
    "/mobile5.jpg",
    "/mobile6.jpg",
];

export default function MobileAppDevelopmentSection() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % mobileApps.length);
        }, 2200);

        return () => clearInterval(interval);
    }, []);

    const getPosition = (index) => {
        let diff = index - active;

        if (diff > 3) diff -= mobileApps.length;
        if (diff < -3) diff += mobileApps.length;

        return diff;
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f9ff] via-white to-[#fff7f7] px-6 py-20 md:px-10 lg:px-16">

            {/* ================= BACKGROUND GLOW ================= */}

            <div className="pointer-events-none absolute left-[5%] top-[10%] h-[450px] w-[450px] rounded-full bg-blue-100/40 blur-[110px]" />

            <div className="pointer-events-none absolute bottom-[-120px] left-[20%] h-[400px] w-[400px] rounded-full bg-red-100/40 blur-[110px]" />

            {/* ================= MAIN GRID ================= */}

            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">

                {/* ================================================= */}
                {/* LEFT SIDE - MOBILE APP CAROUSEL */}
                {/* ================================================= */}

                <div className="relative h-[540px] w-full overflow-hidden">

                    {/* Main Glow */}
                    <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/40 blur-[90px]" />

                    {/* Perspective Container */}
                    <div
                        className="absolute left-1/2 top-1/2 h-[420px] w-[680px] -translate-x-1/2 -translate-y-1/2"
                        style={{
                            perspective: "1400px",
                        }}
                    >
                        {mobileApps.map((image, index) => {
                            const position = getPosition(index);

                            let transform = "";
                            let opacity = 1;
                            let zIndex = 10;

                            let width = 190;
                            let height = 380;

                            /* ================= CENTER ================= */

                            if (position === 0) {
                                transform =
                                    "translateX(-50%) translateY(-50%) translateZ(120px) rotateY(0deg) scale(1)";

                                zIndex = 30;
                                opacity = 1;

                                width = 220;
                                height = 430;
                            }

                            /* ================= LEFT ================= */

                            else if (position === -1) {
                                transform =
                                    "translateX(-105%) translateY(-50%) translateZ(-30px) rotateY(25deg) scale(.85)";

                                zIndex = 20;
                                opacity = 0.9;

                                width = 200;
                                height = 390;
                            }

                            /* ================= RIGHT ================= */

                            else if (position === 1) {
                                transform =
                                    "translateX(5%) translateY(-50%) translateZ(-30px) rotateY(-25deg) scale(.85)";

                                zIndex = 20;
                                opacity = 0.9;

                                width = 200;
                                height = 390;
                            }

                            /* ================= FAR LEFT ================= */

                            else if (position === -2) {
                                transform =
                                    "translateX(-155%) translateY(-50%) translateZ(-130px) rotateY(38deg) scale(.68)";

                                zIndex = 10;
                                opacity = 0.5;

                                width = 190;
                                height = 370;
                            }

                            /* ================= FAR RIGHT ================= */

                            else if (position === 2) {
                                transform =
                                    "translateX(55%) translateY(-50%) translateZ(-130px) rotateY(-38deg) scale(.68)";

                                zIndex = 10;
                                opacity = 0.5;

                                width = 190;
                                height = 370;
                            }

                            /* ================= HIDDEN ================= */

                            else {
                                transform =
                                    "translateX(-50%) translateY(-50%) translateZ(-300px) scale(.4)";

                                zIndex = 0;
                                opacity = 0;
                            }

                            return (
                                <div
                                    key={image}
                                    className="absolute left-1/2 top-1/2 overflow-hidden rounded-[28px] border-[5px] border-gray-900 bg-black shadow-2xl"
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
                                    {/* Phone Speaker */}
                                    <div className="absolute left-1/2 top-2 z-20 h-4 w-20 -translate-x-1/2 rounded-full bg-black" />

                                    {/* Mobile Screenshot */}
                                    <Image
                                        src={image}
                                        alt={`Mobile app ${index + 1}`}
                                        width={500}
                                        height={900}
                                        priority={index === active}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom Reflection */}
                    <div className="pointer-events-none absolute bottom-[5px] left-1/2 h-[120px] w-[430px] -translate-x-1/2 rounded-[50%] bg-gradient-to-b from-blue-200/30 to-transparent blur-2xl" />
                </div>

                {/* ================================================= */}
                {/* RIGHT SIDE - TEXT */}
                {/* ================================================= */}

                <div className="relative z-10 max-w-xl lg:pl-8">

                    <p className="mb-6 text-sm font-medium uppercase tracking-[6px] text-gray-500">
                        Mobile App Development
                    </p>

                    <h2 className="text-4xl font-semibold uppercase leading-[1.15] tracking-tight text-[#07143d] md:text-5xl">
                        Empowering Businesses with
                        <span className="block text-[#f3292f]">
                            Mobile Solutions
                        </span>
                    </h2>

                    <p className="mt-6 max-w-lg text-base leading-7 text-gray-500 md:text-lg">
                        We build powerful, intuitive and scalable mobile
                        applications that help businesses connect with their
                        customers, improve productivity and create meaningful
                        digital experiences.
                    </p>

                    <p className="mt-4 max-w-lg text-base leading-7 text-gray-500 md:text-lg">
                        From innovative startups to established businesses,
                        our mobile solutions are designed to deliver
                        performance, usability and long-term value.
                    </p>

                    {/* Button */}
                    <a
                        href="/contact"
                        className="mt-8 inline-flex rounded-full bg-[#07143d] px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#07143d]/10 transition duration-300 hover:-translate-y-1 hover:bg-[#f3292f]"
                    >
                        Let's Build Together
                    </a>
                </div>
            </div>
        </section>
    );
}