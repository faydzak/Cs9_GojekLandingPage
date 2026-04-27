import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t-[6px] border-[#00aa5b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column: Now handles 2 logos and text */}
          <div className="md:col-span-1 flex flex-col items-start">
            
            {/* Logo + Text Row (Original) */}
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/logo.png" 
                alt="Gofast Logo" 
                width={40} 
                height={40} 
                className="rounded-xl"
              />
              <h4 className="text-3xl font-black text-[#00aa5b] tracking-tight">Gofast</h4>
            </div>
            
            {/* Description Text (Original) */}
            <p className="text-gray-400 font-medium mb-8">
              Simplifying lives across the city, one tap at a time.
            </p>
            
            {/* --- NEW MASCOT LOGO ADDED HERE! --- */}
            <div className="bg-white p-3 rounded-3xl shadow-lg border border-gray-100 flex items-center justify-center hover:-translate-y-2 transition-transform duration-300">
              <Image 
                src="/sparkle.png" 
                alt="Gofast Mascot" 
                width={100} 
                height={100} 
                className="object-contain" // Preserves mascot shape
              />
            </div>
          </div>
          
          {/* Company Links (Unchanged) */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-100">Company</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Partners Links (Unchanged) */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-100">Partners</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Drive with us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Restaurant Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Corporate Partners</a></li>
            </ul>
          </div>
          
          {/* Legal Links (Unchanged) */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-100">Legal</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Processing</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar (Unchanged) */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Gofast Technologies. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}