"use client";

import Image from "next/image";

export default function GetCustomerSatisfactionSection() {
    return (
        <section className="bg-white px-6 py-20 md:px-10 lg:px-16">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">

                {/* Left — Illustration */}
                <div className="flex justify-center">
                    <div className="relative w-full max-w-[480px]">
                        <Image
                            src="/project-based.jpg"
                            alt="Team discussing in office"
                            width={480}
                            height={320}
                            className="h-auto w-full"
                            priority
                        />
                    </div>
                </div>

                {/* Right — Text */}
                <div>
                    <h2 className="text-2xl font-bold text-[#0b1437] md:text-3xl lg:text-[30px]">
                        Get Customer Satisfaction
                    </h2>

                    <p className="mt-5 max-w-xl text-[13px] leading-6 text-[#1a2b5c] md:text-sm md:leading-7">
                        Provide us with your ideas and requirements, and we will
                        deliver effective solutions tailored to your needs. We
                        specialize in creating software that meets your business
                        demands while accommodating future modifications. Enjoy
                        timely and successful project delivery.
                    </p>
                </div>
            </div>
        </section>
    );
}