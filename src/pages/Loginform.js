import {useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Link,useHistory} from "react-router-dom";

const LoginForm = (props) => {

    const history = useHistory();
    console.log(history ,"history from login")

    const [info, setInfo] = useState({
        userName: "",
        password: ""
    })

    const [error, setError] =useState({
        userNameValidate: null,
        passwordValidate: null
    })

    const changeValue = (e) => {
        console.log(e)
        if(e.target.name === "name"){
            setInfo({
                ...info,
                userName: e.target.value

            })

            const regex =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if(!(regex.test(e.target.value))){
                setError({
                    ...error,
                    userNameValidate: "Please enter valid email"
                })
            }else{
                setError({
                    ...error,
                    userNameValidate: null
                })
            }

        }else if (e.target.name === "userpassword"){
            setInfo({
                ...info,
                password: e.target.value
            })

            setError({
                ...error,
                passwordValidate:
                    e.target.value.length < 8 ?
                    "Please insert password with lingth 8 charcter"
                    :null
            })
        }
    }

    const handlesubmit = (e) =>{
        e.preventDefault();
        history.push({
            pathname:"/"
        })
    }


    return (
        <div className="container">
            <h1 className="text-center" style={{margin:"50px" ,fontWeight:"bold" ,fontSize:"5em"}}>SIGN IN</h1>
        <Form  onSubmit={(e) => handlesubmit(e)} style={{width:"100%" ,border:"solid 2px black" ,borderRadius:"10px" }} >
            <Form.Group className="mb-3" controlId="formBasicEmail" style={{paddingTop:"10px" ,paddingRight:"10px" ,paddingLeft:"10px"}}>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={info.userName}
                name="name"
                onChange={(e) => changeValue(e)}
                style={{padding:"10px" }}
                />
                <Form.Text className="text-muted">
                <small className="text-danger">{error.userNameValidate}</small>
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword" style={{paddingTop:"10px" ,paddingRight:"10px" ,paddingLeft:"10px"}}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={info.password}
                name ="userpassword"
                onChange={(e) => changeValue(e)}
                style={{padding:"10px" }}
                />
                <Form.Text className="text-muted">
                <small className="text-danger">{error.passwordValidate}</small>
                </Form.Text>
            </Form.Group>
            
            
            <Button variant="dark" type="submit" style={{marginBottom:"20px" ,position: "relative",display: "inline-block" ,textAlign: "center" ,left:"50%" ,width:"150px" ,padding:"10px" ,fontWeight:"bold" ,borderRadius:"10px" ,transform: "translateX(-50%)"}}>
            SIGNIN
            </Button>
            
        </Form>
        <Link  className="btn btn-link-dark text-center " type="button" to="/signup" style={{marginTop:"10px" ,position: "relative",display: "inline-block" ,textAlign: "center" ,left:"50%" ,padding:"10px" ,fontWeight:"bold" ,transform: "translateX(-50%)" ,textDecoration:"none"}} >Don't have account.SignUp ...</Link>
        </div>
    );
    
}

export default LoginForm;