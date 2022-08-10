import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Search = ({ click }) => {
    const [search, setSearch] = useState("")

    return (
        <div className="flex">
            <div className="flex">
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="border px-3 py-2 rounded" placeholder="search pokemon ..."/>
            </div>
            <div className="flex mx-0">
                <button className="bg-red-500 px-3 py-2 text-white rounded-r" onClick={() => click(search)}>
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
            </div>
        </div>
    )
}

export default Search