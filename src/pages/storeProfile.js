import "../components/styles/profile.css";
import React from "react";
// import ProfilePicture from "../components/profilePicture";
import { Divider, Avatar, Skeleton } from "antd";
import { HiLocationMarker } from "react-icons/all";
// import ProductCard from "../components/ProductCard";
export default function Profile() {
  return (
    <div className="iProfileBody">
      <div className="iProfileContainer">
        <div className="iProfileContent">
          <div className="iProfileImages">
            <Avatar
              size={120}
              src="data:image/jpeg;base64,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"
            />
          </div>

          <div className="iProfileContentHeader">
            <div className="iProfileStoreDes">
              <h1 className="storeName">مۆبایلی سەنا</h1>
              <h2 className="storeLocation">
                <HiLocationMarker color="var(--colorMain1)" />
                سلێمانی سەروو مزگەوتی گەورە
              </h2>

              <p className="storeBio">
                بۆ فڕۆشتنی هەموو پێداویستییەکانی مۆبایل
              </p>
              <p className="storeBio">07501234567 - 07701234567</p>
            </div>
          </div>
        </div>
        <div className="iProfileProducts">
          <Divider className="iDivider" orientation="center">
            کاڵاکان
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
