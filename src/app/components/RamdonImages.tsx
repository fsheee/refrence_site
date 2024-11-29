import React from 'react';
import ClientLogo from './ClientLogo'; // Import your ClientLogo component

const imageArray = [
  { id: 1, img: '/p1.jfif' }, 
  { id: 2, img: '/p2.jfif '}, 
  { id: 3, img: '/p3.jfif' }, 
  { id: 4, img: '/p4.jfif' }, 
  { id: 5, img: '/p3.jfif' }, 
  { id: 6, img: '/p2.jfif' }, 
];

const RandomImages = () => {
  return (
     
    // <div className="py-10 pt-10 text-[14px] pl-[50px] font-bold">Join over +100 happy clients!
    <><div className="flex flex-col justify-center sm:flex-row items-center sm:items-start pt-10 gap-x-10 py-10 pl-4 sm:pl-8 gap-y-10 
   md:pl-16 lg:pl-20  ite font-bold">
   <p className="text-[14px] text-accent-foreground sm:text-left">
    Join over +100 happy clients!
   </p> 
    
          {/* Pass the 'images' array as a prop to ClientLogo */}
          <ClientLogo images={imageArray} />
      </div></>
  );
};

export default RandomImages;
