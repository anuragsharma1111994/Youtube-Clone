import React from "react";
import "./Sidebar.css";
import SidebarRow from './SidebarRow'
import HomeIcon from "@material-ui/icons/Home"
import WhatShotIcon from "@material-ui/icons/Whatshot"
import Subscription from "@material-ui/icons/Subscriptions"
import Videolib from "@material-ui/icons/VideoLibrary"
import History from "@material-ui/icons/History"
import VideoRIcon from "@material-ui/icons/OndemandVideo"
import WatchLeater from "@material-ui/icons/WatchLater"
import ExpandMore from "@material-ui/icons/ExpandMore"
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined"



function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow selected Icon={HomeIcon} title = 'Home'/>
      <SidebarRow Icon={WhatShotIcon} title = 'Trending'/>
      <SidebarRow Icon={Subscription} title = 'Subscription'/>
      <hr/>
      <SidebarRow Icon={Videolib} title = 'Library'/>
      <SidebarRow Icon={History } title = 'History'/>
      <SidebarRow Icon={VideoRIcon} title = 'Your Video'/>
      <SidebarRow Icon={WatchLeater} title = 'Watch Later'/>
      <SidebarRow Icon={ThumbUpAltOutlined} title = 'Liked Videos'/>
      <SidebarRow Icon={ExpandMore} title = 'Show More'/>
      <hr/>
    </div>
  );
}

export default Sidebar;
