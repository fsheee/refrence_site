
// 'use client'
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Card = () => {
  const cards = [
    {
      title: "Website Development",
      description: "Learn about creating modern, responsive, and interactive websites.",
      imgSrc: "/web2.png",
      altText: "Website Development",
      ariaLabel: "Learn more about Website Development",
    },
    {
      title: "Graphics Design Services",
      description: "Create stunning visuals and graphics tailored to your brand.",
      imgSrc: "/gp.png",
      altText: "graphics",
      ariaLabel: "Learn more about Mobile App Development",
    },
    {
      title: "Video Editing",
      description: "Craft professional videos with seamless editing and effects.",
      imgSrc: "/video.png",
      altText: "videoediting",
      ariaLabel: "Learn more about Video editing",
    },
    {
      title: "Networking Services",
      description: "Optimize your connectivity with robust network solutions.",
      imgSrc: "/network.png",
      altText: "networkpic",
      ariaLabel: "Learn more about Networkin services",
    },
    {
      title: "Support Managnment",
      description: "Enhance customer satisfaction with efficient support services.",
      imgSrc: "/smag.png",
      altText: "managnmentpic",
      ariaLabel: "Learn more about support managnment",
    },
  ];

  return (
    <div className="container ml-20 pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-6
     justify-items-center bg-slate-50">
      {cards.map((card, index) => (
        <HoverCard key={index}>
          <HoverCardTrigger aria-label={card.ariaLabel}>
            <button className="text-blue-500 hover:underline">{card.title}</button>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
              <img
                className="object-cover"
                src={card.imgSrc}
                alt={card.altText}
                width={100}
                height={100}
              />
              <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">{card.title}</h2>
                <p className="text-gray-700 text-base">{card.description}</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
};

export default Card;


