
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ViewStudent from "../../pages/viewStudent/ViewStudent.jsx";

const routes = [
    {
        name:"View Student",
        key:"viewStudent",
        component:<ViewStudent/>,
        path:"/viewStudent",
        icon:<InboxIcon/>
    },
];

export default routes;
