import SocailButtons from "@/components/SocialButtons";
import Link from "next/link";
import { HiOutlineEye, HiOutlineLockClosed, HiOutlineMail, HiOutlineUser } from "react-icons/hi";

export default function SignupPage(){
    return(
        <main className="min-h-screen bg-[#F1F1F1] flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-md rounded-[40px] shadow-xl overflow-hidden flex flex-col min-h-[850px] relative px-8 pt-20">

                <h1 className="text-3xl font-bold text-[#213401] text-center mb-12">Register</h1>

                <form className="space-y-5">
                    <div className="relative">
                        <HiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                        <input 
                        type="name" 
                        placeholder="User Name" 
                        className="w-full py-4 pl-12 pr-4 text-gray-900 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#A4E671] transition-all"
                        />
                    </div>
                    <div className="relative">
                        <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                        <input 
                        type="email" 
                        placeholder="Email" 
                        className="w-full py-4 pl-12 pr-4 text-gray-900 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#A4E671] transition-all"
                        />
                    </div>

                    <div className="relative">
                        <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                        <input 
                        type="password" 
                        placeholder="Password" 
                        className="w-full py-4 pl-12 pr-12 text-gray-900 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#A4E671] transition-all"
                        />
                        <HiOutlineEye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl cursor-pointer" />
                    </div>

                    <div className="relative">
                        <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                        <input 
                        type="confirmPassword" 
                        placeholder="Confirm Password" 
                        className="w-full py-4 pl-12 pr-12 text-gray-900 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#A4E671] transition-all"
                        />
                        <HiOutlineEye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl cursor-pointer" />
                    </div>

                    

                    <button className="w-full py-4 bg-[#213400] text-white rounded-full font-bold hover:bg-[#254108] transition-all mt-4">
                        Register
                    </button>
                </form>

                <div className="flex items-center my-8">
                    <div className="flex-1 h-[1px] bg-gray-100"></div>
                    <span className="px-4 text-sm text-gray-400">or</span>
                    <div className="flex-1 h-[1px] bg-gray-100"></div>
                </div>

                <SocailButtons/>

                
            </div>
        </main>
    )
}