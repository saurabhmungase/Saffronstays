// import React from "react";

// const places = [
//   { id: "01", title: "Explore Nordic Sea", desc: "Enjoy cold breeze of nordic seas", dark: true },
//   { id: "02", title: "Wilderness", desc: "Embrace the Wild Wilderness", dark: false },
//   { id: "03", title: "Wilderness", desc: "Embrace the Wild Wilderness", dark: false },
//   { id: "04", title: "Nordic Sea", desc: "Enjoy cold breeze", dark: true },
// ];

// export default function NordicSeaSection() {
//   return (
//     <section className="max-w-6xl mx-auto py-10 px-6">
//       <h1 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
//         Nordic Sea - Best for June 2025
//       </h1>

//       <div className="grid grid-cols-3 gap-6 bg-white p-6 rounded-2xl shadow-lg">
//         {/* Left Cards Grid */}
//         <div className="grid grid-cols-2 gap-4">
//           {places.map((place, index) => (
//             <div
//               key={index}
//               className={`p-6 rounded-lg ${place.dark ? "bg-black text-white" : "bg-gray-100 text-gray-900"}`}
//             >
//               <p className={`text-sm ${place.dark ? "text-gray-400" : "text-gray-500"}`}>/ {place.id}</p>
//               <h2 className="text-lg font-semibold mt-2">{place.title}</h2>
//               <p className="text-sm mt-1">{place.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* Right Image */}
//         <div className="col-span-1">
//           <img
//             src="src\assets\ansgar-scheffold-IZZ78Ugqsow-unsplash 2.png"
//             alt="Nordic Sea"
//             className="w-full h-full rounded-2xl object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";

const places = [
  { id: "01", title: "Explore Nordic Sea", desc: "Enjoy cold breeze of Nordic seas", dark: true },
  { id: "02", title: "Wilderness", desc: "Embrace the Wild Wilderness", dark: false },
  { id: "03", title: "Wilderness", desc: "Embrace the Wild Wilderness", dark: false },
  { id: "04", title: "Nordic Sea", desc: "Enjoy cold breeze", dark: true },
];

export default function NordicSeaSection() {
  return (
    <section className="max-w-[95%] h-8/12  mx-auto py-12 px-6">
      {/* Section Heading */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">
        Nordic Sea - Best for June 2025
      </h1>

      <div className="grid md:grid-cols-3 gap-8  bg-white p-6 rounded-2xl shadow-xl">
        {/* Left Cards Grid */}
        <div className="grid grid-cols-2 gap-6">
          {places.map((place, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                place.dark ? "bg-black text-white" : "bg-gray-100 text-gray-900"
              }`}
            >
              <p className={`text-sm font-medium ${place.dark ? "text-gray-400" : "text-gray-500"}`}>
                / {place.id}
              </p>
              <h2 className="text-lg font-semibold mt-2">{place.title}</h2>
              <p className="text-sm mt-1">{place.desc}</p>
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div className="col-span-1">
          <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg">
            <img
              src="src/assets/ansgar-scheffold-IZZ78Ugqsow-unsplash 2.png"
              alt="Nordic Sea"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            {/* Overlay Effect */}
            <div className="absolute inset-0 bg-black opacity-10 hover:opacity-0 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
