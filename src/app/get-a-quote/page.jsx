"use client";

import { useState } from "react";
import Image from "next/image";
import { CloudUpload } from "lucide-react";
import toast from "react-hot-toast";

// Order matters for grid layout (fills row-by-row)
const SERVICES = [
    "Web Designing",
    "Web Maintenance",
    "Web Hosting",
    "Content Management",
    "E Commerce/Online Shopping Web Design",
    "Software Development",
    "LMS (School Management System)",
    "Web Development",
    "WordPress Development",
    "Domain Registration",
    "Search Engine Optimization (SEO)",
    "App Development",
    "IT Security",
    "Graphic Designing",
    "UI/UX",
];

const ADDITIONAL = [
    "Design Solution",
    "Digital Marketing",
    "Management Consultancy",
    "Organizational Development Consultancy",
    "Brand Building",
    "Business Consultancy",
    "International Trade Consultancy",
];

export default function GetAQuotePage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        description: "",
        website: "",
        budget: "",
    });

    const [selectedServices, setSelectedServices] = useState([]);
    const [additionalFeature, setAdditionalFeature] = useState("");
    const [fileName, setFileName] = useState("");
    const [loading, setLoading] = useState(false);

    const toggleService = (s) => {
        setSelectedServices((prev) =>
            prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
        );
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.type !== "application/pdf") {
            toast.error("Only PDF files are allowed.");
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            toast.error("File size must be under 5MB.");
            return;
        }
        setFileName(file.name);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.phone || !form.description) {
            return toast.error("Please fill all required fields.");
        }
        if (selectedServices.length === 0) {
            return toast.error("Please select at least one service.");
        }

        try {
            setLoading(true);
            await new Promise((r) => setTimeout(r, 1500));

            toast.success("Quote request submitted successfully! 🎉");
            // reset
            setForm({
                name: "",
                email: "",
                phone: "",
                description: "",
                website: "",
                budget: "",
            });
            setSelectedServices([]);
            setAdditionalFeature("");
            setFileName("");
        } catch {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-white px-6 pb-20 pt-[140px] md:px-10 lg:px-16">
            <div className="mx-auto max-w-5xl">
                <form onSubmit={handleSubmit}>

                    {/* ====== Top: Logo + Illustration ====== */}
                    <div className="flex items-start justify-between gap-6">
                        <div className="inline-block bg-[#fde8e8] px-5 py-4">
                            <span className="text-[26px] font-bold tracking-tight">
                                <span className="text-[#f3292f]">APPIFY</span>
                                <span className="text-[#0b1437]">DEVS.</span>
                            </span>
                        </div>

                        <div className="hidden md:block">
                            <Image
                                src="/contact.svg"
                                alt="Get a Quote"
                                width={200}
                                height={200}
                                className="h-auto w-full max-w-[200px]"
                            />
                        </div>
                    </div>

                    {/* ====== Name / Email / Phone ====== */}
                    <div className="mt-10 max-w-[500px] space-y-5">
                        <div>
                            <label className="block text-[13px] font-semibold text-[#0b1437]">
                                Name <span className="text-[#f3292f]">*</span>
                            </label>
                            <input
                                type="text"
                                value={form.name}
                                onChange={(e) =>
                                    setForm({ ...form, name: e.target.value })
                                }
                                placeholder="Enter name"
                                className="mt-2 h-11 w-full rounded-md border border-gray-200 bg-white px-4 text-[13px] text-[#0b1437] placeholder-gray-400 outline-none transition focus:border-[#f3292f] focus:ring-2 focus:ring-[#f3292f]/15"
                            />
                        </div>

                        <div>
                            <label className="block text-[13px] font-semibold text-[#0b1437]">
                                Email <span className="text-[#f3292f]">*</span>
                            </label>
                            <input
                                type="email"
                                value={form.email}
                                onChange={(e) =>
                                    setForm({ ...form, email: e.target.value })
                                }
                                placeholder="Enter email"
                                className="mt-2 h-11 w-full rounded-md border border-gray-200 bg-white px-4 text-[13px] text-[#0b1437] placeholder-gray-400 outline-none transition focus:border-[#f3292f] focus:ring-2 focus:ring-[#f3292f]/15"
                            />
                        </div>

                        <div>
                            <label className="block text-[13px] font-semibold text-[#0b1437]">
                                Phone Number <span className="text-[#f3292f]">*</span>
                            </label>
                            <div className="mt-2 flex h-11 overflow-hidden rounded-md border border-gray-200 bg-white transition focus-within:border-[#f3292f] focus-within:ring-2 focus-within:ring-[#f3292f]/15">
                                <span className="flex items-center gap-1.5 border-r border-gray-200 bg-gray-50 px-3 text-[13px] text-[#0b1437]">
                                    🇧🇩 <span className="font-medium">+880</span>
                                </span>
                                <input
                                    type="tel"
                                    value={form.phone}
                                    onChange={(e) =>
                                        setForm({ ...form, phone: e.target.value })
                                    }
                                    placeholder=""
                                    className="flex-1 px-3 text-[13px] text-[#0b1437] placeholder-gray-400 outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* ====== Services You Required ====== */}
                    <div className="mt-14">
                        <h2 className="text-lg font-bold text-[#0b1437] md:text-xl">
                            Services You Required{" "}
                            <span className="text-[#f3292f]">*</span>
                        </h2>

                        <div className="mt-6 grid grid-cols-1 gap-y-4 gap-x-10 sm:grid-cols-2 md:grid-cols-3">
                            {SERVICES.map((service) => {
                                const checked = selectedServices.includes(service);
                                return (
                                    <label
                                        key={service}
                                        className="flex cursor-pointer items-center gap-3 text-[13px] text-[#0b1437]"
                                    >
                                        <span
                                            className={`flex h-[16px] w-[16px] flex-shrink-0 items-center justify-center rounded-sm border-2 transition ${
                                                checked
                                                    ? "border-[#f3292f] bg-[#f3292f]"
                                                    : "border-[#f3292f]/50 bg-white"
                                            }`}
                                        >
                                            {checked && (
                                                <span className="h-[7px] w-[7px] rounded-[1px] bg-white" />
                                            )}
                                        </span>
                                        <input
                                            type="checkbox"
                                            checked={checked}
                                            onChange={() => toggleService(service)}
                                            className="sr-only"
                                        />
                                        <span className="leading-tight">
                                            {service}
                                        </span>
                                    </label>
                                );
                            })}
                        </div>
                    </div>

                    {/* ====== Additional Features ====== */}
                    <div className="mt-14">
                        <h2 className="text-lg font-bold text-[#0b1437] md:text-xl">
                            Additional Features (Optional)
                        </h2>

                        <div className="mt-6 grid grid-cols-1 gap-y-4 gap-x-10 sm:grid-cols-2 md:grid-cols-3">
                            {ADDITIONAL.map((feature) => {
                                const checked = additionalFeature === feature;
                                return (
                                    <label
                                        key={feature}
                                        className="flex cursor-pointer items-center gap-3 text-[13px] text-[#0b1437]"
                                    >
                                        <span
                                            className={`flex h-[16px] w-[16px] flex-shrink-0 items-center justify-center rounded-full border-2 transition ${
                                                checked
                                                    ? "border-[#f3292f]"
                                                    : "border-[#f3292f]/40"
                                            }`}
                                        >
                                            {checked && (
                                                <span className="h-[8px] w-[8px] rounded-full bg-[#f3292f]" />
                                            )}
                                        </span>
                                        <input
                                            type="radio"
                                            name="additional"
                                            checked={checked}
                                            onChange={() =>
                                                setAdditionalFeature(feature)
                                            }
                                            className="sr-only"
                                        />
                                        <span className="leading-tight">
                                            {feature}
                                        </span>
                                    </label>
                                );
                            })}
                        </div>
                    </div>

                    {/* ====== Description + Upload ====== */}
                    <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">

                        {/* Description */}
                        <div>
                            <label className="block text-[13px] font-semibold text-[#0b1437]">
                                Description <span className="text-[#f3292f]">*</span>
                            </label>
                            <textarea
                                rows={6}
                                value={form.description}
                                onChange={(e) =>
                                    setForm({ ...form, description: e.target.value })
                                }
                                placeholder="Give us brief description about what you do and what you need"
                                className="mt-2 w-full resize-none rounded-md border border-gray-200 bg-white p-4 text-[13px] text-[#0b1437] placeholder-gray-400 outline-none transition focus:border-[#f3292f] focus:ring-2 focus:ring-[#f3292f]/15"
                            />
                        </div>

                        {/* Upload */}
                        <div>
                            <label className="block text-[13px] font-semibold text-[#0b1437]">
                                Upload Your Requirements (Optional)
                            </label>

                            <label className="mt-2 flex h-[168px] cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 bg-white p-6 text-center transition hover:border-[#f3292f]/50 hover:bg-[#f3292f]/[0.02]">
                                <CloudUpload
                                    size={28}
                                    className="text-gray-400"
                                    strokeWidth={1.6}
                                />
                                <p className="mt-3 text-[13px] text-gray-500">
                                    {fileName ? (
                                        <span className="font-medium text-[#0b1437]">
                                            {fileName}
                                        </span>
                                    ) : (
                                        "Choose pdf to upload"
                                    )}
                                </p>
                                <input
                                    type="file"
                                    accept=".pdf"
                                    onChange={handleFileChange}
                                    className="sr-only"
                                />
                            </label>
                        </div>
                    </div>

                    {/* ====== Example Website + Budget ====== */}
                    <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div>
                            <label className="block text-[13px] font-semibold text-[#0b1437]">
                                Example Website URL
                            </label>
                            <input
                                type="url"
                                value={form.website}
                                onChange={(e) =>
                                    setForm({ ...form, website: e.target.value })
                                }
                                placeholder="Enter example website url"
                                className="mt-2 h-11 w-full rounded-md border border-gray-200 bg-white px-4 text-[13px] text-[#0b1437] placeholder-gray-400 outline-none transition focus:border-[#f3292f] focus:ring-2 focus:ring-[#f3292f]/15"
                            />
                        </div>

                        <div>
                            <label className="block text-[13px] font-semibold text-[#0b1437]">
                                Budget
                            </label>
                            <input
                                type="text"
                                value={form.budget}
                                onChange={(e) =>
                                    setForm({ ...form, budget: e.target.value })
                                }
                                placeholder="Enter a budget in dollars"
                                className="mt-2 h-11 w-full rounded-md border border-gray-200 bg-white px-4 text-[13px] text-[#0b1437] placeholder-gray-400 outline-none transition focus:border-[#f3292f] focus:ring-2 focus:ring-[#f3292f]/15"
                            />
                        </div>
                    </div>

                    {/* ====== Submit ====== */}
                    <div className="mt-14 flex justify-center">
                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded-md bg-[#f3292f] px-10 py-3 text-[13px] font-bold uppercase tracking-[2px] text-white shadow-[0_8px_25px_rgba(243,41,47,0.3)] transition duration-200 hover:bg-[#d92026] hover:shadow-[0_12px_35px_rgba(243,41,47,0.45)] disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}