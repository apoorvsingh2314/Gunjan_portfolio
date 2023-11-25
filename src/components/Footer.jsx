import Calendar from '../assets/Calendar.png'
import { FaSquareInstagram } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";


export default function Footer() {
  return (
    
    <div className='w-full'> 
    <div className="px-[200px] border-b-2">
        <div className="flex flex-col justify-center items-center">
            <p className="text-[40px] font-bold leading-[80px]">Have an awesome project idea?</p>
            <p className="text-[72px] font-normal text-[#DA4040] font-mistral">Let&apos;s Discuss</p>
            <div className="flex w-[720px] mt-[50px]">
                <img src={Calendar} alt="" className='w-[60px] h-[55px] mr-[12px]'/>
                <p className="text-[#595959] justify-center items-center  leading-[25px]">I&apos;m happy to offer you a 15-30 mins free chat at a time that <br /> works for you, don&apos;t hesitate to reach out and let&apos;s talk about it!</p>
                <button className=" px-[30px] bg-[#DA4040] rounded-[60px] text-white text-[20px] ml-auto">Book a meet</button>
            </div>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRrlzpFNsHGFRpGTMZZHRzprQfnSdQxVxRtPRWVTTrgdRGQGJlsvRqcJClcpdfJdDNPdhFl" className="italic mt-[50px] mb-[100px] text-[20px]">Or mail at:  gunjancreates871@gmail.com</a>
        </div>
    </div>
    <div className='flex justify-center items-center h-[60px] px-[200px]'>
    <p className='text-sm'>@ 2023 GunjanCreates. All rights Reserved</p>
    <div className='flex ml-auto gap-7'>
        <a href="https://www.instagram.com/gunjancreate/ "><FaSquareInstagram size={22} /></a>
        <a href="https://www.linkedin.com/in/gunjanpaneri871/ "><ImLinkedin size={20}/></a>
    </div>


    </div>
 </div>
  )
}
