import KuvaLogo from "../media/KuvaLogo.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function NavigationBar() {
  const navItem = {
    color: "white",
    marginTop: "10%",
    textDecoration: "none"
  }
  const navContainer = {
    height: "100%",
    width: "15%",
    backgroundColor: "#222222",
  }
  return (
    <div
      style={navContainer}
    >
      <img style={{ width: "95%" }} src={KuvaLogo} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Router>
          <Link to="/" style={navItem}> Home </Link>
          <Link to="/" style={navItem}> Active Events </Link>
          <Link to="/" style={navItem}> Monitored Events </Link>
        </Router>
      </div>
    </div>
  );
}

export default NavigationBar;
