import axios from "axios";
import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import {moviesInfo} from "../network/network-Index";
import {allMovies ,imagePath ,genres} from "../network/network-Index";


function Movie(props) {
    const params = useParams()
    const [movies ,setMovies] =useState([])
    const [genresInPage, setGenresInPage] = useState([]);
    let pageNumber=1;
    
    console.log(params, "params")
    console.log(props.match.params, "props")

    const [userInfo ,setInfo] = useState({})

    useEffect(() =>{
        moviesInfo
        .get(`${params.id}?api_key=2da9d36a0ac2209c177dc61e2e005ab4`)
        .then((res) =>{
            console.log(res,"response from monie info")
            setInfo(res.data)
        })
        .catch((err) =>{
            console.log(err ,"error from movie info")
        })
    },[])

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
    <div className="container-fluid" style={{marginTop:"50px" ,marginBottom:"50px"  }}>
        <div className="row">
            <div className="col-lg-6 col-md-12 text-center" >
                <img src={`https://image.tmdb.org/t/p/w500/${userInfo.poster_path}`} style={{borderRadius:"20px" ,width:"100%" ,maxWidth:"600px"}}/>
            </div>
            <div className="col-lg-6 col-md-12 " style={{marginTop:"50px"  ,padding:"50px"}}>
                <h1 className="text-center" style={{fontWeight:"bold" ,fontSize:"4.5em"}}>{userInfo.title}</h1>
                <p className="text-center" style={{color:"gray" ,marginBottom:"20px"}}>{userInfo.tagline}</p>

                <div className="row text-left " style={{ marginTop:"50px"}}>
                    <div className="col-lg-3 col-md-12 text-left">
                        <p style={{fontWeight:"bold" ,fontSize:"1.5em"}}>Overview</p> 
                    </div>
                    <div className="col-lg-9 col-md-12">
                        <p>{userInfo.overview}</p> 
                    </div>   
                </div>

                <div className="row">
                    <div className="col-3">
                        <p style={{fontWeight:"bold"}}>Status</p> 
                    </div>
                    <div className="col-9">
                        <p style={{display:"inline"}}>{userInfo.status}</p> 
                    </div>   
                </div>

                <div className="row">
                    <div className="col-3">
                        <p style={{fontWeight:"bold"}}>Release Date</p> 
                    </div>
                    <div className="col-9">
                        <p>{userInfo.release_date}</p> 
                    </div>   
                </div>

                <div className="row">
                    <div className="col-3">
                        <p style={{fontWeight:"bold"}}>Average Vote</p> 
                    </div>
                    <div className="col-9">
                        <p>{userInfo.vote_average}</p>
                    </div>   
                </div>

            </div>

        </div>

    </div>

    );

}

export default Movie;