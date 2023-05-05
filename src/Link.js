import "./styles/_navlink.scss";

export default function Navlink() {
  return (
    <div className="navlink">
      <nav className="navlink__menu">
        <a href="http://localhost:3000/" className="navlink__menuLink">
          Cars
        </a>
        <a href="http://localhost:3000/" className="navlink__menuLink">
          Turners Subscription
        </a>
        <a href="http://localhost:3000/" className="navlink__menuLink">
          Trucks & Machinery
        </a>
        <a href="http://localhost:3000/" className="navlink__menuLink">
          Damaged & End of Life
        </a>
        <a href="http://localhost:3000/" className="navlink__menuLink">
          Motorcycles
        </a>
        <a href="http://localhost:3000/" className="navlink__menuLink">
          General Goods
        </a>
        <a href="http://localhost:3000/" className="navlink__menuLink">
          Buses, Caravans & Motorhomes
        </a>
      </nav>
    </div>
  );
}
