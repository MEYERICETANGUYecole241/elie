
import Header from "./component/Header";
import Heroe from "./component/Heroe";

import A_propos from "./component/A_propos";
import FeaturesSection from "./component/FeaturesSection";
import Temoignages from "./component/Témoignages";

export default function Home() {
  return (
    <div className="bg-blue-100">

      <Header/>
      <Heroe/>
      <A_propos/>
      <FeaturesSection/>
      <Temoignages/>
     
    </div>
  );
}
