import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <Hero />
        <Services />
        <Reviews />
      </div>
      
      <Footer />
    </main>
  );
}