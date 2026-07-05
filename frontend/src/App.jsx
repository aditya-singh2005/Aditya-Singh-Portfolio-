import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Terminal from './components/Terminal';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Principles from './components/Principles';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Support from './components/Support';
import Footer from './components/Footer';
import FAB from './components/FAB';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <div className="bg-background font-body-md text-on-surface overflow-x-hidden selection:bg-primary-fixed-dim selection:text-on-primary-fixed">
      {/* Subtle Background Grid */}
      <div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>
      
      <Header />
      
      <main className="relative z-10 pb-24">
        <Hero />
        <About />
        <Terminal />
        <Projects />
        <Stats />
        <Principles />
        <Experience />
        <Testimonials />
        <Support />
        <Footer />
      </main>

      <BottomNav />
    </div>
  );
}
