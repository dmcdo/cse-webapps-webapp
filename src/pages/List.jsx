import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import { getTasks } from '../modules/DB';

function List() {
    const taskPreviews = [];

    // let tasks = JSON.parse(JSON.stringify(getTasks()));
    // for (let i = 0; i < tasks.length; i++) {
    //     taskPreviews.push(
    //         <div className="task">
    //             <p className="taskName">{tasks[i].name}</p>
    //             <p className="taskInfo">{tasks[i].startDate} - {tasks[i].endDate}</p>
    //             <p className="taskActions">
    //                 <a href="list.html"><button class="taskUpdateBtn hover:scale-105 transition-all shadow-md">Update</button></a>
    //                 <a href="list.html"><button class="taskDeleteBtn hover:scale-105 transition-all shadow-md">Delete</button></a>
    //             </p>
    //         </div>
    //     );
    // }

    return <>
        <Header />

        <main className="flex flex-col">
            <div id="goback">
                <a href="/">&larr; Home</a>
            </div>
            <div className="flex flex-col items-center">
                <a href="createNew.html">
                    <button id="create-new-btn" className="hover:scale-125 transition-all shadow-lg">Create a new task</button>
                </a>
            </div>
            <div id="tasks">
                {taskPreviews}
            </div>
        </main>

        <Footer />
    </>
}

export default List;
