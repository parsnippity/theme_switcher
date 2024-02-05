import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import { useContext, useState } from "react";
import ThemeContext from "./Context";

const App = () => {
  const [theme, setTheme] = useState("light");
  const setDarkTheme = () => {
    setTheme("dark");
  }
  const setLightTheme = () => {
    setTheme("light");
  }
  const setBlueTheme = () => {
    setTheme("blue");
  }

  return (
    <ThemeContext.Provider value={{setDarkTheme, setLightTheme, setBlueTheme, theme}}>
        <Content/>
    </ThemeContext.Provider>
  )
}

const Content = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Header/>
      <Navbar/>
      <MainContent/>
      <Footer/>
    </div>
  )
}

export default App