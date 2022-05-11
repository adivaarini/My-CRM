import Dashboard from "./components/Dashboard";
import Topbar from "./components/Topbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Beranda from "./components/Beranda";
import TodoApp from "./components/TodoApp";
import MemberList from "./pages/MemberList";
import Store from "./pages/Store";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import CS from "./pages/CS";

function App() {
    return ( <
        Router >
        <
        Topbar / >
        <
        div className = "container" >
        <
        Dashboard / >
        <
        Switch >
        <
        Route exact path = "/" >
        <
        Beranda / >
        <
        /Route> <
        Route path = "/todolist" >
        <
        TodoApp / >
        <
        /Route> <
        Route path = "/members" >
        <
        MemberList / >
        <
        /Route> <
        Route path = "/store" >
        <
        Store / >
        <
        /Route> <
        Route path = "/profile" >
        <
        Profile / >
        <
        /Route> <
        Route path = "/notification" >
        <
        Notifications / >
        <
        /Route> <
        Route path = "/chatting" >
        <
        CS / >
        <
        /Route> <
        Route path = "/product" >
        <
        Store / >
        <
        /Route> <
        /Switch> <
        /div> <
        /Router>
    );
}

export default App;