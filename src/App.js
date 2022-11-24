import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Routes from "./config/Routes";

function App() {
  return (
    <>
    
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
