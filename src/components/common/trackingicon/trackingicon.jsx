import "./trackingicon.scss";

function TrackingIcon({ active }) {
  return (
    <div className="tracking-progress">
      <div className={"tracking-icon " + (active ? " active" : "")}>
        <div className="tracking-icon__inner" />
      </div>
      <div className="progress-bar" />
    </div>
  );
}

export default TrackingIcon;
