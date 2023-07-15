import NavBar from "./components/navBar.js";
import HeroSection from './components/heroSection.js'
import ImproveSkills from './components/improveSkillSection.js' 

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container main">
        <HeroSection />
        <ImproveSkills />
      </div>
    </div>
  );
}

export default App;
