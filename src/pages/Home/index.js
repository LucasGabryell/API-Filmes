import { Container, MovieList, Movie } from "./styles";

const movies =[
    {
        id: 1,
        title: 'Spider Man',
        image_url: "https://upload.wikimedia.org/wikipedia/pt/0/00/Spider-Man_No_Way_Home_poster.jpg"
    },
    {
        id: 2,
        title: 'Batman',
        image_url: "https://br.web.img3.acsta.net/pictures/22/03/02/19/26/3666027.jpg"
    },
    {
        id: 3,
        title: 'Avengers',
        image_url: "https://upload.wikimedia.org/wikipedia/pt/6/69/The_Avengers_Cartaz.jpg"
    }
]

function Home(){
    return(
        <Container>
            <h1>Movies</h1>
            <MovieList>
                {movies.map(movie =>{
                    return(
                        <Movie key={movie.id}>
                            <a href="https://google.com.br"><img src={movie.image_url} alt={movie.title}></img></a>
                            <spam>{movie.title}</spam>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>
    )
}

export default Home;