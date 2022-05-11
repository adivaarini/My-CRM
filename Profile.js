import {
    DateRange,
    LocationOn,
    Mail,
    Person,
    PhoneAndroid,
    Upload,
} from "@mui/icons-material";
import "./Profile.css";

export default function Profile() {
    return ( <
        div className = "user" >
        <
        div className = "userTitleContainer" >
        <
        h1 className = "userTitle" > Profile < /h1> <
        /div> <
        div className = "userContainer" >
        <
        div className = "userShow" >
        <
        div className = "userShowTop" >
        <
        img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAF545bwdjTvpt-72aAxRWqqgEcH-XG7VrtQ&usqp=CAU"
        alt = ""
        className = "userShowImg" /
        >
        <
        div className = "userShowTopTitle" >
        <
        span className = "userShowUsername" > Xiao Wei < /span> <
        span className = "userShowUserTitle" > Student of Computer Science in Tsinghua University < /span> <
        /div> <
        /div> <
        div className = "userShowBottom" >
        <
        span className = "userShowTitle" > Account Details < /span> <
        div className = "userShowInfo" >
        <
        Person className = "userShowIcon" / >
        <
        span className = "userShowInfoTitle" > xiaowei912 < /span> <
        /div> <
        div className = "userShowInfo" >
        <
        DateRange className = "userShowIcon" / >
        <
        span className = "userShowInfoTitle" > 12.09 .2001 < /span> <
        /div> <
        span className = "userShowTitle" > Contact Details < /span> <
        div className = "userShowInfo" >
        <
        PhoneAndroid className = "userShowIcon" / >
        <
        span className = "userShowInfoTitle" > +86 123456 < /span> <
        /div> <
        div className = "userShowInfo" >
        <
        Mail className = "userShowIcon" / >
        <
        span className = "userShowInfoTitle" > xiaowei912 @gmail.com < /span> <
        /div> <
        div className = "userShowInfo" >
        <
        LocationOn className = "userShowIcon" / >
        <
        span className = "userShowInfoTitle" > Beijing | RRC < /span> <
        /div> <
        /div> <
        /div> <
        div className = "userUpdate" >
        <
        span className = "userUpdateTitle" > Edit < /span> <
        form className = "userUpdateForm" >
        <
        div className = "userUpdateLeft" >
        <
        div className = "userUpdateItem" >
        <
        label > Username < /label> <
        input type = "text"
        placeholder = "xiaowei912"
        className = "userUpdateInput" /
        >
        <
        /div> <
        div className = "userUpdateItem" >
        <
        label > Full Name < /label> <
        input type = "text"
        placeholder = "Xiao Wei"
        className = "userUpdateInput" /
        >
        <
        /div> <
        div className = "userUpdateItem" >
        <
        label > Email < /label> <
        input type = "text"
        placeholder = "xiaowei912@gmail.com"
        className = "userUpdateInput" /
        >
        <
        /div> <
        div className = "userUpdateItem" >
        <
        label > Phone < /label> <
        input type = "text"
        placeholder = "+86 123456"
        className = "userUpdateInput" /
        >
        <
        /div> <
        div className = "userUpdateItem" >
        <
        label > Address < /label> <
        input type = "text"
        placeholder = "Beijing | RRC"
        className = "userUpdateInput" /
        >
        <
        /div> <
        /div> <
        div className = "userUpdateRight" >
        <
        div className = "userUpdateUpload" >
        <
        img className = "userUpdateImg"
        src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAF545bwdjTvpt-72aAxRWqqgEcH-XG7VrtQ&usqp=CAU"
        alt = "" /
        >
        <
        label htmlFor = "file" >
        <
        Upload className = "userUpdateIcon" / >
        <
        /label> <
        input type = "file"
        id = "file"
        style = {
            { display: "none" } }
        /> <
        /div> <
        button className = "userUpdateButton" > Update < /button> <
        /div> <
        /form> <
        /div> <
        /div> <
        /div>
    );
}