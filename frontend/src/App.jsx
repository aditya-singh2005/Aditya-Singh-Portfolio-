import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Terminal from './components/Terminal';
import Projects from './components/Projects';
import Stats from './components/Stats';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import ConnectWithMe from './components/ConnectWithMe';
import Footer from './components/Footer';
import FAB from './components/FAB';
import BottomNav from './components/BottomNav';
import ClickSpark from './UI/ClickSpark';

export default function App() {
  return (
    <ClickSpark 
      sparkColor={['#3b82f6', '#8b5cf6', '#ec4899', '#f43f5e', '#f59e0b', '#10b981', '#141be7']}
      sparkSize={30}
      sparkRadius={50}
      sparkCount={8}
      duration={400}
      className="bg-background font-body-md text-on-surface [overflow-x:clip] selection:bg-primary-fixed-dim selection:text-on-primary-fixed"
    >
      {/* Subtle Background Grid */}
      <div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>

      <Header />

      <main className="relative z-10">
        <div id="hero"><Hero /></div>
        <div id="about"><About /></div>
        <div id="about-me"><AboutMe /></div>
        <div id="terminal"><Terminal /></div>
        <div id="projects"><Projects /></div>
        <div id="experience"><Experience /></div>
        <div id="connect"><ConnectWithMe /></div>
        <Footer />
      </main>

      <BottomNav />
    </ClickSpark>
  );
}
