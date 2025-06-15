
import Heroe from "@/app/component/Heroe";

import A_propos from "@/app/component/A_propos";
import FeaturesSection from "@/app/component/FeaturesSection";
import Temoignages from "@/app/component/Témoignages";

export default function Home() {
  return (
    <div className="bg-blue-100">

      <Heroe/>
      <A_propos/>
      <FeaturesSection/>
      <Temoignages/>
     
    </div>
  );
}
