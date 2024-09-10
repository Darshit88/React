import "../style.css";


const Navbar = () => {
    return (
      <>
        <header>
          <div className="logo">
            <button>
              <i className="fa-solid fa-bars"></i>
            </button>
            <h1>logo</h1>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Service</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
}

export default Navbar;