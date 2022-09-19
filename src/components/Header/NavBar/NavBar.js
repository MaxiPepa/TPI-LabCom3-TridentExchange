import "./NavBar.css";

import SignIn from "../SingIn/SignIn";

const NavBar = () => {
  return (
    <header>
      <nav>
        <h1>Trident Exchanges</h1>

        <SignIn />
      </nav>
    </header>
  );
};

export default NavBar;
