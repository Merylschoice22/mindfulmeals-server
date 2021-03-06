import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateFoodPost from "./components/CreateFoodPost";
import FoodFeed from "./pages/FoodFeed";
import MyMealPosts from "./pages/my-meal-posts/MyMealPosts";
import MyReservedFood from "./pages/my-reserved-food/MyReservedFood";
import "./index.css";
import "./App.css";
import Logout from "./pages/Logout";
import Unauth from "./pages/Unauth";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <div className="header-text"></div>
        </header>
        <Switch>
          <Route path="/" exact component={FoodFeed} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/unauth" exact component={Unauth} />
          <Route path="/post" exact component={CreateFoodPost} />
          <Route path="/my-meal-posts" exact component={MyMealPosts} />
          <Route path="/my-reserved-food" exact component={MyReservedFood} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
