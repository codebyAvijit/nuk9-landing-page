import "./App.css";
import About from "./components/About/About";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import ChatIcon from "@mui/icons-material/Chat";
function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <About />
      <Portfolio />
      <Footer />
      <div className="sticky-div">
        <ChatIcon style={{ color: "white" }} />
        <button>Let's Chat</button>
      </div>
    </div>
  );
}

export default App;
