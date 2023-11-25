import { useState } from "react"
import Punit from '../assets/Punit.png'
import Rohit from '../assets/Rohit.png'
import Ram from '../assets/Ram.png'
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";
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
      name:"Punit Jain",
      comment:'“Gunjan is an extremely creative and innovative engineer. She is a leader in all aspects. Her excellence in the field of design thinking and creativity outshines her personality. Her leadership and organizational skills have been invaluable to the company. ”',
      link:"",
      position:"Reskill Co-Founder",
      img:Punit
      // see:active
    },
    {
      index : 2,
      name:"Rohit Sardana",
      comment:'“Gunjan is a go - getter and has an amazing attitude towards the work, she is supremely talented and confident is what make her very special, she is have an amazing attitude towards her work, she will be an asset to any organization that decides to work with.”',
      link:"",
      position:" CO-Founder & CEO",
      img:Rohit,
      // see:active,
    },
    {
      index : 3,
      name:"Ramchandra Kumble",
      comment:'“Gunjan is one of the best people I have ever worked with. She is always punctual, her knowledge is vast and thorough, and no matter how complex the problem is, she will always come up with a brilliant, and cost-effective solution to it.”',
      link:"",
      position:" CO-Founder & CEO",
      img:Ram
      // see:active,
    },
    {
      index : 4,
      name:"Punit Jain",
      comment:'“Gunjan is an extremely creative and innovative engineer. She is a leader in all aspects. Her excellence in the field of design thinking and creativity outshines her personality. Her leadership and organizational skills have been invaluable to the company. ”',
      link:"",
      position:"Reskill Co-Founder",
      img:Punit
      // see:active
    },
    {
      index : 5,
      name:"Rohit Sardana",
      comment:'“Gunjan is a go - getter and has an amazing attitude towards the work, she is supremely talented and confident is what make her very special, she is have an amazing attitude towards her work, she will be an asset to any organization that decides to work with.”',
      link:"",
      position:" CO-Founder & CEO",
      img:Rohit,
      // see:active,
    },
    {
      index : 6,
      name:"Ramchandra Kumble",
      comment:'“Gunjan is one of the best people I have ever worked with. She is always punctual, her knowledge is vast and thorough, and no matter how complex the problem is, she will always come up with a brilliant, and cost-effective solution to it.”',
      link:"",
      position:" CO-Founder & CEO",
      img:Ram
      // see:active,
    },
    
  ]

  const element = data.map((item)=>{
    if(item.index <= lastIndex && item.index >= baseIndex ){
      return(
      <div key={item.index} className={`col-span-3 ${item.index == baseIndex + 1? 'shadow-2xl rounded-b-xl' :" "}` }>
        <div className="my-4  ml-2 h-[338px] p-7 flex flex-col">
        <p className=" my-2 ">
        {item.comment}
        </p>
        <div className="flex gap-3 mt-auto">
          <img src={item.img} alt="" className="w-[50px] h-[50px]"/>
          <div>
          <h4 className="text-[#DA4040] text-base font-semibold">{item.name}</h4>
          <h4 className="text-[#595959] font-medium">{item.position}</h4>
          </div>
        </div>
        </div>
        
      </div>
    )
  }
  })

  return (
    <div className="px-[100px] mb-[50px]">
      <div className="flex mb-[50px] px-[100px]">
        <h1 className="text-[45px] font-mistral">Reviews</h1>
        
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
