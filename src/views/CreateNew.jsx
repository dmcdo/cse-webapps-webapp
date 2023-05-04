import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import "./stylesheets/createnew.css"

import { PutTask, UpdateTask, GetTaskById } from "../models/DB";

function CreateNew() {
    const id = new URLSearchParams(window.location.search).get("id");
    const fill = id ? GetTaskById({ id }) : {};

    if (!fill)
        return <>
        <Header />
        <Loading />
      </>

    const submittask = async (e) => {
        e.preventDefault();

        let name        = document.getElementsByName("taskName")       [0].value;
        let category    = document.getElementsByName("taskCategory")   [0].value;
        let urgency     = document.getElementsByName("taskUrgency")    [0].value;
        let startDate   = document.getElementsByName("taskStartDate")  [0].value;
        let endDate     = document.getElementsByName("taskEndDate")    [0].value;
        let location    = document.getElementsByName("taskLocation")   [0].value;
        let description = document.getElementsByName("taskDescription")[0].value;
        let status      = "In Progress";

        let missing = [];
        if (!name)        missing.push("name");
        if (!category)    missing.push("category");
        if (!urgency)     missing.push("urgency");
        if (!startDate)   missing.push("startDate");
        if (!endDate)     missing.push("endDate");
        if (!location)    missing.push("location");
        if (!description) missing.push("description");
        if (!status)      missing.pidh("status");
        if (missing.length > 0) {
            alert("Please fill out the following fields before submitting:\n" + missing.join("\n"));
            return;
        }

        try {
            await (id ? UpdateTask : PutTask)({
                id,
                name,
                category,
                urgency,
                startDate,
                endDate,
                location,
                description,
                status,
            });
        }
        catch (ex) {
            alert("Encountered an error trying to upload this task.");
            throw ex;
        }

        alert("Success!");
        window.location.replace("/list");
    };

    return <>
        <Header />

        <main className="flex flex-col">
            <div>
                <div id="goback" className="card flex flex-col items-center">
                    <a href="list">&larr; My To Do List</a>
                </div>
                <form className="m-auto" onSubmit={submittask}>
                    <div className="card flex flex-col items-center">
                    <label htmlFor="taskName">Task Name:</label>
                    <input type="text" name="taskName" defaultValue={fill.name || ""} />
                    <label htmlFor="taskCategory">Category:</label>
                    <input type="text" name="taskCategory" defaultValue={fill.category || ""} />
                    <label htmlFor="taskUrgency" defaultValue={fill.urgency || "Normal"}>Urgency:</label>
                    <select name="taskUrgency">
                        <option value="verylow">Very Low</option>
                        <option value="low">Low</option>
                        <option value="normal">Normal</option>
                        <option value="high">High</option>
                        <option value="veryhigh">Very High</option>
                    </select>
                    <label htmlFor="taskStartDate" >Start Date:</label>
                    <input type="date" name="taskStartDate" className="tdate" defaultValue={fill.startDate || "" } />
                    <label htmlFor="taskEndDate">End Date:</label>
                    <input type="date" name="taskEndDate" className="tdate" defaultValue={fill.endDate || "" } />
                    <label htmlFor="taskLocation">Location:</label>
                    <input type="text" name="taskLocation" id="taskLocationInput" defaultValue={fill.location || ""} />
                    <label htmlFor="taskDescription">Description:</label>
                    <textarea name="taskDescription" rows="8" defaultValue={fill.description || ""}></textarea>
                    </div>

                    <div className="flex">
                        <button type="submit" id="submit-button"
                                className="m-auto hover:scale-125 transition-all shadow-lg">
                                { id ? "Update Task" : "Create Task" }
                        </button>
                    </div>
                </form>
            </div>
        </main>

        <Footer />
    </>
}

export default CreateNew;
