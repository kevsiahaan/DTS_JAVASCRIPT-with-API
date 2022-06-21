const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aed52fab33msha73f52f997a7412p1d3d55jsncb5e67d811bc',
		'X-RapidAPI-Host': 'movie-details1.p.rapidapi.com'
	}
};

async function ambildata (){
	let result = fetch('https://movie-details1.p.rapidapi.com/imdb_api/movie?id=tt1375666', options)
	.then(response => response.json())
	.then(response => displayData(response))
	.catch(err => console.error(err));
};


function displayData(response){
	console.log(response)
	var actors = ``
	response.actors.forEach(actor => {
		actors+= `<p class="price">${actor["name"]}</p>\n`
	});
	document.getElementById("cards").innerHTML=
	`<div class="card">
		<h1 class="title">${response.title}</h1>
		<img src="${response.image}" alt="img" height = "500" width "300">
		<p>${response.description}</p>
		<p class=" category">${response.genres}</p>
		<p class="price">${response.rating}</p>
		${actors}
	</div>`
}