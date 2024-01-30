import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo1.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '75px' }} />
      </div>

      {/* Menu */}
      <ul className='hidden md:flex space-x-4'>
        <MenuItem to='home'>Home</MenuItem>
        <MenuItem to='about'>About</MenuItem>
        <MenuItem to='skills'>Skills</MenuItem>
        <MenuItem to='work'>Work</MenuItem>
        <MenuItem to='contact'>Contact</MenuItem>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile menu */}
      <ul className={nav ? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' : 'hidden'}>
        <MenuItemMobile to='home' onClick={handleClick}>Home</MenuItemMobile>
        <MenuItemMobile to='about' onClick={handleClick}>About</MenuItemMobile>
        <MenuItemMobile to='skills' onClick={handleClick}>Skills</MenuItemMobile>
        <MenuItemMobile to='work' onClick={handleClick}>Work</MenuItemMobile>
        <MenuItemMobile to='contact' onClick={handleClick}>Contact</MenuItemMobile>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 space-y-4'>
        <SocialIcon link='https://www.linkedin.com/in/shubham-pawar-4231311a4/' icon={<FaLinkedin size={30} />} text='Linkedin' />
        <SocialIcon link='https://github.com/shubhampawar4841' icon={<FaGithub size={30} />} text='Github' />
        <SocialIcon link='mailto:youremail@example.com' icon={<HiOutlineMail size={30} />} text='Email' />
        <SocialIcon link='/resume.pdf' icon={<BsFillPersonLinesFill size={30} />} text='Resume' />
      </div>
    </div>
  );
};

const MenuItem = ({ to, children }) => {
  return (
    <li>
      <Link to={to} smooth={true} duration={500}>
        {children}
      </Link>
    </li>
  );
};

const MenuItemMobile = ({ to, children, onClick }) => {
  return (
    <li className='py-6 text-4xl'>
      <Link to={to} smooth={true} duration={500} onClick={onClick}>
        {children}
      </Link>
    </li>
  );
};

const SocialIcon = ({ link, icon, text }) => {
  return (
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
      <a
        className='flex justify-between items-center w-full text-gray-300'
        href={link}
        target='_blank'
        rel='noopener noreferrer'
      >
        {text} {icon}
      </a>
    </li>
  );
};

export default Navbar;
