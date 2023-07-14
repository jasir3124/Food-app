import NavBar from "./components/navBar.js";
import HeroSection from './components/heroSection.js'
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container main">
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
