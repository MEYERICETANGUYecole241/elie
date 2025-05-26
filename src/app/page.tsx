
import Header from "./component/Header";
import Heroe from "./component/Heroe";
import Footer from "./component/Footer";
import A_propos from "./component/A_propos";
import FeaturesSection from "./component/FeaturesSection";

export default function Home() {
  return (
    <div>

      <Header/>
      <Heroe/>
      <A_propos/>
      <FeaturesSection/>
      <Footer/>
    </div>
  );
}
