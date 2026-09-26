"use client";

export default function ProjectHowItWorksSection() {
    return (
        <section className="bg-[#f7f8fa] px-6 py-20 md:px-10 lg:px-16">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">

                {/* Left — Heading */}
                <div>
                    <h2 className="text-2xl font-bold text-[#0b1437] md:text-3xl lg:text-[30px]">
                        How It Works?
                    </h2>
                </div>

                {/* Right — Paragraph */}
                <div>
                    <p className="max-w-xl text-[13px] leading-6 text-[#1a2b5c] md:text-sm md:leading-7">
                        At AppifyDevs, recruiting dedicated teams is more
                        flexible and streamlined. With years of experience, we
                        have developed a process that simplifies every step of
                        your development journey—from hiring to task
                        completion—making it faster, more transparent, and
                        highly effective.
                    </p>
                </div>
            </div>
        </section>
    );
}