$(document).ready(() => {
	$('#searchForm').on('sumbit' , (e) => {
		let searchText = $('#searchText').val();
		getMovies(searchText);
		e.preventDefault();
});
});


function getMovies(searchText){
	axios.get('http://www.omdbapi.com?s='+searchText)
	.then((response) =>{
		console.log(response);
	})

	.catch((err) => {
		console.log(err);
	});

}