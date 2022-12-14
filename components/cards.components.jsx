import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Assets } from "../assets"
import { getStorage } from "../helper/storage.helper"

const Cards = ({ name, catchPokemon, refresh }) => {
    const [owended, setOwened] = useState(0)

    useEffect(() => {
        const catchData  = getStorage("catch")
        if(catchData !== null) {

            const parseCatch = JSON.parse(catchData)
            for(const i in parseCatch) {
                if(parseCatch[i].name === name) {
                    setOwened(parseCatch[i].owned)
                }
            }
        }
    }, [name, catchPokemon, refresh])

    return (
        <div className="flex shadow-sm rounded bg-gray-200 p-4 m-2 w-12/12 md:w-3/12 lg:w-2/12 flex-col">
            <Link href={{ pathname: "/detail", query : { "name" : name } }}>
                <a>
                    <div className="flex p-5">
                        <Image src={Assets.BallSvg} alt="poke-ball"/>
                    </div>
                    <div className="flex justify-center h-full">
                        <span className="capitalize">{name}</span>
                    </div>
                </a>
            </Link>
            <div className="flex mt-10 justify-end w-full flex-col h-full">
                <div className="bg-gray-100 px-5 py-3 rounded-full flex shadow-sm justify-center">
                    <div className="flex">
                        <span className="text-black text-sm">Owened :</span>
                    </div>
                    <div className="flex ml-3">
                        <span className="text-black text-sm font-bold">
                            {owended}
                        </span>
                    </div>
                </div>
                <div className="bg-gray-100 px-5 py-3 rounded-full flex shadow-sm cursor-pointer mt-2 justify-center" onClick={catchPokemon}>
                    <div className="flex">
                        <Image src={Assets.Ball} width={20} height={20} alt="ball" className="shadow-sm"/>
                    </div>
                    <div className="flex ml-3">
                        <span className="text-black text-sm">
                            Catch !
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards