"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FileSearch, ArrowLeft } from "lucide-react";

const categories = [
    "All",
    "DevOps",
    "Laravel",
    "NGINX",
    "Startups",
    "Software MVP",
];

const blogs = [
    {
        id: 1,
        title: "Ultimate MVP Development Guide for Startups",
        author: "AppifyDevs",
        date: "Unknown Date",
        category: "Startups",
        image:
            "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    },
];

export default function BlogListSection() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredBlogs =
        activeCategory === "All"
            ? blogs
            : blogs.filter((b) => b.category === activeCategory);

    return (
        <section className="bg-white px-6 py-16 md:px-10 lg:px-16">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[1fr_240px]">

                {/* ============ Left — Blog List ============ */}
                <div className="flex flex-col gap-8">
                    {filteredBlogs.length === 0 ? (
                        // ============ Modern Empty State ============
                        <div className="relative overflow-hidden rounded-2xl border border-dashed border-gray-200 bg-gradient-to-br from-[#f7f8fa] via-white to-[#f7f8fa] px-8 py-16 text-center">

                            {/* Decorative blurred orbs */}
                            <div className="pointer-events-none absolute -left-12 -top-12 h-40 w-40 rounded-full bg-[#f3292f]/10 blur-3xl" />
                            <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-[#0b1437]/10 blur-3xl" />

                            {/* Icon */}
                            <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(11,20,55,0.08)]">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#f3292f] to-[#ff7a5a] text-white">
                                    <FileSearch size={26} strokeWidth={2} />
                                </div>
                            </div>

                            {/* Heading */}
                            <h3 className="relative mt-6 text-xl font-bold text-[#0b1437] md:text-2xl">
                                No Blogs Found
                            </h3>

                            {/* Description */}
                            <p className="relative mx-auto mt-3 max-w-md text-[13px] leading-6 text-[#1a2b5c]/60 md:text-sm">
                                We couldn't find any articles in the{" "}
                                <span className="font-semibold text-[#f3292f]">
                                    "{activeCategory}"
                                </span>{" "}
                                category right now. Try selecting a different
                                topic or explore all of our posts.
                            </p>

                            {/* Button */}
                            <button
                                onClick={() => setActiveCategory("All")}
                                className="group relative mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f3292f] to-[#ff7a5a] px-6 py-3 text-[13px] font-semibold text-white shadow-[0_8px_25px_rgba(243,41,47,0.3)] transition-all duration-300 hover:shadow-[0_12px_35px_rgba(243,41,47,0.45)]"
                            >
                                <ArrowLeft
                                    size={15}
                                    strokeWidth={2.5}
                                    className="transition-transform duration-300 group-hover:-translate-x-1"
                                />
                                Show All Blogs
                            </button>
                        </div>
                    ) : (
                        filteredBlogs.map((blog) => (
                            <Link
                                key={blog.id}
                                href={`/blogs/${blog.id}`}
                                className="group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)]"
                            >
                                {/* Cover Image */}
                                <div className="relative h-[280px] w-full overflow-hidden">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-[#7c3aed] transition group-hover:text-[#5b21b6] md:text-xl">
                                        {blog.title}
                                    </h3>

                                    <div className="mt-3 flex flex-wrap items-center gap-2 text-[12px] text-gray-500">
                                        <span>
                                            By{" "}
                                            <span className="font-medium text-gray-700">
                                                {blog.author}
                                            </span>
                                        </span>
                                        <span className="text-gray-300">|</span>
                                        <span className="italic">{blog.date}</span>
                                    </div>
                                </div>
                            </Link>
                        ))
                    )}
                </div>

                {/* ============ Right — Sidebar ============ */}
                <aside className="lg:sticky lg:top-24 lg:self-start">
                    <h3 className="text-base font-semibold text-[#0b1437]">
                        Blog Categories
                    </h3>

                    <ul className="mt-5 flex flex-col gap-3">
                        {categories.map((cat) => {
                            const active = activeCategory === cat;
                            return (
                                <li key={cat}>
                                    <button
                                        onClick={() => setActiveCategory(cat)}
                                        className="group flex items-center gap-3 text-[13px] text-[#1a2b5c] transition hover:text-[#f3292f]"
                                    >
                                        <span
                                            className={`flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full border-2 transition ${
                                                active
                                                    ? "border-[#f3292f]"
                                                    : "border-gray-300 group-hover:border-[#f3292f]"
                                            }`}
                                        >
                                            {active && (
                                                <span className="h-[8px] w-[8px] rounded-full bg-[#f3292f]" />
                                            )}
                                        </span>

                                        <span
                                            className={
                                                active
                                                    ? "font-medium text-[#0b1437]"
                                                    : ""
                                            }
                                        >
                                            {cat}
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </aside>
            </div>
        </section>
    );
}