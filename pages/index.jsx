import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import { getData } from "../adapter"
import Cards from "../components/cards.components"
import Search from "../components/search.componnets"
import { getStorage, setStorage } from "../helper/storage.helper"

const Home = () => {
	const [pokemon, setPokemon] = useState([])
	const [catched, setCatched] = useState(false)

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
				dataSearch.push(dataPokemon.data.results[l])
			}
		}

		setPokemon(dataSearch)
	}

	const catchPokemon = (value) => {
		let dataArray 	= []
		const dataCatch = getStorage("catch")

		if(dataCatch === null) {
			dataArray.push({
				name : value.name,
				owned : 1
			})

			const stringyfyCatch = JSON.stringify(dataArray)
			setStorage("catch", stringyfyCatch)
			setCatched(true)
			Swal.fire({
				title: 'success catch',
				text: `congratulation you catch ${value.name} !`,
				icon: 'success',
				confirmButtonColor : "#3085d6",
				confirmButtonText : "OK"
			}).then((result) => {
				if (result.isConfirmed) {
					setCatched(false)
				}
			})

		} else {
			let totalCatch = 1
			const parseCatch = JSON.parse(dataCatch)

			// count
			for(const l in parseCatch) {
				totalCatch += parseCatch[l].owned
			}

			if(totalCatch <= 10) {
				let sameName = []
				for(const i in parseCatch) {
					if(parseCatch[i].name === value.name) {
						sameName.push(parseCatch[i])
					}
				}

				if(sameName.length > 0) {
					for(const p in sameName) {
						for(const i in parseCatch) {
							if(sameName[p].name === parseCatch[i].name) {
								parseCatch[i].owned = parseInt(parseCatch[i].owned)+1
							}
						}
					}
				} else {
					dataArray.push({
						name : value.name,
						owned : 1
					})
				}

				setStorage("catch", JSON.stringify([...parseCatch, ...dataArray]))
				setCatched(true)
				Swal.fire({
					title: 'success catch',
					text: `congratulation you catch ${value.name} !`,
					icon: 'success',
					confirmButtonColor : "#3085d6",
					confirmButtonText : "OK"
				}).then((result) => {
					if (result.isConfirmed) {
						setCatched(false)
					}
				})
			} else {
				Swal.fire({
					title: 'Bag Full',
					text: "Your bag is full, release pokemon !",
					icon: 'warning',
					confirmButtonColor: '#3085d6',
					confirmButtonText: 'OK'
				})
			}
		}
	}

	return (
		<div className="flex flex-col mt-10">
			<div className="flex mx-2 justify-center">
				<Search click={searchPokemon} generate={randomPokemon}/>
			</div>
			<div className="flex mt-10 justify-center flex-wrap">
			{
				pokemon.map((poke,i) => {
					return (
						<Cards name={poke.name} key={i} catchPokemon={() => catchPokemon(poke)} refresh={catched}/>
					)
				})
			}
			</div>
		</div>
	)
}

export default Home