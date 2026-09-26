"use client";

import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import toast from "react-hot-toast";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.trim()) {
            toast.error("Email is required");
            return;
        }

        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        try {
            setLoading(true);

            // Fake API call — replace with your real API
            await new Promise((resolve) => setTimeout(resolve, 1200));

            toast.success("Subscribed successfully!", {
                description: `We'll send updates to ${email}`,
            });

            setEmail("");
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-white px-6 py-16 md:px-10 lg:px-16">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">

                {/* Left side — Text */}
                <div>
                    <p className="text-[11px] font-bold uppercase tracking-[4px] text-[#f3292f]">
                        Weekly Dispatch
                    </p>

                    <h2 className="mt-3 text-4xl font-extrabold uppercase tracking-tight text-[#0b1437] md:text-5xl">
                        Newsletter
                    </h2>

                    <p className="mt-4 max-w-md text-sm leading-6 text-gray-500 md:text-[15px]">
                        The best technical content, delivered fresh to your
                        inbox every week.
                    </p>
                </div>

                <div>
                    <form
                        onSubmit={handleSubmit}
                        className="flex w-full flex-col gap-3 sm:flex-row"
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@email.com"
                            className="h-[52px] flex-1 rounded-md border border-gray-300 bg-white px-5 text-sm text-[#0b1437] placeholder-gray-400 outline-none transition focus:border-[#f3292f] focus:ring-2 focus:ring-[#f3292f]/20"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="flex h-[52px] items-center justify-center rounded-md bg-[#f3292f] px-8 text-[13px] font-bold uppercase tracking-[2px] text-white shadow-[0_6px_20px_rgba(243,41,47,0.35)] transition duration-200 hover:bg-[#d92026] hover:shadow-[0_8px_25px_rgba(243,41,47,0.45)] disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                                    Sending
                                </span>
                            ) : (
                                "Subscribe"
                            )}
                        </button>
                    </form>

                    <div className="mt-4 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[1.5px] text-gray-400">
                        <ShieldCheck size={14} className="text-gray-400" />
                        Secure & spam-free. Unsubscribe anytime.
                    </div>
                </div>
            </div>
        </section>
    );
}