import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import NavBar from "./components/navBar.js";
import Footer from './components/footer.js'
import Home from "./pages/home.js";
import Recipes from "./pages/Recipes.js";
import Settings from "./pages/Settings.js";
function App() {
  return (

    <Router>
        <NavBar />
          <div className="container main">
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/Recipes' element={<Recipes/>} />
              <Route path='/Settings' element={<Settings/>} />
             </Routes>
         </div>
        <Footer />
    </Router>
  );
}

export default App;
