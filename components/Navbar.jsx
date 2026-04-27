import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section Updated */}
          <div className="flex items-center gap-2">
            <Image 
              src="/logo.png" 
              alt="Gofast Logo" 
              width={36} 
              height={36} 
              className="rounded-full" // Makes the square logo circular if desired
            />
            <span className="text-2xl font-black text-[#00aa5b] tracking-tight">
              Gojek
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="text-gray-900 font-semibold hover:text-[#00aa5b] transition-colors">Services</a>
            <a href="#partner" className="text-gray-900 font-semibold hover:text-[#00aa5b] transition-colors">Become a Partner</a>
            <a href="#about" className="text-gray-900 font-semibold hover:text-[#00aa5b] transition-colors">About Us</a>
            <button className="bg-[#00aa5b] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#008f4c] transition-colors shadow-sm">
              Download App
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}