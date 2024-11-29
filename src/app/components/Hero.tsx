// import React from 'react';

// const Hero = () => {
//   return (
    
        // <section className="bg-gray-100 py-16">
        //     <div className="container mx-auto px-4">
        //         <div className="flex flex-col md:flex-row items-center justify-between">
        //             {/* <div className="md:w-1/2">
        //                 <h1 className="text-4xl md:text-6xl font-bold mb-4">Think Big. We make IT, possible!</h1>
        //                 <p className="text-lg mb-8">We place you at the center of international networks
        //                      to advance your strategic interests.</p>
        //                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        //                     Our Team</button>
        //             </div> */}
        //             { /* Background image container */}
        //   <div
        //     className="w-full h-[400px] md:h-[600px] bg-[url('/office.jpg')] 
        //     bg-no-repeat bg-cover mt-8 md:mt-0 rounded-lg shadow-lg"></div>
        //      </div>
             
//         import React from 'react';
//         // import Slider from 'react-slick';
//         import "slick-carousel/slick/slick.css";
//         import "slick-carousel/slick/slick-theme.css";
        
      
//         import dynamic from 'next/dynamic';

//         const Slider = dynamic(() => import("react-slick"), { ssr: false });
        
//       const Hero = () => {
//         const Slider = dynamic(() => import("react-slick"), { ssr: false });
        

        
//           const settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//           };
//           // const settings = { 
//           //   dots: true,
//           //   infinite: true,
//           //   slidesToShow: 1,
//           //   slidesToScroll: 1,
//           //   autoplay: true,
//           //   pauseOnHover: false
//           // };
//           const slideData = [
//             { id: 0, img: "/office2.avif" },
//             { id: 1, img: "/bannerglasses.jpg" }
//             { id: 2, img: "/bannerbag.png", title: "Sales offer", mainTitle: "NEW FASHION SUMMER SALE", price: "$20" },
//           //   { id: 3, img: "/bannerwatch.png" }
//            ];
        
//           // return (
//           //   <div className="container pt-6 lg:pt-0">
//           //     <Slider {...settings}>
//           //       {slideData.map((item) => (
//           //         <Slide key={item.id} img={item.img} />
//           //       ))}
//           //     </Slider>
//           //   </div> 
        
//           return (
//             <div style={{ width: "80%", margin: "0 auto" }}>
//               <Slider {...settings}>
//                 <div><h3>Slide 1</h3></div>
//                 <div><h3>Slide 2</h3></div>
//                 <div><h3>Slide 3</h3></div>
//                 <div><h3>Slide 4</h3></div>
//               </Slider>
//             </div>
       
      
        
                
//         //     </div>
//         // </section>


//   );
// }

// export default Hero;

//999
'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'; // For optimized image handling



// Dynamically import react-slick to avoid server-side rendering issues in Next.js
const Slider = dynamic(() => import("react-slick"), { ssr: false });

// const Hero = () => {
  const Hero: React.FC = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    
  };

  // Slide data
  const slideData = [
    {
      id: 0,
      img: "/office2.avif",
      title: "Think Big. We make IT, possible!",
      description: "We place you at the center of international networks to advance your strategic interests",
    },
    {
      id: 1,
      img: "/office.jpg",
      title: "Prosper in this Volatile market funding.",
      description: "We place you at the center of international networks to advance your strategic interests",
    },
  ];

  return (
    <div className="container  py-10 ml-20">
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {slideData.map((slide) => (
            <div key={slide.id} className="relative">
              {/*  Image  */}
              <div className="h-[400px] md:h-[600px] relative">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  layout="fill" //  the image fill the container
                  objectFit="cover" // image covers the container
                  className="rounded-lg shadow-lg"
                />
                {/* Overlay for Text */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
                  <h1 className="text-3xl md:text-5xl font-extrabold">{slide.title}</h1>
                  <p className="text-lg mt-4 font-extralight">{slide.description}</p>
                  {/* Button */}
                  <button className="mt-8 px-8 py-3 bg-blue-600 text-white text-lg
                   font-bold rounded-lg hover:bg-blue-700 transition duration-300">
                    Our Team
                  </button>
                  
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
