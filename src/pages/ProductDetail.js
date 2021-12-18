import React from "react";
import { useParams } from "react-router";
import { Image, Divider, Button, Breadcrumb, Rate, Card, Avatar } from "antd";
import "../components/styles/ProductDetail.css";
import {
  MdOutlineShoppingCart,
  MdOutlineRemoveShoppingCart,
} from "react-icons/md";
import { HomeOutlined } from "@ant-design/icons";
import {
  AiOutlineComment,
  BiMessageAltDetail,
  MdOutlineSell,
} from "react-icons/all";
import { Link } from "react-router-dom";
import Meta from "antd/lib/card/Meta";
import {
  useGetProductByIdQuery,
  useGetStoreDetailQuery,
} from "../services/app.api";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../features/cartSlice";
import ProductComment from "../features/productComment";
import ProductSlider from "../components/productSlider";
export default function ProductDetail() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  let { id } = useParams();
  let { data = {}, isLoading } = useGetProductByIdQuery(id);
  let { storeData = {}, isLoadingStore } = useGetStoreDetailQuery(
    data.storeUsername
  );
  console.log(storeData);
  // console.log(data.storeUsername);
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
                <BiMessageAltDetail /> وردەکاری
              </Divider>
              <div className="iProductDetails">
                <div className="iProductImages">
                  <Image.PreviewGroup>
                    <div className="iProductImageBig">
                      <Image width="100%" src={data.img} />
                    </div>
                    <div className="iProductImageSmall">
                      {/* {data.img?.map((i) => { */}
                      {/* return  */}
                      <Image width={100} src={data.img} />;{/* })} */}
                    </div>
                  </Image.PreviewGroup>
                </div>
                <div className="iProductDetailParent">
                  <div className="iProductDetail">
                    <div className="iProductDetailHeader">
                      <h1>
                        <strong>{data.productName}</strong>
                      </h1>
                      <h5>
                        {" "}
                        <MdOutlineSell /> فڕۆشیار: {data.storeUsername}
                      </h5>
                    </div>
                    <Divider className="iDivider" orientation="right" />
                    <div className=" iProductDetailDesc">
                      <p>{data.description}</p>
                    </div>
                  </div>
                  <div className="iProductDetailFooter">
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
                        <button
                          className="iProductBtnCartAdd"
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
                          <MdOutlineShoppingCart size="20" width="40" />
                          بیکە سەبەتەکەوە
                        </button>
                      ) : (
                        <Button
                          className="iProductBtnCartRemove"
                          onClick={() => {
                            dispatch(removeProduct(data._id));
                          }}
                        >
                          <MdOutlineRemoveShoppingCart size="20" width="40" />
                          دەریکە لە سەبەتەکە
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* 
              <div className="iProductStoreProfileParent">
                <Divider className="iDivider" orientation="right">
                  فڕۆشیار
                </Divider>
                <div className="iProductStoreProfile">
                  {storeData && (
                    <Card style={{ width: 300 }}>
                      <Meta
                        avatar={
                          <Avatar src="https://joeschmoe.io/api/v1/random" />
                        }
                        title={storeData.name}
                      />
                    </Card>
                  )}
                </div>
              </div> */}
              <div className="iProductComment">
                <Divider className="iDivider" orientation="left">
                  هەڵسەنگاندنەکان <AiOutlineComment />
                </Divider>
                <ProductComment />
              </div>
              <div className="iProductShowProduct">
                <Divider className="iDivider" orientation="center">
                  لەوانەیە ئارەزوی بینینی ئەم کاڵانەش بکەیت
                </Divider>
                <div className="iHomeTopViewer">
                  {data && <ProductSlider />}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
