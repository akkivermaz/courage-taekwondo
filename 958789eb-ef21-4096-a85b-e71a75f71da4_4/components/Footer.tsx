'use client';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <i className="ri-sword-line text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold">Courage Taekwondo Academy</h3>
                <p className="text-gray-400 text-sm">Mathura, India</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Master the ancient art of Taekwondo under the guidance of Master Kaushal K Joshi. 
              Building discipline, strength, and character since 2009.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700">
                <i className="ri-facebook-fill text-white"></i>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700">
                <i className="ri-instagram-fill text-white"></i>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700">
                <i className="ri-youtube-fill text-white"></i>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700">
                <i className="ri-whatsapp-fill text-white"></i>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Programs</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#programs" className="hover:text-white cursor-pointer">Kids Taekwondo (4-12)</a></li>
              <li><a href="#programs" className="hover:text-white cursor-pointer">Teen Programs (13-17)</a></li>
              <li><a href="#programs" className="hover:text-white cursor-pointer">Adult Classes (18+)</a></li>
              <li><a href="#programs" className="hover:text-white cursor-pointer">Private Lessons</a></li>
              <li><a href="#programs" className="hover:text-white cursor-pointer">Competition Training</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#home" className="hover:text-white cursor-pointer">Home</a></li>
              <li><a href="#about" className="hover:text-white cursor-pointer">About Master Joshi</a></li>
              <li><a href="#programs" className="hover:text-white cursor-pointer">Training Programs</a></li>
              <li><a href="#contact" className="hover:text-white cursor-pointer">Contact Us</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer">Gallery</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer">Belt Testing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-blue-600 mt-1"></i>
                <div>
                  <p>Krishna Nagar, Mathura</p>
                  <p>Uttar Pradesh, India - 281001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-blue-600"></i>
                <p>+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-blue-600"></i>
                <p>info@joshitkd.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <i className="ri-time-line text-blue-600 mt-1"></i>
                <div>
                  <p>Morning: 6:00 AM - 8:00 AM</p>
                  <p>Evening: 5:00 PM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Courage Taekwondo Academy. All rights reserved. | Master Kaushal K Joshi
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white cursor-pointer">Privacy Policy</a>
              <a href="#" className="hover:text-white cursor-pointer">Terms of Service</a>
              <a href="#" className="hover:text-white cursor-pointer">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
