"use client";

import Link from "next/link";
import Image from "next/image";
import { Briefcase, MapPin, Calendar, Users, ArrowRight } from "lucide-react";

const jobs = [
    {
        id: 1,
        title: "Software Engineering Internship (Backend)—Onsite",
        company: "AppifyDevs",
        location: "Dhaka, Bangladesh",
        till: "Expired",
        vacancy: 3,
        accent: "from-[#f3292f] to-[#ff7a5a]",
    },
    {
        id: 2,
        title: "Software Engineering Internship (Frontend)—Onsite",
        company: "AppifyDevs",
        location: "Dhaka, Bangladesh",
        till: "Expired",
        vacancy: 3,
        accent: "from-[#f3292f] to-[#ff7a5a]",
    },
    {
        id: 3,
        title: "Software Quality Assurance (SQA) Internship-OnSite",
        company: "AppifyDevs",
        location: "Dhaka, Bangladesh",
        till: "Expired",
        vacancy: 2,
        accent: "from-[#f3292f] to-[#ff7a5a]",
    },
    {
        id: 4,
        title: "Intern UI/UX Designer(Onsite)",
        company: "AppifyDevs",
        location: "Dhaka, Bangladesh",
        till: "Expired",
        vacancy: "02",
        accent: "from-[#f3292f] to-[#ff7a5a]",
    },
];

export default function CareersOpeningsSection() {
    return (
        <section className="relative overflow-hidden bg-[#f7f8fa] px-6 py-24 md:px-10 lg:px-16">

            {/* Background decoration */}
            <div className="pointer-events-none absolute left-[-120px] top-20 h-[320px] w-[320px] rounded-full bg-[#f3292f]/5 blur-[120px]" />
            <div className="pointer-events-none absolute right-[-120px] bottom-20 h-[320px] w-[320px] rounded-full bg-[#0b1437]/5 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">

                {/* ============ Section Heading ============ */}
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <span className="inline-block rounded-full border border-[#f3292f]/20 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[3px] text-[#f3292f] shadow-sm">
                        We're Hiring
                    </span>

                    <h2 className="mt-5 text-3xl font-bold text-[#0b1437] md:text-4xl lg:text-[38px]">
                        Explore Open Positions
                    </h2>

                    <p className="mx-auto mt-4 max-w-lg text-[13px] leading-6 text-[#1a2b5c]/60 md:text-sm md:leading-7">
                        Join a team of passionate creators and problem solvers.
                        Find the role that fits your ambition.
                    </p>
                </div>

                {/* ============ Grid: Jobs + Illustration ============ */}
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_360px] lg:gap-14">

                    {/* Left — Job Cards */}
                    <div className="flex flex-col gap-5">
                        {jobs.map((job) => (
                            <Link
                                key={job.id}
                                href={`/careers/${job.id}`}
                                className="group relative block overflow-hidden rounded-2xl border border-white bg-white/80 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:bg-white hover:shadow-[0_25px_60px_rgba(11,20,55,0.12)]"
                            >
                                {/* Left gradient bar (always visible, grows on hover) */}
                                <div
                                    className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${job.accent} transition-all duration-500 group-hover:w-1.5`}
                                />

                                {/* Hover glow */}
                                <div
                                    className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${job.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.03]`}
                                />

                                <div className="relative flex flex-col gap-5 pl-3 sm:flex-row sm:items-center">

                                    {/* ====== Left — Job info ====== */}
                                    <div className="flex-1 sm:border-r sm:border-gray-100 sm:pr-6">
                                        <h3 className="text-[15px] font-bold leading-snug text-[#0b1437] transition-colors duration-300 group-hover:text-[#f3292f] md:text-base">
                                            {job.title}
                                        </h3>

                                        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-[#1a2b5c]/70">
                                            <div className="flex items-center gap-2">
                                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f3292f]/10 text-[#f3292f] transition-transform duration-300 group-hover:scale-110">
                                                    <Briefcase size={12} strokeWidth={2.4} />
                                                </span>
                                                <span className="font-medium">
                                                    {job.company}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0b1437]/5 text-[#0b1437] transition-transform duration-300 group-hover:scale-110">
                                                    <MapPin size={12} strokeWidth={2.4} />
                                                </span>
                                                <span className="font-medium">
                                                    {job.location}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ====== Right — Meta + Details ====== */}
                                    <div className="flex items-center justify-between gap-6 sm:pl-6">

                                        {/* Meta */}
                                        <div className="flex flex-col gap-2 text-[12px]">
                                            <div className="flex items-center gap-2 text-[#1a2b5c]/70">
                                                <Calendar
                                                    size={12}
                                                    className="text-[#f3292f]"
                                                    strokeWidth={2.4}
                                                />
                                                <span>Till:</span>
                                                <span
                                                    className={`font-semibold ${
                                                        job.till === "Expired"
                                                            ? "text-[#f3292f]"
                                                            : "text-[#0b1437]"
                                                    }`}
                                                >
                                                    {job.till}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-2 text-[#1a2b5c]/70">
                                                <Users
                                                    size={12}
                                                    className="text-[#0b1437]"
                                                    strokeWidth={2.4}
                                                />
                                                <span>Vacancy:</span>
                                                <span className="font-semibold text-[#0b1437]">
                                                    {job.vacancy}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Details button */}
                                        <span
                                            className={`group/btn inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${job.accent} px-5 py-2.5 text-[12px] font-semibold text-white shadow-[0_6px_20px_rgba(243,41,47,0.25)] transition-all duration-300 group-hover:shadow-[0_10px_30px_rgba(243,41,47,0.4)]`}
                                        >
                                            Details
                                            <ArrowRight
                                                size={13}
                                                strokeWidth={2.6}
                                                className="transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Right — Illustration */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[360px]">

                            {/* Soft glow behind illustration */}
                            <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-gradient-to-br from-[#f3292f]/20 via-transparent to-[#0b1437]/20 blur-3xl" />

                            <Image
                                src="/vacancy.svg"
                                alt="We are hiring"
                                width={360}
                                height={360}
                                className="h-auto w-full drop-shadow-[0_25px_45px_rgba(11,20,55,0.15)]"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}