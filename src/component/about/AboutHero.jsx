import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="relative h-[400px] w-full overflow-hidden">
            <Image
                src="/about-hero.jpg"
                alt="About AppifyDevs"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-[#071a2d]/70" />
            <div className="relative z-10 flex h-full items-center justify-center px-6">
                <div className="max-w-4xl text-center text-white">

                    <h1 className="mb-10 text-4xl font-semibold md:text-5xl">
                        About Us
                    </h1>

                    <p className="text-base leading-7 md:text-lg md:leading-8">
                        AppifyDevs is a software development agency specializing
                        in mobile and web development. We have a team of
                        experienced developers and designers who work closely
                        together to create high-quality applications.
                    </p>

                </div>
            </div>

        </section>
    );
}