import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home/index2";
import About from "./pages/about";
import Projects from "./pages/projects/index2";
import Contact from "./pages/contact";

import Header from "./layout/header/index";

const GlobalStyles = createGlobalStyle`
  *, 
  *:before, 
  *:after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.4rem;
    font-family: sans-serif;
    font-family: 'Inter', sans-serif;
    color: rgb(204, 214, 246);
    // background-color: #1f2743;
    background-color: #000;
  }

  h1{
    font-size: 70px;
    font-weight: 600;
  }
`;

const theme = {
    colors: {
        textColor: "rgb(204, 214, 246)",
        textColor2: "rgb(136, 146, 176)"
    }
};

const App = () => {
    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/contact" component={Contact} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </>
    );
};

export default App;
