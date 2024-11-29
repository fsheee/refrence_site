// import React from 'react';

// const WideVerity = () => {
//   return (
    
//       <div className="container pt-20 ml-20"> 
       
        
//        <div className="flex flex-col items-center justify-center px-4 sm:px-8 text-center min-h-[400px]">
//        <p className="text-[14px] font-bold text-blue-700 py-2">Why choose Us? </p>
//        <h2 className="text-[16px] md:text-4xl font-bold mt-2">
//        We Serve a Wide
//        <br/>
//          <span className="text-[16px] text-blue-700 md:text-4xl font-bold">Variety</span> 
//          <br/>
//          of Industries
//        </h2>
//              <p className="text-gray-700 text-[16px] font-semibold t-16 py-2">Below is just a small 
//               sample of some of the industries that we serve.</p>
     
               
//            </div>
//            </div>
     
    
//   );
// }

// export default WideVerity;


// import React from 'react';

// const WideVerity = () => {
//   return (
//     <div className="bg-gray-100">
//       <div className="container mx-auto py-16 px-4">
//       <div className="flex flex-col items-center justify-center px-4 sm:px-8 text-center min-h-[400px]">
//          <p className="text-[14px] font-bold text-blue-700 py-2">Why choose Us? </p>
//         <h2 className="text-[16px] md:text-4xl font-bold mt-2">
//         We Serve a Wide
//         <br/>
//           <span className="text-[16px] text-blue-700 md:text-4xl font-bold">Variety</span> 
//           <br/>
//           of Industries
//         </h2>
//              <p className="text-gray-700 text-[16px] font-semibold t-16 py-2">Below is just a small 
//                sample of some of the industries that we serve.</p>
//      </div>
//      <div>
               

//         //<div className="flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 mb-8 md:mb-0">
//             <img src="/laptop-image.jpg" alt="Laptop" className="rounded-lg shadow-lg" />
//           </div>
//           <div className="md:w-1/2">
//             <h1 className="text-4xl font-bold mb-4">Empowering Your Digital Future!</h1>
//             <h2 className="text-2xl font-semibold mb-8">Expertise in Software Solutions</h2>
//             <p className="text-lg mb-6">
//               Encompasses website development, graphic design, video editing, and cybersecurity, allowing us to leverage innovative
//               solutions that help your business thrive in the digital landscape.
//             </p>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//               About Us →
//             </button>
//           </div>
//         </div></div>
//       {/* </div>
//     </div> */}
//   );
// };

// export default WideVerity;

import React from "react";

const WideVerity = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-16 px-4">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center px-4 sm:px-8 text-center min-h-[400px]">
          <p className="text-[14px] font-bold text-blue-700 py-2">Why choose Us?</p>
          <h2 className="text-[16px] md:text-4xl font-bold mt-2">
            We Serve a Wide
            <br />
            <span className="text-[16px] text-blue-700 md:text-4xl font-bold">Variety</span>
            <br />
            of Industries
          </h2>
          <p className="text-gray-700 text-[16px] font-semibold py-4">
            Below is just a small sample of some of the industries that we serve.
          </p>
        </div>
        <div className="container mx-auto py-4 px-4">
        <ul className="flex justify-between">
          <li className="mr-8">
            <a href="#" className="text-blue-500 font-bold hover:underline">
              Expertise in Software Solution
            </a>
          </li>
          <li className="mr-8">
            <a href="#" className="text-blue-500 font-bold hover:underline">
              Comprehensive Hardware Services
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 font-bold dhover:underline">
              Client - Focused Commitment
            </a>
          </li>
        </ul>
      </div>

        {/* Content Section */}
        <div className="flex flex-col mt -4 md:flex-row items-center gap-8">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="/laptop-image.jpg"
              alt="Laptop"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          {/* Text Content */}
          <div className=" mt-4 md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Empowering Your Digital Future!</h1>
            <h2 className="text-2xl font-semibold mb-6">Expertise in Software Solutions</h2>
            <p className="text-lg mb-6">
              Encompasses website development, graphic design, video editing, and cybersecurity,
              allowing us to leverage innovative solutions that help your business thrive in the digital landscape.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              About Us →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WideVerity;
