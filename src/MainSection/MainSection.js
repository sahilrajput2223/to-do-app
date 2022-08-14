import React from "react"
import DataEnterSection from "../DataEnterSection/DataEnterSection";
import DataListClearSection from "../DataListClearSection/DataListClearSection";
import DataListViewSection from "../DataListViewSection/DataListViewSection";

import "./MainSection.css"

const MainSection = () => {

    const [task, setTask] = React.useState({ taskName: "" });
    const [taskList, setTaskList] = React.useState([]);

    const handleOnChangeEvent = (event) => {
        const name = event.target.name
        const value = event.target.value
        setTask({ ...task, [name]: value });
    }

    const handleOnSubmitEvent = (event) => {
        event.preventDefault();
        const newTask = { ...task, id: new Date().getTime() }
        setTaskList([...taskList, newTask]);
        setTask({ taskName: "" })
    }

    const handleOnResetEvent = () => {

    }

    const clearAllTask = () => {
        setTaskList([])
    }

    const removeSpecificTask = (taskId) => {
        setTaskList(taskList.filter((task) => {
            return task.id !== taskId
        }))
    }

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 com-sm-12">
                        <div className="mainSection">
                            <h3>To Do Things</h3>
                            <DataEnterSection taskData={task} handleOnChangeEvent={handleOnChangeEvent} handleOnResetEvent={handleOnResetEvent} handleOnSubmitEvent={handleOnSubmitEvent} />
                            <DataListViewSection taskList={taskList} removeSpecificTask={removeSpecificTask} />
                            <DataListClearSection clearTask={clearAllTask} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default MainSection;