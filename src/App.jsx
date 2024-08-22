import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "./components/About/About";

const App = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800 ,
      easing: "ease-in-out-sine",
      delay: 100
    });
  })

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme}/>
      <About theme={theme}/>
    </div>
  );
};

export default App;
