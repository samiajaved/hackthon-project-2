import Image from "next/image";
export default function TopCategories (){
    return(
        <div>
            <div className="lg:h-[508px] lg:w-[1250px] h-fit w-fit mt-20 lg:ml-12 ">
                <h1 className="text-[32px] leading-[35.2px]">Top categories</h1>

                <div className="lg:flex justify-between mt-10">

                <Image src={"/category/Category.png"} width={350} height={350} alt="" className=' mb-4 '/>


                <Image src={"/category/Category (1).png"} width={350} height={350} alt="" className='mb-4'/>

                <Image src={"/category/Category (2).png"} width={350} height={350} alt="" />

                </div>

            </div>



            <div className="lg:h-[508px] lg:w-[1250px] h-fit w-fit mt-20 lg:ml-12  lg:flex p-2">
                <div >
                    <h1 className="lg:hidden block font-bold text-2xl">Explore new and popular styles</h1>
                    <Image src={"/category/Explore new and popular styles.png"} width={23} height={200} alt="" className=' mb-4 ml-8  mt-4 hidden lg:block'/>
                </div>
                <div>
                    <Image src={"/category/item-category 1.png"} width={350} height={350} alt="" className="p-4 lg:w-[560px] lg:h-[560px]" />
                </div>
                <div>
                    <Image src={"/category/card.png"} width={350} height={350} alt="" className="p-3 lg:w-[280px] lg:h-[280px]" />
                    <Image src={"/category/card (1).png"}  width={350} height={350} alt="" className="p-3 lg:w-[280px] lg:h-[280px]" />
                </div>
                <div>
                    <Image src={"/category/card (2).png"}  width={350} height={350} alt="" className="p-3 lg:w-[280px] lg:h-[280px]"  />
                    <Image src={"/category/card (2).png"} width={350} height={350} alt="" className="p-3 lg:w-[280px] lg:h-[280px]"  />
                </div>

            </div>
        </div>
    )
}