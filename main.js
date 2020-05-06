$(document).ready(() => {
	$('#searchForm').on('sumbit' , (e) => {
		let searchText = $('#searchText').val();
		getMovies(searchText);
		e.preventDefault();
});
});