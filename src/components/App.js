import Navbar from "./Navbar/Navbar";
import Banner from "./banner/Banner";
import Presentation from "./Presentation/Presentation";
import Projets from "./Projets/Projets";
import Entrepise from "./entreprise/Entreprise";
import Footer from "./Footer/Footer";
import Cv from "./Cv/Cv";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Presentation />
      <Projets />
      <Entrepise />
      <Cv />
      <Footer />
    </div>
  );
}

export default App;
