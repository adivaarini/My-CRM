import "./Topbar.css";
import { Translate, Settings, ShoppingCart, HistoryEdu } from "@mui/icons-material";

export default function Topbar() {
    return (

        <
        div className = "topbar" >
        <
        div className = "topbarWrapper" >
        <
        div className = "topLeft" >
        <
        span className = "logo" > CR - M < /span> <
        /div>

        <
        div className = "topRight" >
        <
        div className = "topbarIconContainer" >
        <
        ShoppingCart / >
        <
        span className = "topIconBadge" > 3 < /span> <
        /div> <
        div className = "topbarIconContainer" >
        <
        HistoryEdu / >
        <
        /div> <
        div className = "topbarIconContainer" >
        <
        Translate / >
        <
        /div> <
        div className = "topbarIconContainer" >
        <
        Settings / >
        <
        /div> <
        img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAF545bwdjTvpt-72aAxRWqqgEcH-XG7VrtQ&usqp=CAU"
        alt = ""
        className = "topAvatar" / >
        <
        /div> <
        /div> <
        /div>
    )
}