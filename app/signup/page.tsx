'use client'

import SocailButtons from "@/components/SocialButtons";
import { signupUser } from "@/redux/slices/authSlice";
import { AppDisPatch, RootState } from "@/redux/store";
import { showErrorAlert } from "@/util/SweetAlerts";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { HiOutlineEye, HiOutlineLockClosed, HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";



export default function SignupPage(){
    const [name, setName] = useState("")
    const [email, setEmail] =useState("")
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const {loading, error} = useSelector((state: RootState)=> state.auth)
    const dispatch = useDispatch<AppDisPatch>()
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        if(password !== confirmPassword){
            const errorMessage = 'Passwords do not match';
            setPasswordError(errorMessage);
            showErrorAlert('Password Error', errorMessage);
            return;
        }

        setPasswordError('')
        dispatch(signupUser({name, email, password}))
        .unwrap()
        .then(()=>{router.push('/login')})
        .catch(()=>{})

    }

    return(
        <main className="min-h-screen bg-[#F1F1F1] flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-md rounded-[40px] shadow-xl overflow-hidden flex flex-col min-h-[850px] relative px-8 pt-20">

                <h1 className="text-3xl font-bold text-[#213401] text-center mb-12">Register</h1>

                {(error || passwordError) && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                    <div className="flex">
                        <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <div className="ml-3">
                        <p className="text-sm text-red-800">{error || passwordError}</p>
                        </div>
                    </div>
                    </div>
                )}
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="relative">
                        <HiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                        <input 
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        type="name" 
                        placeholder="User Name" 
                        className="w-full py-4 pl-12 pr-4 text-gray-900 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#A4E671] transition-all"
                        />
                    </div>
                    <div className="relative">
                        <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                        <input 
                        id="email"
                        name="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        type="email" 
                        placeholder="Email" 
                        className="w-full py-4 pl-12 pr-4 text-gray-900 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#A4E671] transition-all"
                        />
                    </div>

                    <div className="relative">
                        <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                        <input 
                        id="password"
                        name="password"
                        required
                        autoComplete="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        type="password" 
                        placeholder="Password" 
                        className="w-full py-4 pl-12 pr-12 text-gray-900 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#A4E671] transition-all"
                        />
                        <HiOutlineEye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl cursor-pointer" />
                    </div>

                    <div className="relative">
                        <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                        <input 
                        id="confirmPassword"
                        name="confirmPassword"
                        required
                        autoComplete="confirmPassword"
                        value={confirmPassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                        type="confirmPassword" 
                        placeholder="Confirm Password" 
                        className="w-full py-4 pl-12 pr-12 text-gray-900 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#A4E671] transition-all"
                        />
                        <HiOutlineEye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl cursor-pointer" />
                    </div>

                    

                    <button 
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#213400] text-white rounded-full font-bold hover:bg-[#254108] transition-all mt-4">
                        {loading ? 'Signup...' : "Signup"}
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