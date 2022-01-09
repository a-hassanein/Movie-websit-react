import {useState ,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {allMovies ,imagePath ,genres} from "../network/network-Index";
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import AllMovieCard from "../components/AllMovieCard"




function Home(props ) {
    
    const [movies ,setMovies] =useState([])
    const [genresInPage, setGenresInPage] = useState([]);
    let pageNumber=1;

    useEffect(() => {
        allMovies
        .get(`${pageNumber}`)
        .then((res) =>{
            console.log(res ,"response from get axios")
            setMovies(res.data.results)
        })
        .catch((err) =>{
            console.log(err ,"error from get axios")
        }) 

        genres
      .get("")
      .then((res) => res.data.genres)
      .then((fetchedGenres) => setGenresInPage(fetchedGenres));
      

    }, [])

    
    return(
        <>
        
            <div className="container-fluid text-center" style={{marginTop:"20px"  ,padding:"50px"}}>
                <div className="row">
                {movies.map((movie) =>{
                    return(
                            <div className="col-lg-2" key={movie.id} >
                                
                                
                                <Link to={`/movie/${movie.id}`} style={{textDecoration:"none" }}>
                                    
                                    <Card className=" mb-3">
                                        <Badge pill bg="warning" text="dark" className="review-badge card-img-overlay text-center" style={{maxWidth:"35px",width:"100%",maxHeight:"20px",height:"100%",marginLeft:"auto" ,marginRight:"auto" ,top:"-10px"}}>
                                            {movie.vote_average}
                                        </Badge>
                                        <Card.Img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                                                            
                                    </Card>
                                    <h3 style={{textDecoration:"none" ,color:"black"}}>{movie.title}</h3>
                                    {/* <div className="row">
                                    {genresInPage.map((genre) => (
                                        <div className="col" key={genre.id}>
                                        <p>{genre.name}</p>
                                        </div>
                                    ))}
                                    </div> */}
                                </Link>

                                
                            </div>   
                    )

                    
                
                })
                
                
                }
                </div>
            </div>
        </>
    );
}

export default Home;