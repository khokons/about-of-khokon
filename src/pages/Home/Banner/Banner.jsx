import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="text-white py-12">
      <div className="px-6 ">
        <div className="w-full min-h-full flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h4 className="text-xl font-bold">Hi, I'm</h4>
            <h1 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#C68B59] capitalize">Mahmadul Hasan Khokon</h1>
            <h3 className="text-xl sm:text-2xl lg:text-3xl text-gray-500 my-2">
              &lt;/FrontendWebDeveloper&gt;
            </h3>
            <p className="text-orange-200 text-base sm:text-lg lg:text-xl max-w-md my-4 mx-auto lg:mx-0">
              A passionate self-taught Frontend web developer. I tend to make use
              of modern web technologies to build websites that look great, feel
              fantastic, and function correctly.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start mt-10">
              <div className="mr-8 mb-4 lg:mb-0">
                <a
                  href="https://drive.google.com/file/d/1IqvFGFHhXjGZy5d1eSuMwaN9A8Gz3jEG/view?usp=sharing"
                  className="text-center text-[#C68B59] uppercase py-4 px-4 text-xl border-none rounded-[5px] inline-block cursor-pointer shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)] hover:transition transform hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Resume
                </a>
              </div>

              <div>
                <Link to='/project'
                  href="#projects"
                  className="text-center text-white uppercase py-4 px-4 text-xl border-none rounded-[5px] inline-block cursor-pointer shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)] hover:transition transform hover:-translate-y-1"
                >
                  Projects
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right side */}
          <div className="bg-[#1B1F23] w-full lg:w-1/2 h-[29rem] mt-12 lg:mt-32 relative bottom-0 rounded-[10px] z-10 text-center shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
            <div className="w-full mx-auto absolute bottom-0">
              <img className="max-w-full mx-auto" src="https://i.postimg.cc/250H9fq3/khokon-removebg-preview.png" alt="Mahmadul Hasan Khokon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
