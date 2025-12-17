import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductViewer from "./components/ProductViewer";
import Showcase from "./components/Showcase";
import Performance from "./components/Performance";
import Features from "./components/Features";
import Highlight from "./components/Highlight";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlight />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Home;
