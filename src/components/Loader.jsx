import React from "react";
import Skeleton from "react-loading-skeleton";
import "./Loader.css";

const Loader = () => {
  return (
    <div>
      <div className="ui item">
        <Skeleton height={150} />
        <div className="content">
          <div className="header">
            <Skeleton height={20} />
          </div>
        </div>
      </div>
      <div className="ui item">
        <Skeleton height={150} />
        <div className="content">
          <div className="header">
            <Skeleton height={20} />
          </div>
        </div>
      </div>
      <div className="ui item">
        <Skeleton height={150} />
        <div className="content">
          <div className="header">
            <Skeleton height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
