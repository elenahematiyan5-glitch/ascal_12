import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Team } from './components/Team';
import { Services } from './components/Services';
import { OrderForm } from './components/OrderForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-full w-full">
      <Header />
      <Hero />
      <Projects />
      <Team />
      <Services />
      <OrderForm />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
