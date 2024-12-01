import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8 mt-20">
        {/* <div className="flex flex-col md:flex-row justify-between mt-10"> */}
        <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0 text-sm:mt-8">
          {/* Office Information */}
           <div className="mb-8 md:mb-0 ml-4">
            <h2 className="text-2xl font-bold mb-4 underline">Pakistan Office:</h2>
            {/* <div className="flex items-center space-x-2 mb-2">
              <FaMapMarkerAlt className="text-blue-600" />
              <p className="text-[12px]">
                Plot #SB-7 Block-13B<br/> (Data Trade Center)<br /> Gulshan-e-Iqbal
              </p> */}
              <div className="flex items-start space-x-2 mb-2">
  <FaMapMarkerAlt className="text-blue-600 mt-1" />
  <p className="text-[14px]">
    Plot #SB-7 Block-13B <br/>(Data Trade Center)<br /> Gulshan-e-Iqbal
  </p>

            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-blue-600" />
              <p className="text-[12px]">+92 3363865491</p>
            </div>
          </div>

          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4 underline">USA Office:</h2>
            <div className="flex items-center space-x-2 mb-2">
              <FaMapMarkerAlt className="text-blue-600" />
              <p className="text-[12px]">3790 North Bend River Road</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-blue-600" />
              <p className="text-[12px]">+1 561-555-7689</p>
            </div>
          </div>

          <div className="mb-8 md:mb-0 mr-20">
            <h2 className="text-2xl font-bold mb-4 underline">Oman Office:</h2>
            {/* <div className="flex items-center space-x-2 mb-0">
              <FaMapMarkerAlt className="text-blue-600" />
              <p className="text-[12px]">
                Rd 1, Near Al Bidayah <br/> Health Center,<br/>Qasabiyat El Zaab
              </p>
            </div> */}
            <div className="flex items-start space-x-2 mb-2">
  <FaMapMarkerAlt className="text-blue-600 mt-1" />
  <p className="text-[14px]">
  Rd 1, Near Al Bidayah <br/> Health Center,<br/>Qasabiyat El Zaab
  </p>
</div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-blue-600" />
              <p className="text-[12px]">+968 4912 0073</p>
            </div>
          </div>
        </div>
        

        {/* Social Media Section */}
        <div className="flex flex-col items-center justify-center text-sm mt-8">
          <p>© 2024 NEXA IT SOLUTION. All rights reserved.</p>
           <div className="flex flex-col items-center justify-center text-sm mt-8">

          {/* <div className="flex  flex-col items-center space-x-4 mt-2"> */}
          <div className="flex space-x-4 mt-2">
             <a href="#" className="text-blue-700 hover:underline">
               Privacy & Policy
             </a>
             <span>|</span>
             <a href="#" className="text-blue-700 hover:underline">

               Terms of Service
             </a>
             <span>|</span>
             <a href="#" className="text-blue-700 hover:underline">
               Refund Policy
             </a>
             </div>
           </div>
          <div className="flex space-x-4 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      
      
    
    
  );
};

export default Footer;

  {/* import React from 'react';
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

 const Footer = () => {
   return (
     <div className="bg-gray-900 text-white py-8">

       <div className="container mx-auto px-4"> */}
         {/* Office Locations */}
        //  <div className="flex flex-col md:flex-row justify-between">
           {/* Pakistan Office */}
           {/* <div className="mb-8 md:mb-0">
             <h2 className="text-2xl font-bold mb-4 underline">Pakistan Office:</h2>
             <div className="flex items-center space-x-2 mb-2">
               <FaMapMarkerAlt className="text-blue-600" />
               <p className="text-[14px]">
                 Plot #SB-7 Block-13B (Data Trade Center)<br /> Gulshan-e-Iqbal
               </p>
             </div>
             <div className="flex items-center space-x-2">
               <FaPhoneAlt className="text-blue-600" />
               <p className="text-[12px]">+92 3363865491</p>
             </div>
           </div>
 */}
           {/* USA Office */}
            {/* <div className="mb-8 md:mb-0">
             <h2 className="text-2xl font-bold mb-4 underline">USA Office:</h2>
             <div className="flex items-center space-x-2 mb-2">
               <FaMapMarkerAlt className="text-blue-600" />
               <p className="text-[14px]">3790 North Bend River Road</p>
             </div>
             <div className="flex items-center space-x-2">
               <FaPhoneAlt className="text-blue-600" />
               <p className="text-[14px]">+1 561-555-7689</p>
            </div>
           </div> */}

           {/* Oman Office */}
           {/* <div className="mb-8 md:mb-0">
             <h2 className="text-2xl font-bold mb-4 underline">Oman Office:</h2>
             <div className="flex items-center space-x-2 mb-2">
               <FaMapMarkerAlt className="text-blue-600" />
               <p className="text-[14px]">
                 Rd 1, Near Al Bidayah Health Center,<br /> Qasabiyat El Zaab
               </p>
             </div>
             <div className="flex items-center space-x-2">
               <FaPhoneAlt className="text-blue-600" />
               <p className="text-[12px]">+968 4912 0073</p>
             </div>
           </div>
         </div>  */}

         {/* Footer Links */}
         {/* <div className="flex flex-col items-center justify-center text-sm mt-8">
           <p>© 2024 NEXA IT SOLUTION. All rights reserved.</p>
           <div className="flex space-x-4 mt-2">
             <a href="#" className="text-blue-700 hover:underline">
               Privacy & Policy
             </a>
             <span>|</span>
             <a href="#" className="text-blue-700 hover:underline">
               Terms of Service
             </a>
             <span>|</span>
             <a href="#" className="text-blue-700 hover:underline">
               Refund Policy
             </a>
           </div>
         </div>
       </div>
     </div>

   );

 };

 export default Footer; */}

 
