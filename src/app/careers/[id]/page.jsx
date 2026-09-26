import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    Briefcase,
    MapPin,
    Calendar,
    Users,
    Clock,
    DollarSign,
    Building2,
    CheckCircle2,
    ListChecks,
    Award,
} from "lucide-react";
import { getJobById, jobs } from "@/data/jobs";
import ApplyButton from "@/component/careers/ApplyButton";

export function generateStaticParams() {
    return jobs.map((job) => ({ id: String(job.id) }));
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const job = getJobById(id);
    if (!job) return { title: "Job Not Found | AppifyDevs" };
    return {
        title: `${job.title} | Careers at AppifyDevs`,
        description: job.description.slice(0, 150),
    };
}

export default async function JobDetailPage({ params }) {
    const { id } = await params;
    const job = getJobById(id);

    if (!job) notFound();

    return (
        <article className="relative overflow-hidden bg-[#f7f8fa]">

            {/* ============ Hero Header ============ */}
            <div className="relative overflow-hidden bg-[#0b1437] pb-24 pt-[140px]">

                {/* Background glow orbs */}
                <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#f3292f]/25 blur-[130px]" />
                <div className="pointer-events-none absolute -bottom-40 -right-24 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[130px]" />

                <div className="relative mx-auto max-w-6xl px-6 md:px-10 lg:px-16">

                    {/* Back link */}
                    <Link
                        href="/careers"
                        className="group mb-8 inline-flex items-center gap-2 text-[13px] font-medium text-white/70 transition hover:text-white"
                    >
                        <ArrowLeft
                            size={15}
                            strokeWidth={2.5}
                            className="transition-transform duration-300 group-hover:-translate-x-1"
                        />
                        Back to Careers
                    </Link>

                    {/* Meta pills */}
                    <div className="mb-6 flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[3px] text-white backdrop-blur-md">
                            {job.department}
                        </span>
                        <span className="rounded-full border border-[#f3292f]/30 bg-[#f3292f]/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[3px] text-[#ff9d9d] backdrop-blur-md">
                            {job.type}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="max-w-4xl text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[44px]">
                        {job.title}
                    </h1>

                    {/* Quick info */}
                    <div className="mt-8 flex flex-wrap gap-6 text-[13px] text-white/70">
                        <div className="flex items-center gap-2">
                            <Building2 size={15} className="text-[#f3292f]" />
                            <span className="font-medium text-white/90">
                                {job.company}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={15} className="text-[#f3292f]" />
                            <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={15} className="text-[#f3292f]" />
                            <span>{job.experience}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <DollarSign size={15} className="text-[#f3292f]" />
                            <span>{job.salary}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============ Main Content ============ */}
            <div className="relative mx-auto -mt-16 max-w-6xl px-6 pb-20 md:px-10 lg:px-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_340px]">

                    {/* ============ Left Column — Details ============ */}
                    <div className="flex flex-col gap-6">

                        {/* Overview Card */}
                        <div className="rounded-2xl border border-white bg-white p-7 shadow-[0_15px_45px_rgba(11,20,55,0.08)] md:p-9">
                            <div className="flex items-center gap-3">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#f3292f] to-[#ff7a5a] text-white">
                                    <Briefcase size={16} strokeWidth={2.4} />
                                </span>
                                <h2 className="text-xl font-bold text-[#0b1437]">
                                    Job Overview
                                </h2>
                            </div>

                            <p className="mt-5 text-[14px] leading-7 text-[#1a2b5c]/80">
                                {job.description}
                            </p>
                        </div>

                        {/* Responsibilities */}
                        {job.responsibilities?.length > 0 && (
                            <div className="rounded-2xl border border-white bg-white p-7 shadow-[0_15px_45px_rgba(11,20,55,0.08)] md:p-9">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#f3292f] to-[#ff7a5a] text-white">
                                        <ListChecks size={16} strokeWidth={2.4} />
                                    </span>
                                    <h2 className="text-xl font-bold text-[#0b1437]">
                                        Responsibilities
                                    </h2>
                                </div>

                                <ul className="mt-5 space-y-3">
                                    {job.responsibilities.map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3 text-[14px] leading-6 text-[#1a2b5c]/80"
                                        >
                                            <CheckCircle2
                                                size={17}
                                                className="mt-[3px] flex-shrink-0 text-[#f3292f]"
                                            />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Requirements */}
                        {job.requirements?.length > 0 && (
                            <div className="rounded-2xl border border-white bg-white p-7 shadow-[0_15px_45px_rgba(11,20,55,0.08)] md:p-9">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#0b1437] to-[#3b4a8a] text-white">
                                        <Award size={16} strokeWidth={2.4} />
                                    </span>
                                    <h2 className="text-xl font-bold text-[#0b1437]">
                                        Requirements
                                    </h2>
                                </div>

                                <ul className="mt-5 space-y-3">
                                    {job.requirements.map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3 text-[14px] leading-6 text-[#1a2b5c]/80"
                                        >
                                            <CheckCircle2
                                                size={17}
                                                className="mt-[3px] flex-shrink-0 text-[#0b1437]"
                                            />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Benefits */}
                        {job.benefits?.length > 0 && (
                            <div className="rounded-2xl border border-white bg-white p-7 shadow-[0_15px_45px_rgba(11,20,55,0.08)] md:p-9">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#22c55e] to-[#4ade80] text-white">
                                        <CheckCircle2 size={16} strokeWidth={2.4} />
                                    </span>
                                    <h2 className="text-xl font-bold text-[#0b1437]">
                                        What You'll Get
                                    </h2>
                                </div>

                                <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    {job.benefits.map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3 rounded-lg bg-[#f7f8fa] px-4 py-3 text-[13px] leading-6 text-[#1a2b5c]/80"
                                        >
                                            <CheckCircle2
                                                size={16}
                                                className="mt-[3px] flex-shrink-0 text-[#22c55e]"
                                            />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* ============ Right Column — Sidebar ============ */}
                    <aside className="lg:sticky lg:top-24 lg:self-start">
                        <div className="flex flex-col gap-5">

                            {/* Apply Card */}
                            <div className="relative overflow-hidden rounded-2xl bg-[#0b1437] p-6 shadow-[0_20px_50px_rgba(11,20,55,0.25)]">
                                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#f3292f]/30 blur-3xl" />

                                <p className="relative text-[11px] font-bold uppercase tracking-[3px] text-[#ff9d9d]">
                                    Ready to apply?
                                </p>
                                <h3 className="relative mt-2 text-xl font-bold text-white">
                                    Submit your application
                                </h3>
                                <p className="relative mt-3 text-[13px] leading-6 text-white/60">
                                    Send your CV and cover letter to our team
                                    and we'll get back to you soon.
                                </p>

                                <ApplyButton/>
                            </div>

                            {/* Job Summary Card */}
                            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_10px_30px_rgba(11,20,55,0.06)]">
                                <h4 className="text-sm font-bold uppercase tracking-[2px] text-[#0b1437]">
                                    Job Summary
                                </h4>

                                <ul className="mt-5 space-y-4 text-[13px]">
                                    <li className="flex items-start gap-3">
                                        <Briefcase size={15} className="mt-[3px] flex-shrink-0 text-[#f3292f]" />
                                        <div>
                                            <p className="text-[11px] font-medium uppercase tracking-[1.5px] text-gray-400">
                                                Department
                                            </p>
                                            <p className="mt-0.5 font-semibold text-[#0b1437]">
                                                {job.department}
                                            </p>
                                        </div>
                                    </li>

                                    <li className="flex items-start gap-3">
                                        <MapPin size={15} className="mt-[3px] flex-shrink-0 text-[#f3292f]" />
                                        <div>
                                            <p className="text-[11px] font-medium uppercase tracking-[1.5px] text-gray-400">
                                                Location
                                            </p>
                                            <p className="mt-0.5 font-semibold text-[#0b1437]">
                                                {job.location}
                                            </p>
                                        </div>
                                    </li>

                                    <li className="flex items-start gap-3">
                                        <Clock size={15} className="mt-[3px] flex-shrink-0 text-[#f3292f]" />
                                        <div>
                                            <p className="text-[11px] font-medium uppercase tracking-[1.5px] text-gray-400">
                                                Experience
                                            </p>
                                            <p className="mt-0.5 font-semibold text-[#0b1437]">
                                                {job.experience}
                                            </p>
                                        </div>
                                    </li>

                                    <li className="flex items-start gap-3">
                                        <Users size={15} className="mt-[3px] flex-shrink-0 text-[#f3292f]" />
                                        <div>
                                            <p className="text-[11px] font-medium uppercase tracking-[1.5px] text-gray-400">
                                                Vacancy
                                            </p>
                                            <p className="mt-0.5 font-semibold text-[#0b1437]">
                                                {job.vacancy} positions
                                            </p>
                                        </div>
                                    </li>

                                    <li className="flex items-start gap-3">
                                        <Calendar size={15} className="mt-[3px] flex-shrink-0 text-[#f3292f]" />
                                        <div>
                                            <p className="text-[11px] font-medium uppercase tracking-[1.5px] text-gray-400">
                                                Deadline
                                            </p>
                                            <p
                                                className={`mt-0.5 font-semibold ${
                                                    job.till === "Expired"
                                                        ? "text-[#f3292f]"
                                                        : "text-[#0b1437]"
                                                }`}
                                            >
                                                {job.till}
                                            </p>
                                        </div>
                                    </li>

                                    <li className="flex items-start gap-3">
                                        <DollarSign size={15} className="mt-[3px] flex-shrink-0 text-[#f3292f]" />
                                        <div>
                                            <p className="text-[11px] font-medium uppercase tracking-[1.5px] text-gray-400">
                                                Salary
                                            </p>
                                            <p className="mt-0.5 font-semibold text-[#0b1437]">
                                                {job.salary}
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Share/Note Card */}
                            <div className="rounded-2xl border border-dashed border-[#f3292f]/30 bg-[#f3292f]/5 p-5">
                                <p className="text-[13px] leading-6 text-[#1a2b5c]/80">
                                    💡 <span className="font-semibold">Tip:</span>{" "}
                                    Mention the position name in your email
                                    subject for faster processing.
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
}