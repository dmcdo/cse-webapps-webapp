import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { GetTasks, DeleteTask } from "../models/DB";
import "./stylesheets/list.css";

function TaskPreview({ id, name, endDate, status }) {
  return (
    <div className="task">
      <p className="taskName">
        <a href={`/detail?id=${id}`}>{name}</a>
      </p>
      <p className="taskInfo">
        Due: {endDate}. Status: {status}
      </p>
      <p className="taskActions">
        <a href={`/createNew?id=${id}`}>
          <button className="taskUpdateBtn hover:scale-105 transition-all shadow-md">
            Update
          </button>
        </a>
          <button className="taskDeleteBtn hover:scale-105 transition-all shadow-md"
                  onClick={async (e) => {
                    e.preventDefault();
                    await DeleteTask({ id });
                    window.location.reload();
                  }}>
            Delete
          </button>
      </p>
    </div>
  );
}

function ListTasks({ tasks, searchQuery }) {
  const filteredTasks = tasks.filter((t) =>
    t.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const previews = filteredTasks.map((t) => (
    <div className="flex flex-col items-center">
      <TaskPreview
        id={t._id}
        name={t.name}
        endDate={t.endDate}
        status={t.status}
      />
    </div>
  ));

  return previews;
}

function List(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const data = GetTasks(searchQuery);

  function handleSearchQueryChange(event) {
    setSearchQuery(event.target.value);
  }

  if (data)
    return (
      <>
        <Header />

        <main className="flex flex-col">
        <br />
        <div className="flex flex-col items-center">
          <div className="search-bar">
              <input
                type="text"
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={handleSearchQueryChange}
              />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div id="goback">
            <a href="/">&larr; Home</a>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <a href="createNew">
            <button id="create-new-btn" className="hover:scale-125 transition-all shadow-lg">
              Create a new task
            </button>
          </a>
        </div>
        <br />
        <ListTasks tasks={data} searchQuery={searchQuery} />
        </main>

        <br />

        <Footer />
      </>
    );

  return (
    <>
      <Header />
      <Loading />
    </>
  );
}

export default List;
