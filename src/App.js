import "./styles/styles.scss";
import Navlink from "./Link";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Content from "./Content";

function App() {
  return (
    <div className="main">
      <Navlink></Navlink>
      <Logo></Logo>
      <Navbar></Navbar>
      <div className="content__box">
        <Content></Content>
      </div>
    </div>
  );
}

export default App;
