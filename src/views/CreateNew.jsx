import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import "./stylesheets/createnew.css"

function CreateNew() {
    return <>
        <Header />

        <main className="flex flex-col">
            <div>
                <div id="goback" className="card flex flex-col items-center">
                    <a href="list">&larr; My To Do List</a>
                </div>
                <form action="/list" className="m-auto">
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
