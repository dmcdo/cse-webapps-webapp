import { useState, useEffect } from "react";

export const GetTasks = function() {
    console.log("Run GetTasks();");

    let [data, setData] = useState(null);

    useEffect(() => {
        fetch("tasks.json")
        .then((res) => res.json())
        .catch((err) => {
            console.log("DB encountered an error:");
            console.log(err);
        })
        .then((dat) => {
            console.log(dat);
            setData(dat);
        })
        .catch((err) => {
            console.log("DB encountered an error:");
            console.log(err);
        });
    }, []);

    return data;
}
