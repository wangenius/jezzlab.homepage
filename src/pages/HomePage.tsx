import Navbar from "@site/src/pages/Navbar";
import Hero from "@site/src/pages/Hero";
import Features from "@site/src/pages/Features";
import CTA from "@site/src/pages/CTA";
import ToolKit from "@site/src/pages/ToolKit";
import Testimonials from "@site/src/pages/Testimonials";
import ProductionDownload from "@site/src/pages/ProductionDownload";
import Footer from "@site/src/pages/Footer";

const HomePage = () => {
  return (
    <div id={"root"}>
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <ToolKit />
      <Testimonials />
      <ProductionDownload />
      <Footer />
    </div>
  );
};
export default HomePage;
