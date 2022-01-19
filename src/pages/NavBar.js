import {Link} from "react-router-dom";
import Badge from 'react-bootstrap/Badge'
import { useSelector } from "react-redux";


function NavBar() {
    const count =useSelector(state => state.count)
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
        <div className="container-fluid">
            
            <Link  className="navbar-brand" to="/" style={{fontSize:"2.5em" ,fontWeight:"bold" ,marginTop:"-5px"}}>Movies</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link  className="nav-link active" to="/" style={{fontSize:"1.5em" }}>Home</Link>
                <div>
                <Link  className="nav-link" to="/favorites" style={{fontSize:"1.5em" }}>Favorites 
                <Badge pill bg="warning" text="dark" className="far fa-star text-center" style={{maxWidth:"35px",width:"100%",maxHeight:"35px" ,height:"100%" ,display:"inline" ,position:"sticky" ,margin:"10px"}}>
                    {count}
                </Badge>
                
                </Link> 
                </div>
            </div>
            </div>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />  
                <Link  className="btn btn-outline-light" type="submit" to="/search" >Search</Link>
                <Link type="button" className="btn btn-warning" to="/signin" style={{marginLeft:"10px",marginRight:"10px" ,fontWeight:"bold" }}>SIGNIN</Link>
            </form>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>  
        </div>
        </nav>
);
}

export default NavBar;