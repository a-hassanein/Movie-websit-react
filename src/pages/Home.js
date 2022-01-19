import {useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import {allMovies ,genres} from "../network/network-Index";
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import { BsStar ,BsStarFill } from 'react-icons/bs'
import {useDispatch} from "react-redux";
import {addToFavPage} from '../store/action'




function Home(props ) {
    
    const [movies ,setMovies] =useState([])
    const [genresInPage, setGenresInPage] = useState([]);
    let pageNumber=1;
    let color="warning"
    let txtcolor="dark"
    let iconName="far fa-star"
    const fav_btn= document.getElementById("fav_btn");
    
    let chaneIcon = function(icon) {
        icon.classList.toggle('fas fa-star')
    }


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

    const dispatch = useDispatch();
    function addFav(movieId){
      console.log(movieId)
      dispatch(addToFavPage(movieId))
    }

    

    return(
        <>
            <div className="container-fluid text-center" style={{marginTop:"20px"  ,padding:"50px"}}>
                <div className="row">
                {movies.map((movie) =>{
                    if (movie.vote_average<6){
                        color="danger"
                        txtcolor="light"
                    }else{
                        color="warning"
                        txtcolor="dark"
                    }

                    if (Link.onClick){
                        iconName="fas fa-star"
                    }

                    let chaneIcon = function(icon) {
                        iconName="fas fa-star"
                    }


                    
                    return(
                            <div className="col-lg-2" key={movie.id} >
                                {/* <a href="#" className="text-warning" style={{marginLeft:"auto" ,display:"block" ,position:"relative",marginRight:"auto" ,marginRight:"auto" ,alignItems:"center" ,bottom:"20px" ,fontSize:"30px"}}><i> <BsStar></BsStar> </i></a> */}
                                <Card className=" mb-3" style={{borderStyle:"none"}}>
                                
                                    <Link to={`/movie/${movie.id}`} style={{textDecoration:"none" }}>
                                        <Badge pill bg={`${color}`} text={`${txtcolor}`} className="review-badge card-img-overlay text-center" style={{maxWidth:"35px",width:"100%",maxHeight:"20px",height:"100%",marginLeft:"auto" ,marginRight:"auto" ,top:"-10px"}}>
                                            {movie.vote_average}
                                        </Badge>
                                       <Card.Img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                                       </Link>
                                       <Link className="text-warning" id="fav_btn" style={{marginRight:"auto",display:"block" ,position:"relative",fontSize:"40px" ,top:"-65px" ,left:"10px"}}><i className={`${iconName}`} onClick={() =>addFav(movie)}></i></Link>
                                       <h3 style={{textDecoration:"none" ,color:"black" ,display:"block" ,position:"relative" ,top:"-40px"}}>{movie.title}</h3>
                                    </Card>
                                    
                                

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