'use client'

import SocailButtons from "@/components/SocialButtons"
import Link from "next/link"



export default function Mainpage(){
  return(
    <main className="min-h-screen bg-[#F1F1F1] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-[40px] shadow-xl overflow-hidden flex flex-col min-h-[850px] relative">

      <div className="flex-1 flex flex-col items-center justify-center px-8 pt-12 z-10">
        <div className="relative w-64 h-64 mb-8">
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-400 text-sm">[Illustration Image]</span>
          </div>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#213401] mb-4">Private Coaching</h1>
          <p className="text-[#213401] text-sm leading-relaxed max-w-[300px] mx-auto">
            Add one-on-one, confidential sessions for only <span className="font-semibold">$35 per session</span>
          </p>
        </div>

        <div className="flex gap-2 w-full max-w-[280px] mb-8">
            <div className="h-1.5 flex-1 bg-[#A4E671] rounded-full"></div>
            <div className="h-1.5 flex-1 bg-gray-100 rounded-full"></div>
            <div className="h-1.5 flex-1 bg-gray-100 rounded-full"></div>
        </div>

        <SocailButtons/>

        <p className="text-sm text-[#213401] mb-8">
          Already have an account? <Link href="/login" className="text-[#213401] font-bold hover:underline">Log in</Link>
        </p>
      </div>
      </div>
    </main>
  )
}