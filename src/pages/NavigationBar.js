import KuvaLogo from "../media/KuvaLogo.png";

function NavigationBar() {
  const navItem = {
    color: "white",
    marginTop: "10%",
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
        <span style={navItem}> Home </span>
        <span style={navItem}> Active Events </span>
        <span style={navItem}> Monitored Events </span>
      </div>
    </div>
  );
}

export default NavigationBar;
