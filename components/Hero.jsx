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
          
          {/* Restored CSS-styled buttons (No PNGs needed!) */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="bg-gray-900 text-white px-8 py-3.5 rounded-2xl font-bold flex items-center justify-center hover:bg-black transition-colors shadow-lg">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.5 14.5c0-2.5 2-4.5 4.5-4.5-.5-1.5-1.5-2.5-3-3.5-2-1.5-4-2-6-1.5-2-.5-4 0-6 1.5-1.5 1-2.5 2-3 3.5 2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5c.5 1.5 1.5 2.5 3 3.5 2 1.5 4 2 6 1.5 2 .5 4 0 6-1.5 1.5-1 2.5-2 3-3.5-2.5 0-4.5-2-4.5-4.5z"/>
              </svg>
              App Store
            </button>
            <button className="bg-white text-gray-900 px-8 py-3.5 rounded-2xl font-bold flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 20.5v-17c0-.8.5-1.5 1.2-1.5.3 0 .7.1.9.3l15 8.5c.6.3.9 1 .6 1.6-.1.2-.3.4-.6.6l-15 8.5c-.3.2-.6.3-.9.3-.7 0-1.2-.5-1.2-1.3zm2-15v13l11.5-6.5L5 5.5z"/>
              </svg>
              Google Play
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