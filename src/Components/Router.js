import React from "react";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      {/* exact를 붙여줘야 정확히 일치하는 것만 인정. ex) /login, /course, /join 다 /로 인식됨. */}
      <Route path="/tv" component={TV} />
      {/* <Route path= "/tv/popular" render={() => <h1>Popular</h1>} />을 이용하면 두개 이상의 Route 랜더링 가능 = Composition */}
      <Route path="/search" component={Search} />
      <Redirect from="*" to="/" />
      {/* 일치하는 route가 하나도 없을시(이상한 route로 넘어가면) home으로 redirect 시켜줌. // switch는 한번에 하나의 route만 렌더링(두개의 route 한번에 렌더링 되는 것 방지.) */}
    </Switch>
  </Router>
);
