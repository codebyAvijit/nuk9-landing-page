import "./App.css";
import About from "./components/About/About";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
