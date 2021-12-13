import React from "react";
import { Empty } from "antd";

export default function NotFound404() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor:"var(--colorBg)"
      }}
    >
      <Empty
        description={<h2 className="font_english">404 Page Not Found!</h2>}
      />
    </div>
  );
}
