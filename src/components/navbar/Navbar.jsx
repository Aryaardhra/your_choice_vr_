import "../navbar/navbar.css";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";
import menu_icon from "../../assets/img/menu-icon.png"

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
      window.addEventListener("scroll", ()=> {
        window.scrollY > 510 ? setSticky(true) : setSticky(false);
      })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
   mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
   <nav className={`container ${sticky ? "dark_nav" : ""}`}>
    <h2 className="logo">YOUR CHOICE</h2>
      <ul className={mobileMenu ? "" : "hide_mobile_menu" }>
      <li><Link to="carousel" smooth={true} offset={0} duration={500}>Home</Link></li>
      <li><Link to="programs" smooth={true} offset={-260} duration={500}>Program</Link></li>
      <li><Link to="about" smooth={true} offset={-150} duration={500}>About us</Link></li>
      <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
      <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
      <li><Link to="contact" smooth={true} offset={-240} duration={500} className="btn">Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className="menu_icon" onClick={toggleMenu} />
   </nav>
  )
}

export default Navbar;