import NavBar from "./components/navBar.js";
import HeroSection from './components/heroSection.js';
import ImproveSkills from './components/improveSkillSection.js';
import QuoteSectionfrom from "./components/wordSection.js";
import ChefsSection from './components/chefsSection.js'
import Footer from './components/footer.js'


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container main">
        <HeroSection />
        <ImproveSkills />
        <QuoteSectionfrom />
        <ChefsSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
