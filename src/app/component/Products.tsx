import Image from "next/image";
export default function OurProduct (){
    return(
        <div>
            <div className='flex flex-col '>
                <div className="flex justify-between  ">
                 <h1 className="text-gray-800 font-bold  text-3xl mt-36  w-full text-center">Our Products</h1>
                </div>
            </div>


            <main className='lg:flex justify-between mt-8'>

            {/* box1 */}
            <div className=' lg:w-[270px] w-[300px] p-2'>
                {/* Image */}
                <Image src={"/featured/image.png"} width={270} height={250} alt="chair" className='mb-4 sm:w-[150px] lg:w-[270px]'/>  
                <div className="flex justify-between">   
                    <div>               
                        <h1 className="font-bold font-sans pt-2 text-blue-300">Library Stool Chair</h1>
                        <span className=" font-bold">$20</span> 
                    </div>  
                    <Image src={"/products/Add Cart (1).png"} width={44} height={44} alt="" className=''/>
                </div>
            </div>


            {/* box2 */}
            <div className=' lg:w-[270px] w-[300px] p-2'>
                {/* Image */}
                <Image src={"/featured/image (1).png"} width={270} height={250} alt="cpu cooler" className='mb-4'/>
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



            
            <main className='lg:flex justify-between mt-8'>

            {/* box1 */}
            <div className=' lg:w-[270px] w-[300px] p-2'>
                {/* Image */}
                <Image src={"/products/image (4).png"} width={270} height={250} alt="chair" className='mb-4 sm:w-[150px] lg:w-[270px]'/>  
                <div className="flex justify-between">   
                    <div>               
                        <h1 className="font-bold font-sans pt-2 text-blue-300">Library Stool Chair</h1>
                        <span className=" font-bold">$20</span> 
                    </div>  
                    <Image src={"/products/Add Cart (1).png"} width={44} height={44} alt="" className=''/>
                </div>
            </div>


            {/* box2 */}
            <div className=' lg:w-[270px] w-[300px] p-2'>
                {/* Image */}
                <Image src={"/products/image (5).png"} width={270} height={250} alt="cpu cooler" className='mb-4'/>
                <div className="flex justify-between">
                    <div>
                        <h1 className="font-bold font-sans pt-2 ">Library Stool Chair</h1>
                        <span className="font-bold">$20</span> <span className="text-gray-400 font-bold line-through ml-2">$30</span>
                    </div>
                    <Image src={"/featured/Add Cart.png"} width={44} height={44} alt="" className='bg-yellow-400'/>
                </div>
            </div>


            {/* box3 */}
            <div className=' lg:w-[270px] w-[300px] p-2'>
                {/* Image */}
                <Image src={"/products/image (6).png"} width={270} height={250} alt="bag" className='mb-4'/>
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
                <Image src={"/products/image (7).png"} width={270} height={250} alt="bag" className='mb-4'/>
                <div className="flex justify-between ">   
                    <div>               
                        <h1 className="font-bold font-sans pt-2 ">Library Stool Chair</h1>
                        <span className=" font-bold">$20</span> 
                    </div>  
                    <Image src={"/featured/Add Cart.png"} width={44} height={44} alt="" className=''/>
                </div>
            </div>
            </main>


        </div>
    )
}