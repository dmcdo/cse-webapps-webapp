import { useState, useEffect } from "react";

export const GetTasks = function() {
    let [data, setData] = useState(null);

    useEffect(() => {
        fetch("tasks.json")
        .then((res) => res.json())
        .then(setData);
    }, []);

    return data;
}

export const GetTask = function(id) {
    return GetTasks();
}
