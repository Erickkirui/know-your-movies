// document.addEventListener('DOMContentLoaded', () =>{
// // input the movie name
// function searchForMovie(){
//  let input = document.querySelector("#searHere")
//  input.addEventListener('submit', (e) =>{
//     e.preventDefault()
//     handlesResponseForSearch(e.target.input.value)

//  })
// }
// searchForMovie()

// function handlesResponseForSearch(){
// 	const options = {
// 		method: 'GET',
// 		headers: {
// 			'X-RapidAPI-Key': '1824732eb8msh7c4d8ffd5cd9980p127228jsn9aa890e9e396',
// 			'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
// 		}}

// 	fetch('https://streaming-availability.p.rapidapi.com/v2/search/title?title=batman&country=us&show_type=movie&output_language=en', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response) )
// 	.then( data => {
// 		const showResults = document.querySelector("#results")
// 		showResults.textContent = ""
// 		data.results.forEach(results => {
// 			const yourResults = document.createElement('li')
// 			yourResults.textContent = results.title;
// 			showResults.appendChild(yourResults)
// 		})})
// 	}
// 	}

// )


	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '1824732eb8msh7c4d8ffd5cd9980p127228jsn9aa890e9e396',
			'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
		}}

	fetch('https://streaming-availability.p.rapidapi.com/v2/search/title?title=batman&country=us&show_type=movie&output_language=en', options)
	.then(response => response.json())
	.then(response => console.log(response) )
	.then( result => console.log(result.type))







