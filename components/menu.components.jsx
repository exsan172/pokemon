import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { Assets } from "../assets"


const Menu = () => {
    const router = useRouter()
    const curentPath = router.pathname

    return (
        <div className="flex shadow-md w-full p-3 justify-center sticky">
            <div className="container flex align-center items-center">
                <div className="flex w-full">
                    <Link href="/">
                        <a>
                            <div style={{ width:"140px", height:"50px", position:"relative" }}>
                                <Image src={Assets.Logo} alt="pokemon" layout="fill" objectFit="contain"/>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="flex justify-end">
                    <Link href="/" activeClassName="text-black grayscale-0">
                        <a>
                            <div className="flex flex-col mx-3 items-center cursor-pointer">
                                <div className="flex">
                                    <div style={{ width:"30px", height:"30px", position:"relative" }}>
                                        <Image src={Assets.Book} alt="pokemon" className={`${curentPath === "/" ? 'grayscale-0' : 'grayscale'}`} layout="fill" objectFit="contain"/>
                                    </div>
                                </div>
                                <div className="flex mt-2">
                                    <span className={`font-bold ${curentPath === "/" ? 'text-red-500' : 'text-gray-500'}`}>Pokemon</span>
                                </div>
                            </div>
                        </a>
                    </Link>
                    <Link href="/bags">
                        <a>
                            <div className="flex flex-col mx-3 items-center  cursor-pointer">
                                <div className="flex">
                                    <div style={{ width:"30px", height:"30px", position:"relative" }}>
                                        <Image src={Assets.Bags} alt="bags" className={`${curentPath === "/bags" ? 'grayscale-0' : 'grayscale'}`}  layout="fill" objectFit="contain"/>
                                    </div>
                                </div>
                                <div className="flex mt-2">
                                    <span className={`font-bold ${curentPath === "/bags" ? 'text-red-500' : 'text-gray-500'}`}>Bags</span>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Menu