"use client";

export default function ContactHero() {
    return (
        <section className="relative overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://i.ibb.co.com/9Hh7pw4d/about.jpg')",
                }}
            />

            {/* Dark navy overlay */}
            <div className="absolute inset-0 " />

            {/* Content */}
            <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl flex-col items-center justify-center px-6 pb-24 pt-[140px] text-center md:px-10 lg:px-16">

                {/* Heading */}
                <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-[42px]">
                    Contact Us
                </h1>

                {/* Description */}
                <p className="mt-6 max-w-3xl text-[13px] leading-6 text-white/90 md:text-[15px] md:leading-7">
                    We are here to assist with your inquiries and provide
                    support. Reach out for information, consultations, or
                    feedback. We are dedicated to offering tailored solutions
                    and an excellent experience.
                </p>
            </div>
        </section>
    );
}