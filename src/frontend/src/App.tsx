import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Government } from './components/Government';
import { Quality } from './components/Quality';
import { Careers } from './components/Careers';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Government />
        <Quality />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
