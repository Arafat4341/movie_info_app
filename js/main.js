$(document).ready(function(){
	$('#searchForm').on('submit', function(e){
		let searchText = $('#searchText').val();
		getMovies(searchText);
		e.preventDefault();
	});

	function getMovies(searchText){
		axios.get('http://www.omdbapi.com/?s='+searchText+'&apikey=9ec8e677').then(function(response){
			console.log(response);
		}).catch(function(err){
			console.log(err);
		});
	}
});