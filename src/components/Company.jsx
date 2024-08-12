import { company1, company2, company3, company4 } from "../assets"

const Company = () => {
  return (
    <div className="w-full bg-[#208486] md:max-w-[1480px] flex flex-col border p-5">
            <p className="font-bold text-center text-white  text-sm md:text-xl">Empower your learning journey with our cutting-edge EdTech courses designed to unlock your full potential.</p>
             <div className="gap-4 flex  justify-center py-6">
                <img src={company1} className="h-20" alt="" />
                <img src={company2} className="h-20" alt="" />
                <img src={company3} className="h-20" alt="" />
                <img src={company4} className="h-20" alt="" />
            </div>
    </div>
  )
}

export default Company