import { useState, useEffect } from "react";

export const GetTasks = function() {
    let [data, setData] = useState(null);

    useEffect(() => {
        fetch("tasks.json")
        .then((res) => {
            return res.json();
        })
        .then((dat) => {
            console.log(dat);
            setData(dat);
        });
    }, []);

    return data;
}
