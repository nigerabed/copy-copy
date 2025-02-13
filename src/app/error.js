"use client"

import { useEffect } from "react"

export default function Error({ error, reset }) {

	useEffect(function () {
		console.error(error)
	}, [error])

	return (
		<>
		<div className="flex flex-col justify-center items-center h-screen">
			<h1 className="text-white font-semibold text-[2em] text-center">Ups, noget gik galt :(</h1>
			<button className="text-black font-semibold text-[1.5em] bg-red-300 mt-[2em]" onClick={() => reset()}>Prøv igen</button>

		</div>
		</>
	)
}
