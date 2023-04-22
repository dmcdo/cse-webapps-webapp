import { useState, useEffect } from "react";

export const GetTasks = function() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("tasks.json")
        .then((response) => response.json())
        .then(setData);
    }, []);

    return data;
}
