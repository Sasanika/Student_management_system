import Table from "../../common/component/Table/Table.jsx";
import {Button} from "@mui/material";


export default function ViewStudent(){

    const columns = [
        { id: 'name', label: 'Name', minWidth: 170 },
        { id: 'age', label: 'Age', minWidth: 100 },
        {
            id: 'contact',
            label: 'Contact Number',
            minWidth: 170,
            align: 'center',
        },
        {
            id: 'address',
            label: 'Address',
            minWidth: 170,
            align: 'left',
        },

    ];

    const rows = [
        {name:"Sasanika",age : 23, contact : "0111111111", address:(<Button variant="contained">Contained</Button>)},
        {name:"Sasanika",age : 23, contact : "0111111111", address:"Kandy"},
        {name:"Sasanika",age : 23, contact : "0111111111", address:"Kandy"},
        {name:"Sasanika",age : 23, contact : "0111111111", address:"Kandy"},
        {name:"Sasanika",age : 23, contact : "0111111111", address:"Kandy"},
        {name:"Sasanika",age : 23, contact : "0111111111", address:"Kandy"},

    ]

    return(
        <div>
            <Table rows={rows} columns={columns}/>
        </div>
    );
}