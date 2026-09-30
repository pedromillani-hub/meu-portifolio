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
      <nav>
  <Link to="/">Home</Link>
  <Link to="/sobre">Sobre</Link>
  <Link to="/projetos">Projetos</Link>
  <Link to="/contato">Contato</Link>
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