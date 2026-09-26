"use client";

export default function ProjectBasedHero() {
    return (
        <section className="relative overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')",
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl flex-col items-center justify-center px-6 pb-24 pt-[140px] text-center md:px-10 lg:px-16">

                {/* Heading */}
                <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-[42px]">
                    Project Based
                </h1>

                {/* Description */}
                <p className="mt-6 max-w-2xl text-[13px] leading-6 text-white/90 md:text-[15px] md:leading-7">
                    Implement project-based solutions to boost customer
                    satisfaction with our tailored engagement approach.
                </p>
            </div>
        </section>
    );
}