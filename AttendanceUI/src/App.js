import './App.css';
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const navigateToAdmin = () => {
    navigate('/adminlogin');
  };
  const navigateToLogin = () => {
    navigate('/home');
  };
  const navigateToLogout = () => {
    navigate('/home');
  };
  return (
    <div>
      <style>{'body { background-color:rgb(221, 240, 237); }'}</style>
      <div className="Appnew" body >
        <div>
          <button class='button1' onClick={navigateToAdmin}>Admin</button>
          <button class='button2' onClick={navigateToLogin}>Login</button>
          <button class='button3' onClick={navigateToLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}
export default App;