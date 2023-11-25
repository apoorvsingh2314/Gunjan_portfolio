import { FaArrowRightLong } from 'react-icons/fa6'
import project1 from '../assets/project/project1.png'

export default function Projects() {

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
    },
    {
      title:"PACT Foundation",
        button1:"UI UX Design",
        button2:"Figma",
        button3:"Website Design",
      about:"The primary goal is to facilitate access to education for underprivileged children who may face barriers to attending school, regardless of their socio-economic background. They aim to provide a platform that connects donors and sponsors with these children, enabling them to go to school.",
      img:project1
    },
    {
      title:"Pitch Our Way",
        button1:"UI UX Design",
        button2:"Figma",
        button3:"Website Design",
      about:"The aim is to create a platform that attracts entrepreneurs looking to raise funds for their startups and provide them with a service that assists in creating compelling pitch decks and pitching them to potential investors.",
      img:project1
    },
    {
      title:"CaaryaMe",
        button1:"UI UX Design",
        button2:"Figma",
        button3:"Website Design",
      about:"The primary goal is to establish a platform that serves as a bridge between colleges and industries, enabling students to gain valuable industrial experience with the latest technologies. This project aimed to revolutionize the way students connect with industries for valuable industrial experience.",
      img:project1
    },
  ]

  const element = data.map((item) => {
    return (
      <div key={item.title} className='grid grid-cols-2 rounded-3xl hover:shadow-2xl hover:duration-200 duration-200 shadow-lg border mb-[24px]'>
        <div className='pl-[100px] pr-[50px] py-[50px]'>
        <h1 className='font-bold text-3xl mb-[28px] font-arial'>{item.title}</h1>
        <span className='px-3 py-2 bg-[#EDEDED] rounded-lg mr-3 text-base'>{item.button1}</span>
        <span className='px-3 py-2 bg-[#EDEDED] rounded-lg mr-3 text-base'>{item.button2}</span>
        <span className='px-3 py-2 bg-[#EDEDED] rounded-lg mr-3 text-base'>{item.button3}</span>
    
        <p className='mt-[20px] text-base font-arial text-[#595959]'>{item.about}</p>
        <a href="" className='flex gap-3 text-[#da4040] hover:text-[#ed2d2d9c] hover:gap-5 hover:duration-300 duration-500 mt-[10px] w-fit italic'>view complete design <FaArrowRightLong size={20} className='mt-[3px]'/></a>
        </div>
        <div className=''>
        <img src={item.img} alt="" className='rounded-3xl'/>
        </div>
        </div>
    )
  })
  return (
    <div className="px-[200px] pb-[100px]">
      <h1 className='font-mistral text-[45px] my-[50px]'>My design projects</h1>
    {element}
      </div>
  )
}
