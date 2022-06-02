const Header = () => {
  return (
    <header className="header">
      <a className="header__logo" href="#">
        <span>Anywhere app</span>
      </a>
      <nav className="header__navigation navigation">
        <ul>
          <li>
            <a className="navigation__link" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="navigation__link" href="#">
              Join
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
