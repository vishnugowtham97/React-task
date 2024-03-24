import React, { useState, useEffect } from "react";
import "./Task_3.css";
import User from "../../Component/Users/Users";
import { getUsers } from "../../Component/Api/Api";

function Task_3() {
  // State to track the current page number
  const [page, setPage] = useState(1);
  // State to indicate if users are currently being loaded
  const [users, setUsers] = useState([]);
  // State to indicate if users are currently being loaded
  const [loading, setLoading] = useState(true);

  // Functoion to handle the scroll events
  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      setPage((prev) => prev + 1);
    }
  };
  // Fetch users when the component mounts or the page changes
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
      {/* Title */}
      <h1>Infinite Scrolling</h1>
      <h4>Company employee Email lists </h4>
      {/* Container for the scrollable content */}
      <div className="content" onScroll={handleScroll}>
        {users && users.map((user) => <User key={user.cell} user={user} />)}
      </div>
      {loading && <div className="loading">Loading ...</div>}{" "}
    </div>
  );
}

export default Task_3;
