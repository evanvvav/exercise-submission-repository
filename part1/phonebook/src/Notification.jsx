import "./index.css";

const Notification = ({ message, status }) => {
  if (message === null) {
    return null;
  }

  const className = status === "error" ? "error" : "notification";

  return <div className={className}>{message}</div>;
};

export default Notification;
