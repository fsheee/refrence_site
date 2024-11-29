import ServesCard from './ServesCard';

const servesrArray = [
  {
    title: 'Software Development',
    description:
      'Our customers get solutions and business opportunities instead of just projects.',
    img: '/web2.png', 
  },
  {
    title: 'Website Development',
    description:
      'Our global community of about 5,000 people can be found working from corporate.',
    img: '/web1.png',
  },
  {
    title: 'Graphics Design',
    description:
      'Graphic design is the art of conveying ideas visually through images and typography.',
    img: '/gp.png',
  },
  {
    title: 'Video Editing',
    description:
      'Explore our website for a seamless experience filled with engaging content and intuitive design.',
    img: '/video.png',
  },
  {
    title: 'Cyber Security CCTV',
    description:
      'Our customers get solutions and business opportunities instead of just projects.',
    img: '/web2.png', 
  },
  {
    title: 'Networking',
    description:
      'Our global community of about 5,000 people can be found working from corporate.',
    img: '/web1.png',
  },
  {
    title: 'IT Support',
    description:
      'Graphic design is the art of conveying ideas visually through images and typography.',
    img: '/gp.png',
  },
  {
    title: 'Digital Marketing',
    description:
      'Explore our website for a seamless experience filled with engaging content and intuitive design.',
    img: '/video.png',
  },
];

const Serves = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <p className="text-[14px] text-blue-700 text-center font-bold">Our Awesome Services </p>
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
        We are
      </h1>
      <h1 className="text-blue-700 text-center text-4xl font-bold mt-2">Dedicated</h1>
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mt-2">
        to Serve you all time.
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {servesrArray.map((service, index) => (
          <ServesCard
            key={index}
            title={service.title}
            description={service.description}
            img={service.img} 
          />
        ))}
      </div>
    </div>
  );
};

export default Serves;


