import "./Dashboard.css";
import { Home, Group, Store, PermIdentity, Chat, Notes, CircleNotifications } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return ( <
        div className = "sidebar" >
        <
        div className = "sidebarWrapper" >
        <
        div className = "sidebarMenu" >
        <
        h3 className = "sidebarTitle" > Dashboard < /h3> <
        ul className = "sidebarList" >
        <
        Link to = "/"
        className = "link" >
        <
        li className = "sidebarListItem active" >
        <
        Home className = "sidebarIcon" / >
        Beranda <
        /li> <
        /Link> <
        Link to = "/todolist"
        className = "link" >
        <
        li className = "sidebarListItem" >
        <
        Notes className = "sidebarIcon" / >
        To Do List <
        /li>      <
        /Link> <
        /ul> <
        div className = "sidebarMenu" >
        <
        h3 className = "sidebarTitle" > Featured Menu < /h3> <
        ul className = "sidebarList" >
        <
        Link to = "/members"
        className = "link" >
        <
        li className = "sidebarListItem" >
        <
        Group className = "sidebarIcon" / >
        Members <
        /li> <
        /Link> <
        Link to = "/store"
        className = "link" >
        <
        li className = "sidebarListItem" >
        <
        Store className = "sidebarIcon" / >
        Product <
        /li> <
        /Link> <
        Link to = "/profile"
        className = "link" >
        <
        li className = "sidebarListItem" >
        <
        PermIdentity className = "sidebarIcon" / >
        Profile <
        /li> <
        /Link> <
        /ul> <
        div className = "sidebarMenu" >
        <
        h3 className = "sidebarTitle" > Communication < /h3> <
        ul className = "sidebarList" >
        <
        Link to = "/notification"
        className = "link" >
        <
        li className = "sidebarListItem" >
        <
        CircleNotifications className = "sidebarIcon" / >
        Notification <
        /li> <
        /Link> <
        Link to = "/chatting"
        className = "link" >
        <
        li className = "sidebarListItem" >
        <
        Chat className = "sidebarIcon" / >
        Chatting <
        /li>      <
        /Link> <
        /ul> <
        /div> <
        /div> <
        /div> <
        /div>    <
        /div>
    )
}