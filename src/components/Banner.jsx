import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'

export const Banner = () => {
  return (
    <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center ">
        <div className="h-full lg:py-40 flex flex-col justify-center text-center lg:items-center items-center text-gray-800">
            <h1 className="text-teal-900 text-[52px] font-semibold mb-8 leading-normal">Systems Engineer Frontend Developer</h1>
            <p className="">Coding and design in harmony for memorable experiences.</p>
            <div className="flex mt-8 gap-2">
                <div className="flex items-center justify-center">
                    <div className="flex space-x-2">
                        <a className="text-teal-500 hover:text-teal-400 rounded-full glow p-2">
                            <AiFillGithub className="text-[28px]"/>
                        </a>
                        <a className="text-teal-500 hover:text-teal-400 rounded-full glow p-2">
                            <FaLinkedinIn className="text-[28px]"/>
                        </a>
                        <a className="text-teal-500 hover:text-teal-400 rounded-full glow p-2">
                            <BiLogoGmail className="text-[28px]"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}