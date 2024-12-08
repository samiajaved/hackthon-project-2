import Image  from "next/image"
export default function Cart (){
    return (
       <div className="flex">
            <div className="h-[600px] w-full mt-10 ">
                <div className="w-[70%] lg:h-full h-fit ">
                    <h1 className="font-medium text-[22px] lg:ml-20">Bag</h1>

                    <div className="w-[80%] lg:ml-20 h-[180px] shadow-lg ">
                        <div className="flex justify-between">
                            <Image src={"/featuredproducts/image (19).png"} width={100} height={100} alt="" className='mb-4 lg:h-[150] lg:w-[150]'/>
                            <div className="">
                                <h1 className=" text-[15px] leading-[28px]">library stool chair</h1>
                                <h1 className="text-[15px] leading-[28px]">Ashen Slate/Cobalt Bliss</h1>
                                <div className="w-[170px] flex justify-between  text-[15px] leading-[28px]">
                                    <h1>size L</h1>
                                    <h1 className="text-[15px] leading-[28px]">Quantity 1</h1>
                                </div>

                                <div className="flex justify-between w-[100px] mt-4">
                                    <Image src={"/featured/Frame.png"} width={24} height={24} alt="" />
                                    <Image src={"/featured/Frame (1).png"} width={24} height={24} alt="" />
                                </div>
                            </div>
                            <h1 className="w-[400px] text-right font-normal text-[15px]  leading-[28px] ">MRP: $99</h1>
                        </div>
                    </div>

                    



                    <div className="w-[80%] lg:ml-20 h-[180px] shadow-lg  mt-5 ">
                        <div className="flex justify-between">
                            <Image src={"/featured/Frame (2).png"} width={100} height={100} alt="" className='mb-4 lg:h-[150] lg:w-[150]'/>
                            <div className="">
                                <h1 className=" text-[15px] leading-[28px]">library stool chair</h1>
                                <h1 className="text-[15px] leading-[28px]">Ashen Slate/Cobalt Bliss</h1>
                                <div className="w-[170px] flex justify-between  text-[15px] leading-[28px]">
                                    <h1>size L</h1>
                                    <h1 className="text-[15px] leading-[28px]">Quantity 1</h1>
                                </div>

                                <div className="flex justify-between w-[100px] mt-4">
                                    <Image src={"/featured/Frame.png"} width={24} height={24} alt="" />
                                    <Image src={"/featured/Frame (1).png"} width={24} height={24} alt="" />
                                </div>
                            </div>

                    
                            <h1 className="w-[400px] text-right font-normal text-[15px] leading-[28px] ">MRP: $99</h1>

                        </div>
                    </div>

                </div>
            </div>


            
            <div className="w-[470px] h-[300px] rounded border-[1.5px] mt-10">
                        <div className="w-[422px] h-[254px]   mt-8 ml-6">
                            <h1 className="font-medium text-xl">Summary</h1>
                            <div className="flex justify-between w-[422px] h-[24px] mt-3">
                                <h1>Subtotal:</h1>
                                <h1>$1980.00</h1>
                            </div>
                           

                            
                            <div className="flex justify-between w-[422px] h-[24px] mt-3">
                                <h1>Estimated Delivery & Handling</h1>
                                <h1>Free</h1>
                            </div>
                            <div className="w-[422px] border mt-3"></div>

                            <div className="flex justify-between w-[422px] h-[24px] mt-3">
                                <h1>Total</h1>
                                <h1>$1980.00</h1>
                            </div>

                            <div className="w-[422px] border mt-3"></div>
                            <button className='bg-[#029FAE] hover:bg-transparent  hover:text-black text-white pt-2  px-7  py-2  rounded-[30px] mt-7 ml-20    w-[260px] h-[56px] '>Member checkout </button>
                        </div>

                    </div>


       </div>
    )
}