"use client";

import { useState } from "react";
import Image from "next/image";
import { Send } from "lucide-react";
import toast from "react-hot-toast";

export default function ContactSection() {
    const [activeTab, setActiveTab] = useState("message");
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.firstName || !form.email || !form.message) {
            return toast.error("Please fill in the required fields.");
        }

        try {
            setLoading(true);

            // Fake API
            await new Promise((resolve) => setTimeout(resolve, 1500));

            toast.success("Message sent successfully! 🎉");
            setForm({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (err) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-white px-6 py-16 md:px-10 lg:px-16">
            <div className="mx-auto max-w-5xl">

                {/* ====== Toggle Tabs ====== */}
                <div className="mb-10 flex justify-center">
                    <div className="inline-flex rounded-full bg-[#f1f2f6] p-1.5 shadow-sm">
                        <button
                            onClick={() => setActiveTab("message")}
                            className={`rounded-full px-6 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
                                activeTab === "message"
                                    ? "bg-[#0b1437] text-white shadow-md"
                                    : "text-[#0b1437]/70 hover:text-[#0b1437]"
                            }`}
                        >
                            Send Message
                        </button>
                        <button
                            onClick={() => setActiveTab("touch")}
                            className={`rounded-full px-6 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
                                activeTab === "touch"
                                    ? "bg-[#0b1437] text-white shadow-md"
                                    : "text-[#0b1437]/70 hover:text-[#0b1437]"
                            }`}
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>

                {/* ====== Main Card ====== */}
                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_20px_60px_rgba(11,20,55,0.08)]">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr]">

                        {/* ====== Left — Contact Info Card ====== */}
                        <div className="relative flex flex-col overflow-hidden bg-gradient-to-br from-[#3ecf8e] via-[#2ebd7e] to-[#1fa96c] p-8 text-white md:p-10">

                            {/* Background decorations */}
                            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
                            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

                            <h3 className="relative text-2xl font-bold md:text-[28px]">
                                Contact Information
                            </h3>

                            <div className="relative mt-6 flex flex-1 items-center justify-center">
                                <Image
                                    src="/contact.svg"
                                    alt="Contact information"
                                    width={280}
                                    height={280}
                                    className="h-auto w-full max-w-[260px]"
                                    priority
                                />
                            </div>

                            {/* Small contact details */}
                            <div className="relative mt-6 space-y-2 text-[13px] text-white/90">
                                <p className="font-medium">
                                    📧 hello@appifydevs.com
                                </p>
                                <p className="font-medium">
                                    📞 +880 1234 567890
                                </p>
                            </div>
                        </div>

                        {/* ====== Right — Form ====== */}
                        <div className="bg-white p-6 md:p-8">
                            <form onSubmit={handleSubmit} className="space-y-5">

                                {/* First + Last name */}
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-[12px] font-semibold text-[#0b1437]">
                                            First Name{" "}
                                            <span className="text-[#f3292f]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={form.firstName}
                                            onChange={handleChange}
                                            placeholder="Enter first name"
                                            className="mt-2 h-11 w-full rounded-md border border-gray-200 bg-white px-4 text-[13px] text-[#0b1437] placeholder-gray-400 outline-none transition focus:border-[#3ecf8e] focus:ring-2 focus:ring-[#3ecf8e]/20"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[12px] font-semibold text-[#0b1437]">
                                            Last Name{" "}
                                            <span className="text-[#f3292f]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={form.lastName}
                                            onChange={handleChange}
                                            placeholder="Enter last name"
                                            className="mt-2 h-11 w-full rounded-md border border-gray-200 bg-white px-4 text-[13px] text-[#0b1437] placeholder-gray-400 outline-none transition focus:border-[#3ecf8e] focus:ring-2 focus:ring-[#3ecf8e]/20"
                                        />
                                    </div>
                                </div>

                                {/* Phone + Email */}
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-[12px] font-semibold text-[#0b1437]">
                                            Phone Number{" "}
                                            <span className="text-[#f3292f]">*</span>
                                        </label>
                                        <div className="mt-2 flex h-11 overflow-hidden rounded-md border border-gray-200 bg-white transition focus-within:border-[#3ecf8e] focus-within:ring-2 focus-within:ring-[#3ecf8e]/20">
                                            <span className="flex items-center gap-1 border-r border-gray-200 bg-gray-50 px-3 text-[13px] text-[#0b1437]">
                                                🇧🇩 <span className="font-medium">+880</span>
                                            </span>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                placeholder=""
                                                className="flex-1 px-3 text-[13px] text-[#0b1437] placeholder-gray-400 outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[12px] font-semibold text-[#0b1437]">
                                            Email{" "}
                                            <span className="text-[#f3292f]">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="Enter email"
                                            className="mt-2 h-11 w-full rounded-md border border-gray-200 bg-white px-4 text-[13px] text-[#0b1437] placeholder-gray-400 outline-none transition focus:border-[#3ecf8e] focus:ring-2 focus:ring-[#3ecf8e]/20"
                                        />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="block text-[12px] font-semibold text-[#0b1437]">
                                        Subject{" "}
                                        <span className="text-[#f3292f]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        placeholder="Enter subject"
                                        className="mt-2 h-11 w-full rounded-md border border-gray-200 bg-white px-4 text-[13px] text-[#0b1437] placeholder-gray-400 outline-none transition focus:border-[#3ecf8e] focus:ring-2 focus:ring-[#3ecf8e]/20"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-[12px] font-semibold text-[#0b1437]">
                                        Message{" "}
                                        <span className="text-[#f3292f]">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        rows={5}
                                        placeholder="Enter message"
                                        className="mt-2 w-full resize-none rounded-md border border-gray-200 bg-white p-4 text-[13px] text-[#0b1437] placeholder-gray-400 outline-none transition focus:border-[#3ecf8e] focus:ring-2 focus:ring-[#3ecf8e]/20"
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#f3292f] text-[13px] font-bold uppercase tracking-[2px] text-white shadow-[0_8px_25px_rgba(243,41,47,0.25)] transition duration-200 hover:bg-[#d92026] hover:shadow-[0_12px_35px_rgba(243,41,47,0.4)] disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {loading ? (
                                        <>
                                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={15} strokeWidth={2.4} />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* ====== Map ====== */}
                <div className="mt-10 overflow-hidden rounded-2xl border border-gray-100 shadow-[0_15px_40px_rgba(11,20,55,0.08)]">
                    <iframe
                        title="AppifyDevs Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.945574959493!2d90.36431631543156!3d23.784393984574763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d8b1a1c1e9%3A0x1234567890abcdef!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                        width="100%"
                        height="340"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    );
}