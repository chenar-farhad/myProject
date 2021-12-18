import React from "react";
import "./styles/footer.css";

export default function footer() {
  return (
    <div className="iFooterBody">
      <div className="iFooterContainer">
        <div className="iFooter component">
          <div className="iFooterNavigate">
            <ul>
              <li>
                <a href="#home">سەرەتا</a>
              </li>
              <li>
                <a href="#about">کاڵاکان</a>
              </li>
              <li>
                <a href="#project">بەشەکان</a>
              </li>
              <li>
                <a href="#contact">دووکانەکان</a>
              </li>
              <li>
                <a href="#contact">دەربارە</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
