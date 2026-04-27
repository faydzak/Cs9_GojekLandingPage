import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-[#00aa5b] text-white pt-20 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        
        <div className="md:w-1/2 md:pr-12 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            There is always a <br /> faster way.
          </h1>
          <p className="text-lg md:text-xl font-medium mb-10 max-w-lg mx-auto md:mx-0">
            From rides and food delivery to logistics and payments. Gofast is the only app you need to navigate your day with ease.
          </p>
          
          {/* Separated App Store and Google Play Images */}
          <div className="flex flex-row justify-center md:justify-start gap-4 items-center">
            
            {/* App Store Image Button */}
            <button className="hover:scale-105 transition-transform duration-200">
              <Image 
                src="/app-store.png" 
                alt="Download on the App Store" 
                width={150} 
                height={50} 
                className="h-[50px] w-auto object-contain rounded-xl shadow-lg bg-white" 
              />
            </button>

            {/* Google Play Image Button */}
            <button className="hover:scale-105 transition-transform duration-200">
              <Image 
                src="/google-play.jpg" 
                alt="Get it on Google Play" 
                width={160} 
                height={50} 
                className="h-[50px] w-auto object-contain rounded-xl shadow-lg" 
              />
            </button>

          </div>
        </div>

        <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center">
          <div className="w-64 h-[32rem] bg-white rounded-[3rem] shadow-2xl border-[10px] border-gray-900 relative overflow-hidden flex flex-col">
            <div className="bg-[#00aa5b] h-32 w-full rounded-b-3xl flex items-end justify-start p-4 text-white font-bold text-xl">
              Hi, User!
            </div>
            <div className="flex-1 p-4 grid grid-cols-2 gap-4 content-start pt-6">
              <div className="h-24 bg-gray-100 rounded-3xl flex items-center justify-center text-3xl">🚗</div>
              <div className="h-24 bg-gray-100 rounded-3xl flex items-center justify-center text-3xl">🍔</div>
              <div className="h-24 bg-gray-100 rounded-3xl flex items-center justify-center text-3xl">📦</div>
              <div className="h-24 bg-gray-100 rounded-3xl flex items-center justify-center text-3xl">💳</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}