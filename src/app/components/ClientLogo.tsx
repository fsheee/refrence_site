
'use client';
import React, { useState, useEffect } from 'react';

// Define the interface for the image objects.
interface RandomImageProps {
  images: { id: number, img: string }[]; // Array of objects with 'id' and 'img' properties
}

const ClientLogo = ({ images }: RandomImageProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (images.length === 0) return;

    // Set interval to change the image every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through the images
    }, 5000); // Change image every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [images]); // Only re-run effect when 'images' changes

  // Fallback render when no images are provided
  if (images.length === 0) {
    return (
      <div className="text-center">
        <p>No images available</p>
        {/* Render a default image when no images are passed */}
        <img src="/default-image.jpg" alt="Default Image" className="w-32 h-32 mx-auto" />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center">
      <img
        src={images[currentIndex].img}
        alt="Slider Image"
        className="w-32 h-32 mx-auto transition-all duration-1000 ease-in-out"
      />
    </div>
  );
};

export default ClientLogo;

// 'use client';
// import React, { useState, useEffect } from 'react';

// // Define the interface for the image objects.
// interface RandomImageProps {
//   images: { id: number, img: string }[]; // Array of objects with 'id' and 'img' properties
// }

// const ClientLogo = ({ images }: RandomImageProps) => {
//   const [currentImage, setCurrentImage] = useState<string | null>(null);

//   useEffect(() => {
//     if (images.length === 0) return;

//     // Set a random image initially when the component mounts
//     const randomIndex = Math.floor(Math.random() * images.length);
//     setCurrentImage(images[randomIndex].img);

//     // Set interval to change the image every 5 seconds
//     const intervalId = setInterval(() => {
//       const randomIndex = Math.floor(Math.random() * images.length);
//       setCurrentImage(images[randomIndex].img);
//     }, 1000); // Change image every 5 seconds

//     // Cleanup interval on component unmount
//     return () => clearInterval(intervalId);
//   }, [images]); // Only re-run effect when 'images' changes

//   // Fallback render when no images are provided
//   if (images.length === 0) {
//     return (
//       <div className="text-center">
//         <p>No images available</p>
//         {/* Render a default image when no images are passed */}
//         <img src="/default-image.jpg" alt="Default Image" className="w-32 h-32 mx-auto" />
//       </div>
//     );
//   }

//   // Only render the image if currentImage is valid
//   return (
//     <div className="flex justify-center items-center">
//       {currentImage ? (
//         <img src={currentImage} alt="Random Image" className="w-32 h-32 mx-auto" />
//       ) : null} {/* Do not render the <img> element if the source is null */}
//     </div>
    
//   );
// };

// export default ClientLogo;

// 'use client';
// import React, { useState, useEffect } from 'react';

// // Define the interface for the image objects.
// interface RandomImageProps {
//   images: { id: number, img: string }[]; // Array of objects with 'id' and 'img' properties
// }

// const ClientLogo = ({ images }: RandomImageProps) => {
//   const [currentImage, setCurrentImage] = useState<string | null>(null);

//   // Set a random image when the component is mounted or when images change
//   useEffect(() => {
//     if (images.length > 0) {
//       const randomIndex = Math.floor(Math.random() * images.length);
//       setCurrentImage(images[randomIndex].img);
//     }
//   }, [images]);

//   // Fallback render when no images are provided
//   if (images.length === 0) {
//     return (
//       <div className="text-center">
//         <p>No images available</p>
//         {/* Render a default image when no images are passed */}
//         {/* <img src="/default-image.jpg" alt="Default Image" className="w-32 h-32 mx-auto" /> */}
//       </div>
//     );
//   }

//   // Only render the image if currentImage is valid
//   return (
//     <div className="flex justify-center items-center">
//       {currentImage ? (
//         <img src={currentImage} alt="Random Image" className="w-32 h-32 mx-auto" />
//       ) : null} {/* Do not render the <img> element if the source is null */}
//     </div>
//   );
// };

// export default ClientLogo;

