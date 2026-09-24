function Home() {
  return (
    <section style={styles.hero}>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Olá, eu sou <span style={styles.highlight}>Pedro</span>
        </h1>
        
        <p style={styles.subtitle}>
          Estudante de Desenvolvimento de Sistemas no SENAI da Palhoça
        </p>
        
        <p style={styles.welcome}>
          Bem-vindo ao meu portfólio!
        </p>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    color: "#f8fafc",
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    padding: "2rem",
  },
  container: {
    textAlign: "center",
    maxWidth: "700px",
  },
  title: {
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    fontWeight: 700,
    marginBottom: "1.5rem",
    lineHeight: 1.2,
    color: "#ffff"
    
  },
  highlight: {
    color: "#ffff",
  },
  subtitle: {
    fontSize: "1.25rem",
    color: "#94a3b8",
    marginBottom: "1rem",
    lineHeight: 1.6,
    color: "#ffff",
  },
  welcome: {
    fontSize: "1.1rem",
    color: "#cbd5e1",
    fontWeight: 500,
  },
};

export default Home;
