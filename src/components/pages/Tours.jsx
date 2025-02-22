// import * as React from 'react';
// import { IoBedOutline } from "react-icons/io5";
// import { BiLeaf } from "react-icons/bi";
// import {  User, Flame, Star } from "lucide-react"
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';


// const destinations = [
//   {
//     name: "Whispering Woods Tents",
//     location: "Borivali",
//     rating: 4.5,
//     temperature: 28,
//     price: 7383,
//     originalPrice: 8932,
//     images: ["/placeholder.svg?height=400&width=600"],
//   },
//   {
//     name: "Jervis Bay Holiday Park",
//     location: "Australia",
//     rating: 4.5,
//     temperature: 28,
//     price: 7383,
//     originalPrice: 8932,
//     images: ["/placeholder.svg?height=400&width=600"],
//   },
//   {
//     name: "Huskisson Beach B&B",
//     location: "Australia",
//     rating: 4.5,
//     temperature: 28,
//     price: 7383,
//     originalPrice: 8932,
//     images: ["/placeholder.svg?height=400&width=600"],
//   },
//   {
//     name: "Ladakh",
//     location: "India",
//     rating: 4.5,
//     temperature: 28,
//     price: 7383,
//     originalPrice: 8932,
//     images: ["https://img.hireacamp.com/2lWSPi3VaLUG_SbH3zZyQD3k9ki1bMJKKy2mpXr-/fit-in/2048x2048/filters:quality(75)/uploads/b0138c9d59dd440d952e07ec7f449605.jpeg"],
//   },
//   {
//     name: "Camp Adventure Rishikesh",
//     location: "Borivali",
//     rating: 4.5,
//     temperature: 28,
//     price: 7383,
//     originalPrice: 8932,
//     images: ["/placeholder.svg?height=400&width=600"],
//   },
//   {
//     name: "Coorg Planter's Camp",
//     location: "Borivali",
//     rating: 4.5,
//     temperature: 28,
//     price: 7383,
//     originalPrice: 8932,
//     images: ["/placeholder.svg?height=400&width=600"],
//   },
//   {
//     name: "Seagot, Wayanad",
//     location: "Borivali",
//     rating: 4.5,
//     temperature: 28,
//     price: 7383,
//     originalPrice: 8932,
//     images: ["/placeholder.svg?height=400&width=600"],
//   },
//   {
//     name: "Mirvana, Jodhpur",
//     location: "Borivali",
//     rating: 4.5,
//     temperature: 28,
//     price: 7383,
//     originalPrice: 8932,
//     images: ["/placeholder.svg?height=400&width=600"],
//   },
// ]

// const Tours = () => {
//   return (
//     <div>
//       <section>
//         <img src="src\assets\Group 90.png" alt="" />
//       </section>
//       <section>
//         <div>
// {/* filter section */}
//         </div>
//       </section>
//       <section>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6">
//         {destinations.map((destination, index) => (
//           <div key={index} className="bg-gray-100 rounded-2xl shadow-md overflow-hidden">
//             <div className="relative">
//               <img
//                 src={destination.images[0] || "/placeholder.svg"}
//                 alt={destination.name}
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
//                 <span>{destination.rating}</span>
//                 <span className="text-gray-500">|</span>
//                 <span>{destination.temperature}°C</span>
//               </div>
//               {/* Image carousel dots */}
//               <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
//                 <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
//                 <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
//                 <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
//               </div>
//             </div>

//             <div className="p-4 w-[100%] h-[6rem]">
//               <div className="text-sm text-gray-500 mb-0.5">{destination.location}</div>
//               <h3 className="font-medium text-gray-900 mb-0.5">{destination.name}</h3>

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
//       </section>
//       <Stack spacing={2}>
//       <Pagination count={10} variant="outlined" shape="rounded" />
//     </Stack>
//     </div>
//   )
// }

// export default Tours

import * as React from "react";
import { IoBedOutline } from "react-icons/io5";
import { BiLeaf } from "react-icons/bi";
import { User, Flame, Star } from "lucide-react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { context } from "../../context/AppContext";

