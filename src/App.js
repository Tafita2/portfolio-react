import A_propos from "./components/A_propos";
import Navbar from "./components/Navbar";
import Accueil from "./components/Accueil";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Accueil />
      <A_propos />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
