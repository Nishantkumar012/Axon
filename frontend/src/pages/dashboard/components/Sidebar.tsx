

// export default function Sidebar({ setOpen }: { setOpen: () => void }) {
//   return (
//     <div className="w-64 bg-gray-100 p-4 border-r">
//       <h2 className="font-bold mb-4">Workspace</h2>

//       <ul>
//         <li className="p-2 hover:bg-gray-200 rounded-xl">Page 1</li>
//         <li className="p-2 hover:bg-gray-200 rounded-xl">Page 2</li>
//       </ul>
//     </div>
//   );
// }






import { ChevronsLeft } from "lucide-react";
import React, { useState } from "react";

type SidebarProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // topHovered?: React.Dispatch<React.SetStateAction<boolean>>;
   topHovered?: boolean
};


const Sidebar: React.FC<SidebarProps> = ({ setOpen , topHovered}) => {
  // ...existing code...
  // Example usage: setOpen(false) to close sidebar
 
const [hovered, setHovered] = useState(false)
     
  return (

      //  <div className={`${hovered?'mt-7 mb- border-0':''}`}>
    // <div className={`w-64 ${topHovered?'rounded-tr-2xl h-50vh mb-6':'none'} h-screen bg-blue-100 p-4 border-0 `}> 

      <div
      className={`w-64 bg-blue-100 p-4 border-0 transition-all duration-300
        ${topHovered 
          ? "h-[70vh] rounded-lg mb-8 mt-8 shadow-lg"  // ✅ shorter, floating with margins
          : "h-screen"
        }`}
    >
      <div className="flex justify-between"
         onMouseEnter={()=> setHovered(true)}
         onMouseLeave={()=> setHovered(false)}
       >
        <h2 className="font-bold mb-4">Workspace</h2>
         
         {hovered &&          <span onClick={()=> setOpen(!open)} 
           
           className="flex justify-center items-center w-8 h-8 hover:bg-gray-300 rounded-full transition-colors"
          >
         <ChevronsLeft/>
                     
         </span>
}
        </div>

      <ul>
        <li className="p-2 hover:bg-gray-200 rounded-xl">Page 1</li>
        <li className="p-2 hover:bg-gray-200 rounded-xl">Page 2</li>
      </ul>
    </div>
  );
};

export default Sidebar;