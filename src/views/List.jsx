import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { GetTasks } from '../modules/DB';
import "./stylesheets/list.css";

function TaskPreview({ id, name, endDate, status }) {
    return <div className="task">
        <p className="taskName"><a href={`/detail?id=${id}`}>{name}</a></p>
        <p class="taskInfo">Due: {endDate}. Status: {status}</p>
        <p className="taskActions">
            <a href="list"><button class="taskUpdateBtn hover:scale-105 transition-all shadow-md">Update</button></a>
            <a href="list"><button class="taskDeleteBtn hover:scale-105 transition-all shadow-md">Delete</button></a>
        </p>
    </div>
}

function ListTasks({ tasks }) {
    let previews = [];

    for (let t of tasks) {
        previews.push(<TaskPreview id={t.id} name={t.name} endDate={t.endDate} status={t.status} />);
    }

    return previews;
}

function List(props) {
    const data = GetTasks();

    if (data)
        return <>
            <Header />

            <main className="flex flex-col">
                <div id="goback">
                    <a href="/">&larr; Home</a>
                </div>
                <div className="flex flex-col items-center">
                    <a href="createNew">
                        <button id="create-new-btn" className="hover:scale-125 transition-all shadow-lg">Create a new task</button>
                    </a>
                </div>
                <div id="tasks">
                    <ListTasks tasks={data} />
                </div>
            </main>

            <Footer />
        </>;

    return <p>Error loading data!</p>
}

export default List;
