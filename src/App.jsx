import React from 'react';
import { useState } from "react";
import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Method from './components/Method';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CtaStrip from './components/CtaStrip';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';

const USUARIO = "root";
const SENHA = "root291021";

function Login({ onLogin }) {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [erro, setErro] = useState(false);

  function handleSubmit() {
    if (user === USUARIO && pwd === SENHA) {
      onLogin();
    } else {
      setErro(true);
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <h2>Acesso Restrito</h2>
      <input placeholder="Usuário" value={user} onChange={e => setUser(e.target.value)} /><br />
      <input placeholder="Senha" type="password" value={pwd} onChange={e => setPwd(e.target.value)} /><br />
      {erro && <p style={{ color: "red" }}>Usuário ou senha incorretos</p>}
      <button onClick={handleSubmit}>Entrar</button>
    </div>
  );
}

// Componente separado que só monta após login
function Site() {
  useScrollReveal(); // ← agora roda só quando o site de fato renderiza
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Method />
        <About />
        <Testimonials />
        <CtaStrip />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

export default function App() {
  const [autenticado, setAutenticado] = useState(false);

  if (!autenticado) {
    return <Login onLogin={() => setAutenticado(true)} />;
  }

  return <Site />;
}