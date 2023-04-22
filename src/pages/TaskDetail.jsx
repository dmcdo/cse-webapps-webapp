import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GetTask } from '../modules/DB';

function TaskDetail() {
    return <>
        <Header />

        <h5>{JSON.stringify(GetTask())}</h5>

        <main class="flex flex-col">
        <div>
            <div id="goback">
                <a href="list">&larr; My To Do List</a>
            </div>
        </div>
            <div id="tasks">
                <div class="image-select">
                    <h2><b>Select picture per task type:</b></h2>
                    <div class="pictures">
                        <div>
                        <p>Classwork</p>
                        <img src="categories/classwork.jpeg" alt="Classwork" class="cat-img" />
                        </div>
                        <div>
                        <p>Extracurricular</p>
                        <img src="categories/extracurricular.jpg" alt="Extracurricular" class="cat-img" />
                        </div>
                        <div>
                        <p>Personal</p>
                        <img src="categories/personal.jpg" alt="Personal" class="cat-img" />
                        </div>
                        <div>
                        <p>Shopping</p>
                        <img src="categories/shopping.jpg" alt="Shopping" class="cat-img" />
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <Footer />
    </>
}

export default TaskDetail;
