"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
    { number: 30, suffix: "+", title: "Happy Clients" },
    { number: 25, suffix: "+", title: "Projects Completed" },
    { number: 15, suffix: "+", title: "Dedicated Members" },
    { number: 5, suffix: "+", title: "Awards Won" }, // ছবি অনুযায়ী "Awards Won" করা হয়েছে
];

function Counter({ number, suffix }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const duration = 1500;
        const incrementTime = 30;
        const increment = number / (duration / incrementTime);

        const timer = setInterval(() => {
            start += increment;

            if (start >= number) {
                setCount(number);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, incrementTime);

        return () => clearInterval(timer);
    }, [isInView, number]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
}

export default function StatsSection() {
    return (
        <section className="bg-[#0b1437] px-6 py-10 md:px-10">
            <div className="mx-auto max-w-7xl">
                {/* Grid with vertical dividers on desktop */}
                <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-white/10">

                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center justify-center text-center"
                        >
                            <h3 className="text-4xl font-bold tracking-tight text-white md:text-[44px]">
                                <Counter
                                    number={stat.number}
                                    suffix={stat.suffix}
                                />
                            </h3>

                            <p className="mt-2 text-xs font-medium tracking-[1px] text-gray-400 md:text-sm">
                                {stat.title}
                            </p>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}