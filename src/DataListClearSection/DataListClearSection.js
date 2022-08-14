import React from "react"

import "./DataListClearSection.css"

const DataListClearSection = ({ clearTask }) => {
    return (
        <React.Fragment>
            <button className="taskClearBtn" onClick={clearTask}>Clear All Task</button>
        </React.Fragment>
    );
}

export default DataListClearSection;