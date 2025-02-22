// import { IoBedOutline } from "react-icons/io5";
// import { BiLeaf } from "react-icons/bi";
// import React, { useContext, useEffect, useState } from "react";
// import {  User, Flame, Star } from "lucide-react"
// import { context } from "../../context/AppContext";


// export default function NewDestinationSection() {
//   let [tent, setTent] = useState([])

//   useEffect(() => {
//     let contextdata = useContext(context)
//     setTent(contextdata.tents)
//   }, [])

//   return (
//     <section className="container w-[90%] mx-auto px-4 py-16">
//       <div className="relative mb-12 w-fit">
//         <h2 className="text-2xl font-semibold text-gray-900">New Destinations</h2>
//         <div className="absolute -bottom-2 left-0 w-3/4 h-0.5 bg-gray-200"></div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6">
//         {tent.map((tent, index) => (
//           <div key={index} className="bg-gray-100 rounded-2xl shadow-md overflow-hidden">
//             <div className="relative">
//               <img
//                 src={tent.about.images[0] || "/placeholder.svg"}
//                 alt={tent.campName}
//                 className="w-full aspect-[4/4] object-cover"
//               />
//               {/* Top overlay icons */}
//               <div className="absolute top-3 left-3 flex gap-1">
//                 <div className="bg-white/90 p-1 rounded-full">
//                   <User className="w-4 h-4" />
//                 </div>
//                 <div className="bg-white/90 p-1 rounded-full">
//                   <Flame className="w-4 h-4" />
//                 </div>
//               </div>
//               {/* Rating and temperature */}
//               <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 rounded-full px-2 py-0.5 text-sm">
//                 <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
//                 <span>{tent.ratings.location}</span>
//                 <span className="text-gray-500">|</span>
//                 <span>{tent.weather.currentTemp}°C</span>
//               </div>
//               {/* Image carousel dots */}
//               <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
//                 <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
//                 <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
//                 <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
//               </div>
//             </div>

//             <div className="p-4 w-[100%] h-[6rem]">
//               <div className="text-sm text-gray-500 mb-0.5">{tent.address.tal}</div>
//               <h3 className="font-medium text-gray-900 mb-0.5">{tent.campName}</h3>

//               <div className="flex items-center justify-between">
//                 <div className="flex items-baseline gap-2">
//                   <span className="text-gray-900">₹{destination.price}</span>
//                   <span className="text-sm text-gray-400 line-through">₹{destination.originalPrice}</span>
//                 </div>
//                 <div className="flex gap-2">
//                   <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
//                     <IoBedOutline className="w-4 h-4 text-blue-900" />
//                   </button>
//                   <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
//                     <BiLeaf className="w-4 h-4 text-green-800" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

import { IoBedOutline } from "react-icons/io5";
import { BiLeaf } from "react-icons/bi";
import React, { useContext, useEffect, useState } from "react";
import { User, Flame, Star } from "lucide-react";
import { context } from "../../context/AppContext";

export default function NewDestinationSection() {
  const contextData = useContext(context); // Use useContext correctly
  const [tent, setTent] = useState([]);

  useEffect(() => {
    if (contextData && contextData.tents) {
      setTent(contextData.tents);
    }
  }, [contextData]);

  return (
    <section className="container w-[90%] mx-auto px-4 py-16">
      <div className="relative mb-12 w-fit">
        <h2 className="text-2xl font-semibold text-gray-900">New Destinations</h2>
        <div className="absolute -bottom-2 left-0 w-3/4 h-0.5 bg-gray-200"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tent.map((tentItem, index) => (
          <div key={index} className="bg-gray-100 rounded-2xl shadow-md overflow-hidden">
            <div className="relative">
              <img
                src={tentItem.about?.images?.[0] || "/placeholder.svg"}
                alt={tentItem.campName}
                className="w-full aspect-[4/4] object-cover"
              />
              {/* Top overlay icons */}
              <div className="absolute top-3 left-3 flex gap-1">
                <div className="bg-white/90 p-1 rounded-full">
                  <User className="w-4 h-4" />
                </div>
                <div className="bg-white/90 p-1 rounded-full">
                  <Flame className="w-4 h-4" />
                </div>
              </div>
              {/* Rating and temperature */}
              <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 rounded-full px-2 py-0.5 text-sm">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span>{tentItem.ratings?.location || "N/A"}</span>
                <span className="text-gray-500">|</span>
                <span>{tentItem.weather?.currentTemp || "--"}°C</span>
              </div>
              {/* Image carousel dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
              </div>
            </div>

            <div className="p-4 w-[100%] h-[6rem]">
              <div className="text-sm text-gray-500 mb-0.5">{tentItem.address?.tal || "Unknown"}</div>
              <h3 className="font-medium text-gray-900 mb-0.5">{tentItem.campName}</h3>

              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-gray-900">₹{tentItem.prices.afterDiscount || "0"}</span>
                  {tentItem.prices.actual && (
                    <span className="text-sm text-gray-400 line-through">₹{tentItem.prices.actual}</span>
                  )}
                </div>
                <div className="flex gap-2">
                  <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                    <IoBedOutline className="w-4 h-4 text-blue-900" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                    <BiLeaf className="w-4 h-4 text-green-800" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
