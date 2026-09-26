"use client";

import Image from "next/image";

const leader = {
    image: "https://i.ibb.co.com/qKbv1XL/4.jpg",
    name: "Md. Sultan",
    role: "Founder & CEO",
    description:
        "Success in tech isn’t just about building the next great product; it’s about embracing challenges, fostering innovation, and leading with a vision that inspires others to reach beyond what’s possible. As a CEO, your passion and perseverance are the code that powers your company’s future.",
};

const specialists = [
    {
        image: "https://i.ibb.co.com/qKbv1XL/4.jpg",
        name: "Dhruva Roy Shuvo",
        role: "Chief Operating Officer (COO)",
        description:
            "Dhruva leads operations with precision and strategic insight, ensuring smooth execution across all departments.",
    },
    {
        image: "https://i.ibb.co.com/Rkz8Mw1h/3.jpg",
        name: "Faisal Mahmud Khan",
        role: "Head of AI & Account",
        description:
            "Faisal drives AI innovation and manages key client accounts with a focus on long-term value.",
    },
    {
        image: "https://i.ibb.co.com/wZqXDbPd/1.jpg",
        name: "Rafay Paul",
        role: "UI/UX Designer",
        description:
            "Bringing creativity and user-centric vision to every project, ensuring the best digital experiences.",
    },
    {
        image: "https://i.ibb.co.com/qKbv1XL/4.jpg",
        name: "Jahangir Alam",
        role: "Sr. Software Engineer",
        description:
            "Jahangir is at the core of building and scaling robust software solutions across platforms.",
    },
    {
        image: "https://i.ibb.co.com/Rkz8Mw1h/3.jpg",
        name: "Ihsan Shah",
        role: "App Support",
        description:
            "Ihsan ensures applications run smoothly with fast, reliable technical support for our clients.",
    },
    {
        image: "https://i.ibb.co.com/wZqXDbPd/1.jpg",
        name: "Rafael Zaman, PhD",
        role: "Senior Data Scientist",
        description:
            "Rafael leverages deep data expertise to deliver insightful, data-driven solutions for complex problems.",
    },
    {
        image: "https://i.ibb.co.com/qKbv1XL/4.jpg",
        name: "Jameson Chayce Calvin",
        role: "QA Engineer",
        description:
            "Jameson guarantees top-quality delivery by rigorously testing every product feature.",
    },
    {
        image: "https://i.ibb.co.com/Rkz8Mw1h/3.jpg",
        name: "Luthor Rahman",
        role: "Frontend Engineer",
        description:
            "Luthor builds fast, responsive and pixel-perfect user interfaces with modern frameworks.",
    },
    {
        image: "https://i.ibb.co.com/wZqXDbPd/1.jpg",
        name: "Samual Arafin",
        role: "Assistant Software Engineer",
        description:
            "Samual supports the engineering team in delivering high-quality, scalable software solutions.",
    },
];

export default function TeamSection() {
    return (
        <section className="bg-white px-6 py-16 md:px-10 lg:px-16">
            <div className="mx-auto max-w-6xl">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-[#0b1437] md:text-3xl">
                        Meet Our Leadership
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-gray-500 md:text-[13px]">
                        Get to know the visionary leaders driving our company
                        forward. Discover their experiences, values, and insights
                        that shape our solutions and guide us toward continued
                        success and innovation.
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-3xl">
                    <div className="flex flex-col items-stretch gap-5 sm:flex-row">
                        {/* Photo */}
                        <div className="flex-shrink-0">
                            <div className="relative h-[150px] w-[150px] overflow-hidden rounded-md border border-gray-200">
                                <Image
                                    src={leader.image}
                                    alt={leader.name}
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col">
                            <h3 className="text-base font-bold text-[#0b1437]">
                                {leader.name}
                            </h3>
                            <p className="mt-0.5 text-[12px] font-medium text-[#f3292f]">
                                {leader.role}
                            </p>

                            <div className="mt-4 rounded-md bg-[#fff9b0] p-3.5 text-[12px] leading-5 text-[#0b1437]">
                                {leader.description}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <h2 className="text-2xl font-bold text-[#0b1437] md:text-3xl">
                        Meet the Specialists Behind Our Success
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-gray-500 md:text-[13px]">
                        Our success is built on the expertise and dedication of
                        our talented team. Meet the individuals who bring diverse
                        skills, creativity, and technical brilliance to every
                        project, ensuring the highest standards of quality and
                        innovation.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {specialists.map((person, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center rounded-lg border border-gray-100 bg-[#f7f8fa] p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
                        >
                            {/* Circular Photo */}
                            <div className="relative h-[86px] w-[86px] overflow-hidden rounded-full ring-2 ring-[#f3292f] ring-offset-4 ring-offset-[#f7f8fa]">
                                <Image
                                    src={person.image}
                                    alt={person.name}
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>

                            {/* Name */}
                            <h3 className="mt-5 text-[15px] font-bold text-[#0b1437]">
                                {person.name}
                            </h3>

                            {/* Role */}
                            <p className="mt-1 text-[12px] font-medium text-[#f3292f]">
                                {person.role}
                            </p>

                            {/* Description */}
                            <p className="mt-4 text-[12px] leading-5 text-gray-500">
                                {person.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}