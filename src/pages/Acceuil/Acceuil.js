import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/banner/Banner";
import Presentation from "../../components/Presentation/Presentation";
import Projets from "../../components/Projets/Projets";
import Entrepise from "../../components/entreprise/Entreprise";
import Footer from "../../components/Footer/Footer";
import Cv from "../../components/Cv/Cv";

function Acceuil() {
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

export default Acceuil;
