"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
    "All Technologies",
    "Frontend",
    "Backend",
    "DevOps",
    "Mobile App",
    "Database",
];

const techs = [
    // Frontend
    {
        name: "React",
        category: "Frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        name: "Next.js",
        category: "Frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
        name: "Nuxt.js",
        category: "Frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
    },
    {
        name: "Nest.js",
        category: "Backend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
    },
    {
        name: "Tailwind CSS",
        category: "Frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
        name: "TypeScript",
        category: "Frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
        name: "Vue.js",
        category: "Frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
        name: "HTML",
        category: "Frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
        name: "WordPress",
        category: "Backend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
    },
    {
        name: "Node.js",
        category: "Backend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
        name: "Express.js",
        category: "Backend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
        name: "Django",
        category: "Backend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    // Backend extras
    {
        name: "Python",
        category: "Backend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
        name: "Laravel",
        category: "Backend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    // Database
    {
        name: "MongoDB",
        category: "Database",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
        name: "PostgreSQL",
        category: "Database",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
        name: "MySQL",
        category: "Database",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
        name: "Redis",
        category: "Database",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    },
    // DevOps
    {
        name: "Docker",
        category: "DevOps",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
        name: "Kubernetes",
        category: "DevOps",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    },
    {
        name: "AWS",
        category: "DevOps",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
        name: "Jenkins",
        category: "DevOps",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    },
    // Mobile
    {
        name: "React Native",
        category: "Mobile App",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        name: "Flutter",
        category: "Mobile App",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
        name: "Swift",
        category: "Mobile App",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    },
    {
        name: "Kotlin",
        category: "Mobile App",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    },
];

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("All Technologies");
    const [showAll, setShowAll] = useState(false);

    // Filter by active tab
    const filtered =
        activeTab === "All Technologies"
            ? techs
            : techs.filter((t) => t.category === activeTab);

    // Initially show only 12 items unless showAll is true
    const visibleTechs = showAll ? filtered : filtered.slice(0, 12);
    const hasMore = filtered.length > 12;

    // When tab changes, reset showAll
    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setShowAll(false);
    };

    return (
        <section className="bg-[#f7f8fa] px-6 py-20 md:px-10 lg:px-16">
            <div className="mx-auto max-w-6xl">

                {/* Heading */}
                <div className="mx-auto mb-10 max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-[#0b1437] md:text-4xl">
                        The Tech Stack We Master
                    </h2>

                    <p className="mt-4 text-sm leading-6 text-gray-500">
                        Our proficiency in a wide range of technologies ensures we
                        can tackle any project with confidence. From front-end to
                        back-end, our mastery of the tech stack guarantees
                        high-quality, seamless, and efficient development.
                    </p>
                </div>

                {/* Tabs */}
                <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
                    {TABS.map((tab) => {
                        const active = activeTab === tab;
                        return (
                            <button
                                key={tab}
                                onClick={() => handleTabChange(tab)}
                                className={`rounded-md border px-4 py-2 text-sm font-medium transition duration-200 ${
                                    active
                                        ? "border-[#f3292f] bg-white text-[#f3292f] shadow-sm"
                                        : "border-transparent bg-transparent text-[#0b1437] hover:text-[#f3292f]"
                                }`}
                            >
                                {tab}
                            </button>
                        );
                    })}
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
                >
                    <AnimatePresence mode="popLayout">
                        {visibleTechs.map((tech) => (
                            <motion.div
                                key={tech.name}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col items-center"
                            >
                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(243,41,47,0.15)]">
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className="h-9 w-9 object-contain"
                                        loading="lazy"
                                    />
                                </div>

                                <p className="mt-4 text-sm font-medium text-[#0b1437]">
                                    {tech.name}
                                </p>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {hasMore && (
                    <div className="mt-12 flex justify-center">
                        <button
                            onClick={() => setShowAll((prev) => !prev)}
                            className="rounded-md border border-[#f3292f] px-6 py-2 text-sm font-medium text-[#f3292f] transition duration-200 hover:bg-[#f3292f] hover:text-white"
                        >
                            {showAll ? "Show Less..." : "Show More..."}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}