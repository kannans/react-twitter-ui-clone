import React from "react";

import {
  BackIcon,
  NotificationIcon,
  MoreIcon,
  LocationIcon,
  HyperLinkIcon,
  Calendericon,
} from "../../images/svg/svgs";
import { useNavigate } from "react-router-dom";
import { SmallAvatar } from "../../images/avatars";

export const ProfileHead = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex-align-center header">
        <div className="left">
          <button onClick={() => navigate(-1)} className="btn p-0">
            <BackIcon />
          </button>
        </div>
        <div className="right">
          <h1 className="m-0">The White House</h1>
          <p className="profile-tweet-count m-0">72.3k Tweets</p>
        </div>
      </div>
      <div className="banner-img">
        <img
          className="w-100"
          src="https://pbs.twimg.com/profile_banners/822215673812119553/1580922287/600x200"
          alt="banner"
        />
      </div>
      <div className="profile-dp p-1 flex-space-between">
        <button type="button" className="profile-avatar" tabIndex={0}>
          <SmallAvatar
            width="128"
            image="https://pbs.twimg.com/profile_images/1059888693945630720/yex0Gcbi_200x200.jpg"
          />
        </button>
        <div className="follow-me">
          <MoreIcon />
          <NotificationIcon />

          <button className="btn tweet-btn">Following</button>
        </div>
      </div>
      <div className="p-1">
        <div>
          <h1 className="m-0">The White House</h1>
          <p className="profile-tweet-count m-0">@whitehouse</p>
        </div>
        <div className="profile-description">
          <p>
            Welcome to @WhiteHouse ! Follow for the latest from President
            @realDonaldTrump and his Administration. Tweets may be archived:
            http://whitehouse.gov/privacy
          </p>
        </div>
        <div className="profile-description-contact">
          <span className="location flex-align-center ">
            <LocationIcon />{" "}
            <span className="bold-dull-para pl-1">Washington, D.C</span>
          </span>

          <span className="location flex-align-center pl-1">
            <HyperLinkIcon />{" "}
            <span className="bold-dull-para pl-1">WhiteHouse.gov</span>
          </span>

          <span className="location flex-align-center pl-1">
            <Calendericon />{" "}
            <span className="bold-dull-para pl-1">Joined january, 2017</span>
          </span>
        </div>
        <div>
          <h2 className="inline-block pr-1">19</h2>
          <span className="bold-dull-para pr-1">Following</span>
          <h2 className="inline-block pl-1">21.5M</h2>
          <span className="bold-dull-para pl-1">Followers</span>
        </div>
      </div>
    </div>
  );
};
