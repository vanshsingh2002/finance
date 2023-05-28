import Analytics from "./component/Analytics";
import Cards from "./component/Cards";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Newsletter from "./component/Newsletter";
import Navbar from "./component/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
