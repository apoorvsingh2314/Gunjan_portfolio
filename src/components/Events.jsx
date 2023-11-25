import { useState } from "react"
import Event1 from '../assets/Event1.png'
import Event2 from '../assets/Event2.png'
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { FaCircle } from "react-icons/fa";




export default function Events() {


 const [baseIndex, setBaseIndex] = useState(1);
 const [lastIndex, setLastIndex] = useState(3);

 function increase(){
  setBaseIndex(baseIndex + 1)
  setLastIndex(lastIndex + 1)
 }

 function decrease(){
  setBaseIndex(baseIndex - 1)
  setLastIndex(lastIndex - 1)
 }

 function empty(){
  console.log("hello")
 }

 function setIndex1(){
  setBaseIndex(1);
  setLastIndex(3)
 }
 function setIndex2(){
  setBaseIndex(3);
  setLastIndex(5)
 }
 function setIndex3(){
  setBaseIndex(4);
  setLastIndex(6)
 }
  const data = [
    {
      index : 1,
      name:"Event name",
      about:"Lorem ipsum dolor sit amet consectetur. Quisque id morbi facilisis nisl dui. Justo velit pretium ornare egestas. Lorem ipsum dolor sit amet consectetur.",
      link:"",
      img:Event1
      // see:active
    },
    {
      index : 2,
      name:"Event name",
      about:"Lorem ipsum dolor sit amet consectetur. Quisque id morbi facilisis nisl dui. Justo velit pretium ornare egestas. Lorem ipsum dolor sit amet consectetur.",
      link:"",
      img:Event2
      // see:active,
    },
    {
      index : 3,
      name:"Event name",
      about:"Lorem ipsum dolor sit amet consectetur. Quisque id morbi facilisis nisl dui. Justo velit pretium ornare egestas. Lorem ipsum dolor sit amet consectetur.",
      link:"",
      img:Event1
      // see:active,
    },
    {
      index : 4,
      name:"Event name",
      about:"Lorem ipsum dolor sit amet consectetur. Quisque id morbi facilisis nisl dui. Justo velit pretium ornare egestas. Lorem ipsum dolor sit amet consectetur.",
      link:"",
      img:Event2
      // see:active,
    },
    {
      index : 5,
      name:"Event name",
      about:"Lorem ipsum dolor sit amet consectetur. Quisque id morbi facilisis nisl dui. Justo velit pretium ornare egestas. Lorem ipsum dolor sit amet consectetur.",
      link:"",
      img:Event1
      // see:active,
    },
    {
      index : 6,
      name:"Event name",
      about:"Lorem ipsum dolor sit amet consectetur. Quisque id morbi facilisis nisl dui. Justo velit pretium ornare egestas. Lorem ipsum dolor sit amet consectetur.",
      link:"",
      img:Event1
      // see:active,
    },
  ]

  const element = data.map((item)=>{
    if(item.index <= lastIndex && item.index >= baseIndex ){
      return(
      <div key={item.index} className={`col-span-3 ${item.index == baseIndex + 1? 'shadow-2xl rounded-b-xl' :" "}` }>
        <img src={item.img} alt="" className="w-full"/>
        <div className="my-4  ml-2">
        <h3 className="font-bold my-2">
        {item.name + " "}
        {item.index}
        </h3>
        <p className="text-[#595959] font-normal mb-2">{item.about}</p>
        <a href="#" className="py-2 font-bold text-base hover:text-black/80 flex gap-2">View Event <HiMiniArrowUpRight color="#DA4040" size={20} className=""/></a>
        </div>
        
      </div>
    )
  }
  })

  return (
    <div className="px-[100px] mb-[50px]">
      <div className="flex mb-[50px] px-[100px]">
        <h1 className="text-[45px] font-mistral">Events</h1>
        <p className="ml-auto pt-4 italic font-arial">Mail me to enquire for an event: <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRrlzpFNsHGFRpGTMZZHRzprQfnSdQxVxRtPRWVTTrgdRGQGJlsvRqcJClcpdfJdDNPdhFl" target="#" className="text-base text-[#DA4040] hover:text-[#ed2d2d9c]">gunjancreates871@gmail.com</a></p>
      </div>
      <div className="grid grid-cols-11 gap-5 overflow-hidden pb-12">
        <button onClick={lastIndex > 3 ? decrease : empty} className={`h-fit mt-auto mb-auto ml-auto ${ baseIndex > 1 ? `hover:-translate-x-3  duration-300`: ``}`}><HiArrowLongLeft size={50} color={baseIndex < 2 ? "#C4C4C4" : "black" }/>

</button>
        
        { element }
        <button onClick={baseIndex < 4 ? increase : empty } className={`h-fit mt-auto mb-auto ${ lastIndex < data.length ?"hover:translate-x-3 duration-300": " "}`}>
          <HiArrowLongRight size={50} color={lastIndex == 6 ? "#C4C4C4" : "black" }/>

</button>
      </div>
      <div className="w-full flex">
        <div className="ml-auto mr-auto">
      <button className="mx-1" onClick={setIndex1}><FaCircle fill={baseIndex < 3 ? "#DA4040" : "#D9D9D9"} size={10}/></button>
      <button className="mx-1" onClick={setIndex2}><FaCircle fill={baseIndex == 3 ? "#DA4040" : "#D9D9D9"} size={10}/></button>
      <button className="mx-1" onClick={setIndex3}><FaCircle fill={baseIndex > 3 ? "#DA4040" : "#D9D9D9"} size={10}/></button>
        </div>
      </div>
    </div>
  )
}
