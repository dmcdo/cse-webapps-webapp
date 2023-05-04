import { useState, useEffect } from "react";
import axios from "axios";

const URL = process.env.REACT_APP_BACKEND_URL;

export const GetTasks = function() {
    const [data, setData] = useState(null);
    const user = localStorage.getItem("name") ? localStorage.getItem("name") : "default";

    useEffect(() => {
        const load = async () => {
            const response = await axios.get(`${URL}/api/get/tasks/byuser/${user}`);
            const tasks = response.data;
            setData(tasks);
        }

        load();
    }, []);

    return data;
}

export const GetTaskById = function({ id }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const load = async () => {
            const response = await axios.get(`${URL}/api/get/tasks/byid/${id}`);
            const tasks = response.data;
            setData(tasks);
        }

        load();
    }, []);

    return data;
}

export const PutTask = async function({ name, category, urgency, startDate, endDate, location, status, description }) {
    const user = localStorage.getItem("name") ? localStorage.getItem("name") : "default";

    await axios.put(`${URL}/api/put/task`, {user, name, category, urgency, startDate, endDate, location, status, description});
}

export const UpdateTask = async function({ id, name, category, urgency, startDate, endDate, location, status, description }) {
    const user = localStorage.getItem("name") ? localStorage.getItem("name") : "default";

    await axios.put(`${URL}/api/update/task`, { id,user, name, category, urgency, startDate, endDate, location, status, description});
}

export const DeleteTask = async function({ id }) {
    await axios.delete(`${URL}/api/delete/task/byid/${id}`);
}
