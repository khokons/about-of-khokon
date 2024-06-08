import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import '../Contact/Contact.css'
import { Helmet } from "react-helmet";

const Contact = () => {
  return (

    <section>
     <div className="mt-24 text-center">
     <h4 className="text-center uppercase text-xl text-[#C68B59]">Get in Touch</h4>
      <h2 className="uppercase text-2xl text-center my-2 font-bold">Contact</h2>
     </div>
      <div className='flex flex-col lg:flex-row justify-between mt-24 gap-8'>
        
        {/* Left Side */}
        <div className='w-full lg:w-2/5 h-full p-8 lg:p-16 rounded-2xl bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]'>
          <div className='h-72 lg:h-[21rem] p-8 text-center mb-12 rounded-2xl bg-[#1B1F23] shadow-[5px_5px_5px_rgba(23,26,29,0.5),-5px_-5px_5px_rgba(31,36,41,0.5)]'>
            <img className='h-full max-w-full' src="https://about-mehedi.netlify.app/static/media/contactImg.e61f87af.svg" alt="" />
          </div>

          <div className='w-full flex justify-start items-center p-4 lg:p-8 rounded-[10px] bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]'>
            <div className='min-w-[2rem] text-[1.8rem] mr-2'>
              <FaPhoneAlt />
            </div>
          
            <a className="text-xl" href="tel:01633-347597">01633-347597</a>
          </div>

          <div className='mt-12 w-full flex justify-start items-center p-4 lg:p-8 rounded-[10px] bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]'>
            <div className='min-w-[2rem] text-[1.8rem] mr-2'>
            <CiMail />
            </div>
            <a className="text-xl" href="mailto:khokon.webdev@gmail.com">khokon.webdev@gmail.com</a>
          </div>

          <div className='mt-12 w-full flex justify-start items-center p-4 lg:p-8 rounded-[10px] bg-[#1B1F23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]'>
            <div className='min-w-[2rem] text-[1.8rem] mr-2'>
            <CiLocationOn />
            </div>
            <a className="text-xl" href="https://maps.app.goo.gl/mpcjKoV6fHR6k7JT8" target="blank">Manikganj, Dhaka, Bangladesh</a>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[55%] h-full p-8 lg:p-16 rounded-[1rem] bg-[#1b1f23] shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
         <div>
         <form action="https://formspree.io/f/xvoejrol" method="POST">

            <div className="w-full mb-12">
            <label className="label">
            <span className="text-xl">Full Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="w-full text-xl p-4 lg:p-8 mt-6 outline-none border-none rounded-[10px] inputShadho" required />
            </div>

            <div className="w-full mb-12">
            <label className="label">
            <span className="text-xl">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="w-full text-xl p-4 lg:p-8 mt-6 outline-none border-none rounded-[10px] inputShadho" required />
            </div>

            <div className="w-full mb-12">
            <label className="label">
            <span className="text-xl">Message</span>
          </label>
          <textarea name="text" className="text-orange-200 w-full text-xl p-4 lg:p-8 mt-6 outline-none border-none rounded-[10px] inputShadho" placeholder="Hey there!" required></textarea>
            </div>
            <button type="submit" className="py-4 lg:py-8 px-6 lg:px-12 text-xl border-none rounded-[5px] inline-block cursor-pointer shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">Send Message</button>
         </form>
         </div>
        </div>
      </div>
    </section>

  );
};

export default Contact;
