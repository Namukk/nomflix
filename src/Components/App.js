import React, { Component } from "react";
import Router from "./Router";
import GlobalStyles from "Components/GlobalStyles";

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </> //원래 React는 하나의 components만 return 가능 하지만 <></> 안에 집어넣으면 여러개 return 가능
    );
  }
}

export default App;