const destinations = [
  {
    name: "Whispering Woods Tents",
    location: "Borivali",
    rating: 4.5,
    temperature: 28,
    price: 7383,
    originalPrice: 8932,
    images: ["/placeholder.svg?height=400&width=600"],
  },
  {
    name: "Jervis Bay Holiday Park",
    location: "Australia",
    rating: 4.5,
    temperature: 28,
    price: 7383,
    originalPrice: 8932,
    images: ["/placeholder.svg?height=400&width=600"],
  },
  {
    name: "Huskisson Beach B&B",
    location: "Australia",
    rating: 4.5,
    temperature: 28,
    price: 7383,
    originalPrice: 8932,
    images: ["/placeholder.svg?height=400&width=600"],
  },
  {
    name: "Ladakh",
    location: "India",
    rating: 4.5,
    temperature: 28,
    price: 7383,
    originalPrice: 8932,
    images: [
      "https://img.hireacamp.com/2lWSPi3VaLUG_SbH3zZyQD3k9ki1bMJKKy2mpXr-/fit-in/2048x2048/filters:quality(75)/uploads/b0138c9d59dd440d952e07ec7f449605.jpeg",
    ],
  },
];

const ITEMS_PER_PAGE = 4;

const Tours = () => {
  const [page, setPage] = React.useState(1);
  const contextdata = React.useContext(context);
  console.log(contextdata.homestays);
  

  // Pagination Logic
  const indexOfLastItem = page * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentDestinations = destinations.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="px-4 md:px-10 py-6">
      {/* Banner Section */}
      <section className="mb-6">
        <img src="src/assets/Group 90.png" alt="Banner" className="w-full rounded-lg shadow-lg" />
      </section>

      {/* Filter Section (To be added later) */}
      <section className="mb-6">
        <div>{/* Filter Components */}</div>
      </section>

      {/* Destination Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentDestinations.map((destination, index) => (
          <DestinationCard key={index} destination={destination} />
        ))}
      </section>

      {/* Pagination */}
      <Stack spacing={2} className="mt-8 flex justify-center">
        <Pagination
          count={Math.ceil(destinations.length / ITEMS_PER_PAGE)}
          page={page}
          onChange={(event, value) => setPage(value)}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </div>
  );
};

// Destination Card Component
const DestinationCard = ({ destination }) => (
  <div className="bg-gray-100 rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg">
    {/* Image Section */}
    <div className="relative">
      <img
        src={destination.images[0] || "/placeholder.svg"}
        alt={destination.name}
        className="w-full aspect-square object-cover lazyload"
        loading="lazy"
      />

      {/* Top overlay icons */}
      <div className="absolute top-3 left-3 flex gap-1">
        <IconBadge icon={<User />} />
        <IconBadge icon={<Flame />} />
      </div>

      {/* Rating and temperature */}
      <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 rounded-full px-2 py-0.5 text-sm">
        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
        <span>{destination.rating}</span>
        <span className="text-gray-500">|</span>
        <span>{destination.temperature}°C</span>
      </div>

      {/* Image carousel dots (Placeholder for future enhancement) */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
        <Dot active />
        <Dot />
        <Dot />
      </div>
    </div>

    {/* Destination Details */}
    <div className="p-4">
      <div className="text-sm text-gray-500">{destination.location}</div>
      <h3 className="font-medium text-gray-900">{destination.name}</h3>

      <div className="flex items-center justify-between mt-2">
        {/* Pricing */}
        <div className="flex items-baseline gap-2">
          <span className="text-gray-900 font-semibold">₹{destination.price}</span>
          <span className="text-sm text-gray-400 line-through">₹{destination.originalPrice}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <ActionButton icon={<IoBedOutline className="text-blue-900" />} />
          <ActionButton icon={<BiLeaf className="text-green-800" />} />
        </div>
      </div>
    </div>
  </div>
);

// Icon Badge Component
const IconBadge = ({ icon }) => (
  <div className="bg-white/90 p-1 rounded-full">{icon}</div>
);

// Action Button Component
const ActionButton = ({ icon }) => (
  <button className="p-1.5 hover:bg-gray-200 rounded-full transition">{icon}</button>
);

// Image Carousel Dot Component
const Dot = ({ active }) => (
  <div className={`w-1.5 h-1.5 rounded-full ${active ? "bg-white" : "bg-white/50"}`} />
);

export default Tours;
