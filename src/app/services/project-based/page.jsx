import GetCustomerSatisfactionSection from "@/component/Services/project-based/GetCustomerSatisfactionSection";
import ProjectAdvantagesSection from "@/component/Services/project-based/ProjectAdvantagesSection";
import ProjectBasedHero from "@/component/Services/project-based/ProjectBasedHero";
import ProjectHowItWorksSection from "@/component/Services/project-based/ProjectHowItWorksSection";
import ProjectWhoWillHelpSection from "@/component/Services/project-based/ProjectWhoWillHelpSection";

export default function ProjectBasedPage() {
    return (
        <main>
            <ProjectBasedHero />
            <ProjectAdvantagesSection/>
            <ProjectWhoWillHelpSection/>
            <GetCustomerSatisfactionSection/>
            <ProjectHowItWorksSection/>
        </main>
    );
}