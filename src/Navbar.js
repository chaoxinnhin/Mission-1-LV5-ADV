import { ImSearch } from "react-icons/im";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav className="navbar__menu">
        <a href="http://localhost:3000/" className="navbar__menuLink">
          <ImSearch /> Find a Car
        </a>
        <a href="http://localhost:3000/" className="navbar__menuLink">
          How to Buy
        </a>
        <a href="http://localhost:3000/" className="navbar__menuLink">
          Sell your Car
        </a>
        <a href="http://localhost:3000/" className="navbar__menuLink">
          Finance & Insurance
        </a>
        <a href="http://localhost:3000/" className="navbar__menuLink">
          Turners Subscription
        </a>

        <div className="navbar__menuLink2">
          <a href="http://localhost:3000/" className="navbar__menuLink2L">
            Auctions
          </a>
          <a href="http://localhost:3000/" className="navbar__menuLink2L">
            Services & Info
          </a>
        </div>
      </nav>
    </div>
  );
}
