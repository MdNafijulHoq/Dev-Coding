import CTA from "./components/CommonLayout/CTA";
import HeroSection from "./components/CommonLayout/HeroSection";
import Navbar from "./components/CommonLayout/Navbar";
import Promotions from "./components/CommonLayout/Promotions";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Promotions />
      <CTA />
    </div>
  );
};

export default App;
