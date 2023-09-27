export default function Navigation(){
    return (
        <nav className="side-menu">
        <ul>
          <li className="hidden active">
            <a className="page-scroll" href="#page-top">
              A
            </a>
          </li>
          <li>
            <a href="#home" className="page-scroll">
              <span className="menu-title">Home</span>
              <span className="dot"></span>
            </a>
          </li>
          <li>
            <a href="#speakers" className="page-scroll">
              <span className="menu-title">Speakers</span>
              <span className="dot"></span>
            </a>
          </li>
          <li>
            <a href="#tickets" className="page-scroll">
              <span className="menu-title">Buy Tickets</span>
              <span className="dot"></span>
            </a>
          </li>
          <li>
            <a href="#schedule" className="page-scroll">
              <span className="menu-title">Schedule</span>
              <span className="dot"></span>
            </a>
          </li>
        </ul>
      </nav>
    )
}