import AdvantagesSection from "@/component/Services/AdvantagesSection";
import GetFullControlSection from "@/component/Services/GetFullControlSection";
import HireTeamHero from "@/component/Services/HireTeamHero";
import HowItWorksSection from "@/component/Services/HowItWorksSection";
import WhoWillHelpSection from "@/component/Services/WhoWillHelpSection";

export default function HireDedicatedTeamPage() {
    return (
        <main>
            <HireTeamHero />
            <AdvantagesSection/>
            <WhoWillHelpSection/>
            <GetFullControlSection/>
            <HowItWorksSection/>
            
        </main>
    );
}