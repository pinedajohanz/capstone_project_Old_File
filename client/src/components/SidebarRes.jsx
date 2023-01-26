import React from 'react'

import {SideDataRes} from './SideDataRes'

const SidebarRes = () => {
    return (
        <div className="container-sidebar">
            <div className="sidebarresident">
                <ul className="SidebarList">
                    {SideDataRes.map((val, key) => {
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
        </div>
    );
}

export default SidebarRes;
