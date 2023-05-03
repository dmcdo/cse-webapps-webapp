import { useState, useEffect } from "react";
import axios from "axios";

export const GetTasks = function() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const load = async () => {
            const response = await axios.get(`/api/get/tasks/byuser/default`);
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
            const response = await axios.get(`api/get/tasks/byid/${id}`);
            const tasks = response.data;
            setData(tasks);
        }

        load();
    }, []);

    return data;
}
