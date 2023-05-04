import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import { GetTaskById } from '../models/DB';
import "./stylesheets/detail.css";

function Task({ name, category, urgency, startDate, endDate, location, status, description }) {
    return <>
        <div className="task card flex flex-col items-center">
            <h1 className="text-2xl font-bold">{ name }</h1>
            <br />
            <h2><b>Category:</b></h2> <p>{category}</p>
            <h2><b>Urgency:</b></h2> <p>{urgency}</p>
            <h2><b>Start Date:</b></h2> <p>{startDate}</p>
            <h2><b>End Date:</b></h2> <p>{endDate}</p>
            <h2><b>Location:</b></h2> <p>{location}</p>
            <h2><b>Status:</b></h2> <p>{status}</p>
            <h2><b>Description:</b></h2> <p>{description}</p>
        </div>
    </>
}

function TaskDetail() {
    const id = new URLSearchParams(window.location.search).get("id");
    const task = GetTaskById({ id });
    console.log("ID: " + id);
    console.log("Data: " + task);
    console.log(task);

    if (task) {
    let picture;
    if (task.category == "Classwork")
        picture = "categories/classwork.jpeg"
    else if (task.category == "Extracirricular")
        picture = "categories/extracurricular.jpg";
    else if (task.category == "Personal")
        picture = "categories/personal.jpg";
    else if (task.category == "Shopping")
        picture = "categories/shopping.jpg";
    else
        picture = "categories/personal.jpg";

    return <>
        <Header />

        <main className="flex flex-col">
        <div className="flex flex-col items-center">
            <div id="goback">
                <a href="list">&larr; My To Do List</a>
            </div>
        </div>
            <div className="image-select card flex flex-col items-center">
                <div className="pictures">
                    <img src={picture} alt={task.category} className="cat-img" />
                </div>
            </div>
            <div>
                <Task name={task.name} category={task.category}
                      urgency={task.urgency} startDate={task.startDate}
                      endDate={task.endDate} location={task.location}
                      status={task.status} description={task.description}/>
            </div>
        </main>

        <br />

        <Footer />
    </>
    }

    return <>
        <Header />
        <Loading />
    </>
}

export default TaskDetail;
