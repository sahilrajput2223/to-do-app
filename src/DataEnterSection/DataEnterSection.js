import React from "react"

import "./DataEntrySection.css"

const DataEnterSection = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="dataSection">
                    <input type="text" placeholder="e.g. take break" />
                    <button>Submit</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default DataEnterSection;