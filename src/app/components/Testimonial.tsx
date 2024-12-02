import Image from "next/image";
import React from "react";

interface TestimonialProps {
  name: string;
  role: string;
  message: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, message, avatar }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 max-w-sm">
      <Image
        src={avatar}
        alt={`${name}'s avatar`}
        className="w-16 h-16 rounded-full mb-4 border-2 border-gray-300"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
      <p className="text-center text-gray-700 mt-4">{`"${message}"`}</p>
    </div>
  );
};

const Testimonial: React.FC = () => {
  const testimonialData = [
    {
      name: "Jane Doe",
      role: "Software Engineer",
      message: "This is the best service I have ever used. Highly recommend it!",
      avatar: "/images/avatar1.jpg", // Replace with your image paths
    },
    {
      name: "John Smith",
      role: "Product Manager",
      message: "Amazing experience! The team was very supportive and helpful.",
      avatar: "/images/avatar2.jpg",
    },
    {
      name: "Alice Johnson",
      role: "UI/UX Designer",
      message: "The quality of work is outstanding. Will use this service again!",
      avatar: "/images/avatar3.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              message={testimonial.message}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
