// import React from 'react'
// import { EmblaOptionsType } from 'embla-carousel'
// import useEmblaCarousel from 'embla-carousel-react'

// // type PropType = {
// //   slides: number[]
// //   options?: EmblaOptionsType
// // }
// type PropsType= {
//     img:string;
//     title:string;
//     mainTitle:string;
//     price:string;
//  }

 

// const EmblaCarousel: React.FC<PropType> = (props) => {
//   const { slides, options } = props
//   const [emblaRef, emblaApi] = useEmblaCarousel(options)

//   return (
//     <section className="embla">
//       <div className="embla__viewport" ref={emblaRef}>
//         <div className="embla__container">
//           {slides.map((index) => (
//             <div className="embla__slide" key={index}>
//               <div className="embla__slide__number">{index + 1}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default EmblaCarousel



'use client'
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaOptionsType } from 'embla-carousel';
import Image from 'next/image';
import 'embla-carousel/embla-carousel.css';

type SlideType = {
  img: string;
  title: string;
  description: string;
};

type EmblaCarouselProps = {
  slides: SlideType[];
  options?: EmblaOptionsType; // Use EmblaOptionsType for options
};

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ slides, options }) => {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <section className="embla py-6">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__image">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="embla__slide__content text-center mt-4 px-4">
                <h2 className="text-2xl font-semibold">{slide.title}</h2>
                <p className="text-gray-600 mt-2">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
