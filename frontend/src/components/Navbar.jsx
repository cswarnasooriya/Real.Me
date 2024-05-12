import { useEffect, useState } from "react"
import logo_1 from '../assets/logo_1.png'
//import link from react scroll
import {Link} from 'react-scroll';
import { IoMdMenu } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";
import '../App.css';



const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  
//set toggle Menu
  const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY > 100){
        setIsSticky(true);
      }
      else{
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () =>{
      window.addEventListener('scroll', handleScroll);
    }
  });

//navItem array
  const navItems = [
    {link:"Home", path:"home"},
    {link:"Service", path:"service"},
    {link:"About", path:"about"},
    {link:"Product", path:"product"},
    {link:"Testimonial", path:"testimonial"},
    {link:"FAQ", path:"faq"},
  ];


  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav className={`py-4 lg:px-14 px-4 ${isSticky ?"top-0 sticky left-0 right-0 border-b bg-white duration-300" : "" }`}>
        <div className="flex justify-between items-center text-base gap-8">

            <a href="" className="text-2xl font-semibold flex items-center space-x-1 mt-2 "><img src={logo_1} alt="logo_1"  className="w-10 inline-block items-center"/><span className="text-[#263238]">Real.Me</span></a>


            {/* navItems for large devices */}

            <ul className="hidden md:flex space-x-12">

                {
                    navItems.map(({link,path}) => <Link to={path} smooth={true} spy={true} offset={-100} key={link} className="block text-base text-gray900 hover:text-brandPrimary first:font-medium cursor-pointer">{link}</Link>)
                }

            </ul>


            {/* button for large deveices */}

            <div className="space-x-12 hidden lg:flex items-center">
            <a href="/" className="hidden lg:flex items-center text-brandPrimary hover:text-gray900 ">Login</a>
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray">Sign Up</button>
            </div>



            {/* menu buttons for only mobile devices */}

            <div className="md:hidden">
                <button onClick={toggleMenu} className="focus:outline-none focus:text-gray-500 text-neutralDGray">

                    {isMenuOpen ? <IoMdCloseCircleOutline className="h-6 w-6"/> : <IoMdMenu className="h-6 w-6 "/>}

                </button>
            </div>

        </div>

        {/* nav items for mobile devices */}

        <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 left-0 right-0 ":"hidden"}`}>
            {
                navItems.map(({link,path}) => <Link to={path} smooth={true} spy={true} offset={-100} key={link} className="block text-base text-gray900 hover:text-black first:font-extrabold cursor-pointer font-semibold">{link}</Link>)
            }
        </div>


        

      </nav>
    </header>
  )
}

export default Navbar
