import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Sobre from "./pages/Sobre.jsx";
import Projetos from "./pages/Projetos.jsx";
import Contato from "./pages/Contato.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* Menu de navegação */}
      <nav style={{ 
        padding: "1rem 2rem", 
        background: "#0f172a",
        display: "flex",
        gap: "1.5rem",
        justifyContent: "center"
      }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/sobre" style={{ color: "white", textDecoration: "none" }}>Sobre</Link>
        <Link to="/projetos" style={{ color: "white", textDecoration: "none" }}>Projetos</Link>
        <Link to="/contato" style={{ color: "white", textDecoration: "none" }}>Contato</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;