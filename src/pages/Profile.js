import "../components/styles/profile.css";
import React from "react";
// import ProfilePicture from "../components/profilePicture";
import { Divider, Avatar, Skeleton } from "antd";
import { HiLocationMarker } from "react-icons/all";
// import ProductCard from "../components/ProductCard";

export default function Profile() {
  let localUser = JSON.parse(localStorage.getItem("localUser"));

  return (
    <div className="iProfileBody">
      <div className="iProfileContainer">
        <div className="iProfileContent">
          <div className="iProfileImages">
            <Avatar size={120} src={localUser.image} />
          </div>
          <div className="iProfileContentHeader">
            <div className="iProfileStoreDes">
              <h1 className="storeName">
                {localUser.firstName} {localUser.lastName}
              </h1>
              <h3 className="storeLocation">
                <HiLocationMarker color="var(--colorMain1)" />
                سلێمانی ڕاپەڕین سەرو مزگەوتی ڕاپەڕین
              </h3>
              <Divider className="iDivider" orientation="center">
                دەربارە
              </Divider>
              <Skeleton />
            </div>
          </div>
        </div>
        <div className="iProfileProducts">
          <Divider className="iDivider" orientation="center">
            دڵخوازەکان
          </Divider>
          <div className="iProfileProductCards">
            <Skeleton avatar paragraph={{ rows: 4 }} />
            <Skeleton avatar paragraph={{ rows: 4 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
