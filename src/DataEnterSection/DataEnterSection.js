import React from "react"

import "./DataEntrySection.css"

const DataEnterSection = () => {

    const [task, setTask] = React.useState({ taskName: "" });
    const [taskList, setTaskList] = React.useState([]);

    const handleOnChangeEvent = (event) => {
        const name = event.target.name
        const value = event.target.value
        setTask({ ...task, [name]: value });
    }

    const handleOnSubmitEvent = (event) => {
        event.preventDefault();
        setTaskList([...taskList, task]);
        setTask({ taskName: "" })
    }

    const handleOnResetEvent = () => {

    }

    return (
        <React.Fragment>
            <div className="container">
                <form className="dataSection" onSubmit={handleOnSubmitEvent} onReset={handleOnResetEvent}>
                    <input type="text" id="todoTask" name="taskName" placeholder="e.g. take break" onChange={handleOnChangeEvent} value={task.taskName} />
                    <button>Submit</button>
                </form>

            </div>
        </React.Fragment>
    );
}

export default DataEnterSection;