import { Link } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6";
import Line from "../assets/Line.png"
import Home_image from "../assets/Home_image.png"
// import Gunjan from "../assets/Gunjan.png"
// import Arrow from "../assets/Arrow.png"
// import Clients from "../assets/Clients.png"
// import Client_frame from "../assets/Client_frame.png"
// import { BsEmojiSmile } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { BiLogoUpwork } from "react-icons/bi";
import { TbBrandFiverr } from "react-icons/tb";
import Design from "./Design";
import Tools from "./Tools";
import MyProject from "./MyProject";
import Events from "./Events";
import Reviews from './Reviews'
import Footer from "./Footer";
// import { FaRegFaceSmileBeam } from "react-icons/fa6";





function Home() {

  return (
    <div>

    <div className="mx-[200px] flex mt-[100px] gap-[100px]">
      <div className="w-1/2">
        <h3 className="text-[45px] font-mistral">Hey there!</h3>
        <p className="text-[#595959] text-base self-stretch tracking-[.64px] leading-[25px] font-normal ">
        I am <span className="text-[#DA4040] font-bold ">Gunjan Paneri </span>and I have been working as a  <span className="text-[#DA4040]">UI UX (Visual, Web, and App Designer)</span> and Graphic Designer for the past 4 years. I have designed websites, landing pages, applications, posters, brochures, presentations, packaging designs, banners, logos, pamphlets, business cards, menus, calendars, thumbnails, stickers, catalogs, and many more related to Graphics and UI UX design. I have worked with <span className="text-[#DA4040]">40+ happy clients over 70+ projects.</span>
        </p>
        <p className="text-[#595959] text-base self-stretch tracking-[.64px] leading-[25px] font-normal mt-[12px] ">As a designer, I put much value on trustful, transparent, and long-term relationships. Your privacy, terms, and deadlines will always be respected. I offer creative and practical suggestions to make something amazing and useful.</p>
        <p className="text-[#595959] text-base self-stretch tracking-[.64px] leading-[25px] font-normal mt-[12px] mb-[12px]">
         Don`t hesitate to reach out and let`s talk about it!
        </p>
        <Link to="https://calendly.com/gunjancreates" target="#" className="text-[#DA4040] text-base self-stretch tracking-[.64px] leading-[25px] font-normal italic flex w-fit gap-4">Book a 15 mins free meet  <FaArrowRightLong size={25} className="hover:translate-x-1 "/> 
</Link>

      </div>
      <div className="w-1/2 relative">
      {/* <div className="ml-[350px] -mt-2 ">
      <h3 className="font-mistral text-[24px] text-[#DA4040] mr-8">GunjanPaneri</h3>
      <img src={Arrow} alt="" className="h-10 w-14"/>
      </div>
      <img src={Gunjan} alt="" className="h-[350px] -mt-3 ml-7 -z-10 relative"/>
      <div className="bg-white w-[281px] h-[57px] flex -mt-6 ml-16">
        <div>
        <img src={Clients} alt="" className="w-[84px] h-[32px] ml-24 rounded-t-xl -mt-8"/>
        <FaRegFaceSmileBeam size={50} color="#595959" className="mt-2 ml-1"/>
        </div>
        <div className="-ml-8 ">
        <h4 className="font-bold text-sm mt-1">40+ Happy Clients</h4>
        <p className="text-[#595959] font-normal text-xs leading-4 mt-1"> worked with more than <span className="text-[#DA4040]">40+</span> clients on <span className="text-[#DA4040]">70+</span> projects around the world!</p>
        </div>
        <img src={Client_frame} alt="" className="w-[93px] h-[97px] -ml-24 absolute -bottom-20"/>
        </div>
        <div className="rotate-90 absolute top-0 text-[595959] -right-12">Follow me on: 
        </div> */}
        <img src={Home_image} alt="" />
        <img src={Line} alt="" className="h-[267px] text-[595959] absolute top-20 w-[2px] right-0"/>
        <div className="absolute -right-2 -mt-20">
          <a href="https://www.instagram.com/" target="#"><FaInstagramSquare size={20} color="#595959" className="mb-4"/></a> 
          <a href="https://www.linkedin.com" target="#"> <FaLinkedin size={20} color="#595959" className="mb-4"/></a> 
          <a href="https://www.medium.com" target="#"><FaMedium size={20} color="#595959" className="mb-4"/>  </a>
          <a href="https://www.upwork.com" target="#"><BiLogoUpwork size={20} color="#595959" className="mb-4"/> </a> 
          <a href="https://www.fiverr.com" target="#"><TbBrandFiverr size={20} color="#595959" className="mb-4"/></a>
      </div>
      </div>
    </div>
      <div className="mt-48">
        <Design/>
      </div>
      <div className="mt-48">
        <Tools/>
      </div>
      <div className="mt-48">
        <MyProject/>
      </div>
      <div className="mt-48">
        <Events/>
      </div>
      <div className="mt-48">
        <Reviews/>
      </div>
      <div className="mt-48">
        <Footer/>
      </div>
    </div>
  )
}

export default Home