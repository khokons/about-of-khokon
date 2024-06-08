import { useState } from "react";
import '../Navbar/Tesr.css';
import { Link } from "react-router-dom";

const Test = () => {
    const [isMobile, setMobile] = useState(false);
    return (
        <nav className="navbar">
            <h3 className="logo">Logo</h3>
            <ul className={isMobile ? 'nav-links-mob' : ' nav-links'} onClick={()=> setMobile(false)}>
                <Link className="common"><li>Home</li></Link>
                <Link className="common"><li>Home</li></Link>
                <Link className="common"><li>Home</li></Link>
                <Link className="common"><li>Home</li></Link>
            </ul>
            <button className="mob-menu-icon" onClick={() => setMobile(!isMobile)}>
                {isMobile ? <h1>X</h1> : <h1>=</h1>}
            </button>
        </nav>
    );
};

export default Test;