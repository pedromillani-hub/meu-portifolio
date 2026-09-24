function Projetos() {
  return (
    <div>
      <h1>Meus Projetos</h1>

      <div className="projeto-card">
        <h2>Projeto 1 — Jogo de Xadrez blitz</h2>
        <p>Jogo estratégico</p>
         <p><strong>Tecnologias:</strong> HTML, CSS e JavaScript</p>
        <a
          href="https://xadrez-three-nu.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#3b82f6",
            color: "white",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 500,
            marginTop: "1rem"
          }}
        >
          Ver Projeto
        </a>
        
      </div>

      <div className="projeto-card">
        <h2>Projeto 2 — Trino para minha mãe</h2>
        <p>lista de exercício da minha pra minha</p>
        <p><strong>Tecnologias:</strong> JavaScript, html e css</p>
        <a 
  href="https://treino-jaqueline-rust.vercel.app" 
  target="_blank" 
  rel="noopener noreferrer"
  style={{
    display: "inline-block",
    backgroundColor: "#3b82f6",
    color: "white",
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: 500,
    marginTop: "1rem"
  }}
>
  Ver Projeto
</a>
      </div>

      <div className="projeto-card">
        <h2>Projeto 3 — barbearia chamada hd</h2>
        <p>um site com tabelas de preço</p>
        <p><strong>Tecnologias:</strong> HTML e CSS</p>
        <a 
  href="https://treino-jaqueline-rust.vercel.app" 
  target="_blank" 
  rel="noopener noreferrer"
  style={{
    display: "inline-block",
    backgroundColor: "#3b82f6",
    color: "white",
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: 500,
    marginTop: "1rem"
  }}
>
  Ver Projeto
</a>
      </div>
    </div>
  );
}

export default Projetos;
