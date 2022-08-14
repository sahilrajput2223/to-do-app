import React from "react"

import "./DataListViewSection.css"

const DataListViewSection = ({ taskList }) => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        {taskList.map((task) => {
                            return (
                                <div className="taskDetailsView row" key={task.id}>
                                    <div className="col-md-6">
                                        {task.taskName}
                                    </div>
                                    <div className="col-md-6">
                                        <i className="fa fa-trash iconDesign" id="deleteIcon" aria-hidden="true"></i>
                                        <i className="fa fa-pencil iconDesign" id="editIcon" aria-hidden="true"></i>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default DataListViewSection;