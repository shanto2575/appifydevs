"use client";

export default function BlogsHero() {
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
            <div className="absolute inset-0" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl flex-col items-center justify-center px-6 pb-24 pt-[140px] text-center md:px-10 lg:px-16">

                {/* Heading */}
                <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-[42px]">
                    Blogs
                </h1>

                {/* Description */}
                <p className="mt-6 max-w-3xl text-[13px] leading-6 text-white/90 md:text-[15px] md:leading-7">
                    Explore a wide range of articles, tutorials, and insightful
                    content covering diverse topics in technology, programming,
                    IT, and more. Stay informed on the latest trends, gain new
                    skills, and dive deep into the world of innovation and
                    development.
                </p>
            </div>
        </section>
    );
}