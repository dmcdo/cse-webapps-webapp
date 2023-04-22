import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import './stylesheet.css';
import reportWebVitals from './reportWebVitals';

import HomePage from './pages/HomePage';
import About from './pages/About';
import List from './pages/List';
import TaskDetail from './pages/TaskDetail';
import CreateNew from './pages/CreateNew';

export default function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/list" element={<List />} />
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
