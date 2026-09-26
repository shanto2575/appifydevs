import {
    Monitor,
    Smartphone,
    InfinityIcon,
    Brain,
    MonitorCog,
    Box,
    Globe,
    ShoppingBag,
    PenLine,
} from "lucide-react";

const services = [
    {
        icon: Monitor,
        title: "Web App Development",
        description:
            "Creating sleek, responsive web applications that captivate users and enhance your digital footprint with advanced technology.",
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description:
            "Crafting impressive, adaptable mobile apps that captivate users and elevate your brand's mobile presence with innovative solutions.",
    },
    {
        icon: InfinityIcon,
        title: "DevOps",
        description:
            "Streamlining your software development and IT operations to improve deployment efficiency and system reliability.",
    },
    {
        icon: Brain,
        title: "AI/ML/NLP",
        description:
            "Harnessing the power of Artificial Intelligence, Machine Learning, and Natural Language Processing to build intelligent, scalable solutions for complex challenges.",
    },
    {
        icon: MonitorCog,
        title: "SEO / Social Media Marketing",
        description:
            "Boosting your online visibility with strategic SEO practices and engaging social media campaigns to drive traffic and increase conversions.",
    },
    {
        icon: Box,
        title: "UI/UX Design",
        description:
            "Designing intuitive, visually appealing products that delight users and distinguish your brand in the marketplace.",
    },
    {
        icon: Globe,
        title: "Wordpress Development",
        description:
            "Crafting sleek, responsive WordPress themes and plugins that captivate users and elevate your digital presence.",
    },
    {
        icon: ShoppingBag,
        title: "Shopify Themes & Apps Development",
        description:
            "Creating responsive Shopify themes and apps to captivate users and boost your e-commerce business success.",
    },
    {
        icon: PenLine,
        title: "Content Writing",
        description:
            "Delivering compelling content that engages audiences and elevates your brand presence.",
    },
];

export default function WhatWeOffer() {
    return (
        <section className="bg-white px-6 py-20 md:px-10 lg:px-16">

            {/* Section Heading */}
            <div className="mx-auto mb-14 max-w-3xl text-center">

                <h2 className="text-4xl font-bold text-[#07143d] md:text-5xl">
                    What We Offer
                </h2>

                <p className="mt-5 text-base leading-7 text-gray-500 md:text-lg">
                    Discover the wide range of services we provide, designed
                    to meet your unique needs and help your business thrive.
                </p>

            </div>

            {/* Services Grid */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {services.map((service, index) => {
                    const Icon = service.icon;

                    return (
                        <div
                            key={index}
                            className="group rounded-lg border border-red-100 bg-white p-8 text-center shadow-[0_2px_12px_rgba(239,68,68,0.08)] transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_8px_25px_rgba(239,68,68,0.14)]"
                        >

                            {/* Icon */}
                            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-[#ff4b4b] transition duration-300 group-hover:bg-[#ff4b4b] group-hover:text-white">
                                <Icon
                                    size={27}
                                    strokeWidth={1.8}
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-[#07143d] md:text-xl">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-4 text-sm leading-6 text-gray-500 md:text-[15px]">
                                {service.description}
                            </p>

                        </div>
                    );
                })}

            </div>
        </section>
    );
}