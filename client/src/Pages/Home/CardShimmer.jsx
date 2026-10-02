import React from "react";
import "./CardShimmer.css";
import { ModeSwitcher } from "../../contextProvider";
import { useContext } from "react";
const CardShimmer = () => {
  const { color } = useContext(ModeSwitcher);
  return (
    <>
      <div className="skeletonCard-grid">
        <div
          className={
            color === "white" ? "skeletonCard-Wte" : "skeletonCard-Blk"
          }
          id="Skeleton"
        >
          <div className="h2">
            <h2 className="skeleton "></h2>
          </div>
          <div className="sklPara">
            <p className="skeleton skeltonText"></p>
          </div>
          <div className="sklPara">
            <p className="skeleton skeltonText"></p>
            <p className="skeleton skeltonText"></p>
            <p className="skeleton skeltonText"></p>
            <p className="skeleton skeltonText"></p>
          </div>
        </div>
        <div
          className={
            color === "white" ? "skeletonCard-Wte" : "skeletonCard-Blk"
          }
          id="Skeleton"
        >
          <div className="h2">
            <h2 className="skeleton "></h2>
          </div>
          <div className="sklPara">
            <p className="skeleton skeltonText"></p>
          </div>
          <div className="sklPara">
            <p className="skeleton skeltonText"></p>
            <p className="skeleton skeltonText"></p>
            <p className="skeleton skeltonText"></p>
            <p className="skeleton skeltonText"></p>
          </div>
        </div>
        <div
          className={
            color === "white" ? "skeletonCard-Wte" : "skeletonCard-Blk"
          }
          id="Skeleton"
        >
          <div className="h2">
            <h2 className="skeleton "></h2>
          </div>
          <div className="sklPara">
            <p className="skeleton skeltonText"></p>
          </div>
          <div className="sklPara">
            <p className="skeleton skeltonText"></p>
            <p className="skeleton skeltonText"></p>
            <p className="skeleton skeltonText"></p>
            <p className="skeleton skeltonText"></p>
          </div>
        </div>
        <div
          className={
            color === "white" ? "skeletonCard-Wte" : "skeletonCard-Blk"
          }
          id="Skeleton"
        >
          <div className="h2">
            <h2 className="skeleton "></h2>
          </div>
          <div className="sklPara">
            <p className="skeleton skeltonText"></p>
          </div>
          <div className="sklPara">
            <p className="skeleton skeltonText"></p>
            <p className="skeleton skeltonText"></p>
            <p className="skeleton skeltonText"></p>
            <p className="skeleton skeltonText"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardShimmer;
