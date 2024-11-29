import Card from "./components/Card";
import ClientLogo from "./components/ClientLogo";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import PricingPlan from "./components/PricingPlan";
import RandomImages from "./components/RamdonImages";
import Serves from "./components/Serves";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import WideVerity from "./components/WideVerity";



export default function Home() {
  return (
    <main>
<NavBar />
<Hero />
<Card />
<RandomImages />
<Services />
<Serves />
<WideVerity />
<PricingPlan />
<Testimonial />
<Footer />
    </main>
  );
}
