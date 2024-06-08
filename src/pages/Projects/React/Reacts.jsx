import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa6';


const Reacts = ({ name, image, status, description, tags, github_link, live_link }) => {
    return (
   
         <div className="text-white p-12 m-4 bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
           <div className='h-[200px] mx-auto'>
           <img className="h-full w-full rounded-lg" src={image} alt={name} />
           </div>
            <div className="mt-3">
                <p className="text-green-500 text-sm mb-1">{status? status : ''}</p>
                <h3 className="text-xl font-semibold mb-1">{name}</h3>
               <p className="mb-3 text-orange-200">{description}</p>
         
                <div className="flex justify-between my-8">
                    {tags.map((tag, index) => (
                        <span key={index} className="uppercase text-[#C68B59] py-1 px-2 rounded bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">{tag}</span>
                    ))}
                </div>
                <div className="flex justify-between">
                    <a href={github_link} target='blank' className="text-white h-10 w-10 rounded-full flex items-center justify-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)] hover:transition transform hover:-translate-y-1">
                        <FaGithub size={24} />
                    </a>

                    <a href={live_link} target='blank' className="text-white h-10 w-10 rounded-full flex items-center justify-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)] hover:transition transform hover:-translate-y-1">
                        <FaGlobe size={24} />
                    </a>
                </div>
            </div>
        </div>
       
    );
};

export default Reacts;
