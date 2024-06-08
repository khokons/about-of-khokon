import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section className="flex gap-6 flex-col-reverse lg:flex-row items-center justify-between p-6 md:p-8 lg:p-12 text-white">
        <div className="w-full lg:w-1/2">
          <h2 className="text-[#C68B59] text-lg mb-2 uppercase">A Little About Me</h2>
          <h3 className="text-3xl md:text-4xl mb-4">About</h3>
          <p className="text-gray-200 text-base md:text-lg mb-6">
            Hi, I'm Mahmad-ul Hasan Khokon, a passionate self-taught Frontend web developer. I tend to make use of modern web technologies to build websites that look great, feel fantastic, and function correctly. My specialty is based on Javascript. I love to do things by using Javascript. My favorite js library is ReactJS & NodeJs & NodeJS. So, I'm currently doing all kinds of frontend stuff using ReactJS. Moreover, I've Good knowledge of MongoDB like crud operation & photoshop pixel per design.
            <br />
            <br />
            I'm graduate Diploma in Computer Science & Technology. where I achieved a CGPA of 3.75, I have honed my technical skills and developed a keen eye for detail. So, I'm available for any kind of Internships and job opportunities in this field.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://drive.google.com/file/d/1IqvFGFHhXjGZy5d1eSuMwaN9A8Gz3jEG/view?usp=sharing"
              className="text-center text-[#C68B59] uppercase py-3 px-4 md:py-4 md:px-6 text-base md:text-xl border-none rounded-[5px] inline-block cursor-pointer shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)] hover:transition transform hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Resume
            </a>
            <Link to='/contact'
              href="#projects"
              className="text-center text-white uppercase py-3 px-4 md:py-4 md:px-6 text-base md:text-xl border-none rounded-[5px] inline-block cursor-pointer shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)] hover:transition transform hover:-translate-y-1"
            >
              Connect me
            </Link>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8 w-full lg:w-1/2">
          <img className="rounded-lg" src="https://i.postimg.cc/KztySw67/IMG-3301.jpg" alt="Profile" />
        </div>
      </section>

      <section className="p-6 md:p-8 lg:p-12">
        <div className="py-6 md:py-8 lg:py-12">
          <h2 className="text-2xl md:text-4xl mb-8 md:mb-12 text-orange-200 font-bold">Education</h2>

          {/* Diploma */}
          <div className="flex justify-start mb-8 md:mb-12">
            <h3 className="w-32 md:w-40 text-sm md:text-xl md:font-bold">Diploma :</h3>
            <div className="flex justify-start flex-wrap gap-4 md:gap-6 lg:gap-12">
              <div className="text-sm md:text-lg py-1 px-3 md:py-1 md:px-4 rounded-[5px] flex justify-end items-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                Computer Science & Technology at Moulvibazar Polytechnic Institute
              </div>
            </div>
          </div>

          {/* School */}
          <div className="flex justify-start mb-8 md:mb-12">
            <h3 className="w-32 md:w-40 text-sm md:text-xl md:font-bold">School :</h3>
            <div className="flex justify-start flex-wrap gap-4 md:gap-6 lg:gap-12">
              <div className="text-sm md:text-lg py-1 px-3 md:py-1 md:px-4 rounded-[5px] flex justify-end items-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                Science at Kallanpur High School, Bachamara, Daulatpur, Manikganj
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl md:text-4xl mb-8 md:mb-12 text-orange-200 font-bold">Skills</h2>

          {/* Language */}
          <div className="flex justify-start mb-8 md:mb-12">
            <h3 className="w-32 md:w-40 text-sm md:text-xl md:font-bold">Language :</h3>
            <div className="flex justify-start flex-wrap gap-4 md:gap-6">
              <div className="text-sm md:text-lg py-1 px-3 md:py-1 md:px-4 rounded-[5px] flex justify-end items-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                Javascript
              </div>
              <div className="text-sm md:text-lg py-1 px-3 md:py-1 md:px-4 rounded-[5px] flex justify-end items-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                Java
              </div>
            </div>
          </div>

          {/* Web Tech */}
          <div className="flex justify-start mb-8 md:mb-12">
            <h3 className="w-32 md:w-40 text-sm md:text-xl md:font-bold">Web Tech :</h3>
            <div className="flex justify-start flex-wrap gap-4 md:gap-6">
              <div className="text-sm md:text-lg py-1 px-3 md:py-1 md:px-4 rounded-[5px] flex justify-end items-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                SASS
              </div>
              <div className="text-sm md:text-lg py-1 px-3 md:py-1 md:px-4 rounded-[5px] flex justify-end items-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                Tailwind
              </div>
              <div className="text-sm md:text-lg py-1 px-3 md:py-1 md:px-4 rounded-[5px] flex justify-end items-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                jQuery
              </div>
              <div className="text-sm md:text-lg py-1 px-3 md:py-1 md:px-4 rounded-[5px] flex justify-end items-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                ReactJS
              </div>
              <div className="text-sm md:text-lg py-1 px-3 md:py-1 md:px-4 rounded-[5px] flex justify-end items-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                NextJs
              </div>
              <div className="text-sm md:text-lg py-1 px-3 md:py-1 md:px-4 rounded-[5px] flex justify-end items-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                Styled Components
              </div>
              <div className="text-sm md:text-lg py-1 px-3 md:py-1 md:px-4 rounded-[5px] flex justify-end items-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                Elementor
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="flex justify-start mb-8 md:mb-12">
            <h3 className="w-32 md:w-40 text-sm md:text-xl md:font-bold">Tools :</h3>
            <div className="flex justify-start flex-wrap gap-4 md:gap-6">
              <div className="text-sm md:text-lg py-1 px-3 md:py-1 md:px-4 rounded-[5px] flex justify-end items-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                Git/Github
              </div>
              <div className="text-sm md:text-lg py-1 px-3 md:py-1 md:px-4 rounded-[5px] flex justify-end items-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                Photoshop
              </div>
              <div className="text-sm md:text-lg py-1 px-3 md:py-1 md:px-4 rounded-[5px] flex justify-end items-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                Figma
              </div>
            </div>
          </div>

          {/* Soft skill */}
          <div className="flex justify-start mb-8 md:mb-12">
            <h3 className="w-32 md:w-40 text-sm md:text-xl md:font-bold">Soft skill :</h3>
            <div className="flex justify-start flex-wrap gap-4 md:gap-6">
              <div className="text-sm md:text-lg py-1 px-3 md:py-1 md:px-4 rounded-[5px] flex justify-end items-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                Time Management
              </div>
              <div className="text-sm md:text-lg py-1 px-3 md:py-1 md:px-4 rounded-[5px] flex justify-end items-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                Decision Making
              </div>
              <div className="text-sm md:text-lg py-1 px-3 md:py-1 md:px-4 rounded-[5px] flex justify-end items-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                Stress Management
              </div>
              <div className="text-sm md:text-lg py-1 px-3 md:py-1 md:px-4 rounded-[5px] flex justify-end items-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                Adaptability
              </div>
              <div className="text-sm md:text-lg py-1 px-3 md:py-1 md:px-4 rounded-[5px] flex justify-end items-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                Effective professional communication skills both in English and Bengali.
              </div>
              <div className="text-sm md:text-lg py-1 px-3 md:py-1 md:px-4 rounded-[5px] flex justify-end items-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                Self learner
              </div>
            </div>
          </div>

          {/* CO-CURRICULUM ACTIVITIES */}
          <div className="flex justify-start mb-8 md:mb-12">
            <h3 className="w-32 md:w-40 text-sm md:text-xl md:font-bold">Co-Curriculum :</h3>
            <div className="flex justify-start flex-wrap gap-4 md:gap-6">
              <div className="text-sm md:text-lg py-1 px-3 md:py-1 md:px-4 rounded-[5px] flex justify-end items-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                I can smile any hard situation
              </div>
              <div className="text-sm md:text-lg py-1 px-3 md:py-1 md:px-4 rounded-[5px] flex justify-end items-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                Better Speech
              </div>
              <div className="text-sm md:text-lg py-1 px-3 md:py-1 md:px-4 rounded-[5px] flex justify-end items-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                Presentation
              </div>
              <div className="text-sm md:text-lg py-1 px-3 md:py-1 md:px-4 rounded-[5px] flex justify-end items-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                Organizer
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-6 md:p-8 lg:p-12 text-white">
        <h4 className="text-2xl md:text-4xl mb-8 md:mb-12 text-orange-200 md:font-bold text-center uppercase">Declaration</h4>
        <div className="p-4 md:p-6 flex justify-center items-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
          <p className="text-orange-200">
            I hereby declare that all the information given above is true and correct to the best of my knowledge. All the information shared in the resume is correct, and I take full responsibility for its correctness. I solemnly declare that the information in this resume is true to the best of my knowledge and belief.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
