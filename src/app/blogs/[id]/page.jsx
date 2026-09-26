import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { getBlogById, blogs } from "@/data/blogs";

// Static params (optional but recommended)
export function generateStaticParams() {
    return blogs.map((blog) => ({ id: String(blog.id) }));
}

export default async function BlogDetailPage({ params }) {
    const { id } = await params;
    const blog = getBlogById(id);

    if (!blog) {
        notFound();
    }

    return (
        <article className="bg-white px-6 pb-20 pt-[120px] md:px-10 lg:px-16">
            <div className="mx-auto max-w-3xl">

                {/* Back link */}
                <Link
                    href="/blogs"
                    className="group mb-8 inline-flex items-center gap-2 text-[13px] font-medium text-[#1a2b5c] transition hover:text-[#f3292f]"
                >
                    <ArrowLeft
                        size={15}
                        strokeWidth={2.5}
                        className="transition-transform duration-300 group-hover:-translate-x-1"
                    />
                    Back to Blogs
                </Link>

                {/* Category */}
                <span className="inline-block rounded-full border border-[#f3292f]/20 bg-[#f3292f]/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[3px] text-[#f3292f]">
                    {blog.category}
                </span>

                {/* Title */}
                <h1 className="mt-5 text-3xl font-bold leading-tight text-[#0b1437] md:text-4xl lg:text-[42px]">
                    {blog.title}
                </h1>

                {/* Meta */}
                <div className="mt-6 flex flex-wrap items-center gap-5 text-[13px] text-gray-500">
                    <div className="flex items-center gap-2">
                        <User size={15} />
                        <span>
                            By{" "}
                            <span className="font-medium text-[#0b1437]">
                                {blog.author}
                            </span>
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar size={15} />
                        <span>{blog.date}</span>
                    </div>
                </div>

                {/* Cover image */}
                <div className="relative mt-8 h-[320px] w-full overflow-hidden rounded-2xl md:h-[420px]">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                {/* Content */}
                <div
                    className="prose prose-lg mt-10 max-w-none text-[15px] leading-7 text-[#1a2b5c]
                        prose-headings:text-[#0b1437]
                        prose-h2:mt-8 prose-h2:text-xl prose-h2:font-bold
                        prose-p:my-4
                        prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
                        prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
                        prose-li:my-1
                        prose-code:rounded prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-[13px] prose-code:text-[#f3292f]
                        prose-strong:text-[#0b1437]"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* CTA */}
                <div className="mt-14 rounded-2xl bg-gradient-to-br from-[#0b1437] to-[#1a2b5c] p-8 text-center md:p-10">
                    <h3 className="text-xl font-bold text-white md:text-2xl">
                        Ready to build your next big idea?
                    </h3>
                    <p className="mx-auto mt-3 max-w-md text-[13px] leading-6 text-white/70">
                        Let's turn your vision into a successful product with
                        our expert team.
                    </p>
                    <Link
                        href="/contact"
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f3292f] to-[#ff7a5a] px-7 py-3 text-[13px] font-semibold text-white shadow-[0_8px_25px_rgba(243,41,47,0.35)] transition hover:shadow-[0_12px_35px_rgba(243,41,47,0.5)]"
                    >
                        Book a Meeting
                    </Link>
                </div>
            </div>
        </article>
    );
}