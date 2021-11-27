import "../components/styles/productFiltering.css";
import React from "react";
import { IoWomanOutline, IoManOutline, MdChildCare } from "react-icons/all";
import { Divider, Checkbox, Slider, Col, Row, InputNumber } from "antd";

export default function ProductFiltering() {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <div>
      <Divider className="iDividerFilter" orientation="right">
        جیاکردنەوە
      </Divider>
      <div className="iFilterBody">
        <div>
          <Checkbox onChange={onChange}>نوێ</Checkbox>
          <Checkbox onChange={onChange}>وەک نوێ</Checkbox>
          <Checkbox onChange={onChange}>بەکارهاتوو</Checkbox>
          {/* <Divider className="iDivider" orientation="right" /> */}
        </div>
        <Divider className="iDividerFilter" orientation="left">
          ئۆفەرەکان
        </Divider>
        <Checkbox onChange={onChange}>کاڵای نوێ</Checkbox>
        <Checkbox onChange={onChange}>داشکێنراو</Checkbox>
        <Checkbox onChange={onChange}>ئۆفەری تایبەت</Checkbox>

        <Divider className="iDividerFilter" orientation="left">
          بابەتەکان
        </Divider>
        <Checkbox onChange={onChange}>ئامێری ئەلیکترۆنی</Checkbox>
        <Checkbox onChange={onChange}>ئافرەتان</Checkbox>
        <Checkbox onChange={onChange}>پیاوان</Checkbox>
        <Checkbox onChange={onChange}>مناڵان</Checkbox>
        <Checkbox onChange={onChange}>کەلوپەلی ناوماڵ</Checkbox>
        <Checkbox onChange={onChange}>تەندروستی</Checkbox>
        <Checkbox onChange={onChange}>جوانکاری</Checkbox>
        <Checkbox onChange={onChange}>پێویستی ئۆتۆمبێل</Checkbox>
        <Checkbox onChange={onChange}>ئاژەڵ و باڵندە</Checkbox>
        <Checkbox onChange={onChange}>کتێب</Checkbox>
        <Checkbox onChange={onChange}>پەراوگە</Checkbox>
        <Checkbox onChange={onChange}>گەیمینگ</Checkbox>
        <Checkbox onChange={onChange}>وەرزش</Checkbox>
        <Checkbox onChange={onChange}>جۆری تر</Checkbox>
      </div>
      <Divider className="iDividerFilter" orientation="right">
        نرخ
      </Divider>

      <div className="iProductFilteringPriceParent">
        <div className="iProductFilteringPrice">
          <InputNumber
            min={0}
            max={100000}
            step={1000}
            defaultValue={0}
            style={{ margin: "0 16px" }}
            onChange={() => {}}
          />

          <p style={{ textAlign: "center" }}>تا</p>

          <InputNumber
            min={0}
            max={100000}
            step={1000}
            defaultValue={50000}
            style={{ margin: "0 16px" }}
            onChange={() => {}}
          />
        </div>
        <Slider
          step={1000}
          range={{ draggableTrack: true }}
          defaultValue={[0, 500000]}
          min={0}
          max={1000000}
        />
      </div>
    </div>
  );
}
