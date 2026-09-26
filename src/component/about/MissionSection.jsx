"use client";

import Image from "next/image";

export default function MissionSection() {
    return (
        <section className="bg-white px-6 py-20 md:px-10 lg:px-16">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <div className="relative mx-auto h-[380px] w-full max-w-[520px] md:h-[420px]">
                    <div className="absolute left-[70px] top-0 h-[130px] w-[150px] overflow-hidden rounded-sm shadow-lg md:h-[150px] md:w-[170px]">
                        <Image
                            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80"
                            alt="Office meeting room"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 h-[160px] w-[200px] overflow-hidden rounded-sm shadow-lg md:h-[180px] md:w-[230px]">
                        <Image
                            src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=600&q=80"
                            alt="Conference room"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute right-0 top-[60px] h-[200px] w-[230px] overflow-hidden rounded-sm shadow-2xl md:top-[70px] md:h-[220px] md:w-[270px]">
                        <Image
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80"
                            alt="Working on laptop"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div>
                    <p className="text-[11px] font-bold uppercase tracking-[6px] text-[#0b1437]/50">
                        Our Mission
                    </p>

                    <h2 className="mt-5 text-3xl font-bold uppercase leading-tight tracking-tight text-[#0b1437] md:text-4xl lg:text-[42px]">
                        Innovating for a Sustainable Future
                    </h2>

                    <p className="mt-6 max-w-xl text-[13px] leading-6 text-gray-600 md:text-sm md:leading-7">
                        Our mission is to harness the power of technology to
                        create innovative, sustainable solutions that drive
                        growth and improve lives. We are committed to delivering
                        excellence in every project, ensuring our clients achieve
                        their goals through cutting-edge design, development, and
                        customer support.
                    </p>
                </div>
            </div>
        </section>
    );
}