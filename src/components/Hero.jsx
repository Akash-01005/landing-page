import { AiOutlineSearch } from "react-icons/ai"
import { hero } from "../assets"

const Hero = () => {
  return (
    <>
    <div className="w-full bg-white">
        <div className="md:max-w-[1480px] py-5 m-auto grid md:grid-cols-2 max-w-[600px]">
            <div className=" px-4 md:mt-20 mt-5 ml-3">
               <p className="text-2xl text-[#200486] font-medium uppercase">start to success</p>
               <h1 className="py-2 md:text-3xl text-2xl font-bold">
                Access to <span className="text-[#200486]">5000+</span> courses from <span className="text-[#200486]">300</span> Instructors and Institutions 
               </h1>
               <p className="text-lg py-3 text-gray-600">
                 Various versions have resolved over the years, sometimes by accident.
               </p>
               <form className="p-4 border rounded-md flex justify-between">
                  <input type="text"  placeholder="What you want to learn?" className="bg-white"/>
                  <button>
                    <AiOutlineSearch size={20} className="icon" style={{color:'#000'}} />
                  </button>
               </form>
            </div> 
            <img src={hero} className="md:order-last order-first" alt="" />  
        </div>
    </div>
    </>
  )
}

export default Hero