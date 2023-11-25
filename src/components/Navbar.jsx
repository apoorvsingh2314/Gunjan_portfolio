
import { Outlet, Link } from "react-router-dom";
import Pen from '../assets/Pen.png'
import { useState } from "react";

export default function Navbar() {
    const [selected, setSelected] = useState("home");

  
    return (

   <div className="sticky top-0 z-50 bg-white w-full">

    <nav className="flex w-full">
        <ul className="flex justify-end w-full h-20 items-center gap-10  px-[200px] border-b-2 border-white-600">
          <li className="mr-auto">
            <Link to="/" className="flex text-xl"> 
                <span className="mr-1 font-bold ">Gunjan </span>
                <span className="font-normal"> Creates</span>
                     <div className="ml-2 w-5 mt-1">
                        <img src={Pen} alt="" /> 

                        </div>
                </Link>
          </li>
          <div className="font-normal text-base flex gap-8">
          <li>
            <Link to="/" className={ selected == "home" ? `text-[#DA4040] font-bold`:`text-[#595959] hover:text-[#DA4040] hover:cursor-pointer ` } onClick={()=>setSelected("home")}>Home</Link>
          </li>
          <li>
            <Link to="/projects" className={ selected == "projects" ? `text-[#DA4040] font-bold`:`text-[#595959] hover:text-[#DA4040] cursor-pointer` } onClick={()=>setSelected("projects")}>Projects</Link>
          </li>
          <li>
            <Link to="/events" className={ selected == "events" ? `text-[#DA4040] font-bold`:`text-[#595959] hover:text-[#DA4040] cursor-pointer` } onClick={()=>setSelected("events")}>Events</Link>
          </li>
          <li>
            <Link to="/reviews" className={ selected == "reviews" ? `text-[#DA4040] font-bold`:`text-[#595959] hover:text-[#DA4040] cursor-pointer` } onClick={()=>setSelected("reviews")}>Reviews</Link>
          </li>
          <li>
            <Link to="/contact" className={ selected == "contact" ? `text-[#DA4040] font-bold`:`text-[#595959] hover:text-[#DA4040] cursor-pointer` } onClick={()=>setSelected("contact")}>Contact Me</Link>
          </li>
          </div>
        </ul>
    </nav>  
      <Outlet />
      </div>
  )
}
