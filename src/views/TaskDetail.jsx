import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { GetTasks } from '../modules/DB';

function TaskDetail() {
    const tasks = GetTasks();

    return <>
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
                {JSON.stringify(tasks)}
            </div>
        </main>

        <Footer />
    </>
}

export default TaskDetail;
