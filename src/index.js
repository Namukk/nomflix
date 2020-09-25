import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App"; // .env 1번 줄이 src폴더부터 탐색하게 만들었기 때문에 그냥 "Components/App" 해도 됨.

ReactDOM.render(<App />, document.getElementById("root"));
