import './App.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollUp from './components/ScrollUp/ScrollUp';
import Work from './components/Work/Work';

function App() {
  return(
    <>
      <Header />  
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Work />
        <Testimonials />
        <Contact />
      </main>
        <Footer />
        <ScrollUp />
    </>
  )
}

export default App;
