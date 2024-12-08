import Image from "next/image"
import Link from "next/link"
import check from "@/app/assets/check 1.png";
import eng from "@/app/assets/ENG.png";
import vector2 from "@/app/assets/Vector (2).png"
import sofaLogo from "@/app/assets/Logo Icon.png"
import cart from "@/app/assets/User Links.png"

export default function Header (){
    return (
        <div>
            {/* blue div */}
            <div className=" hidden  w-[full] h-[45x]  text-white bg-[#272343] lg:flex   justify-between px-[100px] ">
                <div className="flex pt-2 ">
                    <Image src={ check} alt="check" className="w-4 h-4" />
                    <h1 className="font-normal text-sm leading-[14.3px]">Free shipping on all orders over $50</h1>
                </div>

                <div className=" w-[202px]   pt-2  flex justify-between text-white ">
                    <Image src={ eng} alt="eng" className="w-[37px] h-[17px] " />
                    <Link href="Faqs" className="font-normal text-xs" >Faqs</Link>
                    <div className="w-[87px] h-[17px] gap-[6px] flex text-white">
                    <Image src={vector2} alt="logo" />
                    <h1 className="font-normal text-xs" >Need Help</h1>
                    </div>
                </div>
            </div>

            {/* gray div */}
            <div className="w-full h-[84px] flex justify-between py-[20px] px-[100px] bg-[#F0F2F3]">
                <div className="w-[166px] h-[40px] flex justify-between "> 
                    <Image src={sofaLogo} alt="logo"  className="w-[40px] h-[40px]"/>
                    <h1 className="font-medium text-[26px] leading-[31.2px]">Comforty</h1>
                </div>
                <Link href="Cart">
                <Image src={cart} alt="cart"  className="hidden lg:block"/>
                </Link>
            </div>

            {/* navbar */}
            <div className="w-full h-[64px] flex justify-between lg:py-[18px] lg:px-[100px] py-4 shadow-lg">
                <div className="flex justify-between w-[339px] h-[15px] gap-[32x]">
                    <Link href="/">home </Link>
                    <Link href="Shop">Shop</Link>
                    <Link href="Products">Products</Link>
                    <Link href="Pages">Pages</Link>
                    <Link href="About">About</Link>
                </div>
                <Link href="Contact">
                <h1 className="font-medium text-[14px] leading-[15px] hidden lg:block ">Contact: (808) 555-0111</h1>
                </Link>
                

            </div>


        </div>
    )
}