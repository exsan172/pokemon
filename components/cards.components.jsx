import Image from "next/image"
import Link from "next/link"
import { Assets } from "../assets"

const Cards = ({ name, owned=0 }) => {
    return (
        <div className="flex shadow-sm rounded bg-gray-200 p-4 m-2 w-11/12 md:w-3/12 lg:w-2/12 flex-col">
            <Link href={{ pathname: "/detail", query : { "name" : name } }}>
                <a>
                    <div className="flex p-5">
                        <Image src={Assets.BallSvg}/>
                    </div>
                    <div className="flex justify-center h-full">
                        <span className="capitalize font-bold">{name}</span>
                    </div>
                </a>
            </Link>
            <div className="flex mt-10 justify-between w-full flex-col">
                <div className="bg-gray-100 px-5 py-3 rounded-full flex shadow-sm justify-center">
                    <div className="flex">
                        <span className="text-black text-sm font-bold">Owened :</span>
                    </div>
                    <div className="flex ml-3">
                        <span className="text-black text-sm font-bold">
                            {owned}
                        </span>
                    </div>
                </div>
                <div className="bg-gray-100 px-5 py-3 rounded-full flex shadow-sm cursor-pointer mt-2 justify-center">
                    <div className="flex">
                        <Image src={Assets.Ball} width={20} height={20} className="shadow-sm"/>
                    </div>
                    <div className="flex ml-3">
                        <span className="text-black text-sm font-bold">
                            Catch !
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards