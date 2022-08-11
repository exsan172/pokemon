import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { getData } from "../adapter"

const Detail = () => {
    const router   = useRouter()
    const { name } = router.query
    const [detailData, setDetailData] = useState([])

    useEffect(() => {
        getDetail(name)
    }, [name])

    const getDetail = async (value) => {
        const detail = await getData(`pokemon/${value}`)
        setDetailData(detail.data)
    }

    return (
        <>
            {
                detailData.length !== 0 ?
                <div className="flex mt-20 px-3 justify-center mb-10">
                    <div className="flex w-11/12 md:w-6/12 flex-col items-center">
                        <div className="flex mb-20 flex-col">
                            <div className="flex">
                                <span className="font-bold text-4xl capitalize">{detailData.name}</span>
                            </div>
                            <div className="flex mt-4 justify-center">
                                {
                                    detailData.types.map((type, i) => {
                                        return (
                                            <span className="mx-1 bg-red-500 px-5 py-2 rounded-full text-white text-xs capitalize" key={i}>{type.type.name}</span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="flex shadow w-full px-6 py-5 rounded-xl border flex-col">
                            <div className="flex">
                                <span className="text-lg font-bold">Basic Information</span>
                            </div>
                            <div className="flex mt-5 flex-col">
                                <div className="flex my-1">
                                    <div className="flex w-8/12 md:w-3/12 text-gray-500">
                                        Owned
                                    </div>
                                    <div className="flex w-8/12">
                                        <span>0</span>
                                    </div>
                                </div>
                                <div className="flex my-1">
                                    <div className="flex w-8/12 md:w-3/12 text-gray-500">
                                        Height
                                    </div>
                                    <div className="flex w-8/12">
                                        <span>{detailData.height} "</span>
                                    </div>
                                </div>
                                <div className="flex my-1">
                                    <div className="flex w-8/12 md:w-3/12 text-gray-500">
                                        Weight
                                    </div>
                                    <div className="flex w-8/12">
                                        <span>{detailData.weight} lbs</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex shadow w-full px-6 py-5 rounded-xl border flex-col mt-5">
                            <div className="flex">
                                <span className="text-lg font-bold">Base Stats</span>
                            </div>
                            <div className="flex mt-5 flex-col">
                                <div className="flex my-1 items-center">
                                    <div className="flex w-8/12 md:w-3/12 text-gray-500">
                                        HP
                                    </div>
                                    <div className="flex w-8/12">
                                        <div className="flex mr-2 w-1/12">
                                            <span className="text-xs font-bold">{detailData.stats[0].base_stat}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-red-500 h-2.5 rounded-full" style={{ width: detailData.stats[0].base_stat > 100 ? 100+"%" : detailData.stats[0].base_stat+"%" }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex my-1 items-center">
                                    <div className="flex w-8/12 md:w-3/12 text-gray-500">
                                        Attack
                                    </div>
                                    <div className="flex w-8/12">
                                        <div className="flex mr-2 w-1/12">
                                            <span className="text-xs font-bold">{detailData.stats[1].base_stat}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-red-500 h-2.5 rounded-full" style={{ width: detailData.stats[1].base_stat > 100 ? 100+"%" : detailData.stats[1].base_stat+"%" }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex my-1 items-center">
                                    <div className="flex w-8/12 md:w-3/12 text-gray-500">
                                        Defense
                                    </div>
                                    <div className="flex w-8/12">
                                        <div className="flex mr-2 w-1/12">
                                            <span className="text-xs font-bold">{detailData.stats[2].base_stat}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-red-500 h-2.5 rounded-full" style={{ width: detailData.stats[2].base_stat > 100 ? 100+"%" : detailData.stats[2].base_stat+"%" }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex my-1 items-center">
                                    <div className="flex w-8/12 md:w-3/12 text-gray-500">
                                        Sp. Attack
                                    </div>
                                    <div className="flex w-8/12">
                                        <div className="flex mr-2 w-1/12">
                                            <span className="text-xs font-bold">{detailData.stats[3].base_stat}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-red-500 h-2.5 rounded-full" style={{ width: detailData.stats[3].base_stat > 100 ? 100+"%" : detailData.stats[3].base_stat+"%" }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex my-1 items-center">
                                    <div className="flex w-8/12 md:w-3/12 text-gray-500">
                                        Sp. Defense
                                    </div>
                                    <div className="flex w-8/12">
                                        <div className="flex mr-2 w-1/12">
                                            <span className="text-xs font-bold">{detailData.stats[4].base_stat}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-red-500 h-2.5 rounded-full" style={{ width: detailData.stats[4].base_stat > 100 ? 100+"%" : detailData.stats[4].base_stat+"%" }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex my-1 items-center">
                                    <div className="flex w-8/12 md:w-3/12 text-gray-500">
                                        Speed
                                    </div>
                                    <div className="flex w-8/12 items-center">
                                        <div className="flex mr-2 w-1/12">
                                            <span className="text-xs font-bold">{detailData.stats[5].base_stat}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-red-500 h-2.5 rounded-full" style={{ width: detailData.stats[5].base_stat > 100 ? 100+"%" : detailData.stats[5].base_stat+"%" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {
                            detailData.moves.length > 0 &&
                            <div className="flex shadow w-full px-6 py-5 rounded-xl border flex-col mt-5">
                                <div className="flex">
                                    <span className="text-lg font-bold">Moves</span>
                                </div>
                                <div className="flex mt-5 flex-wrap">
                                    {
                                        detailData.moves.map((mv, i) => {
                                            return (
                                                <span className="px-4 py-2 rounded-full border m-1 text-xs" key={i}>{mv.move.name}</span>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </div>
                :
                <div className="flex w-full justify-center mt-10">
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"/>
                    Loading, please wait ...
                </div>
            }
        </>
    )
}

export default Detail