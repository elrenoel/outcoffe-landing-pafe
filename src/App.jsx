import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-primary font-body text-text-dark overflow-x-hidden">
      <Navbar />
      <Hero />
      <Introduction />
      <Menu />
      <Gallery />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
