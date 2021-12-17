import React from "react";
import { useParams } from "react-router";
import {
  Image,
  Skeleton,
  Divider,
  Button,
  Breadcrumb,
  Rate,
  Card,
  Avatar,
} from "antd";
import "../components/styles/ProductDetail.css";
import {
  MdOutlineShoppingCart,
  MdOutlineRemoveShoppingCart,
} from "react-icons/md";
import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Meta from "antd/lib/card/Meta";
import { useGetProductByIdQuery } from "../services/app.api";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../features/cartSlice";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  let { id } = useParams();
  let { data = {}, isLoading } = useGetProductByIdQuery(id);
  // let { product } = data;
  let cartIdArray = [];
  cartItems.forEach((item) => {
    cartIdArray.push(item._id);
  });

  return (
    <>
      {isLoading && "Loading..."}
      {data && (
        <div className="iBody">
          <div className="iContainer iContainerProductDetail">
            <div className="font_english">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <Link to="/">
                    <HomeOutlined />
                  </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{data?.productName}</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Link to="/products">
                    <span>کاڵاکان</span>
                  </Link>
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="iProductDetailBody">
              <Divider className="iDivider" orientation="right">
                وردەکاری
              </Divider>
              <div className="iProductDetails">
                <div className="iProductImages">
                  <Image.PreviewGroup>
                    <div className="iProductImageBig">
                      <Image width="100%" src={data.img} />
                    </div>
                    <div className="iProductImageSmall">
                      {data.img?.map((i) => {
                        return <Image width={100} src={i} />;
                      })}
                    </div>
                  </Image.PreviewGroup>
                </div>
                <div className="iProductDetail">
                  <div className="iProductDetailHeader">
                    <h1>
                      <strong>{data.productName}</strong>
                    </h1>
                    <h5>فڕۆشیار: {data.storeUsername}</h5>
                  </div>
                  <Divider className="iDivider" orientation="right" />
                  <div className=" iProductDetailDesc">
                    <p>{data.description}</p>
                  </div>
                  <div className="iProductDetailPrice">
                    <p>
                      <strong>نرخ</strong>
                    </p>
                    <h1>
                      <strong className="font_english">
                        {parseFloat(data.price).toLocaleString()} IQD
                      </strong>
                    </h1>
                    <Rate value={4} />
                  </div>

                  <div className="iProductBtn">
                    {!cartIdArray.includes(data._id) ? (
                      <Button
                        className="iProductBtnCart"
                        icon={<MdOutlineShoppingCart size="20" width="40" />}
                        onClick={() => {
                          dispatch(
                            addProduct({
                              title: data?.productName,
                              description: data.description,
                              image: data.img,
                              price: data.price,
                              _id: data._id,
                              amount: 1,
                            })
                          );
                        }}
                      >
                        بیکە سەبەتەکەوە
                      </Button>
                    ) : (
                      <Button
                        className="iProductBtnCart"
                        icon={
                          <MdOutlineRemoveShoppingCart size="20" width="40" />
                        }
                        onClick={() => {
                          dispatch(removeProduct(data._id));
                        }}
                      >
                        دەریکە لە سەبەتەکە
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              <div className="iProductStoreProfileParent">
                <Divider className="iDivider" orientation="right">
                  فڕۆشیار
                </Divider>
                <div className="iProductStoreProfile">
                  <Card style={{ width: 300 }}>
                    <Meta
                      avatar={
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                      }
                      title={data.storeUsername}
                    />
                  </Card>
                </div>
              </div>
              <div className="iProductComment">
                <Divider className="iDivider" orientation="right">
                  هەڵسەنگاندنەکان
                </Divider>
                <Skeleton active avatar />
                <Skeleton active avatar />
                <Skeleton active avatar />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
