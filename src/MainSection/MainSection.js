import React from "react"
import DataEnterSection from "../DataEnterSection/DataEnterSection";

import "./MainSection.css"

const MainSection = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 com-sm-12">
                        <div className="mainSection">
                            <h3>To Do Things</h3>
                            <DataEnterSection />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default MainSection;