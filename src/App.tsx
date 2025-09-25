import { Hero } from './sections/Hero';
import { Stats } from './sections/Stats';
import { Agenda } from './sections/Agenda';
import { Speakers } from './sections/Speakers';
import { Venue } from './sections/Venue';
import { FAQ } from './sections/FAQ';
import { Registration } from './sections/Registration';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <Stats />
      <Agenda />
      <Speakers />
      <Venue />
      <FAQ />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;
