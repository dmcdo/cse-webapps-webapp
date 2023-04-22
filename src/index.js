import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import './stylesheet.css';
import reportWebVitals from './reportWebVitals';

import HomePage from './views/HomePage';
import About from './views/About';
import List from './views/List';
import TaskDetail from './views/TaskDetail';
import CreateNew from './views/CreateNew';
import { GetTasks } from './modules/DB';


export default function Main() {
    const tasks = GetTasks();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/list" element={<List tasks={JSON.stringify(tasks)} />} />
                <Route path="/detail" element={<TaskDetail />} />
                <Route path="/createNew" element={<CreateNew />} />
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
