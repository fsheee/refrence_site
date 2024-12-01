"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="bg-white py-4 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/" className="text-4xl font-semibold hover:text-accent">
          <Image
            src="/logo.jfif"
            alt="Logo"
            width={150}
            height={50}
            className="rounded-l-full"
          />
        </Link>

        {/* Large screen menu */}
        <ul className="hidden md:flex gap-8 items-center px-4 font-semibold text-[20px]">
          <li>
            <Link className="navbar__link relative" href="#">
              Home
            </Link>
          </li>
          <li>
            <Link className="navbar__link relative" href="#">
              About
            </Link>
          </li>
          <li>
            <Link className="navbar__link relative" href="#">
              Service
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              className="relative hover:text-gray-700"
              onClick={toggleDropdown}
            >
              Software
            </button>
            {dropdownOpen && (
              <ul
                className="absolute top-12 left-0 bg-white shadow-lg border border-gray-200 w-48 py-2 rounded-md"
              >
                <li>
                  <Link
                    href="/software/option1"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-700 transition-colors"
                  >
                    RDM-Server
                  </Link>
                </li>
                <li>
                  <Link
                    href="/software/option2"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-700 transition-colors"
                  >
                    PPC Management
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link className="navbar__link relative" href="#">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="navbar__link relative" href="#">
              Contact
            </Link>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="hidden md:block w-[300px] relative">
          <input
            className="border-gray-200 border p-2 px-4 rounded-lg w-full"
            type="text"
            placeholder="Search...."
          />
          <a
            href="/search-results"
            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
          >
            <BsSearch size={20} />
          </a>
        </div>

        {/* Hamburger menu icon */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <ul className="flex flex-col gap-4 mt-4 px-4 font-semibold text-[18px] bg-white shadow-lg">
          <li>
            <Link className="navbar__link relative hover:text-gray-500" href="#">
              Home
            </Link>
          </li>
          <li>
            <Link className="navbar__link relative hover:text-gray-500" href="#">
              About
            </Link>
          </li>
          <li>
            <Link className="navbar__link relative hover:text-gray-500" href="#">
              Service
            </Link>
          </li>
          <li className="relative">
            <button
              type="button"
              className="hover:text-gray-700 w-full text-left"
              onClick={toggleDropdown}
            >
              Software
            </button>
            {dropdownOpen && (
              <ul
                className="mt-2 bg-white shadow-lg border border-gray-200 w-full max-w-[200px] py-2 rounded-md"
              >
                <li>
                  <Link
                    href="/software/option1"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-700 transition-colors"
                  >
                    RDM-Server
                  </Link>
                </li>
                <li>
                  <Link
                    href="/software/option2"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-700 transition-colors"
                  >
                    PPC Management
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link className="navbar__link relative hover:text-gray-500" href="#">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="navbar__link relative hover:text-gray-500" href="#">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;

//fix
// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { AiOutlineMenu } from "react-icons/ai";
// import { BsSearch } from "react-icons/bs";

// const NavBar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="bg-white py-4 sticky top-0 z-10 shadow-md ml-20">
//       <div className="container flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="text-4xl font-semibold hover:text-accent">
//           <Image
//             src="/logo.jfif"
//             alt="Logo"
//             width={150}
//             height={50}
//             className="rounded-l-full"
//           />
//         </Link>

//         {/* Large screen menu */}
//         <ul className="md:flex gap-8 items-center px-20 font-semibold text-[20px] hidden">
//           <li>
//             <Link className="navbar__link relative" href="#">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link className="navbar__link relative" href="#">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link className="navbar__link relative" href="#">
//               Service
//             </Link>
//           </li>
//           <li
//             className="navLink relative"
//             onMouseEnter={() => setDropdownOpen(true)}
//             onMouseLeave={() => setDropdownOpen(false)}
//           >
//             Software
//             {dropdownOpen && (
//               <ul
//                 className="dropdown-menu absolute top-12 left-0 bg-white shadow-lg border border-gray-200
//                 w-48 py-2 rounded-md"
//               >
//                 <li>
//                   <Link
//                     href="/software/option1"
//                     className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-700 transition-colors"
//                   >
//                     RDM-Server
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/software/option2"
//                     className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-700 transition-colors"
//                   >
//                     PPC Management
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li>
//             <Link className="navbar__link relative" href="#">
//               Portfolio
//             </Link>
//           </li>
//           <li>
//             <Link className="navbar__link relative" href="#">
//               Contact
//             </Link>
//           </li>
//         </ul>

//         {/* Right Side - Search Bar */}
//         <div className="w-full sm:w-[300px] md:w-[70%] relative px-18">
//           <input
//             className="border-gray-200 border p-2 px-4 rounded-lg w-full"
//             type="text"
//             placeholder="Search...."
//           />
//           <a
//             href="/search-results"
//             className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
//           >
//             <BsSearch size={20} />
//           </a>
//         </div>

//         {/* Hamburger menu icon */}
//         <AiOutlineMenu
//           className="md:hidden text-accent cursor-pointer"
//           size={30}
//           onClick={toggleMenu}
//         />
//       </div>

//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <ul className="flex flex-col gap-4 mt-4 ml-4 font-semibold text-[18px] md:hidden">
//           <li>
//             <Link className="navbar__link relative hover:text-gray-500" href="#">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link className="navbar__link relative hover:text-gray-500" href="#">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link className="navbar__link relative hover:text-gray-500" href="#">
//               Service
//             </Link>
//           </li>
//           <li
//             className="navLink relative"
//             onMouseEnter={() => setDropdownOpen(true)}
//             onMouseLeave={() => setDropdownOpen(false)}
//           >
//             Software
//             {dropdownOpen && (
//               <ul
//                 className="dropdown-menu relative mt-2 bg-white shadow-lg border border-gray-200
//                 w-full max-w-[200px] py-2 rounded-md"
//               >
//                 <li>
//                   <Link
//                     href="/software/option1"
//                     className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-700 transition-colors"
//                   >
//                     RDM-Server
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/software/option2"
//                     className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-700 transition-colors"
//                   >
//                     PPC Management
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li>
//             <Link className="navbar__link relative hover:text-gray-500" href="#">
//               Portfolio
//             </Link>
//           </li>
//           <li>
//             <Link className="navbar__link relative hover:text-gray-500" href="#">
//               Contact
//             </Link>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default NavBar;



// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
// import { BsSearch } from "react-icons/bs";

// const NavBar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
    
    
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="bg-white py-4 sticky top-0 z-10 shadow-md">
//       <div className="container flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="text-4xl font-semibold hover:text-accent">
//           <Image
//             src="/logo.jfif"
//             alt="Logo"
//             width={150}
//             height={50}
//             className="rounded-l-full"
//           />
//         </Link>
//         {/* <div className="hidden lg:block">
//     <div className="container">
     
//     </div>
//     </div> */}

//         {/* Large screen menu */}
//         <ul className="md:flex gap-8 items-center px-20 font-semibold text-[20px]
//          hidden">
//           <li>
            
//             <Link className="navbar__link relative" href="#">Home</Link>
//           </li>
//           <li>
//             {/* <Link href="/about">About</Link> */}
//             <Link className="navbar__link relative" href="#">About</Link>
//           </li>
//           <li>
//           <Link className="navbar__link relative" href="#">Service</Link>
//           </li>
//           <li
//             className="navLink relative"
//             onMouseEnter={() => setDropdownOpen(true)}
//             onMouseLeave={() => setDropdownOpen(false)}
//           >
//             Software
//             {dropdownOpen && (
              
//              <ul className="dropdown-menu absolute top-12 left-0 bg-white shadow-lg border border-gray-200
//               w-48 py-2 rounded-md"
//             >
//                <li> <Link
//             href="/software/option1"
//             className="block px-4 py-2 text-sm sm:text-[14px] lg:text-[18px] hover:bg-gray-100
//             hover:text-gray-700 transition-colors">
//             RDM-Server
//           </Link></li>
                
//           <li><Link  href="/software/option1"
//             className="block px-4 py-2 text-sm sm:text-[14px] lg:text-[18px] hover:bg-gray-100
//             hover:text-gray-700 transition-colors">
//             PPC Managnment
//           </Link></li>
//               </ul>
//             )}
//           </li>
//           <li>
            
//             <Link className="navbar__link relative" href="#">Portfolio</Link>
//           </li>
//           <li>
//           <Link className="navbar__link relative" href="#">Contact</Link>
//           </li>
//         </ul>
//         {/* Right Side - Search Bar */}
//       <div className="w-full sm:w-[300px] md:w-[70%] relative px-18">
//   <input  
//     className="border-gray-200 border p-2 px-4 rounded-lg w-full"
//     type="text"
//     placeholder="Search...." 
//   />
//   <a 
//     href="/search-results"
//     className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
//   >
//     <BsSearch size={20} />
//   </a>
// </div>

//         {/* Hamburger menu icon */}
//         <AiOutlineMenu
//           className="md:hidden text-accent cursor-pointer"
//           size={30}
//           onClick={toggleMenu}
//         />
//       </div>

//        {/* Mobile menu */}
//       {/* {isMenuOpen && (
//         <ul className="flex flex-col gap-4 mt-4 ml-4 font-semibold text-[18px] md:hidden">
          
//           <li>
                   
//             <Link className="navbar__link relative" href="#">Home</Link></li>
//           <li>
//           <Link className="navbar__link relative" href="#">About</Link>
//           </li>
//           <li>
//           <Link className="navbar__link relative" href="#">Service</Link>
//           </li>
//           <li
//             className="navLink relative"
//             onMouseEnter={() => setDropdownOpen(true)}
//             onMouseLeave={() => setDropdownOpen(false)}
//           >
//             Software
//             {dropdownOpen && (
//                <ul className="dropdown-menu absolute top-12 left-0 bg-white shadow-lg border border-gray-200
//               w-48 py-2 rounded-md">
//                 <li>
                  
//                   <Link href="/software/option1" className="text-base md:text-lg lg:text-xl xl:text-2xl">
//                     RDM-Server
//                   </Link>
//                 </li>
//                 <li>
//                 <Link href="/software/option2" className="text-base md:text-lg lg:text-xl xl:text-2xl">
//                     PPC Managnment
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li>
//           <Link className="navbar__link relative" href="#">Portfolio</Link>
//           </li>
//           <li>
//           <Link className="navbar__link relative" href="#">Contact</Link>
//           </li>
//         </ul>
//       )}  */}
//       {/* Hamburger menu icon */}

// {/* Mobile menu */}

// {isMenuOpen && (
//   <ul className="flex flex-col gap-4 mt-4 ml-4 font-semibold text-[18px] md:hidden">
//     <li>
//       <Link className="navbar__link relative hover:text-gray-500" href="#">
//         Home
//       </Link>
//     </li>
//     <li>
//       <Link className="navbar__link relative hover:text-gray-500" href="#">
//         About
//       </Link>
//     </li>
//     <li>
//       <Link className="navbar__link relative hover:text-gray-500" href="#">
//         Service
//       </Link>
//     </li>
//     <li
//       className="navLink relative"
//       onMouseEnter={() => setDropdownOpen(true)}
//       onMouseLeave={() => setDropdownOpen(false)}
//     >
//       Software
//       {dropdownOpen && (
//         <ul
//           className="dropdown-menu relative mt-2 bg-white shadow-lg border border-gray-200
//           w-full max-w-[200px] py-2 rounded-md">
//           <li>
//             <Link
//               href="/software/option1"
//               className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-700 transition-colors"
//             >
//               RDM-Server
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/software/option2"
//               className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-700 transition-colors"
//             >
//               PPC Management
//             </Link>
//           </li>
//         </ul>
//       )}
//     </li>
//     <li>
//       <Link className="navbar__link relative hover:text-gray-500" href="#">
//         Portfolio
//       </Link>
//     </li>
//     <li>
//       <Link className="navbar__link relative hover:text-gray-500" href="#">
//         Contact
//       </Link>
//     </li>
//   </ul>
// )}

//     </div>
//   );
// };

// export default NavBar;

