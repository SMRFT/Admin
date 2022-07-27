import './home.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
//import NavbarComp from './Components/NavbarComp';
import profile from "./images/smrft.png"
function Adminlogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:7000/attendance/adminlog', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        const content = await response.json();

        console.log(content)



        //props.setName(content.name);

        if (content.jwt) {
            setRedirect(true);
        }



    }

    if (redirect) {
        navigate('/home');
    }

    return (
        <div>
            <style>{'body { background-color: rgb(221, 240, 237); }'}</style>
            <div className="main">
                <img src={profile} className="smrft_logo" alt="logo" />
            </div>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal"><center>Admin Login</center></h1>
                <input type="email" className="form-control" placeholder="Email address" required
                    onChange={e => setEmail(e.target.value)}
                />

                <input type="password" className="form-control" placeholder="Password" required
                    onChange={e => setPassword(e.target.value)}
                />

                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>


        </div>
    );
}
export default Adminlogin;