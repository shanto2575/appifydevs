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

const VISIBLE = 3; // একসাথে কতটি দেখাবে

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const total = testimonials.length;
    const maxIndex = total - VISIBLE; // 9 - 3 = 6 → index 0..6

    // Auto slide every 4 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        }, 4000);

        return () => clearInterval(timer);
    }, [maxIndex]);

    return (
        <section className="bg-white px-6 py-16 md:px-10 lg:px-16">
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-[#0b1437] md:text-4xl">
                        Hear From Our Happy Clients
                    </h2>

                    <p className="mt-4 text-sm leading-6 text-gray-500">
                        Discover the experiences and success stories from our
                        satisfied clients. Their feedback highlights the
                        exceptional service and outstanding results we've
                        delivered.
                    </p>
                </div>

                {/* Slider viewport */}
                <div className="overflow-hidden">
                    <motion.div
                        className="flex"
                        animate={{
                            x: `-${index * (100 / VISIBLE)}%`,
                        }}
                        transition={{
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        {testimonials.map((item, i) => (
                            <div
                                key={i}
                                className="flex w-full flex-shrink-0 flex-col items-center px-3 md:w-1/3"
                            >
                                {/* Card */}
                                <div className="w-full rounded-lg bg-[#f4f5f7] p-6 text-center">
                                    <h3 className="text-lg font-semibold text-[#0b1437]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-[13px] leading-6 text-gray-500">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Avatar (object-top keeps head inside) */}
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
                                <h4 className="mt-3 text-base font-bold text-[#0b1437]">
                                    {item.name}
                                </h4>

                                <p className="mt-1 text-[12px] text-gray-500">
                                    {item.role}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Pagination Dots (based on index positions) */}
                <div className="mt-10 flex items-center justify-center gap-2">
                    {Array.from({ length: maxIndex + 1 }).map((_, dot) => (
                        <button
                            key={dot}
                            onClick={() => setIndex(dot)}
                            aria-label={`Go to slide ${dot + 1}`}
                            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                                index === dot
                                    ? "bg-[#f3292f]"
                                    : "bg-gray-300 hover:bg-gray-400"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}