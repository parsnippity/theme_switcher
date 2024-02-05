import {useContext} from "react";
import ThemeContext from "../Context"

const Header = () => {
  const {setDarkTheme, setLightTheme, setBlueTheme} = useContext(ThemeContext);
  return (
    <div id="header">
        <h1>Introduction to Crochet</h1>
        <div>
          <h3>Theme:</h3>
          <button onClick={setLightTheme}>Light</button>
          <button onClick={setBlueTheme}>Blue</button>
          <button onClick={setDarkTheme}>Dark</button>
        </div>
    </div>
  )
}

export default Header