import React from "react";

const Notification = ({ notification }) => {
  return (
    <div className={`notification-container ${notification ? "show" : ""}`}>
      <p>You have already entered this letter</p>
    </div>
  );
};

export default Notification;
