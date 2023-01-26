import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import UpdateIcon from '@mui/icons-material/Update';
import ViewListIcon from '@mui/icons-material/ViewList';
import ReplyIcon from '@mui/icons-material/Reply';

export const SideDataAdmin = [
    {
        title: "Dashboard",
        icon: <HomeIcon />,
        link: "/AdminDash"
    },
    {
        title: "Respond to Complaints",
        icon: <ReplyIcon />,
        link: "/ResToComp"
    },
    {
        title: "Update status/Delete Complaints",
        icon: <UpdateIcon />,
        link: "/UpDelPage"
    },
    {
        title: "View (All) Residents Info",
        icon: <ViewListIcon />,
        link: "/ViewAllRes"
    }
   
]
