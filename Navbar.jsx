import React, {useState, useEffect} from "react";
import SignInButton from "./SignInButton";
import Logo from "./images/logo.png";

const Navbar = ({choose}) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  return (
    <nav className="navbar">
      {user ? <>
        {!choose ? (
          <>
            <p></p>
            <p style={{marginLeft: "36px"}}>Today</p>
            <p><i style={{color: "white"}}className="fa fa-bars button small-btn newRoundedEdgeNav"></i></p>
          </>
        ) : (
          <>
            <p></p>
            <p>Search for...</p>
            <p></p>
          </>
        )}
      </>
      : <>
        <p>Nutritonalist</p>
        <SignInButton text={"Log in with Google"}/>
      </>}

    </nav>
  )
}

export default Navbar;
