import React from 'react';
import Image from 'next/image'; 



const Services = () => {
  return (
    
<div className="container pt-22 ml-20"> 
    <div className="grid lg:grid-cols-[50%,1fr] gap-10">
       {/* <div className="grid lg:grid-cols-2 gap-8"> */}
       
       {/*left side*/}
        <div>
       
          <Image
            //  className="w-[100%] h-auto lg:w-auto lg:h-[90vh]"
            className="w-[100%] max-w-[400px] h-auto"
            src="/survey.png"
            width={1000}
            height={600}
            alt="survey image"
          />
        </div>
       {/*right side*/}
        <div className="self-center px-4 sm:px-8">
          <p className="text-[14px] font-bold text-blue-700 py-2">About our Company</p>
          <h2 className="text-4xl md:text-4xl font-bold mt-2 uppercase"> nexa it solution
  <br />
  <span className="text-blue-400 text-4xl mt-2 py-2 font-bold capitalize">
    delivering excellence</span></h2>
    <h2 className="text-4xl font-bold mt-2 py-2">in IT Services</h2>
  
         <p className="text-gray-700 text-[16px] pt-16 py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            vel, repudiandae fugiat veritatis blanditiis consectetur? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Fuga, dicta!
          </p>

          <p className="text-gray-700 text-[16px] pt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            vel, repudiandae fugiat veritatis blanditiis consectetur? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Fuga, dicta!
          </p>
          
          {/* Moneyback Guarantee Section */}
    {/* <div className="mt-8 flex items-center space-x-4">  */}
    <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4">
  
    <Image
      className=""
      src="/mony.png"
      width={50}
      height={50}
      alt="Moneyback Guarantee"
    />
    <p className="text-[16px] text-blue-500 font-semibold">Moneyback Guarantee</p>
  
  <div className="mt-8 flex items-center space-x-4">
    <Image
      className=""
      src="/ts.jfif"
      width={80}
      height={90}
      alt="Moneyback Guarantee"
    />
    <p className="text-[16px] text-blue-500 font-semibold">Technical Support</p>
  </div>
  </div>
  </div>
      </div>
      </div>

     
     
  );
};      

export default Services;

// NEXA IT SOLUTION The Best IT Service Company

