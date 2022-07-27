import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import profile from "./images/smrft.png"
function home() {
    return (
        <div>
            <style>{'body { background-color: rgb(221, 240, 237); }'}</style>
            <div className="main">
                <img src={profile} className="smrft_logo" alt="logo" />
            </div>
            <NavbarComp />
        </div>
    );
}
export default home;