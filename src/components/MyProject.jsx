import { Link } from 'react-router-dom'
import Design_project from '../assets/Design_project.png'
import { FaArrowRightLong } from 'react-icons/fa6'
import project1 from '../assets/project/project1.png'
export default function MyProject() {

  const data  = [
    {
      title:"CreateAR a portfolio website for AR Creaters",
        button1:"UI UX Design",
        button2:"Figma",
        button3:"Website Design",
      about:"The primary goal is to establish a platform that connects creators specializing in AR (Augmented Reality) filters with businesses seeking innovative and engaging filters for their brand.",
      img:project1
    },
    {
      title:"Dating application",
        button1:"UI UX Design",
        button2:"Figma",
        button3:"Website Design",
      about:"The primary goal is to establish a platform that connects creators specializing in AR (Augmented Reality) filters with businesses seeking innovative and engaging filters for their brand.",
      img:project1
    }
  ]

  const element = data.map((item) => {
    return (
      <div key={item.title} className='grid grid-cols-2 rounded-3xl hover:shadow-2xl shadow-lg border mb-[24px] '>
        <div className='pl-[100px] pr-[50px] py-[50px]'>
        <h1 className='font-bold text-3xl mb-[28px] font-arial'>{item.title}</h1>
        <span className='px-3 py-2 bg-[#EDEDED] rounded-lg mr-3 text-base'>{item.button1}</span>
        <span className='px-3 py-2 bg-[#EDEDED] rounded-lg mr-3 text-base'>{item.button2}</span>
        <span className='px-3 py-2 bg-[#EDEDED] rounded-lg mr-3 text-base'>{item.button3}</span>
    
        <p className='mt-[20px] text-base font-arial text-[#595959]'>{item.about}</p>
        <a href="" className='flex gap-3 text-[#da4040] hover:text-[#ed2d2d9c] hover:gap-5 hover:duration-300 duration-500 mt-[10px] w-fit italic'>view complete design <FaArrowRightLong size={20} className='mt-[2px]'/></a>
        </div>
        <div className=''>
        <img src={item.img} alt="" className='rounded-3xl'/>
        </div>
        </div>
    )
  })

  return (
    <div className="px-[200px] mb-[100px] font-arial">
        <div className='flex mb-[50px]'>
            <h3 className="text-[45px] font-mistral">My design projects</h3>
            <img src={Design_project} alt="" className='rotate-[28] -ml-3 mt-0 h-[40px] w-[60px]'/>
            <Link to="/projects" className='text-[#DA4040] flex gap-3 ml-auto mt-5 italic hover:text-[#ed2d2d9c]'> view all <FaArrowRightLong size={25} className=""/></Link>
        </div>
        <div className=''>
        {element}
        </div>
    </div>
  )
}
