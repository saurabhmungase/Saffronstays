import { Link } from "react-router-dom";
import React from "react";
import { MapPin } from "lucide-react"


const destinations = [
  { name: "Konkan", src: "src/assets/toms-ryfptJi3fAM-unsplash 1.png" },
  { name: "E. Coast", src: "src/assets/jairph-1XLyzi17Z2M-unsplash 1.png" },
  { name: "Canada", src: "src/assets/samuele-errico-piccarini-MCroQe9ykmM-unsplash 1.png" },
  { name: "Andaman", src: "src/assets/shifaaz-shamoon-qtbV_8P_Ksk-unsplash 1.png" },
];

export default function NatureSection() {
  return (
    <section className="py-10 w-90% flex justify-center items-center flex-col ">
        <div>
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-6">
        Discover the Touch of Nature
      </h1>

        </div>
      <div className="flex justify-between gap-6 w-[80%] flex-wrap ">
        {destinations.map((place, index) => (
          <Link to="#" key={index} className="relative group">
            <div className="relative w-60 h-80 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={place.src}
                alt={place.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-white rounded-full px-3 py-1 shadow-md flex items-center gap-1 text-sm font-medium">
                
                <MapPin className="w-4 h-4 text-gray-600" />
                 {place.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
