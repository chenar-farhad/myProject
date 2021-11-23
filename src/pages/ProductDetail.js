import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Image, Skeleton, Divider, Button } from "antd";
import "../components/styles/ProductDetail.css";
import { ShoppingCart, ShoppingBag } from "react-feather";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { title } = useParams();

  return (
    <div className="iBody">
      <div className="iContainer">
        <div className="iProductDetailBody">
          <Divider className="iDivider" orientation="right">
            وردەکاری
          </Divider>

          <div className="iProductDetails">
            <div className="iProductImages">
              <Image.PreviewGroup>
                <div className="iProductImageBig">
                  <Image
                    width="100%"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </div>
                <div className="iProductImageSmall">
                  <Image
                    width={100}
                    src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                  />
                  <Image
                    width={100}
                    src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                  />
                  <Image
                    width={100}
                    src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                  />
                  <Image
                    width={100}
                    src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                  />
                  <Image
                    width={100}
                    src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                  />
                </div>
              </Image.PreviewGroup>
            </div>
            <div className="iProductDetail">
              <div className="iProductDetailHeader">
                <h1>
                  <strong>جانتای شانی ئافرەتان</strong>
                </h1>
                <h5>فڕۆشیار: {id}</h5>
              </div>
              <Divider className="iDivider" orientation="right"/>
              <div className=" iProductDetailDesc">
                <p>
                  جانتای شانی ئافرەتان قەبارەی جانتا: پانی: 29سم. بەرزی: 28سم.
                  قووڵایی: 11سم. تایبەتمەندی داخستنی زینجری هەیە. لە بەشی پێشەوە
                  1 گیرفانێکی زیپکراو هەیە بۆ هەلگرتنی تەلەفۆن یا هەرشتێکی تر.
                  گیرفانێکی ناوەوەی زیپکراو هەیە بۆ هەڵگرتنی شتەکان. گەرەنتی ٢
                  ساڵی لەگەڵ دایە. لە تورکیا دروست کراوە.{" "}
                </p>
              </div>
              <div className="iProductBtn">
                <Button
                  className="iProductBtnCart"
                  icon={<ShoppingCart size="20" width="40" />}
                >
                  بیکە سەبەتەکەوە
                </Button>
              </div>
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
  );
}
