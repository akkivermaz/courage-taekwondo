'use client';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-black mb-6">
              Meet Master <span className="text-blue-600">Kaushal K Joshi</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              With over 15 years of experience in traditional Taekwondo, Master Kaushal K Joshi 
              has dedicated his life to teaching the ancient art of Korean martial arts in the 
              historic city of Mathura.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <i className="ri-award-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-black">Certified Black Belt 5th Dan</h3>
                  <p className="text-gray-600">World Taekwondo Federation Certified</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <i className="ri-team-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-black">500+ Students Trained</h3>
                  <p className="text-gray-600">Champions and national level competitors</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <i className="ri-map-pin-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-black">Located in Mathura</h3>
                  <p className="text-gray-600">Heart of India's cultural heritage</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20Taekwondo%20master%20instructor%20Kaushal%20K%20Joshi%20in%20traditional%20white%20dobok%20uniform%20with%20black%20belt%2C%20confident%20pose%20in%20modern%20dojo%2C%20inspirational%20martial%20arts%20portrait%2C%20clean%20professional%20lighting%2C%20traditional%20Korean%20martial%20arts%20atmosphere%2C%20disciplined%20and%20focused%20expression%2C%20motivational%20background&width=600&height=700&seq=master1&orientation=portrait"
                alt="Master Kaushal K Joshi"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-blue-600">15+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}