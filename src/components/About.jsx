export const About = () => {
  return (
    <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center ">
        <div className="h-full lg:py-40 flex flex-col justify-center text-center lg:items-center items-center text-gray-800">
            <span className="text-teal-500 text-[52px] font-semibold mb-8 leading-normal uppercase">About me</span>
            <p className="">Coding and design in harmony for memorable experiences.</p>
            <div className="flex mt-8 gap-2">
                <div className="flex items-center justify-center">
                    <div className="flex space-x-2">
                        <button className="neno-button hover:shadow-teal-800/50 border-2 hover:bg-teal-800 border-teal-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}