import React from 'react'

import {SideDataAdmin} from './SideDataAdmin'

const SideBarAdmin = () => {
    return (
        <div className="sidebaradmin">
            <ul className="SidebarList">
                {/* Maps over an array of objects from the imported "SideDataAdmin" component */}
                {SideDataAdmin.map((val, key) => {
                    return (
                        // map() creates (li) element. The id is determined by checking 
                        // if the window location pathname is equal to the link of the current object in the array
                        // if path is equal to val.link then set it to active
                        <li 
                            key={key} 
                            className="row"
                            id={window.location.pathname == val.link ? "active" : ""}
                            onClick={()=> {
                                window.location.pathname = val.link;
                                }}
                        >
                        {/* display the icon and title properties of the current object in the array */}
                                <div id="icon">
                                    {val.icon}
                                </div>
                                <div id="title">
                                    {val.title}
                                </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default SideBarAdmin;