import Main from "./Main";
import NewMemberInfo from "./NewMemberInfo";
import LatTransInfo from "./LatTransInfo";
import "./Beranda.css";

export default function Beranda() {
    return ( <
        div className = "home" >
        <
        Main / >
        <
        div className = "homeWidgets" >
        <
        NewMemberInfo / >
        <
        LatTransInfo / >
        <
        /div> <
        /div>
    );
}