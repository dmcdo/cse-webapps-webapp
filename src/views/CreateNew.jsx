import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function CreateNew() {
    return <>
        <Header />

        <main className="flex flex-col">
            <div>
                <div id="goback">
                    <a href="list">&larr; My To Do List</a>
                </div>
                <form action="/list" className="m-auto">
                    <label for="taskName">Task Name:</label> <br />
                    <input type="text" name="taskName" placeholder="Untitled" /> <br />
                    <label for="taskCategory">Category:</label> <br />
                    <input type="text" name="taskCategory" /> <br />
                    <label for="taskUrgency">Urgency:</label> <br />
                    <select name="taskUrgency">
                        <option value="verylow">Very Low</option>
                        <option value="low">Low</option>
                        <option value="normal" selected="selected">Normal</option>
                        <option value="high">High</option>
                        <option value="veryhigh">Very High</option>
                    </select> <br />
                    <label for="taskStartDate" >Start Date:</label> <br />
                    <input type="date" name="taskStartDate" className="tdate" /> <br />
                    <label for="taskEndDate">End Date:</label> <br />
                    <input type="date" name="taskEndDate" className="tdate" /> <br />
                    <label for="taskLocation">Location:</label> <br />
                    <input type="text" name="taskLocation" id="taskLocationInput" /> <br />
                    <label for="taskDescription">Description:</label> <br />
                    <textarea name="taskDescription" rows="8"></textarea> <br />

                    <br />
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
