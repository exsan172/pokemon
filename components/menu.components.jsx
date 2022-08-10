import Image from "next/image"
import Link from "next/link"
import { Assets } from "../assets"


const Menu = () => {
    return (
        <div className="flex shadow-md w-full p-4 justify-center sticky">
            <div className="container flex align-center">
                <div className="flex w-full">
                    <Image src={Assets.Logo} alt="pokemon" height={10} width={200}/>
                </div>
                <div className="flex justify-end">
                    <Link href="/" activeClassName="text-black grayscale-0">
                        <a>
                            <div className="flex flex-col mx-3 items-center text-gray-500 cursor-pointer">
                                <div className="flex">
                                    <Image src={Assets.Book} alt="pokemon" className="grayscale" height={50} width={55}/>
                                </div>
                                <div className="flex mt-2">
                                    <span className="font-bold">Pokemon</span>
                                </div>
                            </div>
                        </a>
                    </Link>
                    <Link href="/bags">
                        <a>
                            <div className="flex flex-col mx-3 items-center text-gray-500 cursor-pointer">
                                <div className="flex">
                                    <Image src={Assets.Bags} alt="bags" className="grayscale" height={73} width={68}/>
                                </div>
                                <div className="flex mt-2">
                                    <span className="font-bold">Bags</span>
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