"use client";

import toast from "react-hot-toast";

export default function ApplyButton() {
    const handleApply = () => {
        toast.success("Application submitted successfully!");
    };

    return (
        <button
            type="button"
            onClick={handleApply}
            className="relative mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f3292f] to-[#ff7a5a] px-6 py-3 text-[13px] font-semibold text-white shadow-[0_8px_25px_rgba(243,41,47,0.35)] transition-all duration-300 hover:shadow-[0_12px_35px_rgba(243,41,47,0.5)]"
        >
            Apply Now
        </button>
    );
}