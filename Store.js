import "./Store.css";
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../DummyData";
import { useState } from "react";

export default function Store() {
    const [data] = useState(productRows);

    const columns = [
        { field: "id", headerName: "No", width: 90 },
        {
            field: "product",
            headerName: "Product",
            width: 200,
            renderCell: (params) => {
                return ( <
                    div className = "productListItem" >
                    <
                    img className = "productListImg"
                    src = { params.row.img }
                    alt = "" / > { params.row.name } <
                    /div>
                );
            },
        },
        { field: "stock", headerName: "Stock", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "price",
            headerName: "Price",
            width: 160,
        },

    ];

    return ( <
        div className = "productList" >
        <
        DataGrid rows = { data }
        columns = { columns }
        pageSize = { 8 }
        /> <
        /div>
    );
}