import "./MemberList.css";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../DummyData";
import { useState } from "react";

export default function MemberList() {
    const [data] = useState(userRows);

    const columns = [
        { field: "id", headerName: "No", width: 90 },
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                return ( <
                    div className = "userListUser" >
                    <
                    img className = "userListImg"
                    src = { params.row.avatar }
                    alt = "" / > { params.row.username } <
                    /div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "transaction",
            headerName: "Last Transaction Volume",
            width: 160,
        },

    ];

    return ( <
        div className = "userList" >
        <
        DataGrid rows = { data }
        columns = { columns }
        pageSize = { 8 }
        /> <
        /div>
    );
}