"use client";

import Image from "next/image";

export default function VisionSection() {
    return (
        <section className="bg-[#0b1437] px-6 py-20 md:px-10 lg:px-16">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

                <div>
                    <p className="text-[11px] font-bold uppercase tracking-[6px] text-white/40">
                        Our Vision
                    </p>

                    <h2 className="mt-5 text-3xl font-bold uppercase leading-tight tracking-tight text-white md:text-4xl lg:text-[42px]">
                        Leading with Innovation and Integrity
                    </h2>

                    <p className="mt-6 max-w-xl text-[13px] leading-6 text-white/60 md:text-sm md:leading-7">
                        Our vision is to be at the forefront of technological
                        advancements, leading with innovation and integrity. We
                        aspire to make a positive impact on the world, empowering
                        our clients to succeed in an ever-evolving digital
                        landscape. By fostering a culture of creativity,
                        collaboration, and continuous improvement, we aim to set
                        new standards in the industry and inspire future
                        generations.
                    </p>
                </div>
                <div className="relative mx-auto h-[380px] w-full max-w-[520px] md:h-[420px]">
                    <div className="absolute left-0 top-0 h-[130px] w-[130px] overflow-hidden rounded-md shadow-lg md:h-[150px] md:w-[150px]">
                        <Image
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                            alt="Team meeting"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 h-[160px] w-[220px] overflow-hidden rounded-md shadow-lg md:h-[180px] md:w-[250px]">
                        <Image
                            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
                            alt="Working on laptop"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="absolute right-0 top-1/2 h-[280px] w-[220px] -translate-y-1/2 overflow-hidden rounded-md shadow-2xl md:h-[320px] md:w-[260px]">
                        <Image
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
                            alt="Team collaboration"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}