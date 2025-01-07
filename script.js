const movies = [
    {
        "title": "Inception",
        "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        "posterUrl": "/api/placeholder/300/450",
        "releaseYear": 2010,
        "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
    },
    {
        "title": "The Shawshank Redemption",
        "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "posterUrl": "/api/placeholder/300/450",
        "releaseYear": 1994,
        "cast": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"]
    },
    {
        "title": "Pulp Fiction",
        "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        "posterUrl": "/api/placeholder/300/450",
        "releaseYear": 1994,
        "cast": ["John Travolta", "Samuel L. Jackson", "Uma Thurman"]
    },
    {
        "title": "The Matrix",
        "description": "A computer programmer discovers the true nature of his reality and his role in the war against its controllers.",
        "posterUrl": "/api/placeholder/300/450",
        "releaseYear": 1999,
        "cast": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
    },
    {
        "title": "Forrest Gump",
        "description": "The life story of Forrest Gump, a slow-witted but kind-hearted man from Alabama who witnesses and unwittingly influences several defining historical events.",
        "posterUrl": "/api/placeholder/300/450",
        "releaseYear": 1994,
        "cast": ["Tom Hanks", "Robin Wright", "Gary Sinise"]
    },
    {
        "title": "The Dark Knight",
        "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        "posterUrl": "/api/placeholder/300/450",
        "releaseYear": 2008,
        "cast": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
    },
    {
        "title": "Schindler's List",
        "description": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        "posterUrl": "/api/placeholder/300/450",
        "releaseYear": 1993,
        "cast": ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes"]
    },
    {
        "title": "Fight Club",
        "description": "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
        "posterUrl": "/api/placeholder/300/450",
        "releaseYear": 1999,
        "cast": ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"]
    },
    {
        "title": "Goodfellas",
        "description": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
        "posterUrl": "/api/placeholder/300/450",
        "releaseYear": 1990,
        "cast": ["Robert De Niro", "Ray Liotta", "Joe Pesci"]
    },
    {
        "title": "The Silence of the Lambs",
        "description": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        "posterUrl": "/api/placeholder/300/450",
        "releaseYear": 1991,
        "cast": ["Jodie Foster", "Anthony Hopkins", "Scott Glenn"]
    }
];
function createMovieList(){
    const movieListElement = document.getElementById('movieList');

}
movies.forEach(movie =>{
    const movieItem= document.createElement('div');
    movieItem.className = 'movie-item';

    const header=document.createElement('div');
    header.className='movie-header';
    header.innerHTML = `
            <span class="movie-title">${movie.title}</span>
            <span class="movie-year">${movie.releaseYear}</span>
        `;


    const details= document.createElement('div')
    details.className='movie-details';
    details.innerHTML= 
    <img src="${movie.posterUrl}"alt="${movie.title} poster" class="movie-poster">
    <div class="movie-info">
        <p>${movie.description}</p>
        <div class="cast-list">
            <strong>Cast:</strong> ${movie.cast.join(', ')}
        </div>
    </div> 


    header.addEventListener('click', () => {
        const currentlyActive = document.querySelector('.movie-details.active');
        if (currentlyActive && currentlyActive !== details) {
            currentlyActive.classList.remove('active');
        }
        details.classList.toggle('active');
    });
    movieItem.appendChild(header);
    movieItem.appendChild(details);
    movieListElement.appendChild(movieItem);
});

document.addEventListener('DOMContentLoaded', createMovieList);
