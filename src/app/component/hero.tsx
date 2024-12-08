import Image from "next/image"
import arrow from "@/app/assets/Right 24px.png";
import chair from "@/app/assets/hero/Product Image.png"
import brand from "@/app/assets/brands/Logo.png"
import brand1 from "@/app/assets/brands/Logo (1).png"
import brand2 from "@/app/assets/brands/Logo (2).png"
import brand3 from "@/app/assets/brands/Logo (3).png"
import brand4 from "@/app/assets/brands/Logo (4).png"
import brand5 from "@/app/assets/brands/Logo (5).png"
import brand6 from "@/app/assets/brands/Logo (7).png"
import TopCategories from "./Categories";
import OurProduct from "./Products";


export default function Hero (){
    return (
        <div>
      {/* MAIN PAGE */}
            <div className=" lg:h-[800px]  w-full py-[8px] px-[130px] bg-[#F0F2F3] ">
                    <div className=" lg:w-[1080px] lg:h-[500px] w-[300px] h-[330px] mt-[160px] gap-[40px] lg:flex ">
                        
                        <div className="lg:w-[450px] lg:h-[280px]  lg:mt-28    ">
                            <div className="w-[450px] h-[180px] gap-6">
                                <h1 className=" font-normal text-xs leading-6 mt-4 ">WELCOME TO CHAIRY</h1>
                                <p className="font-semibold lg:text-5xl text-4xl  leading-[70.14px] tracking-[-2%]">Best Furniture <br></br>Collection for your interior.</p>

                                
                                {/* button */}
                            
                                <div className="w-[140px] h-[45px] bg-[#029FAE] text-white rounded-lg gap-[10px] py-3 pl-6
                                font-normal tracking-[-2%] text-sm lg:mt-24 mt-10 hover:bg-transparent  hover:text-black">
                                <button className="flex justify-between gap-4 ">Shop Now
                                    <Image src={arrow} alt="right arrow" className="w-auto  " />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* chair image */}
                        <Image src={chair} alt="chair" className="w-[434px] h-[584px]  ml-[150px] lg:block hidden " />
                        
                    </div> 
                    <Image src={chair} alt="chair" className="w-[px] h-[300px]   lg:hidden block " /> 
            </div>

            {/* brands logo */}
            <div className="w-full lg:h-[122px]  lg:flex lg:mt-[83px] ">
                <div className="hidden lg:w-[1200px] lg:ml-20 lg:mt-7  lg:flex lg:justify-between">
                <Image src={brand} alt="logo" className="lg:w-[85px] lg:h-[87px]  lg:mt-6"/>
                <Image src={brand1} alt="logo" className="lg:w-[107px] lg:h-[109px] lg:mt-6"/>
                <Image src={brand2} alt="logo" className="lg:w-[135px] lg:h-[139px] lg:mt-6"/>    
                <Image src={brand3} alt="logo" className="lg:w-[63px] lg:h-[65px] lg:mt-6"/>
                <Image src={brand4} alt="logo" className="lg:w-[98px] lg:h-[101px]  lg:mt-6"/>
                <Image src={brand5} alt="logo" className="lg:w-[113px] lg:h-[115px] lg:mt-6"/>
                <Image src={brand6} alt="logo" className="lg:w-[84px] lg:h-[87px]  lg:mt-6"/>
                </div>
            </div>

            {/* featured roducts */}

                  
            <div className='flex flex-col '>
                    <div className="flex justify-between  ">
                    <h1 className="text-gray-800 font-bold  text-3xl pt-4 mb-12 mt-4 ml-4">Featured Products</h1>
                
                    </div>
                </div>
            <main className='lg:flex justify-between'>

            {/* box1 */}
            <div className=' lg:w-[270px] w-[300px] p-2'>
                {/* Image */}
                <Image src={"/featured/image.png"} width={270} height={250} alt="chair" className='mb-4 sm:w-[150px] lg:w-[270px]'/>  
                <div className="flex justify-between">   
                    <div>               
                        <h1 className="font-bold font-sans pt-2 text-blue-300">Library Stool Chair</h1>
                        <span className=" font-bold">$20</span> 
                    </div>  
                    <Image src={"/featured/Add Cart.png"} width={44} height={44} alt="" className=''/>
                </div>
            </div>


            {/* box2 */}
            <div className=' lg:w-[270px] w-[300px] p-2'>
                {/* Image */}
                <Image src={"/featured/image (1).png"}  width={270} height={250} alt="cpu cooler" className='mb-4'/>
                <div className="flex justify-between">
                    <div>
                        <h1 className="font-bold font-sans pt-2 ">Library Stool Chair</h1>
                        <span className="font-bold">$20</span> <span className="text-gray-400 font-bold line-through ml-2">$30</span>
                    </div>
                    <Image src={"/featured/Add Cart.png"} width={44} height={44} alt="" className=''/>
                </div>
            </div>


            {/* box3 */}
            <div className=' lg:w-[270px] w-[300px] p-2'>
                {/* Image */}
                <Image src={"/featured/image (2).png"} width={270} height={250} alt="bag" className='mb-4'/>
                <div className="flex justify-between">   
                    <div>               
                        <h1 className="font-bold font-sans pt-2 ">Library Stool Chair</h1>
                        <span className=" font-bold">$20</span> 
                    </div>  
                    <Image src={"/featured/Add Cart.png"} width={44} height={44} alt="" className=''/>
                </div>
            </div>


            {/* box4 */}
            <div className=' lg:w-[270px] w-[300px] p-2'>
                {/* Image */}
                <Image src={"/featured/image (3).png"} width={270} height={250} alt="bag" className='mb-4'/>
                <div className="flex justify-between ">   
                    <div>               
                        <h1 className="font-bold font-sans pt-2 ">Library Stool Chair</h1>
                        <span className=" font-bold">$20</span> 
                    </div>  
                    <Image src={"/featured/Add Cart.png"} width={44} height={44} alt="" className=''/>
                </div>
            </div>
            </main>



            <TopCategories />
            <OurProduct />
        </div>
    )
}