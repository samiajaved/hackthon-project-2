
import Image from "next/image";
import sofalogo from "@/app/assets/Logo Icon.png"
import socialLinks from "@/app/assets/Social Links.png"
import logos from "@/app/assets/Group 13.png"



export default function Footer (){
    return (
        <div >
         


            <div className="lg:w-full lg:h-[499px] w-[392px] h-[700px] bg-[#F0F0F0] mt-40 ">
                <div className="lg:w-[1240px] lg:h-[377px] lg:ml-[70px] lg:pt-5 w-[392px] h-[100px]  lg:flex lg:justify-between ">


                    <div className="lg:w-[248px] h-fit  gap-[35px]  mt-32">
                        <div className="flex">
                            <Image src={sofalogo} alt="logo" />
                            <h1>Comforty</h1>
                        </div>
                        <p className="mt-4 lg:w-full w-[357px] font-satoshi font-normal text-sm lg:mt-6">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.</p>
                        
                        <Image src={socialLinks} alt="social logo" className="mt-4 lg:mt-6" />
                    </div>


                    <div className="flex ">
                        <div className=" lg:h-fit lg:mt-32 mt-10 w-fit  ">
                            <h1 className="font-medium text-base leading-[18px]">CATEGORY</h1>
                            <p className="mt-4 text-base leading-[19px] font-normal">sofa</p>
                            <p className="mt-4 text-base leading-[19px] font-normal">arm chair</p>
                            <p className="mt-4 text-base leading-[19px] font-normal">desk chairk</p>
                            <p className="mt-4 text-base leading-[19px] font-normal">wooden chair</p>
                            <p className="mt-4 text-base leading-[19px] font-normal">park bench</p>
                        </div>

                        <div className=" lg:h-fit lg:mt-32 mt-10 w-fit lg:ml-32 ml-32 ">
                        <h1 className="font-medium text-base leading-[18px]">SUPPORT</h1>
                            <p className="mt-4 text-base leading-[19px] font-normal">help Support</p>
                            <p className="mt-4 text-base leading-[19px] font-normal">Terms and Condition</p>
                            <p className="mt-4 text-base leading-[19px] font-normal">Privacy Policy</p>
                            <p className="mt-4 text-base leading-[19px] font-normal">Help</p>
                        </div>
                    </div>


                    

                    <div className="flex ">
                        <div className=" lg:h-fit lg:mt-32 mt-10 w-[350px] ">
                            <h1 className="font-medium text-base leading-[18px]">NEWSLETTER</h1>
                            <div className="flex mt-4">
                                <input placeholder="Your email"></input>
                                <button className="bg-blue-500 text-white p-3 rounded ml-2">subscribe</button>
                            </div>
                            <p className="mt-4 text-base leading-[19px] font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>

                        </div>



                    </div>


                    <div className="lg:hidden block ">   
                    <div className="w-[358px]  border-[1px] bg-gray-600 mt-4 "></div>
                    <h1 className="mt-2 ml-10 font-normal text-sm leading-[18.9px]">@ 2021 - Blogy - Designed & Develop by Zakirsoft</h1>
                    <Image src={logos} alt="logo"  className="ml-10 mt-4"/>
                    </div>
                </div>

                 
                    <div className="w-[1240px]  border-[1px] ml-16  bg-gray-600 mt-4"></div>
                    <div className="hidden  lg:flex justify-between px-4 "> 
                    <h1 className=" ml-16 font-normal text-sm leading-[18.9px] mt-4">@ 2021 - Blogy - Designed & Develop by Zakirsoft</h1>
                    <Image src={logos} alt="logo" className="mt-4 mr-6"  />
                    </div>
            </div>

           

        </div>
    )
}