"use client"
import React from 'react'
import Image from 'next/image'
const projects=[
{
    title: 'E-commerce Platform for Fashion Hub',
    description: 'We provide stylish clothing and user-friendly e-commerce platform for Chic Boutique...',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://chicboutique.com',
  },
  {
    title: 'Mobile App for Food Delivery Service',
    description: 'HungryBites helps you create a mobile app that streamlines their food...',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://hungrybites.com',
  },
  {
    title: 'Booking and Reservation System for Event Management',
    description: 'We offer a booking and reservation system that streamlines event...',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://eventmanagement.com',
  },
  {
    title: 'Custom Software for Workflow Automation',
    description: 'We provide custom software for workflow automation, resulting in improved...',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://workflowautomation.com',
  },
  {
    title: 'Custom Software for Workflow Automation',
    description: 'We provide custom software for workflow automation, resulting in improved...',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://workflowautomation.com',
  },
  {
    title: 'Custom Software for Workflow Automation',
    description: 'We provide custom software for workflow automation, resulting in improved...',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://workflowautomation.com',
  },
  {
    title: 'Custom Software for Workflow Automation',
    description: 'We provide custom software for workflow automation, resulting in improved...',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://workflowautomation.com',
  },
  {
    title: 'Custom Software for Workflow Automation',
    description: 'We provide custom software for workflow automation, resulting in improved...',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://workflowautomation.com',
  },
  {
    title: 'Custom Software for Workflow Automation',
    description: 'We provide custom software for workflow automation, resulting in improved...',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://workflowautomation.com',
  },
  {
    title: 'Custom Software for Workflow Automation',
    description: 'We provide custom software for workflow automation, resulting in improved...',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://workflowautomation.com',
  },
]
const Ourworks=()=>{
  return(
    <>
    <section className="relative w-full h-[242px] flex items-center justify-center text-center">
<Image   
src="/image.png"
alt="background image brother"
layout="fill"
objectfit="cover"
quality={100}
 className=" z-0"
/>

<div className="absolute inset-0 bg-[#262626]/60  border-[5px] border-[#333333] z-10"></div>

<div className="relative z-20 px-[70px] text-white w-full max-w-[4350px]" >
  <h2 className="text-4xl font-bold mb-[24.86px] ">
Our Works 
  </h2>
  <p className="text-lg">
    Discover a portfolio of visually stunning and strategically crafted
    digital projects that showcase our creativity and expertise.
  </p>
</div>
    </section>
    {/* second section  */}
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div
        className="max-w-[1596px] mx-auto border border-[#262626] p-6"
        style={{ paddingTop: '120px', gap: '50px' }}
      >
        <h1 className="text-2xl font-bold mb-4">At SquareUp</h1>
        <p className="mb-6">We have the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success...</p>
        <p className="mb-6">Here are ten examples of notable works:</p>
        <div className="grid grid-cols-2 gap-50">
          {projects.map((project, index) => (
            <div key={index} className="mb-50">
              <Image width={200} height={200} src={project.image} alt={project.title} className="w-full h-auto mb-2" />
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm">{project.description}</p>
              <a href={project.link} className="text-blue-400 underline">Visit Site</a>
            </div>
          ))}
        </div>
      </div>
    </div>
          {/* third  */}
 <section className="relative w-full bg-black text-white py-20 md:py-32 overflow-hidden">
        {/* Background Pattern/Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-lime-400 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2L2,7L12,12L22,7L12,2M2,17L12,22L22,17L12,12L2,17Z"/>
              </svg>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 leading-tight">
            Let us Bring your Ideas to Life in the Digital World.
          </h2>
          
          {/* Description Text */}
          <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-12 max-w-3xl mx-auto">
            No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.
          </p>

          {/* CTA Button */}
          <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 md:px-12 py-3 md:py-4 rounded-lg text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Start Project
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-lime-400 rounded-full opacity-60"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-lime-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-10 left-20 w-1.5 h-1.5 bg-lime-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-lime-400 rounded-full opacity-30"></div>
  </section>





    </>
    

  )
}
export default Ourworks