
import Rectangle2 from "../assets/Rectangle2.png"
import Rectangle3 from "../assets/Rectangle3.png"
import Rectangle4 from "../assets/Rectangle4.png"

export default function Design() {
  return (
    <div className="px-[200px] mb-[100px]">
        <div className="row-span-1 font-mistral text-[45px] font-normal mb-[50px]"> My design process</div>
        <div className=" grid grid-cols-3 gap-5 items-center ">
            <div className=""><img src={Rectangle2} alt="" /></div>
            <div className=""><img src={Rectangle3} alt="" /></div>
            <div className=""><img src={Rectangle4} alt="" /></div>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-5 mb-5">

            <div className="text-center ">
                <h3 className="text-[#DA4040] font-bold mb-2">Research and Empathize</h3>
                <p className="text-[#595959] text-base">Research the problem or challenge we are trying to address. Learn about the user. Analyze competitors and industry standards to gather insights. Organize content and information in a logical and intuitive manner.</p>
            </div>
            <div className="text-center ">
                <h3 className="text-[#DA4040] font-bold mb-2">Defile and Analyse</h3>
                <p className="text-[#595959] text-base">Define goals and objectives. Create user personas and user journey maps to visualize the user`s experience. Analyzing other products in the market to identify strengths, weaknesses, and opportunities.</p>
            </div>
            <div className="text-center">
                <h3 className="text-[#DA4040] font-bold mb-2">Design and Ideation</h3>
                <p className="text-[#595959] text-base">Create low-fidelity mockup to outline the layout and structure of the UI. Choose a color scheme, typography, and create high-fidelity mockups with detailed graphics and UI <br /> elements.</p>
            </div>
        </div>
    </div>
  )
}
