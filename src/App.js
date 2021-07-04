
import Header from './components/Header/Header';
import Service from './components/Service/Service';
import Works from './components/Works/Works';
import Questions from './components/Questions/Questions';
import SimpleAccordion from './components/Accordion/SimpleAccordion';
import Features from './components/Features/Features';
import Gallery from './components/Gallery/Gallery';
import Subscribe from './components/Subscribe/Subscribe';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Service/>
      <Works/>
      <Questions />
      <Features />
      <Gallery />
      <Subscribe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
