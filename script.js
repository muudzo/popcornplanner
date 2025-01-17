const movies = [
    {
      "title": "The Shawshank Redemption",
      "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      "cast": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      "release_year": 1994,
      "image_url": "images/tsr.jpg"
    },
    {
      "title": "The Godfather",
      "description": "The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.",
      "cast": ["Marlon Brando", "Al Pacino", "James Caan"],
      "release_year": 1972,
      "image_url": "images/tg.jpg"
    },
    {
      "title": "The Dark Knight",
      "description": "When the menace known as the Joker emerges, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      "cast": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      "release_year": 2008,
      "image_url": "images/tdk.jpg"
    },
    {
      "title": "Pulp Fiction",
      "description": "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      "cast": ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
      "release_year": 1994,
      "image_url": "images/pf.jpg"
    },
    {
      "title": "Forrest Gump",
      "description": "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
      "cast": ["Tom Hanks", "Robin Wright", "Gary Sinise"],
      "release_year": 1994,
      "image_url": "images/fg.jpg"
    },
    {
      "title": "Inception",
      "description": "A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea into the mind of a CEO.",
      "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
      "release_year": 2010,
      "image_url": "images/in.jpg"
    },
    {
      "title": "Fight Club",
      "description": "An insomniac office worker and a soap salesman form an underground fight club that evolves into much more.",
      "cast": ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
      "release_year": 1999,
      "image_url": "images/fc.jpg"
    },
    {
      "title": "The Matrix",
      "description": "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
      "cast": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      "release_year": 1999,
      "image_url": "images/tm.jpg"
    },
    {
      "title": "The Lord of the Rings: The Fellowship of the Ring",
      "description": "A meek Hobbit and his companions set out on a journey to destroy the One Ring and save Middle-earth.",
      "cast": ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
      "release_year": 2001,
      "image_url": "images/tlr.jpg"
    },
    {
      "title": "The Lion King",
      "description": "A young lion prince flees his kingdom after the murder of his father, only to learn the true meaning of responsibility and bravery.",
      "cast": ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
      "release_year": 1994,
      "image_url": "images/tlk.jpg"
    }
  ];

  
  
  
  
  
  
  
  let watchlist = [];
  
  
  
  function createMovieList() {
      const movieListElement = document.getElementById('movieList');

      movies.forEach(movie => {
          const movieItem = document.createElement('div');
          movieItem.className = 'movie-item';

          const header = document.createElement('div');
          header.className = 'movie-header';
          header.textContent = `${movie.title} (${movie.release_year})`;

          const details = document.createElement('div');
          details.className = 'movie-details';

          const poster = document.createElement('img');
          poster.src = movie.image_url;
          poster.alt = `${movie.title} Poster`;
          poster.className = 'movie-poster';

          const description = document.createElement('p');
          description.textContent = movie.description;

          const cast = document.createElement('div');
          cast.className = 'movie-cast';
          cast.textContent = `Cast: ${movie.cast.join(', ')}`;

          const addToWatchlistButton = document.createElement('button');
          addToWatchlistButton.textContent = "Add to Watchlist";
          addToWatchlistButton.className = 'watchlist-button';
          addToWatchlistButton.addEventListener('click', () => {
              if (!watchlist.includes(movie)) {
                  watchlist.push(movie);
                  updateWatchlist();
              }
          });

          details.appendChild(poster);
          details.appendChild(description);
          details.appendChild(cast);
          details.appendChild(addToWatchlistButton);  

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
  }

  function updateWatchlist() {
      const watchlistElement = document.getElementById('watchlist');
      watchlistElement.innerHTML = '';
      watchlist.forEach(movie => {
          const movieItem = document.createElement('div');
          movieItem.className = 'movie-item';
          movieItem.innerHTML = `
              <div class="movie-header">${movie.title} (${movie.release_year})</div>
          `;
          watchlistElement.appendChild(movieItem);
      });
  }

  document.addEventListener('DOMContentLoaded', createMovieList);