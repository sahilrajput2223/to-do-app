import React from "react"

import "./DataEntrySection.css"

const DataEnterSection = ({ taskData, handleOnChangeEvent, handleOnResetEvent, handleOnSubmitEvent, idEdit }) => {

    return (
        <React.Fragment>
            <div className="container">
                <form className="dataSection" onSubmit={handleOnSubmitEvent} onReset={handleOnResetEvent}>
                    <input type="text" id="todoTask" name="taskName" placeholder="e.g. take break" onChange={handleOnChangeEvent} value={taskData.taskName} />
                    <button> {idEdit || 'Submit'} {!idEdit || 'Edit'}</button>
                </form>
            </div>
        </React.Fragment>
    );
}

export default DataEnterSection;