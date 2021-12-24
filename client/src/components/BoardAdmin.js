import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";

const BoardAdmin = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h1>Admin Dashboard</h1>
      </header>
      <main>
        <h3><strong>User count:</strong> {content && content.userCount}</h3>
        <h3><strong>Profiles count:</strong> {content && content.profileCount}</h3>
        <h3><strong>adult users count:</strong> {content && content.adultUsers}</h3>


      </main>
    </div>
  );
};

export default BoardAdmin;