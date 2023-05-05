export default function Content() {
  return (
    <div className="content">
      <div className="content__containerLinks">
        <p1 className="content__containerLinksText">
          <a href="http://localhost:3000/">Home</a> ||
          <a href="http://localhost:3000/"> Car</a> ||
          <a href="http://localhost:3000/"> Auction</a>
        </p1>
      </div>

      <div className="content__containerAuction">
        <h2>Car auctions</h2>
        <p1>
          You'll find upcoming Car auctions scheduled for the next three weeks
          listed below. Looking for another kind of auction? Use these links{" "}
          <a href="http://localhost:3000/">
            Damaged & End of Life Auctions, Truck & Machinery Auctions
          </a>{" "}
          and <a href="http://localhost:3000/">General Goods Auctions</a>, or
          the navigation at the top of this page.
        </p1>
      </div>

      <div className="content__containerRegister">
        <div className="content__containerRegisterHeading">
          <h2>Registered to bid online?</h2>
        </div>

        <div className="content__containerRegisterTextBox">
          <ul>
            <li>Bid at home</li>
            <li>Bid at work</li>
            <li>Bid from anywhere in the world</li>
          </ul>
          <p1>
            To bid on auctions online, you need to register for Turners Live.
          </p1>
          <br></br>
          <br></br>
          <p1>
            If you haven't used it before, all you need to do is log into your
            Turners website account and register your credit card here.
          </p1>
          <br></br>
          <button>Register Now</button>
        </div>
      </div>
      <iframe
        allow="microphone;"
        width="350"
        height="430"
        src="https://console.dialogflow.com/api-client/demo/embedded/458e3595-b336-4a4f-8cf5-096f12a19ad6"
        className="chatBot"
      ></iframe>
    </div>
  );
}
