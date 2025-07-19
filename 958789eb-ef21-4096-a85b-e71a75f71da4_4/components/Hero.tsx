'use client';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(30, 64, 175, 0.4)), url('https://readdy.ai/api/search-image?query=Dynamic%20Taekwondo%20martial%20arts%20dojo%20training%20hall%20with%20wooden%20floors%2C%20blue%20and%20white%20equipment%2C%20professional%20lighting%2C%20modern%20minimalist%20interior%20design%2C%20athletes%20in%20white%20uniforms%20practicing%20kicks%20and%20forms%2C%20inspirational%20atmosphere%20with%20motivational%20elements%2C%20clean%20organized%20space%20perfect%20for%20martial%20arts%20training%20and%20discipline&width=1920&height=1080&seq=hero1&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-6 py-20">
        <div className="w-full max-w-4xl">
          <div className="text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Master the Art of
              <span className="text-blue-400 block">Taekwondo</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
              Train with Master Kaushal K Joshi at Mathura's premier Taekwondo academy. 
              Build discipline, strength, and confidence through traditional martial arts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 whitespace-nowrap cursor-pointer">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}