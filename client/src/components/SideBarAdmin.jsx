import React from 'react'

import {SideDataAdmin} from './SideDataAdmin'

const SideBarAdmin = () => {
    return (
        <div className="sidebaradmin">
            <ul className="SidebarList">
                {SideDataAdmin.map((val, key) => {
                    return (
                        <li 
                            key={key} 
                            className="row"
                            id={window.location.pathname == val.link ? "active" : ""}
                            onClick={()=> {
                                window.location.pathname = val.link;
                                }}
                        >
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