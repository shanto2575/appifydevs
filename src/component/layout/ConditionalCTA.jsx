"use client";

import { usePathname } from "next/navigation";
import CTASection from "@/component/home/CTASection";


const HIDDEN_ON = ["/get-a-quote", "/contact", "/blogs"];

export default function ConditionalCTA() {
    const pathname = usePathname();

    if (HIDDEN_ON.some((path) => pathname === path || pathname.startsWith(`${path}/`))) {
        return null;
    }

    return <CTASection />;
}