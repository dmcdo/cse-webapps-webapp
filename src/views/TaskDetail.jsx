import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { GetTasks } from '../modules/DB';

function Task({ name, category, urgency, startDate, endDate, location, status, description }) {
    return <>
        <h1>{ name }</h1>
        <div className="task">
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
    const data = GetTasks();
    const id = Number(new URLSearchParams(window.location.search).get("id"));
    console.log("ID: " + id);

    if (data) return <>
        <Header />

        <main className="flex flex-col">
        <div>
            <div id="goback">
                <a href="list">&larr; My To Do List</a>
            </div>
        </div>
            <div id="tasks">
                <div className="image-select">
                    <h2><b>Select picture per task type:</b></h2>
                    <div className="pictures">
                        <div>
                        <p>Classwork</p>
                        <img src="categories/classwork.jpeg" alt="Classwork" className="cat-img" />
                        </div>
                        <div>
                        <p>Extracurricular</p>
                        <img src="categories/extracurricular.jpg" alt="Extracurricular" className="cat-img" />
                        </div>
                        <div>
                        <p>Personal</p>
                        <img src="categories/personal.jpg" alt="Personal" className="cat-img" />
                        </div>
                        <div>
                        <p>Shopping</p>
                        <img src="categories/shopping.jpg" alt="Shopping" className="cat-img" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Task name={data[id].name} category={data[id].category}
                      urgency={data[id].urgency} startDate={data[id].startDate}
                      endDate={data[id].endDate} location={data[id].location}
                      status={data[id].status} description={data[id].description}/>
            </div>
        </main>

        <Footer />
    </>

    return <p>Error loading data!</p>
}

export default TaskDetail;
