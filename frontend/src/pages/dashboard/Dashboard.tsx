import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { ChevronsRight, Menu } from "lucide-react";

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const [topHovered, setTopHovered] = useState(false);


  useEffect(() => {
  console.log("Sidebar open state changed:", open);
}, [open]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar + Hover Menu */}
      <div
        className={`transition-all duration-300 ${
          open ? "w-64" : "w-16"
        }`}
      >
        {open ? (
          // FULL SIDEBAR
          <Sidebar setOpen={setOpen} topHovered={false} />
        ) : (
          // COLLAPSED SIDEBAR WITH HOVER PREVIEW
          <div
            className="relative flex h-full"
            onMouseEnter={() => setTopHovered(true)}
            onMouseLeave={() => setTopHovered(false)}
          >
            {/* Toggle Icon */}
            <span
              onClick={() => {
                setOpen(true);        // ✅ open sidebar
                {{console.log(open)}}
                setTopHovered(false); // ✅ hide preview
              }}
              className="cursor-pointer mt-2 ml-1 h-10 w-10 flex items-center justify-center 
             hover:bg-gray-100 rounded-full z-30 transition-colors">
              {topHovered ? <ChevronsRight /> : <Menu />}
            </span>

            {/* Hover Sidebar Preview */}
            {topHovered && (
              <div className="absolute top-0 left-0 h-full z-20 flex items-center">
                <Sidebar setOpen={setOpen} topHovered={true} />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Main Area */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          open ? "ml-[25rem]" : "ml-[5rem]"
        }`}
      >
        {/* Optional Topbar */}
        {/* <Topbar /> */}
        <div className="p-6">
          <h1 className="text-xl font-bold">Welcome to Dashboard</h1>
          <p>Select a page from the sidebar.</p>
        </div>
      </div>
    </div>
  );
}




// import { useState } from "react";
// import Sidebar from "./components/Sidebar";
// import Topbar from "./components/Topbar";
// import { ChevronsRight, Menu } from "lucide-react";

// export default function Dashboard() {
//   const [open, setOpen] = useState(true);
//   const [topHovered, setTopHovered] = useState(false);

//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* Sidebar + Hover Menu */}
//       <div
//         className={`transition-all duration-300 ${
//           open ? "w-64" : "w-16"
//         }`}
//       >
//         {open ? (
//           <Sidebar setOpen={setOpen} />
//         ) : (

// //           <div
// //             className="relative flex h-full"
// //             onMouseEnter={() => setTopHovered(true)}
// //             onMouseLeave={() => setTopHovered(false)}
// //           >
// //             {/* Menu Icon */}
// //             {/* <span
// //               onClick={() => setOpen(true)}
// //               className="cursor-pointer mt-1 ml-1 bg-amber-800"
              
// //             >
// //               {topHovered ? <ChevronsRight  /> : <Menu />}
              
// //             </span> */}


// //             <span
// //   onClick={() => {
// //     setOpen(true);
// //     setTopHovered(false);   // ✅ close preview right after click
// //   }}
// //   className="cursor-pointer mt-1 ml-1 "
// // >
// //   {topHovered ? <ChevronsRight /> : <Menu />}
// // </span>

// //             {/* Hover Sidebar Preview */}
// //             {topHovered && (
// //               <div className="absolute top-[-8vh] left-0 h-full z-50 flex items-center">
// //                 <Sidebar setOpen={setOpen} topHovered={topHovered} />
// //               </div>
// //             )}
// //           </div>
        
// <div
//   className="relative flex h-full"
//   onMouseEnter={() => !open && setTopHovered(true)}
//   onMouseLeave={() => !open && setTopHovered(false)}
// >
//   <span
//     onClick={() => {
//       setOpen(open);
//       setTopHovered(false);
//     }}
//     className="cursor-pointer mt-1 ml-1"
//   >
//     {topHovered ? <ChevronsRight /> : <Menu />}
//   </span>

//   {topHovered && !open && (
//     <div className="absolute top-0 left-0 h-full z-50 flex items-center">
//       <Sidebar setOpen={setOpen} topHovered={topHovered} />
//     </div>
//   )}
// </div>

        
//         )}
//       </div>

//       {/* Main Area */}
//       <div
//         className={`flex flex-col flex-1 transition-all duration-300 ${
//           open ? "ml-[25rem]" : "ml-[20rem]"
//         }`}
//       >
//         {/* Optional Topbar */}
//         {/* <Topbar /> */}
//         <div className="p-6">
//           <h1 className="text-xl font-bold">Welcome to Dashboard</h1>
//           <p>Select a page from the sidebar.</p>
//         </div>
//       </div>
//     </div>
//   );
// }



// import { useState } from "react";
// import Sidebar from "./components/Sidebar";
// import Topbar from "./components/Topbar";
// import { ChevronsRight, Menu } from "lucide-react";

// export default function Dashboard() {
//   const [open, setOpen] = useState(true);
//   const [topHovered, setTopHovered] = useState(false);

//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* Sidebar + Hover Menu */}
//       <div
//         className={`transition-all duration-300 ${
//           open ? "w-64" : "w-16"
//         } `}
//       >
//         {open ? (
//           <Sidebar setOpen={setOpen} />
//         ) : (
//           <div
//             className="relative flex  h-full "
//             // onMouseEnter={() => setTopHovered(true)}
//             // onMouseLeave={() => setTopHovered(false)}
//           >
//             {/* Menu Icon */}
//             <span onClick={() => setOpen(true)} className="cursor-pointer mt-1 ml-1 "
                 
//                  onMouseEnter={() => setTopHovered(true)}
//             onMouseLeave={() => setTopHovered(false)}
//               >
              
//               {/* {topHovered?<Menu size={24} />:<ChevronsRight/>} */}
              
//               {topHovered?<ChevronsRight/>:<Menu/>}
//             </span>

//             {/* Hover Sidebar Preview */}
//             {topHovered && (
//               // <div className="absolute top-20 left-0 z-50 shadow-lg bg-blue-600">

//                <div className="absolute top-[-8vh] left-0 h-full z-50 flex items-center">
//                 <Sidebar setOpen={setOpen} topHovered={topHovered}/>
//               </div>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Main Area */}
//       <div
//         className={`flex flex-col flex-1 transition-all duration-300 ${
//           open ? "ml-[15vh]" : "ml-[30vh]"
//         }`}
//       >
//         {/* Optional Topbar */}
//         {/* <Topbar /> */}
//         <div className="p-6">
//           <h1 className="text-xl font-bold">Welcome to Dashboard</h1>
//           <p>Select a page from the sidebar.</p>
//         </div>
//       </div>
//     </div>
//   );
// }







// import { useState } from "react";
// import Sidebar from "./components/Sidebar";
// import Topbar from "./components/Topbar";
// import { Menu } from "lucide-react"; // ✅ Correct import (capital M)

// export default function Dashboard() {
//   const [open, setOpen] = useState(true);
//     const [hovered, setHovered] = useState(false); 

//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* Sidebar */}
//       {open ? (
//         <Sidebar setOpen={setOpen} />
//       ) : (
//         <div className="relative p-4"
//           onMouseEnter={()=> setHovered(true)}
//           onMouseLeave={()=> setHovered(false)}
//         >
//           <span onClick={() => setOpen(true)} className="cursor-pointer">
//             <Menu size={18} /> {/* ✅ Correct usage */}
//           </span>


//           {hovered && (
//              <div className="absolute top-10 left-0">
//                  <Sidebar setOpen={setOpen}/>
//              </div>
//           )}


//         </div>
//       )}

//       {/* Main Area */}
//       <div className="flex flex-col flex-1">
//         {/* <Topbar /> */}
//         <div className="p-4">
//           <h1 className="text-xl font-bold">Welcome to Dashboard</h1>
//           <p>Select a page from the sidebar.</p>
//         </div>
//       </div>
//     </div>
//   );
// }




// import { useState } from "react";
// import Sidebar from "./components/Sidebar";
// import Topbar from "./components/Topbar";
// import { Menu } from "lucide-react";

// export default function Dashboard() {
//   const [open, setOpen] = useState(true);

//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* Sidebar */}
//       <div
//         className={`transition-all duration-300 ${
//           open ? "w-64" : "w-0"
//         } bg-gray-800 text-white`}
//       >
//         {open && <Sidebar setOpen={setOpen} />}
//       </div>

//       {/* Main Area */}
//       <div className="flex flex-col flex-1 transition-all duration-300">
//         {/* Topbar */}
//         <div className="flex items-center bg-white shadow px-4 py-2">
//           {!open && (
//             <span
//               onClick={() => setOpen(true)}
//               className="cursor-pointer text-gray-600 hover:text-gray-900"
//             >
//               <Menu size={28} />
//             </span>
//           )}
//           <h1 className="ml-4 text-lg font-bold">Dashboard</h1>
//         </div>

//         {/* Content */}
//         <div className="p-6 bg-gray-50 flex-1">
//           <h2 className="text-2xl font-semibold">Welcome to Dashboard</h2>
//           <p className="mt-2 text-gray-600">Select a page from the sidebar.</p>
//         </div>
//       </div>
//     </div>
//   );
// }
