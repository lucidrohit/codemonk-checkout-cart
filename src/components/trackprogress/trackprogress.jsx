import "./trackprogress.scss";

import TrackingIcon from "../common/trackingicon/trackingicon";

function TrackProgress() {
  return (
    <div className="track-progress">
      <div className="track-progress__status">
        <TrackingIcon active />
        <p className="track-progress__status__text">shopping cart</p>
      </div>
      <div className="track-progress__status">
        <TrackingIcon />
        <p className="track-progress__status__text">order details</p>
      </div>
      <div className="track-progress__status">
        <TrackingIcon />
        <p className="track-progress__status__text">make payment</p>
      </div>
    </div>
  );
}

export default TrackProgress;
