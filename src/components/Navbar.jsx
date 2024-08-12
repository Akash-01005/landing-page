import { useState } from 'react';
import { lock, logo, menu, close } from '../assets'

const Navbar = () => {
  const [toggle,setToggle] = useState(false);

  function handleClick(e){
    e.preventDefault();
    setToggle(!toggle);
  }
  
  return (
    <>
    <div className="w-full h-[80px] bg-white border-b shadow-md sticky top-0">
      <div className="md:max-w-[1480px] max-w-[600px] w-full h-full m-auto flex justify-between items-center">
        <img src={logo} alt="" className='ml-3' />
        <div className="hidden md:flex items-center">
          <ul className='flex gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Prcing</li>
          </ul>
        </div>
         <div className='hidden md:flex gap-4 items-center mr-3'>
           <button className='flex gap-1'><img src={lock} alt="" className='' />Login</button>
            <button className='flex py-3 px-8 bg-[#208486] rounded-md text-teal-50'>Sign Up</button>
         </div>

         <div className='md:hidden mr-2' onClick={handleClick}>
              <img src={toggle? close : menu} alt="" />
         </div>

      </div>
    </div>

    <div className={toggle ? "w-full" : "hidden"}>
         <ul className='p-2'>
            <li className='p-4 hover:bg-gray-100 rounded-lg'>Home</li>       
            <li className='p-4 hover:bg-gray-100 rounded-lg'>About</li>
            <li className='p-4 hover:bg-gray-100 rounded-lg'>Support</li>
            <li className='p-4 hover:bg-gray-100 rounded-lg'>Platform</li>
            <li className='p-4 hover:bg-gray-100 rounded-lg'>Pricing</li>
           <div className='flex flex-col gap-3 mt-3'>
             <button className='flex justify-center border rounded-md py-2'>
                 <img src={lock} /> Login
              </button>
             <button className='py-2 px-8 bg-[#208486] rounded-md text-teal-50 font-bold text-center '>Sign Up For Free</button>
           </div>
         </ul>
      </div>
    </>
  )
}

export default Navbar