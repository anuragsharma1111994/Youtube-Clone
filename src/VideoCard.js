import React from "react";
import Avatar from "@material-ui/core/Avatar";
import './VideoCard.css'

function Video({ image, title, channelName, views, timestamp, channelImage }) {
  return (
    <div className="videoCard">
      <img className='videoCard__thumbnail' src={image} />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
        //   alt={channelImage}
          src={channelImage}
        />
        <div className="video__text">
          <h4>{title}</h4>
          <p>{channelName}</p>
          <p>
            {views}  {timestamp}
          </p>


{/* 1:59:28 */}

        </div>
      </div>
    </div>
  );
}

export default Video;
