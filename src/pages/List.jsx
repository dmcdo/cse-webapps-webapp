import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GetTasks } from '../modules/DB';

function List(props) {
    const tasks = GetTasks();

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
                <a href="/detail">{JSON.stringify(tasks)}</a>
            </div>
        </main>

        <Footer />
    </>
}

export default List;
