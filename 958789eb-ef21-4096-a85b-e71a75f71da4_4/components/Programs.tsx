'use client';

export default function Programs() {
  const programs = [
    {
      title: "Kids Taekwondo",
      age: "Ages 4-12",
      description: "Build confidence, discipline, and physical fitness in a fun and safe environment designed specifically for children.",
      price: "₹2,500/month",
      features: ["Basic techniques", "Character development", "Fun games", "Belt progression"],
      icon: "ri-user-smile-line",
      image: "https://readdy.ai/api/search-image?query=Children%20practicing%20Taekwondo%20in%20white%20uniforms%2C%20colorful%20training%20mats%2C%20playful%20martial%20arts%20class%20atmosphere%2C%20kids%20doing%20kicks%20and%20basic%20forms%2C%20instructor%20teaching%20young%20students%2C%20safe%20and%20fun%20dojo%20environment%2C%20bright%20lighting%2C%20energetic%20and%20joyful%20training%20session&width=400&height=300&seq=kids1&orientation=landscape"
    },
    {
      title: "Teen Programs",
      age: "Ages 13-17",
      description: "Advanced training focusing on competition preparation, leadership skills, and personal development.",
      price: "₹3,000/month",
      features: ["Advanced techniques", "Competition training", "Leadership development", "Self-defense"],
      icon: "ri-user-star-line",
      image: "https://readdy.ai/api/search-image?query=Teenage%20Taekwondo%20students%20in%20white%20doboks%20practicing%20advanced%20kicks%20and%20forms%2C%20modern%20training%20facility%2C%20focused%20and%20disciplined%20atmosphere%2C%20high%20kicks%20and%20sparring%20techniques%2C%20competitive%20martial%20arts%20training%2C%20professional%20dojo%20setting%20with%20blue%20and%20white%20colors&width=400&height=300&seq=teen1&orientation=landscape"
    },
    {
      title: "Adult Classes",
      age: "Ages 18+",
      description: "Comprehensive Taekwondo training for adults focusing on fitness, self-defense, and mental well-being.",
      price: "₹3,500/month",
      features: ["Complete curriculum", "Fitness training", "Stress relief", "Self-defense mastery"],
      icon: "ri-user-line",
      image: "https://readdy.ai/api/search-image?query=Adult%20Taekwondo%20practitioners%20in%20traditional%20white%20uniforms%20training%20in%20modern%20dojo%2C%20powerful%20kicks%20and%20precise%20forms%2C%20professional%20martial%20arts%20atmosphere%2C%20mature%20students%20focused%20on%20technique%2C%20disciplined%20training%20environment%2C%20clean%20organized%20space&width=400&height=300&seq=adult1&orientation=landscape"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Training Programs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive Taekwondo programs designed for all ages and skill levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border border-gray-100">
              <div className="relative h-48">
                <img 
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {program.age}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className={`${program.icon} text-blue-600 text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-black">{program.title}</h3>
                </div>

                <p className="text-gray-600 mb-4">{program.description}</p>

                <div className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <i className="ri-check-line text-blue-600"></i>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">{program.price}</div>
                  <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 whitespace-nowrap cursor-pointer">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Special Offers</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <i className="ri-gift-line text-3xl mb-2"></i>
              <h4 className="font-semibold mb-2">Free Trial Class</h4>
              <p className="text-sm">Experience our training before joining</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <i className="ri-team-line text-3xl mb-2"></i>
              <h4 className="font-semibold mb-2">Family Discount</h4>
              <p className="text-sm">20% off for 2+ family members</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <i className="ri-calendar-line text-3xl mb-2"></i>
              <h4 className="font-semibold mb-2">Flexible Schedule</h4>
              <p className="text-sm">Morning and evening batches available</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <i className="ri-user-add-line text-3xl mb-2"></i>
              <h4 className="font-semibold mb-2">New Students</h4>
              <p className="text-sm font-bold">Only ₹700/month</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <i className="ri-women-line text-3xl mb-2"></i>
              <h4 className="font-semibold mb-2">Girls Special</h4>
              <p className="text-sm font-bold">Only ₹600/month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
