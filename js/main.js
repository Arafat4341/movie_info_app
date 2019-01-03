$(document).ready(function(){
	$('#searchForm').on('submit', function(e){
		let searchText = $('#searchText').val();
		getMovies(searchText);
		e.preventDefault();
	});

	function getMovies(searchText){
		axios.get('http://www.omdbapi.com/?s='+searchText+'&apikey=9ec8e677').then(function(response){
			let movies = response.data.Search;
			let output = '';
			$.each(movies, function(index, movie){
				output += `
					<div class="col-md-3">
						<div class="well text-center">
							<img src="${movie.Poster}">
							<h5>${movie.Title}</h5>
							<button onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary">Movie Detail</button>
						</div>
					</div>
				`;
			});

			$('#movies').html(output);

		}).catch(function(err){
			console.log(err);
		});
	}

	function movieSelected(id){
		sessionStorage.setItem('movieId', id);
		window.location = 'movie.html';
		return false;
	}

	function getMovie(){
		let movieId = sessionStorage.getItem('movieId');


		axios.get('http://www.omdbapi.com/?i='+movieId+'&apikey=9ec8e677').then(function(response){
			console.log(response);

		}).catch(function(err){
			console.log(err);
		});

	}
});