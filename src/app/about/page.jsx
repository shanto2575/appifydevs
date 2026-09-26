import AboutHero from "@/component/about/AboutHero";
import MissionSection from "@/component/about/MissionSection";
import TeamSection from "@/component/about/TeamSection";
import VisionSection from "@/component/about/VisionSection";

const About = () => {
    return (
        <main className="min-h-screen">
            <AboutHero />
            <TeamSection/>
            <VisionSection/>
            <MissionSection/>
        </main>
    );
};

export default About;