import { FaHtml5 } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

const Services = () => {
    return (
        <section className="text-white py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-center uppercase text-xl text-[#C68B59]">THINGS I LOVE TO DO</h2>
                    <h1 className="uppercase text-2xl text-center my-2 font-bold">Services</h1>
                </div>
                <div className="text-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    <div className="text-center p-6 rounded-lg bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                        <div className="text-4xl flex justify-center items-center mb-4 h-28 w-28 rounded-[50%] mx-auto text-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                        <FaHtml5 className="text-[#C68B59] "></FaHtml5>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Design to HTML</h3>
                        <p className="text-orange-200">I can convert any kinds of design to HTML/Tailwind. Which will be fully responsive, pixel perfect, W3C Validated code with themeforest standard.</p>
                    </div>
                    <div className="text-center p-6 rounded-lg bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                        <div className="text-4xl flex justify-center items-center mb-4 h-28 w-28 rounded-[50%] mx-auto text-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                        <FaReact className="text-[#C68B59] "></FaReact>
                        </div>
                        <h3 className="text-xl font-bold mb-2">React JS</h3>
                        <p className="text-orange-200">My favourite JS library is React. I can convert any design to React. Moreover, I'm currenty trying to do all frontend stuff with React. It's really fun.</p>
                    </div>
                    <div className="text-center p-6 rounded-lg bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                        <div className="text-4xl flex justify-center items-center mb-4 h-28 w-28 rounded-[50%] mx-auto text-center bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
                        <FaLaptopCode className="text-[#C68B59]"></FaLaptopCode>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Problem Solving</h3>
                        <p className="text-orange-200">I love to solve programming problem. Usually I solve problem with javaScript. I've solved 50+ programming problem in various online judge.</p>
                    </div>
                    
              
              

                </div>
            </div>
        </section>
    );
};

export default Services;
