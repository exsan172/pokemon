import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Assets } from "../assets"
import { deleteStorage, getStorage, setStorage } from "../helper/storage.helper"

const Bags = () => {
    const [dataBags, setDataBags] = useState([])
    const [totalPokemon, setTotalPokemon] = useState(0)

    useEffect(() => {
        const catchData  = getStorage("catch")
        if(catchData !== null) {
            let totalCatch = 0
            const parseCatch = JSON.parse(catchData)

            // count
            for(const l in parseCatch) {
                totalCatch += parseCatch[l].owned
			}

            setDataBags(parseCatch)
            setTotalPokemon(totalCatch)
        }
    }, [])

    const release = (name) => {
        let arrayData    = []
        const catchData  = getStorage("catch")
        const parcheCatch= JSON.parse(catchData)

        if(parcheCatch !== null) {
            for(const l in parcheCatch) {
                if(name === parcheCatch[l].name) {
                    if(parcheCatch[l].owned > 1) {
                        parcheCatch[l].owned = parseInt(parcheCatch[l].owned)-1
                    } else {
                        parcheCatch.splice(l, 1)
                    }
                }
			}

            if(parcheCatch.length > 0) {
                setStorage("catch", JSON.stringify(parcheCatch))
            } else {
                deleteStorage("catch")
            }

            setDataBags(parcheCatch)
        }
    }

    return (
        <div className="flex my-10 justify-center">
            <div className="flex w-11/12 md:w-6/12">
                <div className="flex shadow w-full px-6 py-5 rounded-xl border flex-col">
                    <div className="flex">
                        <span className="text-lg font-bold">Owened Pokemon : {totalPokemon}</span>
                    </div>
                    <div className="flex mt-10 flex-col">
                        {
                            dataBags.length !== 0 ?
                                dataBags.map((catc, i) => {
                                    return (
                                        <div className="flex my-3 items-center" key={i}>
                                            <div className="flex w-8/12 md:w-3/12 lg:w-2/12 text-gray-500">
                                                <div style={{ width:"70px", height:"70px", position:"relative" }}>
                                                    <Image src={Assets.BallSvg} alt="poke-ball"/>
                                                </div>
                                            </div>
                                            <div className="flex w-8/12 flex-col">
                                                <div className="flex h-100">
                                                    <span className="text-lg capitalize">{catc.name}</span>
                                                </div>
                                                <div className="flex mt-3 items-start flex-col md:flex-row">
                                                    <div className="flex px-6 py-2 border rounded-full mr-2 text-sm  mt-2 md:mt-0">
                                                        <span className="font-bold">{catc.owned}</span>
                                                    </div>
                                                    <Link href={{ pathname: "/detail", query: { "name" : catc.name } }}>
                                                        <a>
                                                            <button className="px-5 py-2 rounded-full text-white mt-2 md:mt-0 text-sm bg-red-500">Detail</button>
                                                        </a>
                                                    </Link>
                                                    <div className="flex px-5 py-2 border bg-red-500 rounded-full mt-2 md:mt-0 md:ml-2 text-sm text-white cursor-pointer" onClick={() => release(catc.name)}>
                                                        <span>Release</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            :
                                <div className="flex justify-center items-center flex-col my-10">
                                    <p>You don&apos;t have any pokémon yet.</p>
                                    <Link href="/">
                                        <a>
                                            <button className="bg-red-500 text-white w-12/12 py-2 px-6 rounded-lg mt-5 text-sm">Explore Pokemon</button>
                                        </a>
                                    </Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bags