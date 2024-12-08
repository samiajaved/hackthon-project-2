import Image from "next/image"
import Link from "next/link"



export default function Products (){
    return(
    <div>
             <div className=" h-[850px] w-full py-[8px] lg:px-[130px] px-[40px] bg-white ">
            <div className=" w-[1080px] h-[500px] mt-[160px] gap-[40px] lg:flex ">


                  
            <Image src={"/products/image (17).png"} width={325} height={280} alt="" className='lg:w-[575px] lg:h-[507px]'/>

                    <div className="w-[440px] h-[430px]  ">
                        <div className="w-[440px] h-[230px] gap-6">
                            <h1 className=" w-[400px] font-semibold text-5xl leading-[70.14px] tracking-[-2%] text-[#212529] ">
                            Library Stool Chair
                            </h1>
                            <button className="py-1 pl-4 bg-[#029FAE] mt-4 text-white gap-4 rounded-3xl w-[130px] h-[40px]">$20.00 USD</button>
                            <div className="w-[440px] h-[1px] border mt-5  "> </div>
                            <p className="font-normal lg:text-[22px]  leading-6 text-[#212529] mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing
                            </p>

                            {/* button */}
                            
                            <div className="w-[140px] h-[45px] bg-[#029FAE] text-white rounded-lg gap-[10px] py-3 pl-6
                            font-normal tracking-[-2%] text-sm mt-12">
                                <button className="flex justify-between gap-4">
                                    <Image src={"/group.png"} width={22} height={21} alt="" className=''/>Add To cart
                                </button>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>


            {/* featured Products */}

            <div className='flex '>
                <div className=" flex justify-between w-full px-[50px]  ">
                 <h1 className="text-gray-800 font-bold  text-3xl  ">Fetured Products</h1>
                 <Link href="/" className="font-bold text-lg h-fit underline " >veiw all</Link>
                </div>
            </div>


      
        <main className='lg:flex justify-between mt-8 ml-5'>

            {/* box1 */}
            <div className=' lg:w-[270px] w-[300px] p-2'>
                {/* Image */}
                <Image src={"/featuredproducts/image (18).png"} width={230} height={230} alt="" className='mb-4'/>  
                <div className="flex justify-between">   
                <div className="flex justify-between pt-3 w-[230px]">                
                        <h1 className="font-normal font-sans  text-base ">Library Stool Chair</h1>
                        <span className=" font-bold">$99</span> 
                    </div>  
                    
                </div>
            </div>


            {/* box2 */}
            <div className=' lg:w-[270px] w-[300px] p-2'>
                {/* Image */}
                <Image src={"/featuredproducts/Rectangle 6.jpg"} width={230} height={230} alt="" className='mb-4'/>
                <div className="flex justify-between">
                <div className="flex justify-between pt-3 w-[230px]"> 
                        <h1 className="font-normal font-sans text-base  ">Library Stool Chair</h1>
                        <span className="font-bold">$99</span> 
                    </div>
                   
                </div>
            </div>


            {/* box3 */}
            <div className=' lg:w-[270px] w-[300px] p-2'>
                {/* Image */}
                <Image src={"/featuredproducts/Rectangle 6 (1).jpg"} width={230} height={230} alt="" className='mb-4'/>
                <div className="flex justify-between">   
                <div className="flex justify-between pt-3 w-[230px]">              
                        <h1 className="font-normal font-sans text-base  ">Library Stool Chair</h1>
                        <span className=" font-bold">$99</span> 
                    </div>  
                    
                </div>
            </div>


            {/* box4 */}
            <div className=' lg:w-[270px] w-[300px] p-2'>
                {/* Image */}
                <Image src={"/featuredproducts/image (19).png"} width={230} height={230} alt="" className='mb-4'/>
                <div className="flex justify-between ">   
                    <div className="flex justify-between pt-3 w-[230px]">               
                        <h1 className="font-normal text-base font-sans  ">Library Stool Chair</h1>
                        <span className=" font-bold">$99</span> 
                    </div>  
                    
                </div>
            </div>

               {/* box5 */}
               <div className=' lg:w-[270px] w-[300px] p-2'>
                {/* Image */}
                <Image src={"/featuredproducts/image (20).png"} width={230} height={230} alt="" className='mb-4'/>
                <div className="flex justify-between ">   
                <div className="flex justify-between pt-3 w-[230px]">              
                        <h1 className="font-normal font-sans text-base ">Library Stool Chair</h1>
                        <span className=" font-bold">$99</span> 
                    </div>  
                    
                </div>
            </div>

            
        


        </main>




    </div>

)
}