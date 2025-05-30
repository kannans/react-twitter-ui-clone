import React from "react";

import { StatusCard } from "../components/StatusCard";
import { BackIcon } from "../images/svg/svgs";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Status = () => {
  const { id: tweetId } = useParams();

  const { getTweet } = useContext(GlobalContext);
  return (
    <div>
      <div className="status">
        <Link to="/">
          <button className="btn p-0">
            <BackIcon />
          </button>
        </Link>

        <h1>Tweet</h1>
      </div>

      <div className="tweets">
        {/* <p>{JSON.stringify(getTweet(tweetId))}</p> */}
        <StatusCard tweet={getTweet(tweetId)} />
      </div>
    </div>
  );
};
