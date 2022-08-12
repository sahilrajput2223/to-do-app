import React from "react"

import "./DataEntrySection.css"

const DataEnterSection = () => {

    const [task, setTask] = React.useState({ task: "" });
    const [taskList, setTaskList] = React.useState([]);

    const handleOnChangeEvent = () => {

    }

    const handleOnSubmitEvent = () => {

    }

    const handleOnResetEvent = () => {

    }

    return (
        <React.Fragment>
            <div className="container">
                <form className="dataSection">
                    <input type="text" id="todoTask" name="todoTask" placeholder="e.g. take break" />
                    <button>Submit</button>
                </form>

            </div>
        </React.Fragment>
    );
}

export default DataEnterSection;