import { FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center px-4 py-8 text-base-content">
      <aside>
        <p className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-2 text-xl sm:text-2xl">
          <span>Made with 💖 and</span>
          <FaReact className="inline-block mx-1 text-[#C68B59]" />
          <span>by</span>
          <a href="" className="text-[#C68B59]">
            KHOKON
          </a>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
