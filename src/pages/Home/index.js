import { Container, MovieList, Movie } from "./styles";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const image_path = 'https://image.tmdb.org/t/p/w500'

function Home(){

     const [movies, setMovies] = useState([])

     useEffect(() =>{
        //consumir API

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1') //ADD API KEY
        .then(response => response.json())
        .then(data => setMovies(data.results))
     })

    return(
        <Container>
            <h1>Movies</h1>
            <MovieList>
                {movies.map(movie =>{
                    return(
                        <Movie key={movie.id}>

                            
                            <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title}></img></Link>
                            <spam>{movie.title}</spam>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>
    )
}

export default Home;