import "./Main.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function Main() {
    return ( <
        div className = "featured" >
        <
        div className = "featuredItem" >
        <
        span className = "featuredTitle" > Sales < /span> <
        div className = "featuredMoneyContainer" >
        <
        span className = "featuredMoney" > $13, 354 < /span> <
        span className = "featuredMoneyRate" >
        -4, 02 < ArrowDownward className = "featuredIcon negative" / >
        <
        /span> <
        /div> <
        span className = "featuredSub" > Compared to the last 3 months < /span> <
        /div> <
        div className = "featuredItem" >
        <
        span className = "featuredTitle" > Revanue < /span> <
        div className = "featuredMoneyContainer" >
        <
        span className = "featuredMoney" > $7, 756 < /span> <
        span className = "featuredMoneyRate" >
        -7.08 < ArrowDownward className = "featuredIcon negative" / >
        <
        /span> <
        /div> <
        span className = "featuredSub" > Compared to the last 3 months < /span> <
        /div> <
        div className = "featuredItem" >
        <
        span className = "featuredTitle" > Cost < /span> <
        div className = "featuredMoneyContainer" >
        <
        span className = "featuredMoney" > $6, 443 < /span> <
        span className = "featuredMoneyRate" >
        +5.85 < ArrowUpward className = "featuredIcon" / >
        <
        /span> <
        /div> <
        span className = "featuredSub" > Compared to the last 3 months < /span> <
        /div> <
        /div>
    );
}