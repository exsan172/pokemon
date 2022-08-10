import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faArrowsRotate } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Search = ({ click, generate }) => {
    const [search, setSearch] = useState("")

    const submit = () => {
        click(search)
        setSearch("")
    }

    return (
        <div className="flex">
            <div className="flex">
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="border px-3 py-2 rounded" placeholder="search pokemon ..."/>
            </div>
            <div className="flex mx-2">
                <button className="bg-red-500 px-4 py-2 text-white rounded-md" onClick={() => submit()}>
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
                <button className="bg-red-500 px-3 py-2 text-white rounded-md mx-2" onClick={() => generate()}>
                    <FontAwesomeIcon icon={faArrowsRotate}/>
                </button>
            </div>
        </div>
    )
}

export default Search