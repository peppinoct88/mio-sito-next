
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Method from './components/Method';
import Services from './components/Services';
import VideoSection from './components/VideoSection';
import DataProof from './components/DataProof';
import Testimonials from './components/Testimonials';
import Positioning from './components/Positioning';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-[#0A192F]">
      <Hero />
      <Manifesto />
      <Method />
      <Services />
      <VideoSection />
      <DataProof />
      <Testimonials />
      <Positioning />
      <Footer />
    </main>
  );
}
