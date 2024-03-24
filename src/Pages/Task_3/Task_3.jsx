import React, { useState, useEffect } from "react";
import "./Task_3.css";
import User from "../../Component/Users/Users";
import { getUsers } from "../../Component/Api/Api";

function Task_3() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      const newUsers = await getUsers(page);
      setUsers((prev) => [...prev, ...newUsers]);
      setLoading(false);
    };

    loadUsers();
  }, [page]);

  return (
    <div className="App">
      <h1>Infinite Scrolling</h1>
      <h4>Company employee Email lists </h4>
      <div className="content" onScroll={handleScroll}>
        {users && users.map((user) => <User key={user.cell} user={user} />)}
      </div>
      {loading && <div className="loading">Loading ...</div>}{" "}
    </div>
  );
}

export default Task_3;
