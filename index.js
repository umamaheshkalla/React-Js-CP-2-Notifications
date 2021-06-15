function Notification(props) {
  const { notificationText, className, src } = props;
  return (
    <div className={className}>
      <img className="logo" src={src} />
      <p>{notificationText}</p>
    </div>
  );
}

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="notification-container">
      <Notification
        src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        notificationText="Information Message"
        className="info-container"
      />
      <Notification
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        notificationText="Success Message"
        className="success-container"
      />
      <Notification
        src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        notificationText="Warning Message"
        className="warning-container"
      />
      <Notification
        src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        notificationText="Error Message"
        className="error-container"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
