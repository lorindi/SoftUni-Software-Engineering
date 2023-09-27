export default function Header() {
  return (
    <div className="container-fluid">
      <div className="row hero-header" id="home">
        <div className="col-md-7">
          <img src="img/meetup-logo.png" className="logo" alt="Meetup Logo" />
          <h1>Attend the most awaited Conference of 2015</h1>
          <h3>to start you up with your business!</h3>
          <h4>
            20<sup>th</sup> to 22<sup>nd</sup> October, 2015
          </h4>
          <a href="#home" className="page-scroll">
            <span className="menu-title">Home</span>
            <span className="dot"></span>
          </a>
        </div>
        <div className="col-md-5 hidden-xs">
          <img
            src="img/rocket.png"
            className="rocket animated bounce"
            alt="Rocket"
          />
        </div>
      </div>
    </div>
  );
}
