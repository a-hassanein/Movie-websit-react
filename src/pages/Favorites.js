import {useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import {allMovies ,genres} from "../network/network-Index";
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import {connect} from 'react-redux'
import {useDispatch} from "react-redux";
import {delFromFavePage} from '../store/action'



function Favorites(props) {

    const favinfo = props.favPage
    const dispatch = useDispatch();
    function delFav(favPage){
        dispatch(delFromFavePage(favPage))
    }

    return(
        <>
            <div className="container-fluid text-center" style={{marginTop:"20px"  ,padding:"50px"}}>
                <div className="row">
                {favinfo.map((movie) =>{
                    return(
                            <div className="col-lg-2" key={movie.id} >
                                {/* <a href="#" className="text-warning" style={{marginLeft:"auto" ,display:"block" ,position:"relative",marginRight:"auto" ,marginRight:"auto" ,alignItems:"center" ,bottom:"20px" ,fontSize:"30px"}}><i> <BsStar></BsStar> </i></a> */}
                                <Card className=" mb-3" style={{borderStyle:"none"}}>
                                
                                    <Link to={`/movie/${movie.id}`} style={{textDecoration:"none" }}>
                                        {/* <Badge pill bg={`${color}`} text={`${txtcolor}`} className="review-badge card-img-overlay text-center" style={{maxWidth:"35px",width:"100%",maxHeight:"20px",height:"100%",marginLeft:"auto" ,marginRight:"auto" ,top:"-10px"}}>
                                            {movie.vote_average}
                                        </Badge> */}
                                       <Card.Img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                                       </Link>
                                       <Link className="text-warning" id="fav_btn" style={{marginRight:"auto",display:"block" ,position:"relative",fontSize:"40px" ,top:"-65px" ,left:"10px"}}><i className={`fas fa-star`} onClick={() =>delFav(movie)}></i></Link>
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

function mapStateToProps(state){
    return {
        favPage: state.favPage
    }
 }

export default connect(mapStateToProps)(Favorites);