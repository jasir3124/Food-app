import HeroSection from '../components/heroSection.js';
import ImproveSkills from '../components/improveSkillSection.js';
import QuoteSectionfrom from "../components/wordSection.js";
import ChefsSection from '../components/chefsSection.js'


export default function Home(){
    return(
        <div>
            <HeroSection />
            <ImproveSkills />
            <QuoteSectionfrom />
            <ChefsSection />
        </div>
    )
}