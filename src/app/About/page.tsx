import Image from "next/image"  
import chair from "@/app/assets/Image Block.png"  
    
    
    export default function About (){
        return(
            <div>
                     {/* MAIN PAGE */}
                    <div className=" lg:h-[800px]  w-full lg:py-[8px] lg:px-[130px]  ">
                    <div className=" lg:w-[1080px] lg:h-[500px] w-[300px] h-[380px] mt-[160px] gap-[40px] lg:flex  ">
                        
                        <div className="lg:w-[600px] lg:h-[400px] h-[340px] p-2 lg:p-10 bg-[#007580]">
                            <div className="lg:w-[400px] h-[180px] gap-6 ">
                                
                                <h1 className="font-bold lg:text-[32px] lg:text-2xl text-xl text-white leading-[70.14px] tracking-[-2%]">About Us - Comforty</h1>

                                <p className="text-lg leading-[21px] text-white">At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>

                                
                                {/* button */}
                            
                                <div className="w-[140px] h-[45px] bg-[#F9F9F926] text-white rounded-lg gap-[10px] py-3 pl-6
                                font-normal tracking-[-2%] text-sm lg:mt-24 mt-10 hover:bg-blue-200">
                                <button className="flex justify-between gap-4 ">veiw Collection</button>
                                </div>
                            </div>
                        </div>

                        {/* chair image */}
                        <Image src={chair} alt="chair" className="w-[580px] h-[400px]   lg:block hidden " />
                        
                    </div> 
                    <Image src={chair} alt="chair" className="w-[300px] h-[200px]   lg:hidden block " /> 
                    </div>


                    <h1 className="lg:text-center lg:-mt-6 lg:text-[32px] text-lg mt-3 leading-[35px] font-semibold  ">What makes our Brand Different</h1>
                    <div className="lg:flex justify-between lg:w-[1200px] lg:h-[230px] w-[300px] h-fit lg:ml-20 ml-4 mt-4 lg:mt-8 ">

                        <div className="bg-[#F9F9F9] lg:h-full w-[280px] h-[230px] p-10 mb-4">
                            <Image src={"/about/Delivery.png"}  alt="delivery logo" width={24} height={24} />
                            <h1 className="font-normal text-xl  mt-2 text-[#007580]">Next day as standard</h1>
                            <p className="font-normal text-base mt-2 text-[#007580]">Order before 3pm and get your order the next day as standard</p>
                        </div>

                        <div className="bg-[#F9F9F9] lg:h-full w-[280px] h-[230px] p-10 mb-4">
                            <Image src={"/about/Checkmark--outline.png"}  alt="delivery logo" width={24} height={24} />
                            <h1 className="font-normal text-xl  mt-2 text-[#007580]">Made by true artisans</h1>
                            <p className="font-normal text-base mt-2 text-[#007580]">Handmade crafted goods made with real passion and craftmanship</p>
                        </div>

                        <div className="bg-[#F9F9F9] lg:h-full w-[280px] h-[230px] p-10 mb-4">
                            <Image src={"/about/Purchase.png"}  alt="logo" width={24} height={24} />
                            <h1 className="font-normal text-xl  mt-2 text-[#007580]">Unbeatable prices</h1>
                            <p className="font-normal text-base mt-2 text-[#007580]">For our materials and quality you will not find better prices anywhere</p>
                        </div>

                        <div className="bg-[#F9F9F9] lg:h-full w-[280px] h-[230px] p-10 mb-4">
                            <Image src={"/about/Sprout.png"}  alt="logo" width={24} height={24} />
                            <h1 className="font-normal text-xl  mt-2 text-[#007580]">Recycled packaging</h1>
                            <p className="font-normal text-base mt-2 text-[#007580]">We use 100% recycled to ensure our footprint is more manageable</p>
                        </div>

                    </div>


                    <h1 className="  lg:text-[32px] text-lg mt-20 lg:ml-20 ml-4 leading-[35px] font-semibold  ">What makes our Brand Different</h1>
                    <div className="lg:flex justify-between lg:w-[1200px] lg:h-96 w-[300px] h-fit lg:ml-20 ml-4 mt-4 lg:mt-8  ">
                        <Image src={"/about/Product Card.png"}  alt="sofa" width={630} height={462}  className="m-2"/>
                        <Image src={"/about/Product Card (1).png"}  alt="chair" width={305} height={462}  className="m-2"/>
                        <Image src={"/about/Product Card (2).png"}  alt="chair" width={305} height={462}  className="m-2"/>


                    </div>






        </div>
    )
  }
  
  
  
