import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import "./stylesheets/createnew.css"

function CreateNew() {
    const submittask = (e) => {
        e.preventDefault();
        console.log(e);

        let name        = document.getElementsByName("taskName")       [0].value;
        let category    = document.getElementsByName("taskCategory")   [0].value;
        let urgency     = document.getElementsByName("taskUrgency")    [0].value;
        let startDate   = document.getElementsByName("taskStartDate")  [0].value;
        let endDate     = document.getElementsByName("taskEndDate")    [0].value;
        let location    = document.getElementsByName("taskLocation")   [0].value;
        let description = document.getElementsByName("taskDescription")[0].value;

        let missing = [];
        if (!name)        missing.push("name");
        if (!category)    missing.push("category");
        if (!urgency)     missing.push("urgency");
        if (!startDate)   missing.push("startDate");
        if (!endDate)     missing.push("endDate");
        if (!location)    missing.push("location");
        if (!description) missing.push("description");
        if (missing) {
            alert("Please fill out the following fields before submitting:\n" + missing.join("\n"));
            return;
        }
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
                    <label for="taskName">Task Name:</label>
                    <input type="text" name="taskName" placeholder="Untitled" />
                    <label for="taskCategory">Category:</label>
                    <input type="text" name="taskCategory" />
                    <label for="taskUrgency">Urgency:</label>
                    <select name="taskUrgency">
                        <option value="verylow">Very Low</option>
                        <option value="low">Low</option>
                        <option value="normal" selected="selected">Normal</option>
                        <option value="high">High</option>
                        <option value="veryhigh">Very High</option>
                    </select>
                    <label for="taskStartDate" >Start Date:</label>
                    <input type="date" name="taskStartDate" className="tdate" />
                    <label for="taskEndDate">End Date:</label>
                    <input type="date" name="taskEndDate" className="tdate" />
                    <label for="taskLocation">Location:</label>
                    <input type="text" name="taskLocation" id="taskLocationInput" />
                    <label for="taskDescription">Description:</label>
                    <textarea name="taskDescription" rows="8"></textarea>
                    </div>

                    <div className="flex">
                        <button type="submit" id="submit-button"
                                className="m-auto hover:scale-125 transition-all shadow-lg">Add Task</button>
                    </div>
                </form>
            </div>
        </main>

        <Footer />
    </>
}

export default CreateNew;
