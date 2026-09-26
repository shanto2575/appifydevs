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
        <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f9ff] via-white to-[#fff7f7] px-5 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-16">
            {/* Background glow */}
            <div className="pointer-events-none absolute left-[5%] top-[10%] h-[260px] w-[260px] rounded-full bg-blue-100/40 blur-[90px] sm:h-[350px] sm:w-[350px] md:h-[450px] md:w-[450px] md:blur-[110px]" />
            <div className="pointer-events-none absolute -bottom-20 left-[20%] h-[240px] w-[240px] rounded-full bg-red-100/40 blur-[90px] sm:h-[320px] sm:w-[320px] md:-bottom-[120px] md:h-[400px] md:w-[400px] md:blur-[110px]" />

            {/* Main grid */}
            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 sm:gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">

                {/* ============ LEFT — CAROUSEL ============ */}
                <div className="relative h-[340px] w-full overflow-hidden sm:h-[420px] md:h-[500px] lg:h-[540px]">

                    {/* Glow */}
                    <div className="absolute left-1/2 top-1/2 h-[260px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/40 blur-[80px] sm:h-[340px] sm:w-[460px] md:h-[380px] md:w-[540px] md:blur-[90px]" />

                    {/* Perspective container — scaled for mobile */}
                    <div
                        className="absolute left-1/2 top-1/2 h-[420px] w-[680px] -translate-x-1/2 -translate-y-1/2 scale-[0.5] sm:scale-[0.68] md:scale-[0.85] lg:scale-100"
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

                            if (position === 0) {
                                transform = "translateX(-50%) translateY(-50%) translateZ(120px) rotateY(0deg) scale(1)";
                                zIndex = 30;
                                opacity = 1;
                                width = 220;
                                height = 430;
                            } else if (position === -1) {
                                transform = "translateX(-105%) translateY(-50%) translateZ(-30px) rotateY(25deg) scale(.85)";
                                zIndex = 20;
                                opacity = 0.9;
                                width = 200;
                                height = 390;
                            } else if (position === 1) {
                                transform = "translateX(5%) translateY(-50%) translateZ(-30px) rotateY(-25deg) scale(.85)";
                                zIndex = 20;
                                opacity = 0.9;
                                width = 200;
                                height = 390;
                            } else if (position === -2) {
                                transform = "translateX(-155%) translateY(-50%) translateZ(-130px) rotateY(38deg) scale(.68)";
                                zIndex = 10;
                                opacity = 0.5;
                                width = 190;
                                height = 370;
                            } else if (position === 2) {
                                transform = "translateX(55%) translateY(-50%) translateZ(-130px) rotateY(-38deg) scale(.68)";
                                zIndex = 10;
                                opacity = 0.5;
                                width = 190;
                                height = 370;
                            } else {
                                transform = "translateX(-50%) translateY(-50%) translateZ(-300px) scale(.4)";
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
                                        transition: "all 900ms cubic-bezier(0.22, 1, 0.36, 1)",
                                        transformStyle: "preserve-3d",
                                    }}
                                >
                                    <div className="absolute left-1/2 top-2 z-20 h-4 w-20 -translate-x-1/2 rounded-full bg-black" />

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

                    {/* Bottom reflection */}
                    <div className="pointer-events-none absolute bottom-[5px] left-1/2 h-[80px] w-[280px] -translate-x-1/2 rounded-[50%] bg-gradient-to-b from-blue-200/30 to-transparent blur-2xl sm:h-[100px] sm:w-[360px] md:h-[110px] md:w-[400px] lg:h-[120px] lg:w-[430px]" />
                </div>

                {/* ============ RIGHT — TEXT ============ */}
                <div className="relative z-10 mx-auto max-w-xl text-center lg:mx-0 lg:pl-8 lg:text-left">

                    <p className="mb-4 text-[11px] font-medium uppercase tracking-[4px] text-gray-500 sm:mb-5 sm:text-xs sm:tracking-[5px] md:mb-6 md:text-sm md:tracking-[6px]">
                        Mobile App Development
                    </p>

                    <h2 className="text-2xl font-semibold uppercase leading-[1.2] tracking-tight text-[#07143d] sm:text-3xl md:text-4xl lg:text-5xl">
                        Empowering Businesses with
                        <span className="block text-[#f3292f]">
                            Mobile Solutions
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-lg text-[13px] leading-6 text-gray-500 sm:mt-5 sm:text-sm sm:leading-7 md:mt-6 md:text-base lg:mx-0 lg:text-lg">
                        We build powerful, intuitive and scalable mobile
                        applications that help businesses connect with their
                        customers, improve productivity and create meaningful
                        digital experiences.
                    </p>

                    <p className="mx-auto mt-3 max-w-lg text-[13px] leading-6 text-gray-500 sm:mt-4 sm:text-sm sm:leading-7 md:text-base lg:mx-0 lg:text-lg">
                        From innovative startups to established businesses,
                        our mobile solutions are designed to deliver
                        performance, usability and long-term value.
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