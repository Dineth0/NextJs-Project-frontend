import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineUserCircle } from "react-icons/hi";


export default function SocailButtons () {
    return(
        <div className="w-full space-y-3 mb-6">
          <button className="w-full py-4 px-6 border border-gray-200 rounded-full flex items-center justify-center gap-3 font-medium text-gray-700 hover:bg-[#92d361] transition">
            <FcGoogle className="w-6 h-6" /> 
            <span className="font-bold text-[#213401]">Continue with Google</span>
          </button>
          <button className="w-full py-4 px-6 border border-gray-200 rounded-full flex items-center justify-center gap-3 font-medium text-gray-700 hover:bg-[#92d361] transition">
            <FaApple className="w-6 h-6 text-black" /> 
            <span className="font-bold text-[#213401]">Continue with Apple</span>
          </button>
          <button className="w-full py-4 px-6 border border-gray-200 rounded-full flex items-center justify-center gap-3 font-medium text-gray-700 hover:bg-[#92d361] transition">
            <HiOutlineUserCircle className="w-6 h-6 text-gray-700" /> 
            <span className="font-bold text-[#213401]">Continue As Guest</span>
          </button>
        </div>
    )
}