import Navbar from '@/components/Navbar'
import { Sparkles } from 'lucide-react'

function page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 dot-pattern">
        <div className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-4 py-6 md:py-10">

          <div className="flex flex-col items-center justify-center gap-5 md:gap-8 lg:gap-12 mt-8 md:mt-12">

            {/* Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-yellow-600/90 text-white rounded-full border-2 border-black shadow-pop">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base font-bold">
                100% Secure & Free
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-center font-bold text-[#202538] leading-tight">
              Your All-in-One
              <span className="block text-[#975ff1]">
                PDF Toolbox
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-center text-gray-500 max-w-md md:max-w-2xl">
              All the tools you need to work with PDFs — right in your browser.
              Nothing uploaded, nothing stored.
            </p>

          </div>

        </div>
      </div>
    </main>
  )
}

export default page