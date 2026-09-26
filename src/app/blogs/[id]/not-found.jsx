import Link from "next/link";
import { FileQuestion, ArrowLeft } from "lucide-react";

export default function BlogNotFound() {
    return (
        <section className="flex min-h-[80vh] items-center justify-center bg-white px-6 py-20">
            <div className="mx-auto max-w-md text-center">

                {/* Icon */}
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#f3292f] to-[#ff7a5a] text-white shadow-[0_20px_50px_rgba(243,41,47,0.3)]">
                    <FileQuestion size={40} strokeWidth={2} />
                </div>

                {/* 404 */}
                <p className="mt-8 text-[12px] font-bold uppercase tracking-[4px] text-[#f3292f]">
                    Error 404
                </p>

                {/* Heading */}
                <h1 className="mt-3 text-3xl font-bold text-[#0b1437] md:text-4xl">
                    Blog Not Found
                </h1>

                {/* Description */}
                <p className="mt-4 text-[13px] leading-6 text-[#1a2b5c]/60 md:text-sm">
                    The blog post you're looking for doesn't exist or may have
                    been removed. Let's get you back on track.
                </p>

                {/* Button */}
                <Link
                    href="/blogs"
                    className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f3292f] to-[#ff7a5a] px-7 py-3 text-[13px] font-semibold text-white shadow-[0_8px_25px_rgba(243,41,47,0.3)] transition hover:shadow-[0_12px_35px_rgba(243,41,47,0.45)]"
                >
                    <ArrowLeft
                        size={15}
                        strokeWidth={2.5}
                        className="transition-transform duration-300 group-hover:-translate-x-1"
                    />
                    Back to Blogs
                </Link>
            </div>
        </section>
    );
}