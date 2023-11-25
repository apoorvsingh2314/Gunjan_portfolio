import Tool1 from '../assets/Tool1.png'
import Tool2 from '../assets/Tool2.png'
import Tool3 from '../assets/Tool3.png'
import Tool4 from '../assets/Tool4.png'
import Tool5 from '../assets/Tool5.png'
import Tool6 from '../assets/Tool6.png'
import Tool7 from '../assets/Tool7.png'
import Tool8 from '../assets/Tool8.png'
import Tool9 from '../assets/Tool9.png'
import Tool10 from '../assets/Tool10.png'
import Tool11 from '../assets/Tool11.png'
import Tool12 from '../assets/Tool12.png'


export default function Tools() {
  return (
    <div className="px-[200px] mb-[100px]">
        <div className="grid grid-flow-col gap-[100px]">
            <div className="col-span-1">
                <h3 className="font-mistral text-[45px] mb-10">Tools I use</h3>
                <div className="grid grid-flow-col col-span-3 gap-4 mb-[24px]">
                <div className="col-span-1"><img src={Tool1} alt="" className='w-[70px]'/></div>
                <div className="col-span-1"><img src={Tool2} alt="" /></div>
                <div className="col-span-1"><img src={Tool3} alt="" /></div>
                </div>
                <div className="grid grid-flow-col col-span-3 gap-4 mb-[24px]">
                <div className="col-span-1"><img src={Tool4} alt="" className='w-[70px]'/></div>
                <div className="col-span-1"><img src={Tool5} alt="" /></div>
                <div className="col-span-1"><img src={Tool6} alt="" /></div>
                </div>
                <div className="grid grid-flow-col col-span-3 gap-4 mb-[24px]">
                <div className="col-span-1"><img src={Tool7} alt="" className='w-[70px]'/></div>
                <div className="col-span-1"><img src={Tool8} alt="" /></div>
                <div className="col-span-1"><img src={Tool9} alt="" /></div>
                </div>
                <div className="grid grid-flow-col col-span-3 gap-4 mb-[24px]">
                <div className="col-span-1"><img src={Tool10} alt="" className='w-[70px]'/></div>
                <div className="col-span-1"><img src={Tool11} alt="" /></div>
                <div className="col-span-1"><img src={Tool12} alt="" /></div>
                </div>
                
                
            </div>
            <div className="col-span-2">
                <h3 className="font-mistral text-[45px] mb-10">UI UX design recent experiences</h3>
                <div className='mb-3'>
                    <h3 className='font-bold'>XROS Fellowship | April 2023 - August 2023</h3>
                    <p className='text-[#595959]'>Designed setups for a 3D AR website.</p>
                </div>
               
                <div className='mb-3'>
                    <h3 className='font-bold'>Protohype | September 2022 - July 2023</h3>
                    <p className='text-[#595959]'>Worked at client site, for designing customized solutions on products created by the top brand for various international companies.</p>
                </div>
                <div className='mb-3'>
                    <h3 className='font-bold'>Reskilll | March 2022 - June 2022</h3>
                    <p className='text-[#595959]'>Worked on the social media poster designs, pamphlets, banners, brochures, presentations, websites, apps and much more using tools like Figma, Illustrator, and Canva.</p>
                </div>
                <div className='mb-3'>
                    <h3 className='font-bold'>Caarya | March 2022 - April 2022</h3>
                    <p className='text-[#595959]'>Designed and worked on the different upcoming projects of the company, also worked with professionals and got to know and learn about many UX terms and terminologies.</p>
                </div>
                <div className='mb-3'>
                    <h3 className='font-bold'>TechDirective | August 2021 - November 2021</h3>
                    <h3 className='font-bold'>Cisco thingQbator - IIT (BHU) | June 2021 - August 2021</h3>
                </div>
            </div>
        </div>
        
    </div>
  )
}
