import React, { useState } from "react";
import { Divider, Drawer, Button } from "antd";
import ProductCard from "../components/ProductCard";
import ProductFiltering from "../features/ProductFiltering";
import "../components/styles/Products.css";
import { BsFilterRight } from "react-icons/bs";
import HomeSearch from "../features/HomeSearch";
import { useGetProductsQuery } from "../services/app.api";

export default function Products() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const { data, error, isLoading, isSuccess, isError } = useGetProductsQuery();
  return (
    <>
      <div className="iBody">
        <div className="iContainerProducts">
          <div className="iFilterMobile">
            <div className="iFilterMobileSearch">
              <HomeSearch />
            </div>
          </div>
          <div className="iFilterMobileFilter">
            <Button onClick={showDrawer}>
              <BsFilterRight size={25} />
              <p>جیاکردنەوە</p>
            </Button>
            <Drawer
              className="iFilterListMobileHeadet"
              title={
                <h4>
                  <strong>جیاکردنەوە</strong>
                </h4>
              }
              placement="right"
              onClose={onClose}
              visible={visible}
            >
              <ProductFiltering />
            </Drawer>
          </div>
          <div className="iItems">
            <Divider className="iDivider" orientation="right">
              کاڵاکان
            </Divider>
            <div className="iProductCards">
              {isLoading && "Loading..."}
              {isError && error.message}
              {isSuccess &&
                data &&
                data?.map((e, index) => {
                  return <ProductCard key={index} product={e} />;
                })}
            </div>
          </div>
          <div className="iFiltering">
            <ProductFiltering />
          </div>
        </div>
      </div>
    </>
  );
}
