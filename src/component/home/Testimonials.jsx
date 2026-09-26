"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
    {
        title: "Exceptional Service",
        description:
            "AppifyDevs exceeded our expectations with their exceptional service and technical expertise. Our project was completed on time and within budget, resulting in a highly functional and user-friendly...",
        image: "https://i.ibb.co.com/qKbv1XL/4.jpg",
        name: "Mehedi Shoron",
        role: "CEO & Founder, HelloTask",
    },
    {
        title: "E-Commerce Apps & ERP",
        description:
            "I had an amazing experience with AppifyDevs. The customer service was outstanding, and the product was exactly what I was looking for, with perfect coding standards. I just love these guys and can...",
        image: "https://i.ibb.co.com/Rkz8Mw1h/3.jpg",
        name: "Khaledur Rahman",
        role: "Founder & CEO, TigerCart Ltd.",
    },
    {
        title: "Cloud, DevOps Consulting",
        description:
            "We first contacted AppifyDevs because we needed senior-level expertise in AWS and DevOps, and we needed it quickly. AppifyDevs's DevOps engineers helped us optimize our infrastructure and set up a...",
        image: "https://i.ibb.co.com/wZqXDbPd/1.jpg",
        name: "Mostafijur Rahman",
        role: "CEO & Founder, Appdevs",
    },
    {
        title: "Mobile App Development",
        description:
            "The team at AppifyDevs built our mobile app from scratch with incredible attention to detail. They delivered ahead of schedule and the app works flawlessly on both iOS and Android...",
        image: "https://i.ibb.co.com/qKbv1XL/4.jpg",
        name: "Rashed Khan",
        role: "CTO, ShopEase",
    },
    {
        title: "UI/UX Design Excellence",
        description:
            "Their design team transformed our outdated interface into something modern and user-friendly. Our user engagement increased by 60% within the first month of launch...",
        image: "https://i.ibb.co.com/Rkz8Mw1h/3.jpg",
        name: "Sadia Islam",
        role: "Product Manager, FinEdge",
    },
    {
        title: "AI/ML Solutions",
        description:
            "AppifyDevs delivered a powerful AI-driven analytics dashboard that helped us make data-backed decisions. Highly recommended for anyone needing ML expertise...",
        image: "https://i.ibb.co.com/wZqXDbPd/1.jpg",
        name: "Tanvir Ahmed",
        role: "Founder, DataMinds",
    },
    {
        title: "WordPress Development",
        description:
            "Our new WordPress site is fast, responsive, and easy to manage. The team understood our brand vision and delivered beyond expectations...",
        image: "https://i.ibb.co.com/qKbv1XL/4.jpg",
        name: "Nusrat Jahan",
        role: "Marketing Head, Brandify",
    },
    {
        title: "Shopify Store Setup",
        description:
            "They built a custom Shopify store for us with seamless payment integration. Sales increased within weeks. Great communication throughout the project...",
        image: "https://i.ibb.co.com/Rkz8Mw1h/3.jpg",
        name: "Imran Hossain",
        role: "Owner, UrbanCart",
    },
    {
        title: "Content Writing",
        description:
            "Their content team produced high-quality, SEO-optimized articles that boosted our organic traffic significantly. Truly professional writers...",
        image: "https://i.ibb.co.com/wZqXDbPd/1.jpg",
        name: "Farhana Akter",
        role: "Editor, ContentHub",
    },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(3); // default 3 (SSR safe)

    const total = testimonials.length;
    const maxIndex = Math.max(0, total - visible);

    /* ============ Responsive visible count ============ */
    useEffect(() => {
        const updateVisible = () => {
            if (window.innerWidth < 640) {
                setVisible(1);
            } else if (window.innerWidth < 1024) {
                setVisible(2);
            } else {
                setVisible(3);
            }
        };

        updateVisible();
        window.addEventListener("resize", updateVisible);
        return () => window.removeEventListener("resize", updateVisible);
    }, []);

    /* ============ Reset index if it exceeds maxIndex ============ */
    useEffect(() => {
        if (index > maxIndex) setIndex(0);
    }, [maxIndex, index]);

    /* ============ Auto slide every 4s ============ */
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        }, 4000);

        return () => clearInterval(timer);
    }, [maxIndex]);

    return (
        <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-16">
            <div className="mx-auto max-w-7xl">

                {/* ===== Heading ===== */}
                <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
                    <h2 className="text-2xl font-bold text-[#0b1437] sm:text-3xl md:text-4xl">
                        Hear From Our Happy Clients
                    </h2>

                    <p className="mt-3 text-[13px] leading-6 text-gray-500 sm:mt-4 sm:text-sm sm:leading-7">
                        Discover the experiences and success stories from our
                        satisfied clients. Their feedback highlights the
                        exceptional service and outstanding results we've
                        delivered.
                    </p>
                </div>

                {/* ===== Slider viewport ===== */}
                <div className="overflow-hidden">
                    <motion.div
                        className="flex"
                        animate={{
                            x: `-${index * (100 / visible)}%`,
                        }}
                        transition={{
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        {testimonials.map((item, i) => (
                            <div
                                key={i}
                                className="flex w-full flex-shrink-0 flex-col items-center px-2 sm:w-1/2 sm:px-3 lg:w-1/3"
                            >
                                {/* Card */}
                                <div className="w-full rounded-lg bg-[#f4f5f7] p-5 text-center sm:p-6">
                                    <h3 className="text-base font-semibold text-[#0b1437] sm:text-lg">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-[12.5px] leading-6 text-gray-500 sm:text-[13px]">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Avatar */}
                                <div className="-mt-7 h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-md">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={64}
                                        height={64}
                                        className="h-full w-full object-cover object-top"
                                    />
                                </div>

                                {/* Name & Role */}
                                <h4 className="mt-3 text-[15px] font-bold text-[#0b1437] sm:text-base">
                                    {item.name}
                                </h4>

                                <p className="mt-1 text-[11.5px] text-gray-500 sm:text-[12px]">
                                    {item.role}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* ===== Pagination dots ===== */}
                <div className="mt-8 flex items-center justify-center gap-2 sm:mt-10">
                    {Array.from({ length: maxIndex + 1 }).map((_, dot) => (
                        <button
                            key={dot}
                            onClick={() => setIndex(dot)}
                            aria-label={`Go to slide ${dot + 1}`}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                index === dot
                                    ? "w-6 bg-[#f3292f]"
                                    : "w-2 bg-gray-300 hover:bg-gray-400"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}