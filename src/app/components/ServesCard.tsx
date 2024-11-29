

import React from 'react';
import { ImGoogle } from 'react-icons/im';

interface ServiceCardProps {
  title: string;
  description: string;
  img?: string;
}

const ServesCard: React.FC<ServiceCardProps> = ({ title, description, img }) => {
  return (
    <div className="bg-slate-200 shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
      {img ? (
        <img src={img} alt={title} className="w-16 h-16 mx-auto mb-4" />
      ) : (
        <ImGoogle className="w-16 h-16 mx-auto mb-4 text-blue-500" />
      )}
      <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ServesCard;
