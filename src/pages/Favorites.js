import { Link } from "react-router-dom";
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
                                <Card className=" mb-3" style={{borderStyle:"none"}}>
                                
                                    <Link to={`/movie/${movie.id}`} style={{textDecoration:"none" }}>
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