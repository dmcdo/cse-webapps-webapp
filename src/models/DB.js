import { useState, useEffect } from "react";
import axios from "axios";

const URL = "https://cse-webapps-backend.onrender.com";

export const GetTasks = function() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const load = async () => {
            const response = await axios.get(`${URL}/api/get/tasks/byuser/default`);
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

export const PutTask = async function({ user, name, category, urgency, startDate, endDate, location, status, description }) {
    await axios.put(`${URL}/api/put/task`, {user, name, category, urgency, startDate, endDate, location, status, description});
}
