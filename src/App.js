import { Home, Contacto } from "./views/index";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Otras rutas */}
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
