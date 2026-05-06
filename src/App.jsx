import React from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar    from './components/Navbar';
import Hero      from './components/Hero';
import Problem   from './components/Problem';
import Method    from './components/Method';
import About     from './components/About';
import Testimonials from './components/Testimonials';
import CtaStrip  from './components/CtaStrip';
import Contact   from './components/Contact';
import Footer    from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';

export default function App() {
  useScrollReveal();
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
