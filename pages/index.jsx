import { useEffect, useState } from "react"
import { getData } from "../adapter"
import Cards from "../components/cards.components"
import Search from "../components/search.componnets"

const Home = () => {
	const [pokemon, setPokemon] = useState([])

	useEffect(() => {
		randomPokemon()
	}, [])

	const randomPokemon = async () => {
		let dataRandom = []

		const dataPokemon = await getData("pokemon", {
			offset : 0,
			limit  : 1154
		})

		for(let i=0; i<5; i++) {
			const randomNumber = Math.floor(Math.random() * 1154)
			dataRandom.push(dataPokemon.data.results[randomNumber])
		}

		setPokemon(dataRandom)
	}

	const searchPokemon = async (data) => {
		let dataSearch = []
		const dataPokemon = await getData("pokemon", {
			offset : 0,
			limit  : 1154
		})

		for(const l in dataPokemon.data.results) {
			if(dataPokemon.data.results[l].name.indexOf(data) !== -1) {
				console.log("i => ", l);
				dataSearch.push(dataPokemon.data.results[l])
			}
		}

		setPokemon(dataSearch)
	}

	return (
		<div className="flex flex-col mt-10">
			<div className="flex mx-2">
				<Search click={searchPokemon}/>
			</div>
			<div className="flex mt-5 justify-center flex-wrap">
			{
				pokemon.map((poke,i) => {
					return (
						<Cards name={poke.name} key={i}/>
					)
				})
			}
			</div>
		</div>
	)
}

export default Home